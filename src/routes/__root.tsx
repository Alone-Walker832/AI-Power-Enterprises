import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import {
  useEffect,
  useState,
  lazy,
  Suspense,
  type ReactNode,
} from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { TopHeader } from "@/components/TopHeader";
import { Footer } from "@/components/Footer";

// ─── Lazy loaded — alag chunk, first paint fast ──────────────────
const WhatsAppBtn = lazy(() =>
  import("@/components/WhatsAppBtn").then((m) => ({
    default: m.WhatsAppBtn,
  })),
);
const AIChatbot = lazy(() =>
  import("@/components/AIChatbot").then((m) => ({
    default: m.AIChatbot,
  })),
);

import {
  siteConfig,
  company,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  organizationKnowsAbout,
  organizationOfferCatalog,
  stripContext,
} from "@/data/companyData";

// ═══════════════════════════════════════════════════════════════════
// JSON-LD Graph — Organization + WebSite + LocalBusiness
// @context stripped from children (avoid duplication inside @graph)
// All data sourced from companyData.ts (single source of truth)
// ═══════════════════════════════════════════════════════════════════
const organizationNode = {
  ...stripContext(organizationSchema),
  "@id": `${siteConfig.url}/#organization`,
  knowsAbout: organizationKnowsAbout,
  hasOfferCatalog: organizationOfferCatalog,
};

const websiteNode = {
  ...stripContext(websiteSchema),
  "@id": `${siteConfig.url}/#website`,
};

const localBusinessNode = {
  ...stripContext(localBusinessSchema),
  "@id": `${siteConfig.url}/#localbusiness`,
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
};

const JSON_LD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode, localBusinessNode],
};

// ═══════════════════════════════════════════════════════════════════
// Theme FOUC Prevention — runs before paint, no flicker
// ═══════════════════════════════════════════════════════════════════
const THEME_INIT_SCRIPT = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    var root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  } catch(e) {}
})();
`;

// ═══════════════════════════════════════════════════════════════════
// Premium Loading Fallback
// ═══════════════════════════════════════════════════════════════════
function PremiumLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
        <svg
          className="absolute h-full w-full animate-spin"
          viewBox="0 0 100 100"
          style={{ animationDuration: "1.2s" }}
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-primary/10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="60 100"
            className="text-primary"
          />
        </svg>
        <div className="z-10 h-6 w-6 rounded-full bg-primary shadow-lg shadow-primary/30 animate-pulse" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 404 — Not Found
// ═══════════════════════════════════════════════════════════════════
function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="glass-card relative z-10 w-full max-w-md rounded-3xl border border-primary/20 bg-background/80 p-8 md:p-10 text-center shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-700">
        <div className="text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-br from-primary via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-xl">
          404
        </div>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true">←</span> Go back home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Error Boundary Component
// ═══════════════════════════════════════════════════════════════════
function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopyError = async () => {
    try {
      await navigator.clipboard.writeText(error.stack || error.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,0,0.05),transparent_50%)]" />
      <div className="glass-card relative z-10 w-full max-w-lg rounded-3xl border border-destructive/30 bg-background/80 p-8 text-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-500">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-3xl">
          ⚠️
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Unexpected Error
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Our systems encountered a technical issue. Please try again or
          contact support if the problem persists.
        </p>
        {import.meta.env.DEV && (
          <details className="mt-4 max-h-40 overflow-auto rounded-lg bg-muted/30 p-3 text-left text-xs font-mono">
            <summary className="cursor-pointer text-primary">
              View error details
            </summary>
            <pre className="mt-2 whitespace-pre-wrap text-destructive">
              {error.stack || error.message}
            </pre>
          </details>
        )}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105"
          >
            Go home
          </Link>
          <button
            onClick={handleCopyError}
            className="inline-flex items-center rounded-xl border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105"
          >
            {copied ? "✓ Copied" : "Copy details"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Root Route — Global <head> defaults + JSON-LD
// Each page overrides title/description/canonical via its own head()
// ═══════════════════════════════════════════════════════════════════
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5",
      },
      { name: "theme-color", content: siteConfig.themeColor },
      { title: siteConfig.defaultTitle },
      { name: "description", content: siteConfig.defaultDescription },
      {
        name: "keywords",
        content: siteConfig.defaultKeywords.join(", "),
      },
      { name: "author", content: company.name },
      { name: "publisher", content: company.name },
      { name: "application-name", content: company.name },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "format-detection", content: "telephone=no" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.name },
      { property: "og:title", content: siteConfig.defaultTitle },
      {
        property: "og:description",
        content: siteConfig.defaultDescription,
      },
      { property: "og:url", content: siteConfig.url },
      {
        property: "og:image",
        content: `${siteConfig.url}${siteConfig.ogImage}`,
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${company.name} — ${company.tagline}`,
      },
      { property: "og:locale", content: siteConfig.locale },

      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteConfig.defaultTitle },
      {
        name: "twitter:description",
        content: siteConfig.defaultDescription,
      },
      {
        name: "twitter:image",
        content: `${siteConfig.url}${siteConfig.ogImage}`,
      },
      { name: "twitter:image:alt", content: company.name },

      // Geo / Local signals
      { name: "geo.region", content: "PK-SD" },
      { name: "geo.placename", content: "Karachi" },
      {
        name: "geo.position",
        content: `${company.geo.latitude};${company.geo.longitude}`,
      },
      {
        name: "ICBM",
        content: `${company.geo.latitude}, ${company.geo.longitude}`,
      },

      // Mobile / PWA
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: company.name },
      { name: "color-scheme", content: "light dark" },
    ],
    links: [
      { rel: "canonical", href: siteConfig.url },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },

      // Fonts — preconnect + preload + stylesheet
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      },

      // App CSS
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      // Theme init — MUST be first, inline, synchronous
      { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } },
      // JSON-LD Graph
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD_GRAPH),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// ═══════════════════════════════════════════════════════════════════
// Root Shell — HTML skeleton
// ═══════════════════════════════════════════════════════════════════
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-PK"
      dir="ltr"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-xl focus:ring-2 focus:ring-white/50"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Root Component — Layout + global UX enhancements
// ═══════════════════════════════════════════════════════════════════
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  // Premium smooth scroll for in-page anchor links (with navbar offset)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 90;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      history.pushState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Scroll to top on route change (skip when navigating to a hash)
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  // Sync theme-color meta with actual theme (light/dark)
  useEffect(() => {
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute(
          "content",
          isDark ? "#0A192F" : siteConfig.themeColor,
        );
      }
    };

    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    updateThemeColor();

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <TopHeader />
        <Navbar />
        <main id="main-content" className="relative flex-1">
          <div
            key={location.pathname}
            className="animate-in fade-in slide-in-from-bottom-2 duration-[400ms] fill-mode-both"
          >
            <Suspense fallback={<PremiumLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <WhatsAppBtn />
        </Suspense>
        <Suspense fallback={null}>
          <AIChatbot />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}
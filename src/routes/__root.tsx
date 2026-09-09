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
  type ReactNode,
  Suspense,
  useRef,
} from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { TopHeader } from "@/components/TopHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppBtn } from "@/components/WhatsAppBtn";
import { AIChatbot } from "@/components/AIChatbot";

// ─── Dynamically import hero images for preloading ────────────
import heroDatacenter from "../assets/hero-datacenter.jpg?url";
// You can add more hero images here if needed

// ─── Constants for Structured Data (JSON-LD) ──────────────────
const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  name: "AI Power Enterprises",
  url: "https://aipowerenterprises.com",
  logo: "https://aipowerenterprises.com/logo.png",
  description:
    "Enterprise IT infrastructure, systems integration, managed services, and 24/7 SLA technical support across Pakistan.",
  foundingYear: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "100+" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92-300-1234567",
      contactType: "sales",
      availableLanguage: ["English", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+92-300-7654321",
      contactType: "support",
      availableLanguage: ["English", "Urdu"],
    },
  ],
  sameAs: [
    "https://facebook.com/aipowerenterprises",
    "https://linkedin.com/company/aipowerenterprises",
  ],
};

const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  url: "https://aipowerenterprises.com",
  name: "AI Power Enterprises",
  description: "Enterprise IT solutions provider in Pakistan.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aipowerenterprises.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Core Service Schemas
const SERVICE_SCHEMAS = [
  {
    "@type": "Service",
    name: "Managed IT Services",
    description:
      "Dependable technical support, infrastructure monitoring, helpdesk, incident management, and preventive maintenance to reduce operational disruption.",
    provider: { "@id": "#organization" },
    serviceType: "Managed Services",
  },
  {
    "@type": "Service",
    name: "CCTV & Enterprise Security Surveillance",
    description:
      "IP-based CCTV surveillance systems, centralized monitoring, video recording, and integrated security infrastructure for corporate and industrial environments.",
    provider: { "@id": "#organization" },
    serviceType: "Security",
  },
  {
    "@type": "Service",
    name: "Enterprise Networking Solutions",
    description:
      "Structured cabling, routing/switching, wireless networking, network security, and optimization for reliable business connectivity.",
    provider: { "@id": "#organization" },
    serviceType: "Networking",
  },
  {
    "@type": "Service",
    name: "Servers & High-Performance Computing",
    description:
      "Enterprise server infrastructure, blade systems, high-performance computing, and unified compute platforms for mission-critical workloads.",
    provider: { "@id": "#organization" },
    serviceType: "Infrastructure",
  },
  {
    "@type": "Service",
    name: "Data Centre & Storage Solutions",
    description:
      "SAN/NAS storage, backup and recovery infrastructure, and centralized data management designed for availability, scalability, and business continuity.",
    provider: { "@id": "#organization" },
    serviceType: "Infrastructure",
  },
  {
    "@type": "Service",
    name: "SLA & Mission-Critical Support",
    description:
      "24/7/365 technical support, rapid response, onsite intervention, preventive maintenance, and structured service level frameworks.",
    provider: { "@id": "#organization" },
    serviceType: "Support",
  },
];

const JSON_LD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    { ...ORGANIZATION_SCHEMA, "@id": "#organization" },
    WEBSITE_SCHEMA,
    ...SERVICE_SCHEMAS,
  ],
};

// ─── Premium Loading Spinner ──────────────────────────────────
function PremiumLoader() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md transition-all duration-700"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
        {/* Main Spinner Ring with Gradient */}
        <svg
          className="absolute h-full w-full animate-spin"
          viewBox="0 0 100 100"
          style={{ animationDuration: "1.2s" }}
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
            stroke="url(#spinnerGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="60 100"
            strokeDashoffset="0"
          />
          <defs>
            <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="stop-color-primary" />
              <stop offset="100%" className="stop-color-purple-500" />
            </linearGradient>
          </defs>
        </svg>
        {/* Inner Logo / Dot */}
        <div className="z-10 h-8 w-8 rounded-full bg-primary shadow-lg shadow-primary/30 animate-pulse" />
      </div>
    </div>
  );
}

// ─── 404 Page (Premium & Interactive) ─────────────────────────
function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="glass-card relative z-10 max-w-md w-full rounded-3xl border border-primary/20 bg-background/80 p-10 text-center shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-700">
        <div className="text-9xl font-black tracking-tight text-gradient bg-gradient-to-br from-primary via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-xl">
          404
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <span>←</span> Go back home
        </Link>
      </div>
    </div>
  );
}

// ─── Error Component (Premium & Resilient) ────────────────────
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  const handleCopyError = () => {
    navigator.clipboard.writeText(error.stack || error.message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,0,0.05),transparent_50%)]" />
      <div className="glass-card relative z-10 max-w-lg w-full rounded-3xl border border-destructive/30 bg-background/80 p-8 text-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-500">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-3xl">
          ⚠️
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Unexpected Error</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Our systems encountered a technical issue. Please try again or contact support if the problem persists.
        </p>
        {import.meta.env.DEV && (
          <details className="mt-4 max-h-40 overflow-auto rounded-lg bg-muted/30 p-3 text-left text-xs font-mono">
            <summary className="cursor-pointer text-primary">View error details</summary>
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

// ─── Root Route Definition ─────────────────────────────────────
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Dynamic Head Function (Advanced SEO logic)
head: () => ({
  meta: [
    { charSet: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
    {
      name: "description",
      content:
        "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA technical support across Pakistan. Trusted by 100+ professionals.",
    },
    { name: "author", content: "AI Power Enterprises" },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large",
    },
    { name: "referrer", content: "strict-origin-when-cross-origin" },
    // Open Graph
    {
      property: "og:title",
      content: "AI Power Enterprises | Enterprise IT Solutions Pakistan",
    },
    {
      property: "og:description",
      content:
        "Premium enterprise IT infrastructure, systems integration, managed services, and 24/7 SLA support across Pakistan.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://aipowerenterprises.com" },
    {
      property: "og:image",
      content: "https://aipowerenterprises.com/og-image.jpg",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_US" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "AI Power Enterprises | Enterprise IT Solutions",
    },
    {
      name: "twitter:description",
      content:
        "Enterprise IT infrastructure, CCTV, networking, servers & 24/7 SLA support.",
    },
    {
      name: "twitter:image",
      content: "https://aipowerenterprises.com/og-image.jpg",
    },
    { name: "theme-color", content: "#1a2a6c" },
  ],
  links: [
    { rel: "canonical", href: "https://aipowerenterprises.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
    // Preload hero image for LCP
    {
      rel: "preload",
      href: heroDatacenter,
      as: "image",
      fetchPriority: "high",
    },
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
      as: "style",
    },
    { rel: "stylesheet", href: appCss },
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  scripts: [
    // JSON-LD
    {
      type: "application/ld+json",
      children: JSON.stringify(JSON_LD_GRAPH),
    },
    // Critical theme script (prevent FOUC)
    {
      dangerouslySetInnerHTML: {
        __html: `
          (function(){
            try {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              const root = document.documentElement;
              if (theme === 'dark') {
                root.classList.add('dark');
                root.style.colorScheme = 'dark';
              } else {
                root.classList.remove('dark');
                root.style.colorScheme = 'light';
              }
              const meta = document.querySelector('meta[name="theme-color"]');
              if (meta) {
                meta.content = theme === 'dark' ? '#0d1a2b' : '#1a2a6c';
              }
            } catch(e) {}
          })();
        `,
      },
    },
    // Google Analytics (replace G-XXXXXXXXXX with your ID)
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
    },
    {
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `,
      },
    },
  ],
}),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// ─── RootShell ──────────────────────────────────────────────────
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Advanced CSP Header: Strict but allows necessary inline scripts/styles for shadcn/ui */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;"
        />
      </head>
      <body className="bg-background font-sans text-foreground">
        {/* Skip to content link for accessibility */}
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

// ─── RootComponent (Layout + Premium Smooth Scroll & Dynamic SEO) ────────────────
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // ─── 1. Premium Butter-Smooth Scrolling (Global Enhancement) ──
  useEffect(() => {
    // Intercept all anchor clicks for internal hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // Navbar offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update URL hash without causing scroll jump
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // ─── 2. Dynamic SEO: Update Title & Meta per Route (Advanced) ──
  useEffect(() => {
    const path = location.pathname;
    let pageTitle = "AI Power Enterprises | Enterprise IT Infrastructure & 24/7 SLA Support";
    let pageDescription =
      "Enterprise IT infrastructure, managed services, CCTV, networking, servers and 24/7 SLA technical support across Pakistan.";

    // Advanced mapping for dynamic page titles and descriptions
    const routeMap: Record<string, { title: string; desc: string }> = {
      '/': {
        title: 'AI Power Enterprises | Enterprise IT & 24/7 SLA Support Pakistan',
        desc: 'Premier enterprise IT infrastructure, managed services, CCTV, networking, servers & 24/7 SLA support in Pakistan.'
      },
      '/services': {
        title: 'Our IT Services | AI Power Enterprises',
        desc: 'Explore our comprehensive IT services: Managed IT, CCTV, Networking, Servers, Data Centre & SLA support.'
      },
      '/cctv': {
        title: 'CCTV & Security Surveillance | AI Power Enterprises',
        desc: 'Advanced IP-based CCTV surveillance, centralized monitoring, and integrated security for enterprises.'
      },
      '/networking': {
        title: 'Enterprise Networking Solutions | AI Power Enterprises',
        desc: 'Structured cabling, routing/switching, wireless, and network security for reliable business connectivity.'
      },
      '/servers': {
        title: 'Servers & High-Performance Computing | AI Power Enterprises',
        desc: 'Enterprise server infrastructure, blade systems, and high-performance computing for mission-critical workloads.'
      },
      '/managed-services': {
        title: 'Managed IT Services | AI Power Enterprises',
        desc: '24/7 infrastructure monitoring, helpdesk, incident management, and preventive maintenance for your business.'
      },
      '/sla': {
        title: '24/7 SLA & Mission-Critical Support | AI Power Enterprises',
        desc: 'Round-the-clock technical support, rapid response, onsite intervention, and structured SLAs.'
      },
      '/about': {
        title: 'About AI Power Enterprises | IT Experts',
        desc: 'Learn about AI Power Enterprises, our mission, team, and commitment to enterprise IT excellence.'
      },
      '/clients': {
        title: 'Our Clients & Partners | AI Power Enterprises',
        desc: 'Trusted by top enterprises. See our client success stories and technology partnerships.'
      },
      '/contact': {
        title: 'Contact AI Power Enterprises | Get IT Support',
        desc: 'Get in touch for enterprise IT solutions, quotes, or 24/7 technical support.'
      },
    };

    // Find the best match
    let matchedKey = path as keyof typeof routeMap;
    if (routeMap[matchedKey]) {
      pageTitle = routeMap[matchedKey].title;
      pageDescription = routeMap[matchedKey].desc;
    } else if (path.startsWith('/services/')) {
      // Dynamic services slug handling
      const slug = path.split('/').pop();
      pageTitle = `${slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | AI Power Enterprises`;
      pageDescription = `Expert ${slug?.replace(/-/g, ' ')} solutions by AI Power Enterprises. Premium IT services in Pakistan.`;
    }

    // Update document head dynamically
    document.title = pageTitle;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', pageDescription);
      document.head.appendChild(metaDesc);
    }

    // Update OG:Title & OG:Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);

    // Update Twitter Title & Description
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', pageTitle);
    
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', pageDescription);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://aipowerenterprises.com${path}`);
    }

  }, [location.pathname]);

  // ─── 3. Theme Color Dynamic Update ────────────────────────────
  useEffect(() => {
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', isDark ? '#0d1a2b' : '#1a2a6c');
      }
    };

    // Watch for theme changes via MutationObserver
    const observer = new MutationObserver(() => updateThemeColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    updateThemeColor(); // Initial sync
    return () => observer.disconnect();
  }, []);

  // ─── 4. Handle Route Transitions (Loading State) ──────────────
  useEffect(() => {
    const unsubStart = router.subscribe("onBeforeLoad", () => setIsNavigating(true));
    const unsubEnd = router.subscribe("onLoad", () => {
      // Delay hiding loader slightly to ensure smooth painting
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    });
    return () => {
      unsubStart();
      unsubEnd();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [router]);

  // ─── Render ────────────────────────────────────────────────────
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col relative">
        <TopHeader />
        <Navbar />
        <main id="main-content" className="flex-1 relative">
          {/* Premium Page Transition Wrapper */}
          <div
            key={location.pathname}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
          >
            <Suspense fallback={<PremiumLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
        <Footer />
        <WhatsAppBtn />
        <AIChatbot />
        {/* Global Loading Overlay for Navigation */}
        {isNavigating && <PremiumLoader />}
      </div>
    </QueryClientProvider>
  );
}
import { Link } from "@tanstack/react-router";

/**
 * Real internal routes so a 404 is never a crawl dead-end — both for
 * visitors and for keeping link equity inside the site.
 */
const NOT_FOUND_SUGGESTIONS = [
  { label: "IT Services", to: "/services" },
  { label: "Data Centre", to: "/datacenter" },
  { label: "Servers", to: "/servers" },
  { label: "Storage & Backup", to: "/storage" },
  { label: "Networking", to: "/networking" },
  { label: "CCTV", to: "/cctv" },
  { label: "SLA Support", to: "/sla" },
  { label: "About", to: "/about" },
] as const;

/**
 * 404 — Not Found.
 *
 * Shared by the root `notFoundComponent` and the `$.tsx` splat route,
 * which is what actually emits `noindex` + HTTP 404.
 */
export function NotFound() {
  return (
    <div className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="glass-card relative z-10 w-full max-w-md rounded-3xl border border-primary/20 bg-background/80 p-8 md:p-10 text-center shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-700">
        <div className="text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-br from-primary via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-xl">
          404
        </div>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true">←</span> Go back home
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-[44px] items-center rounded-xl border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:scale-105"
          >
            Contact us
          </Link>
        </div>

        {/* Recovery links — keeps a visitor (and the crawler) on a path
            back into the site instead of at a dead end. */}
        <nav aria-label="Suggested pages" className="mt-8 border-t border-border/60 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Popular destinations
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NOT_FOUND_SUGGESTIONS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-[44px] items-center text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

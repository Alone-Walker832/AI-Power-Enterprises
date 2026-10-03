import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
 * PREMIUM HERO SHELL
 *
 * Purpose
 * -------
 * The seven service pages each re-implemented their own hero, so the
 * eyebrow, heading scale, trust chips and stat tiles drifted from page
 * to page. This component standardises the anatomy WITHOUT changing the
 * brand: it reuses the existing `hero-surface`, `grid-pattern`,
 * `text-gradient`, `glow-ring` and hero-* tokens, so colours, fonts and
 * overall look stay identical.
 *
 * What makes it feel premium (all purely additive):
 *  • a soft radial "light bloom" behind the content for depth
 *  • a fine grid mask, like the existing hero-surface panels
 *  • a gradient hairline that fades at both edges (no hard seam)
 *  • staggered fade-up on the copy block and each trust chip
 *
 * Accessibility / SEO notes:
 *  • `eyebrow` is a <p>, not a heading, so the page keeps exactly ONE
 *    <h1> (passed via `title`). Do not pass extra headings here.
 *  • All decorative layers are aria-hidden and pointer-events-none.
 * ═══════════════════════════════════════════════════════════════════ */

type TrustChip = {
  icon?: ReactNode;
  label: string;
};

type PremiumHeroProps = {
  /** Small kicker line above the <h1>. */
  eyebrow?: ReactNode;
  /** The page <h1> content. Keep the gradient span inside if desired. */
  title: ReactNode;
  /** Supporting paragraph under the heading. */
  description?: ReactNode;
  /** Primary / secondary CTAs. */
  actions?: ReactNode;
  /** Short trust chips row, e.g. "TIA-942 design". */
  chips?: TrustChip[];
  /** Right-hand visual column (stats grid, illustration, image). */
  aside?: ReactNode;
  /** Vertically centre the two columns against each other. */
  alignAside?: boolean;
  className?: string;
};

export function PremiumHero({
  eyebrow,
  title,
  description,
  actions,
  chips,
  aside,
  alignAside = true,
  className,
}: PremiumHeroProps) {
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden",
        // Fluid min-height. dvh (not vh) so mobile browser chrome
        // collapsing cannot crop the hero.
        "min-h-[min(100svh,900px)]",
        className,
      )}
    >
      {/* ── Layer 1: brand surface + ambient bloom ── */}
      <div className="hero-surface absolute inset-0 -z-10" aria-hidden="true" />

      {/* Radial bloom — the single biggest depth upgrade. Purely decorative. */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]",
        )}
      />

      {/* ── Layer 2: fine grid, faded out at the edges ── */}
      <div
        aria-hidden="true"
        className={cn(
          "grid-pattern pointer-events-none absolute inset-0 -z-10 opacity-[0.18]",
          "[mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]",
        )}
      />

      {/* ── Layer 3: bottom hairline so the hero meets the page cleanly ── */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px",
          "bg-gradient-to-r from-transparent via-primary/35 to-transparent",
        )}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
            alignAside && "lg:items-center",
          )}
        >
          {/* ── Copy column ── */}
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            {eyebrow ? <div className="animate-fade-up">{eyebrow}</div> : null}

            {/* Single h1 for the page — clamp() keeps it fluid so it never
                overflows at 320px nor jumps size at each breakpoint. */}
            <h1
              className={cn(
                "font-display font-bold text-balance text-hero-foreground",
                "text-[clamp(2rem,1.15rem+3.9vw,3.75rem)]",
                "leading-[1.08] tracking-tight",
              )}
            >
              {title}
            </h1>

            {description ? (
              <p
                className={cn(
                  "max-w-xl text-pretty",
                  "text-base leading-[1.7] text-hero-muted",
                  "sm:text-lg lg:text-xl",
                )}
              >
                {description}
              </p>
            ) : null}

            {chips?.length ? (
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1 text-xs text-hero-muted sm:text-sm lg:justify-start">
                {chips.map((chip, i) => (
                  <li
                    key={chip.label}
                    className="animate-fade-up inline-flex items-center gap-1.5"
                    // Stagger the reveal so the row cascades rather than
                    // popping in as one block.
                    style={{ animationDelay: `${120 + i * 70}ms` }}
                  >
                    {chip.icon ? (
                      <span className="text-hero-accent" aria-hidden="true">
                        {chip.icon}
                      </span>
                    ) : null}
                    {chip.label}
                  </li>
                ))}
              </ul>
            ) : null}

            {actions ? (
              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                {actions}
              </div>
            ) : null}
          </div>

          {/* ── Aside column ── */}
          {aside ? <div className="w-full">{aside}</div> : null}
        </div>
      </div>
    </header>
  );
}

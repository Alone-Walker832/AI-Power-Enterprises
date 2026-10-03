import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
 * SECTION HEADING — shared "premium" section title block
 *
 * Every page currently hand-rolls its own heading block, which is why
 * eyebrow sizes, spacing and gradient accents drift between pages.
 * This centralises the rhythm while using ONLY the existing design
 * tokens (`text-gradient`, `hero-surface`, `grid-pattern`), so the
 * visual language is unchanged — it just becomes consistent.
 *
 * Renders a real heading element, so heading order stays valid for
 * accessibility (pass `level` to control h2 vs h3).
 * ═══════════════════════════════════════════════════════════════════ */

type SectionHeadingProps = {
  /** Small kicker above the title, e.g. "OUR SERVICES". */
  eyebrow?: string;
  /** Title text. Highlighted words go in `accent`. */
  title: ReactNode;
  /** Trailing words rendered with the brand gradient. */
  accent?: string;
  /** Supporting paragraph. Keep it real copy — this is indexable text. */
  description?: ReactNode;
  /** Heading level. Default h2 (correct for top-level page sections). */
  level?: 2 | 3;
  /** Horizontal alignment. */
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  level = 2,
  align = "center",
  className,
}: SectionHeadingProps) {
  const Heading = level === 3 ? "h3" : "h2";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "relative flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-1.5",
            "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
          )}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary"
          />
          {eyebrow}
        </span>
      ) : null}

      <Heading
        className={cn(
          // Fluid type scale: clamp() instead of stepped breakpoints so
          // headings scale continuously with the viewport and never
          // "jump" at sm/md/lg. No layout shift, no overflow at 320px.
          "font-display font-bold leading-[1.12] tracking-tight text-balance",
          "text-[clamp(1.75rem,1.1rem+3.1vw,3rem)]",
          "text-hero-foreground",
        )}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="text-gradient">{accent}</span>
          </>
        ) : null}
/* ═══════════════════════════════════════════════════════════════════
 * SECTION SHELL — consistent vertical rhythm + width across pages
 * ═══════════════════════════════════════════════════════════════════ */

type SectionProps = {
  children: ReactNode;
  /** Optional id so in-page anchor links keep working. */
  id?: string;
  className?: string;
  /** Render as a plain <section> (default) or <div>. */
  as?: "section" | "div";
  /** Extra top padding for sections that follow a hero. */
  spacing?: "tight" | "default" | "loose";
};

export function Section({
  children,
  id,
  className,
  as = "section",
  spacing = "default",
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        spacing === "tight" && "py-8 sm:py-10",
        spacing === "default" && "py-12 sm:py-16 lg:py-20",
        spacing === "loose" && "py-16 sm:py-20 lg:py-28",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * PREMIUM CARD — equal-height card with an aligned footer action
 *
 * Two problems this solves across every page:
 *  1. Cards in the same row had different heights, so the CTA buttons
 *     sat at different vertical positions. `h-full` + flex column +
 *     `CardFooter`'s mt-auto pins the action to the bottom of every
 *     card in the row.
 *  2. Hover feedback was inconsistent. This adds a border/shadow
 *     ramp, an edge-light rail and a subtle lift, matching the
 *     existing `glass-card` look.
 * ═══════════════════════════════════════════════════════════════════ */

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
  /** Adds the hover ramp + lift. Default true. */
  interactive?: boolean;
};

export function PremiumCard({
  children,
  className,
  interactive = true,
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        "glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl",
        "border border-border/60 p-5 shadow-sm sm:p-6",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        interactive &&
          "hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl focus-within:border-primary/45",
        className,
      )}
    >
      {/* Top accent rail — appears on hover, adds a premium edge light. */}
      {interactive ? (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0",
            "bg-gradient-to-r from-transparent via-primary to-transparent",
            "transition-transform duration-500 ease-out",
            "group-hover:scale-x-100",
          )}
        />
      ) : null}
      {children}
    </div>
  );
}

/** Pushes its children to the bottom of a PremiumCard column. */
export function CardFooter({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return <div className={cn("mt-auto pt-4", className)} {...rest} />;
}
      </Heading>

      {description ? (
        <p
          className={cn(
            // >=16px at every breakpoint, comfortable 1.7 line-height,
            // capped measure so long lines stay readable.
            "max-w-3xl text-[1rem] leading-[1.7] text-hero-muted sm:text-[1.0625rem]",
            "text-pretty",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
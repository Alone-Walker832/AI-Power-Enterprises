import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
 * SECTION HEADING — shared "premium" section title block
 *
 * Every page previously hand-rolled its own heading block, which is why
 * eyebrow sizes, spacing and gradient accents drifted between pages.
 * This centralises the rhythm using ONLY existing design tokens
 * (`text-gradient`, `hero-*`), so the visual language is unchanged.
 *
 * Renders a real heading element so heading order stays valid for
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
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      ) : null}

      <Heading
        className={cn(
          // Fluid type scale: clamp() instead of stepped breakpoints so
          // headings scale continuously and never "jump" at sm/md/lg.
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
      </Heading>

      {description ? (
        <p
          className={cn(
            // >=16px at every breakpoint, comfortable 1.7 line-height,
            // capped measure so long lines stay readable.
            "max-w-3xl text-pretty text-[1rem] leading-[1.7] text-hero-muted",
            "sm:text-[1.0625rem]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

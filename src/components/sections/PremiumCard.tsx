import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
 * PREMIUM CARD — equal-height card with an aligned footer action
 *
 * Two problems this solves across every page:
 *  1. Cards in the same row had different heights, so the CTA buttons
 *     sat at different vertical positions. `h-full` + flex column +
 *     CardFooter's `mt-auto` pins the action to the bottom of every
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

export function PremiumCard({ children, className, interactive = true }: PremiumCardProps) {
  return (
    <div
      className={cn(
        "glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl",
        "border border-border/60 p-5 shadow-sm sm:p-6",
        interactive && "transition-[transform,box-shadow,border-color] duration-300 ease-out",
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

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
 * SECTION SHELL — consistent vertical rhythm + width across pages.
 * Wraps content in a real <section> landmark with an optional id so
 * in-page anchor links keep working.
 * ═══════════════════════════════════════════════════════════════════ */

type SectionProps = {
  children: ReactNode;
  /** Optional id so in-page anchor links keep working. */
  id?: string;
  className?: string;
  /** Render as a <section> (default) or a plain <div>. */
  as?: "section" | "div";
  /** Vertical padding preset. */
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

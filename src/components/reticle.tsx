import { cn } from "@/lib/utils";

/**
 * Reticle — four corner brackets, like a camera focus box / radar target lock.
 * The signature "instrumented" motif of the design system.
 */
export function Reticle({
  className,
  tone = "accent",
}: {
  className?: string;
  tone?: "accent" | "fg" | "faint";
}) {
  const tones = {
    accent: "border-accent/70",
    fg: "border-fg/40",
    faint: "border-faint/50",
  } as const;

  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn("absolute left-0 top-0 h-3 w-3 border-l border-t", tones[tone])} />
      <span className={cn("absolute right-0 top-0 h-3 w-3 border-r border-t", tones[tone])} />
      <span className={cn("absolute bottom-0 left-0 h-3 w-3 border-b border-l", tones[tone])} />
      <span className={cn("absolute bottom-0 right-0 h-3 w-3 border-b border-r", tones[tone])} />
    </span>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-hi">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  index,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** e.g. "01" — renders an editorial index marker next to the eyebrow */
  index?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {index ? (
            <>
              <span className="font-serif text-xl italic leading-none text-accent">
                {index}
              </span>
              <span aria-hidden className="h-px w-6 bg-accent/50" />
            </>
          ) : null}
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#14100d] font-semibold shadow-[0_10px_36px_-12px_rgb(255_92_51/0.65)] hover:bg-accent-hi hover:text-[#14100d] hover:shadow-[0_10px_44px_-10px_rgb(255_92_51/0.8)]",
  secondary:
    "border border-line-strong bg-white/[0.03] text-fg hover:border-accent/60 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-fg",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        size === "lg" ? "px-6 py-3 text-[15px]" : "px-4 py-2 text-sm",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "ok" | "warn" | "critical" | "info";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "border-line-strong bg-white/[0.04] text-muted",
    accent: "border-accent/40 bg-accent/10 text-accent-hi",
    ok: "border-ok/40 bg-ok/10 text-ok",
    warn: "border-warn/40 bg-warn/10 text-warn",
    critical: "border-critical/40 bg-critical/10 text-critical",
    info: "border-info/40 bg-info/10 text-info",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({
  tone = "ok",
  label,
}: {
  tone?: "ok" | "critical" | "warn";
  label: string;
}) {
  const colors = {
    ok: "bg-ok",
    critical: "bg-critical",
    warn: "bg-warn",
  } as const;
  return (
    <span className="inline-flex items-center gap-2 text-xs text-muted">
      <span className="relative flex h-2 w-2">
        <span
          className={cn("absolute inline-flex h-full w-full rounded-full opacity-60 animate-pulse-dot", colors[tone])}
        />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", colors[tone])} />
      </span>
      {label}
    </span>
  );
}

export function DisclaimerNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-warn/25 bg-warn/[0.06] px-4 py-3 text-sm leading-relaxed text-warn/90",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="mt-0.5 h-4 w-4 shrink-0"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
      <p>{children}</p>
    </div>
  );
}

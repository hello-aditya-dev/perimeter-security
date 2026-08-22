import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="plg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a63" />
          <stop offset="1" stopColor="#ff5c33" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z"
        stroke="url(#plg)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 8.5 22.3 12.15v7.2L16 23l-6.3-3.65v-7.2L16 8.5Z"
        fill="url(#plg)"
        opacity="0.92"
      />
      <circle cx="16" cy="15.75" r="2.1" fill="#07080b" />
    </svg>
  );
}

export function Logo({
  withWordmark = true,
  className,
}: {
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${site.name} — home`}>
      <LogoMark className="h-7 w-7 transition-transform duration-200 group-hover:scale-105" />
      {withWordmark ? (
        <span className="text-[17px] font-semibold tracking-tight text-fg">
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}

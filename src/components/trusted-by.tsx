import { Hexagon } from "lucide-react";
import { trustedBy } from "@/lib/stories";

export function TrustedBy() {
  const row = [...trustedBy, ...trustedBy];
  return (
    <section className="border-b border-line bg-surface/40 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          Trusted by security teams at · illustrative logos
        </p>
        <div className="marquee relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-14 pr-14">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-[15px] font-semibold tracking-tight text-faint transition-colors hover:text-muted"
              >
                <Hexagon className="h-3.5 w-3.5" aria-hidden />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

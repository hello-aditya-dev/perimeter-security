import { ArrowLeft, Radar } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid mask-hero absolute inset-0" />
      <div aria-hidden className="absolute left-1/2 top-1/3 h-72 w-[560px] -translate-x-1/2 glow-accent" />
      <Container className="relative flex min-h-[68vh] flex-col items-center justify-center py-24 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-surface text-accent-hi shadow-[0_0_40px_-10px_rgb(77_127_255/0.5)]">
          <Radar className="h-6 w-6" />
        </span>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-critical">
          Signal lost · 404
        </p>
        <h1 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          This route dropped off our radar.
        </h1>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
          The page you requested was moved, decommissioned, or never existed.
          Our monitoring suggests heading back to safety.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <ArrowLeft className="h-4 w-4" /> Back to base
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Report a broken link
          </ButtonLink>
        </div>
        <p className="mt-10 font-mono text-xs text-faint">
          Error code: PERIMETER-404 · No action required by your security team
        </p>
      </Container>
    </section>
  );
}

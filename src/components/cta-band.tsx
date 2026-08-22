import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { Reticle } from "@/components/reticle";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title = "Ready to see what's hiding in your stack?",
  body = "Deploy Perimeter across your environment in under a day. No agents required for cloud posture — full coverage from the first login.",
  primaryLabel = "Request a demo",
  primaryHref = "/contact",
  secondaryLabel = "Talk to an engineer",
  secondaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-t border-line">
      <Container className="py-16 md:py-24">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-3xl border border-line-strong bg-surface px-6 py-14 text-center md:px-16">
            <Reticle tone="accent" className="inset-4 z-10" />
            <div aria-hidden className="bg-dots absolute inset-0 opacity-60" />
            <div aria-hidden className="absolute -bottom-40 left-1/2 h-80 w-[560px] -translate-x-1/2 glow-accent" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted">
                {body}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href={primaryHref} size="lg" className="w-full sm:w-auto">
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={secondaryHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                  {secondaryLabel}
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs text-faint">
                Sample configuration · typical onboarding &lt; 1 day · SOC 2 Type II attested infrastructure*
              </p>
              <p className="mt-1 font-mono text-[10px] text-faint/70">
                *Illustrative claims — replace with your own verified statements.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent-hi transition-colors hover:text-fg"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

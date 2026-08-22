import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid mask-hero absolute inset-0" />
      <div aria-hidden className="absolute -top-32 left-1/2 h-72 w-[640px] -translate-x-1/2 glow-accent" />
      <Container className="relative py-16 md:py-24">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}

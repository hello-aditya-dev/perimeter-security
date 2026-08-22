import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Chip, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, checklists and runbooks for security teams — cloud readiness, tool consolidation, incident response and vendor review.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource library"
        title="Practical artifacts for security programs."
        lede="The documents our field engineers hand over in every onboarding — checklists, runbooks and evaluation templates."
      />

      <section className="border-b border-line">
        <Container className="py-14 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 90}>
                <div className="card-hover flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                  <div className="flex items-center justify-between gap-3">
                    <Chip tone="accent">{r.type}</Chip>
                    <span className="font-mono text-[11px] text-faint">{r.meta}</span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-fg">
                    {r.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.desc}</p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-line-strong bg-bg px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50"
                  >
                    <Download className="h-4 w-4" />
                    Request a copy
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mt-10 rounded-xl border border-line bg-bg px-4 py-3 text-center font-mono text-[11px] text-faint">
              Template assets are placeholders — attach your own gated PDFs here or
              wire buttons to your marketing automation platform.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Need something custom?"
        body="Our field engineering team builds tailored assessments for enterprise evaluations."
        primaryLabel="Talk to us"
      />
    </>
  );
}

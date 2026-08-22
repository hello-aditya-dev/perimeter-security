import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand, TextLink } from "@/components/cta-band";
import { ButtonLink, Container, DisclaimerNote, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { COMPLIANCE_DISCLAIMER, frameworks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Continuous compliance automation for SOC 2, ISO 27001, GDPR, HIPAA and PCI DSS — evidence collected as a byproduct of running the platform.",
};

const readiness = [
  {
    title: "Evidence as a byproduct",
    body: "Controls run continuously; every check writes timestamped evidence your auditor can sample directly.",
  },
  {
    title: "One control, many frameworks",
    body: "Map a control once and see it satisfied across SOC 2, ISO 27001, HIPAA and PCI requirement sets simultaneously.",
  },
  {
    title: "Exceptions with expiry",
    body: "Every accepted risk carries an owner, justification and review date — nothing quietly lapses.",
  },
  {
    title: "Audit-day exports",
    body: "Generate framework-mapped packages in PDF or JSON with one click, filtered to the audit period.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Stop preparing for audits. Stay ready instead."
        lede="Perimeter maps live platform controls to the frameworks your customers ask about — so compliance becomes a query, not a quarterly fire drill."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Request a compliance review
          </ButtonLink>
          <ButtonLink href="/security" variant="secondary" size="lg">
            Visit our Trust Center
          </ButtonLink>
        </div>
      </PageHero>

      {/* mandatory disclaimer */}
      <section className="border-b border-line">
        <Container className="pt-12">
          <Reveal>
            <DisclaimerNote>{COMPLIANCE_DISCLAIMER}</DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      {/* frameworks */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Frameworks"
              title="Coverage for the certifications buyers ask about"
              description="Each card below is a template placeholder describing how a real deployment would map controls to that framework."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((f, i) => (
              <Reveal key={f.abbr} delay={(i % 3) * 90}>
                <div className="card-hover flex h-full flex-col rounded-2xl border border-line bg-bg p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-semibold tracking-tight text-fg">
                      {f.abbr}
                    </span>
                    <ShieldCheck className="h-5 w-5 text-faint" />
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted">{f.name}</p>
                  <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-faint">
                    {f.scope}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {f.howWeHelp.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-dashed border-line-strong p-7">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-hi">
                    Also supported
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    FedRAMP alignment worksheets, CIS Benchmarks mapping, NIST CSF profiles
                    and custom framework imports via API.
                  </p>
                </div>
                <TextLink href="/contact">Ask about your framework</TextLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* readiness features */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="Compliance automation, minus the spreadsheet era"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {readiness.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 90}>
                <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="font-mono text-sm text-accent-hi">0{i + 1}</span>
                  <h3 className="mt-3 font-semibold tracking-tight text-fg">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <DisclaimerNote className="mt-10 max-w-3xl">
              This page ships with placeholder framework copy. Before publishing,
              confirm each claim against your actual product capabilities and only
              reference certifications your organization holds.
            </DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Walk into your next audit already prepared"
        body="See how continuous control monitoring turns audit season into a routine export."
      />
    </>
  );
}

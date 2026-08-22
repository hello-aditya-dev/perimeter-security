import type { Metadata } from "next";
import { CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Chip, Container, DisclaimerNote } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CASE_STUDY_DISCLAIMER, caseStudies } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Example security outcomes: vulnerability backlog reduction, audit readiness acceleration and cloud misconfiguration remediation.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Before and after, in numbers."
        lede="Three worked examples of what consolidated detection and automated remediation look like for real programs."
      />

      <section className="border-b border-line">
        <Container className="pt-10">
          <Reveal>
            <DisclaimerNote>{CASE_STUDY_DISCLAIMER}</DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-surface/40">
        <Container className="space-y-20 py-16 md:py-20">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.company}>
              <article
                id={cs.company.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                {/* header */}
                <div className="flex flex-wrap items-center gap-3">
                  <Chip tone="accent">{cs.industry}</Chip>
                  <Chip>{cs.size}</Chip>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    Example 0{i + 1}
                  </span>
                </div>
                <h2 className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                  {cs.headline}
                </h2>

                {/* metrics panel — the centerpiece */}
                <dl className="mt-8 grid overflow-hidden rounded-2xl border border-line bg-bg sm:grid-cols-3">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="border-b border-line p-6 sm:border-b-0 sm:border-r last:sm:border-r-0">
                      <dt className="text-xs leading-snug text-faint">{m.label}</dt>
                      <dd className="mt-4 space-y-1.5">
                        <p className="flex items-baseline gap-2 font-mono text-xl text-critical line-through decoration-critical/40">
                          {m.before}
                        </p>
                        <p aria-hidden className="font-mono text-[11px] text-faint">↓</p>
                        <p className="font-mono text-2xl font-semibold text-ok">{m.after}</p>
                        <Chip tone="accent" className="mt-2">
                          {m.delta}
                        </Chip>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 font-mono text-[11px] text-faint">
                  Metrics above are illustrative sample data.
                </p>

                {/* narrative */}
                <div className="mt-10 grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-accent-hi">
                      The challenge
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{cs.challenge}</p>
                    <figure className="mt-8 rounded-2xl border border-line bg-surface p-6">
                      <Quote className="h-5 w-5 text-accent-hi" />
                      <blockquote className="mt-3 leading-relaxed text-fg">
                        “{cs.quote}”
                      </blockquote>
                      <figcaption className="mt-4 text-sm text-faint">
                        <span className="font-semibold text-muted">{cs.name}</span> ·{" "}
                        {cs.role}, {cs.company} (illustrative)
                      </figcaption>
                    </figure>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-accent-hi">
                      The approach
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {cs.approach.map((step, si) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok/80" />
                          <span className="text-sm leading-relaxed text-muted">
                            <span className="mr-1.5 font-mono text-xs text-faint">
                              {String(si + 1).padStart(2, "0")}
                            </span>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Your before/after story starts here"
        body="Run a baseline assessment and see your own numbers move within the first month."
      />
    </>
  );
}

import type { Metadata } from "next";
import { Hexagon, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Container, DisclaimerNote, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { testimonials, TESTIMONIAL_DISCLAIMER, trustedBy } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Security teams at fintech, healthcare and retail companies run their detection, cloud security and compliance programs on Perimeter.",
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Security teams that stopped drowning in alerts."
        lede="From seed-stage fintechs to global retailers, teams consolidate on Perimeter when alert volume outgrows headcount."
      />

      {/* logo grid */}
      <section className="border-b border-line">
        <Container className="py-14 md:py-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustedBy.map((name, i) => (
              <Reveal key={name} delay={i * 50}>
                <div className="flex items-center justify-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-6 text-sm font-semibold tracking-tight text-faint transition-colors hover:text-muted">
                  <Hexagon className="h-3.5 w-3.5" aria-hidden />
                  {name}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-center font-mono text-[11px] text-faint">
            Illustrative logos — replace with real customers (with permission).
          </p>
        </Container>
      </section>

      {/* stats */}
      <section className="border-b border-line bg-surface/40">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {[
            { v: <CountUp end={1200} suffix="+" />, l: "Security teams onboarded*" },
            { v: <CountUp end={38} suffix="B" />, l: "Events analyzed daily*" },
            { v: <CountUp end={97} suffix="%" />, l: "Renewal rate*" },
            { v: <CountUp end={14} suffix=" days" />, l: "Median pilot-to-production*" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="font-mono text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{s.v}</p>
                <p className="mt-2 text-sm text-muted">{s.l}</p>
              </div>
            </Reveal>
          ))}
          <p className="col-span-2 font-mono text-[11px] text-faint lg:col-span-4">
            *Sample figures for demonstration.
          </p>
        </Container>
      </section>

      {/* testimonials */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What practitioners say"
              description="Placeholder quotes demonstrating layout — swap in genuine customer quotes with written approval."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="card-hover flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                  <Quote className="h-5 w-5 text-accent-hi" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-fg">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="text-sm font-semibold text-fg">{t.name}</p>
                    <p className="mt-0.5 text-xs text-faint">
                      {t.role}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <DisclaimerNote className="mx-auto mt-10 max-w-3xl">
              {TESTIMONIAL_DISCLAIMER}
            </DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Join the teams already ahead of the threat"
        body="Start a two-week pilot with your own telemetry — measurable results before you renew anything."
      />
    </>
  );
}

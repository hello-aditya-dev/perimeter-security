import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Architecture } from "@/components/architecture";
import {
  Chip,
  Container,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { getIcon } from "@/components/icons";
import {
  detectionSources,
  deploymentOptions,
  platformFeatures,
  techSpecs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "One unified security operations platform: streaming detection engine, cloud posture management, response automation and an open API.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One platform for prevention, detection and response."
        lede="Perimeter replaces a sprawl of consoles with a single data plane — every signal correlated, every action auditable, every control provable."
      />

      {/* feature grid */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Capabilities"
              title="Built like infrastructure, not like software"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f, i) => {
              const Icon = getIcon(f.icon);
              return (
                <Reveal key={f.title} delay={(i % 3) * 90}>
                  <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold tracking-tight text-fg">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* architecture */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Security architecture"
              title="Five layers, one detection fabric"
              description="Select any layer to inspect its controls — the same interactive model we use in solution design workshops."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <Architecture />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* data sources */}
      <section className="border-b border-line">
        <Container className="grid items-start gap-12 py-16 md:py-20 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Telemetry"
              title="Detection starts with better data"
              description="Perimeter ingests high-fidelity signals from across your estate — normalized into one schema, retained and queryable."
            />
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {detectionSources.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 rounded-lg border border-line bg-bg px-4 py-3 text-sm text-muted"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok/80" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Deployment"
              title="Runs where your risk policy requires"
            />
            <div className="mt-8 space-y-4">
              {deploymentOptions.map((d) => (
                <div key={d.title} className="card-hover rounded-2xl border border-line bg-bg p-6">
                  <Chip tone="accent">{d.tag}</Chip>
                  <h3 className="mt-3 font-semibold tracking-tight text-fg">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* tech specs */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Specifications" title="Technical reference" />
          </Reveal>
          <Reveal delay={100}>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-line bg-bg">
              {techSpecs.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    i !== techSpecs.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <dt className="text-sm text-muted">{row.k}</dt>
                  <dd className="font-mono text-sm text-fg">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-mono text-[11px] text-faint">
              Sample values for demonstration — replace with your product&rsquo;s real specifications.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="See the platform on your own telemetry"
        body="A guided pilot connects your cloud accounts and endpoints, and shows real findings within the first hour."
      />
    </>
  );
}

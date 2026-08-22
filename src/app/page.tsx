import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ThreatMonitor } from "@/components/threat-monitor";
import { Pipeline } from "@/components/pipeline";
import { Architecture } from "@/components/architecture";
import { TrustedBy } from "@/components/trusted-by";
import { CountUp } from "@/components/count-up";
import { CtaBand, TextLink } from "@/components/cta-band";
import {
  ButtonLink,
  Chip,
  Container,
  DisclaimerNote,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { getIcon } from "@/components/icons";
import { capabilityCards, frameworks, pipelineStages } from "@/lib/content";
import { caseStudies, posts } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

const stats = [
  { value: <CountUp end={4} prefix="<" suffix=" min" />, label: "Median time to detect" },
  { value: <CountUp end={92} suffix="%" />, label: "Alert noise reduction" },
  { value: <CountUp end={99.99} decimals={2} suffix="%" />, label: "Platform uptime SLA" },
  { value: <CountUp end={60} suffix="+" />, label: "Native integrations" },
];

export default function HomePage() {
  const latestPosts = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------ hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-grid mask-hero absolute inset-0" />
        <div aria-hidden className="absolute -top-40 left-1/4 h-96 w-96 glow-accent" />
        <div aria-hidden className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-info/[0.07] blur-3xl" />

        <Container className="relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1fr_520px]">
          <Reveal>
            <Chip tone="accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-hi animate-pulse-dot" />
              Unified security operations platform
            </Chip>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
              Security that stays{" "}
              <span className="text-gradient">ahead of the threat.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              Perimeter unifies threat detection, cloud security, identity and
              DevSecOps in one platform. Protect every workload. Detect every
              threat. Prove compliance continuously.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Request a demo <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/platform" variant="secondary" size="lg">
                Explore the platform
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-faint">
              {["Live in under a day", "Agentless cloud onboarding", "Open API & webhooks"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-ok/70" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <ThreatMonitor />
          </Reveal>
        </Container>
      </section>

      <TrustedBy />

      {/* ------------------------------------------------ stats band */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center lg:text-left">
                <p className="font-mono text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
          <p className="col-span-2 mt-2 text-center font-mono text-[11px] text-faint lg:col-span-4 lg:text-left">
            Sample metrics for demonstration — replace with verified figures.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------ threat intelligence cards */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Threat intelligence"
              title="Every attack surface, one detection fabric"
              description="Five deeply integrated disciplines replace a sprawl of point tools — sharing telemetry, context and response actions."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((card, i) => {
              const Icon = getIcon(card.icon);
              return (
                <Reveal key={card.title} delay={(i % 3) * 100}>
                  <Link
                    href={card.href}
                    className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-bg p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi transition-colors group-hover:border-accent/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                    <ul className="mt-4 space-y-1.5">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13px] text-faint">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
            <Reveal delay={200}>
              <Link
                href="/solutions"
                className="card-hover group flex h-full min-h-[220px] flex-col items-start justify-between rounded-2xl border border-dashed border-line-strong p-6"
              >
                <Eyebrow>Explore</Eyebrow>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    All solution areas
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    See how detection, cloud, identity and pipeline security fit together.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    View solutions
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ devsecops pipeline */}
      <section id="pipeline" className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="absolute right-0 top-0 h-72 w-72 glow-accent" />
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="DevSecOps"
              title="Security wired into every stage of delivery"
              description={`From first commit to production monitoring — ${pipelineStages.length} stages, one policy engine, zero drama.`}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12">
              <Pipeline />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ architecture */}
      <section id="architecture" className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Security architecture"
              title="Defense in depth you can actually see"
              description="Select a layer to inspect the controls that protect it. Every layer feeds signals back into the same detection engine."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12">
              <Architecture />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ compliance preview */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Compliance"
              title="Audit-ready evidence, collected continuously"
              description="Map controls to the frameworks your customers ask about — and stop screenshotting dashboards before audits."
            />
          </Reveal>
          <Reveal delay={100}>
            <DisclaimerNote className="mx-auto mt-10 max-w-3xl">
              {`Template notice: compliance badges are placeholders. Only display certifications you actually hold.`}
            </DisclaimerNote>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {frameworks.map((f, i) => (
              <Reveal key={f.abbr} delay={i * 70}>
                <Link
                  href="/compliance"
                  className="card-hover flex h-full flex-col rounded-xl border border-line bg-bg p-5"
                >
                  <span className="font-mono text-xl font-semibold tracking-tight text-fg">
                    {f.abbr}
                  </span>
                  <span className="mt-1.5 text-xs leading-relaxed text-faint">{f.scope}</span>
                  <span className="mt-auto pt-4 text-xs font-medium text-accent-hi">Details →</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-8 text-center">
              <TextLink href="/compliance">Explore the compliance center</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ case studies preview */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Customers"
              title="Outcomes security teams can measure"
              description="Example results showing how consolidated detection and automated remediation move the numbers that matter."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs, i) => {
              const m = cs.metrics[0];
              return (
                <Reveal key={cs.company} delay={i * 100}>
                  <Link
                    href="/case-studies"
                    className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-bg p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Chip>{cs.industry}</Chip>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                        Example
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-fg">
                      {cs.headline}
                    </h3>
                    <p className="mt-1 text-sm text-faint">{cs.company}</p>
                    <dl className="mt-6 grid grid-cols-3 items-end gap-2 border-t border-line pt-5">
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-faint">Before</dt>
                        <dd className="mt-1 font-mono text-lg text-critical">{m.before}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-faint">After</dt>
                        <dd className="mt-1 font-mono text-lg text-ok">{m.after}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-faint">Change</dt>
                        <dd className="mt-1 font-mono text-lg text-accent-hi">{m.delta}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 text-xs text-faint">{m.label}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                      Read case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 text-center font-mono text-[11px] text-faint">
            Demonstration content — companies and metrics are fictional examples.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------ blog teaser */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Resources"
              title="Field notes from the front lines"
              align="left"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-bg p-6"
                >
                  <div className="flex items-center gap-3">
                    <Chip tone="accent">{post.category}</Chip>
                    <time dateTime={post.date} className="font-mono text-[11px] text-faint">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-fg">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-faint">
            Sample articles included with the template — swap in your own content.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

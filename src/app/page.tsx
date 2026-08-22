import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ThreatMonitor } from "@/components/threat-monitor";
import { Pipeline } from "@/components/pipeline";
import { Architecture } from "@/components/architecture";
import { TrustedBy } from "@/components/trusted-by";
import { LogTicker } from "@/components/log-ticker";
import { CountUp } from "@/components/count-up";
import { UtcClock } from "@/components/utc-clock";
import { CtaBand, TextLink } from "@/components/cta-band";
import {
  ButtonLink,
  Chip,
  Container,
  DisclaimerNote,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { getIcon } from "@/components/icons";
import { capabilityCards, frameworks, pipelineStages } from "@/lib/content";
import { caseStudies, posts } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

const stats = [
  { value: <CountUp end={221} suffix="ms" />, label: "p99 alert latency" },
  { value: <CountUp end={2847} />, label: "detection rules shipped" },
  { value: <CountUp end={99.98} decimals={2} suffix="%" />, label: "measured uptime, trailing year" },
  { value: <CountUp end={42} suffix=" TB" />, label: "telemetry analyzed daily" },
];

/** asymmetric editorial section header */
function SplitHeader({
  index,
  eyebrow,
  title,
  desc,
}: {
  index: string;
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px] md:items-end">
      <SectionHeading index={index} eyebrow={eyebrow} title={title} align="left" className="max-w-2xl" />
      <p className="max-w-xs text-sm leading-relaxed text-faint md:justify-self-end">
        {desc}
      </p>
    </div>
  );
}

export default function HomePage() {
  const latestPosts = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------ hero */}
      <section className="noise relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-dots mask-hero absolute inset-0" />

        {/* radar sweep behind the headline */}
        <div aria-hidden className="pointer-events-none absolute -left-48 top-24 hidden h-[560px] w-[560px] lg:block">
          <div className="radar-sweep absolute inset-0 rounded-full opacity-50 [mask-image:radial-gradient(circle,black_35%,transparent_70%)]" />
          {[0.35, 0.55, 0.75].map((s) => (
            <span
              key={s}
              className="absolute rounded-full border border-accent/15"
              style={{ inset: `${(1 - s) * 50}%` }}
            />
          ))}
        </div>

        <Container className="relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1fr_520px]">
          <Reveal>
            {/* ops kicker */}
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
              <span className="flex items-center gap-2 text-accent-hi">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                SOC-01 // Global Ops
              </span>
              <span aria-hidden className="h-px w-10 bg-line-strong" />
              <UtcClock />
            </div>

            <h1 className="mt-7 text-balance text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4.4rem]">
              Security that stays{" "}
              <em className="font-serif font-normal italic text-accent">ahead</em>
              <br className="hidden sm:block" /> of the threat.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              Your endpoints, cloud and code already know when something is wrong.
              Perimeter is the console that connects those signals — and acts while
              the intrusion is still in motion.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Request a demo <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/platform" variant="secondary" size="lg">
                Explore the platform
              </ButtonLink>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-faint">
              {["Live in under a day", "Agentless cloud onboarding", "Open API — everything scriptable"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-ok/80" />
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

      <LogTicker />

      <TrustedBy />

      {/* ------------------------------------------------ stats band */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="border-l border-line pl-5 lg:border-l-0 lg:pl-0">
                <p className="font-mono text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
          <p className="col-span-2 mt-2 text-center font-mono text-[11px] text-faint lg:col-span-4 lg:text-left">
            Sample figures for demonstration — replace with your verified numbers.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------ 01 capabilities bento */}
      <section id="capabilities" className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="01"
              eyebrow="Coverage"
              title="Five disciplines. One signal."
              desc="Each module ships standalone strength; together they share one entity graph, one policy engine, one audit trail."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* featured: Sightline */}
            <Reveal className="sm:col-span-2">
              <Link
                href="/solutions/threat-detection"
                className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg p-7"
              >
                <div aria-hidden className="bg-dots absolute inset-0 opacity-60" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Chip tone="accent">SIGHTLINE</Chip>
                      <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">
                        Threat Detection
                      </h3>
                    </div>
                    <svg viewBox="0 0 120 44" className="h-11 w-32 shrink-0" aria-hidden>
                      <defs>
                        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0" stopColor="#59c2ff" stopOpacity=".2" />
                          <stop offset="1" stopColor="#ff8a63" />
                        </linearGradient>
                        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#ff5c33" stopOpacity=".22" />
                          <stop offset="1" stopColor="#ff5c33" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 34 L14 30 L26 33 L38 24 L52 27 L64 17 L78 21 L92 10 L106 13 L120 4 V44 H0 Z" fill="url(#sparkFill)" />
                      <path d="M0 34 L14 30 L26 33 L38 24 L52 27 L64 17 L78 21 L92 10 L106 13 L120 4" fill="none" stroke="url(#spark)" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    Behavioral EDR/XDR across endpoint, identity and cloud — mapped to
                    MITRE ATT&CK, tuned like code, tested monthly against emulation packs.
                  </p>
                  <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-3">
                    {capabilityCards[0].points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-faint">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    Open Sightline
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* remaining modules */}
            {capabilityCards.slice(1).map((card, i) => {
              const Icon = getIcon(card.icon);
              return (
                <Reveal key={card.title} delay={(i % 2) * 90}>
                  <Link
                    href={card.href}
                    className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-bg p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi transition-colors group-hover:border-accent/50">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint transition-colors group-hover:text-accent-hi">
                        {card.module}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">{card.title}</h3>
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

            <Reveal delay={180}>
              <Link
                href="/solutions"
                className="group flex h-full min-h-[220px] flex-col items-start justify-between rounded-2xl border border-dashed border-line-strong p-6 transition-colors hover:border-accent/50"
              >
                <span className="font-serif text-2xl italic text-accent">→</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    All solution areas
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    How detection, cloud, identity and pipeline security fit together.
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

      {/* ------------------------------------------------ 02 pipeline */}
      <section id="pipeline" className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="absolute right-0 top-0 h-72 w-72 glow-cool" />
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="02"
              eyebrow="DevSecOps"
              title={`Six gates between commit and cloud.`}
              desc={`${pipelineStages.length} stages, enforced identically on every repository — no tribal knowledge, no forgotten checklists.`}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12">
              <Pipeline />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ 03 architecture */}
      <section id="architecture" className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="03"
              eyebrow="Architecture"
              title="Depth, drawn to scale."
              desc="Select any layer to inspect its controls. Every layer streams signals back into the same detection fabric."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12">
              <Architecture />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ 04 compliance */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="04"
              eyebrow="Compliance"
              title="Audit week should be boring."
              desc="Controls run continuously and write their own evidence. Auditors sample live state instead of screenshot archaeology."
            />
          </Reveal>
          <Reveal delay={100}>
            <DisclaimerNote className="mt-10 max-w-3xl">
              Template notice: compliance badges are placeholders. Only display
              certifications you actually hold.
            </DisclaimerNote>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {frameworks.map((f, i) => (
              <Reveal key={f.abbr} delay={i * 70}>
                <Link
                  href="/compliance"
                  className="card-hover group flex h-full flex-col rounded-xl border border-line bg-surface p-5"
                >
                  <span className="font-serif text-2xl italic text-fg">{f.abbr}</span>
                  <span className="mt-2 text-xs leading-relaxed text-faint">{f.scope}</span>
                  <span className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-widest text-accent-hi opacity-0 transition-opacity group-hover:opacity-100">
                    Details →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-8 text-right">
              <TextLink href="/compliance">Explore the compliance center</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ 05 outcomes */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="05"
              eyebrow="Outcomes"
              title="Numbers that survived procurement."
              desc="Worked examples of consolidated detection and automated remediation moving the metrics boards actually read."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs, i) => {
              const m = cs.metrics[0];
              return (
                <Reveal key={cs.company} delay={i * 100}>
                  <Link
                    href="/case-studies"
                    className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg p-6"
                  >
                    <span
                      aria-hidden
                      className="text-outline pointer-events-none absolute -right-2 -top-5 select-none font-serif text-[7rem] italic leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative flex items-center gap-3">
                      <Chip>{cs.industry}</Chip>
                    </div>
                    <h3 className="relative mt-4 max-w-[85%] text-lg font-semibold leading-snug tracking-tight text-fg">
                      {cs.headline}
                    </h3>
                    <p className="relative mt-1 text-sm text-faint">{cs.company}</p>
                    <dl className="relative mt-6 grid grid-cols-3 items-end gap-2 border-t border-line pt-5">
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
                    <p className="relative mt-3 text-xs text-faint">{m.label}</p>
                    <span className="relative mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
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

      {/* ------------------------------------------------ 06 field notes */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Reveal>
            <SplitHeader
              index="06"
              eyebrow="Field notes"
              title="Written by practitioners, not content teams."
              desc="Detection engineering, cloud posture and compliance practice — from the people who sit on call."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="flex items-center justify-between gap-3">
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

      <CtaBand
        title="Find out what your current stack missed."
        body="A guided pilot connects your cloud accounts and endpoints — you will see real findings inside the first hour."
      />
    </>
  );
}

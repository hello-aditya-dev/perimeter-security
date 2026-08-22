import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  KeyRound,
  GitPullRequestArrow,
  Radar,
  FileCheck2,
  Server,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Chip, Container, SectionHeading, StatusDot } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How Perimeter secures its own platform: architecture practices, responsible disclosure policy, subprocessors and service status.",
};

const practices = [
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "TLS 1.2+ in transit and AES-256 at rest across all stores; keys managed in HSM-backed KMS with rotation.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    body: "SSO-enforced staff access, hardware-key MFA, quarterly access reviews and JIT production credentials.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Secure SDLC",
    body: "Mandatory review, SAST/SCA/secret scanning in CI, signed releases and annual third-party penetration tests.",
  },
  {
    icon: Radar,
    title: "24/7 monitoring",
    body: "Production telemetry is monitored around the clock with documented incident response and on-call escalation.",
  },
];

const subprocessors = [
  { name: "Cloud hosting provider", purpose: "Application & data hosting", region: "US / EU" },
  { name: "Email delivery service", purpose: "Transactional notifications", region: "US" },
  { name: "Error & performance monitoring", purpose: "Platform observability", region: "EU" },
  { name: "Payment processor", purpose: "Subscription billing", region: "US" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust Center"
        title="How we secure Perimeter itself."
        lede="Security companies get scrutinized hardest. This is our own architecture, disclosure policy and operating posture — replace every claim here with your real, audited facts."
      />

      {/* practices */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Practices" title="Engineering baseline" />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {practices.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight text-fg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* status */}
      <section id="status" className="scroll-mt-24 border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Service status" title="Live platform health" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-bg">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5">
                <StatusDot label="All systems operational" />
                <span className="font-mono text-[11px] text-faint">Sample status · wire to your status provider</span>
              </div>
              {[
                { name: "Detection pipeline", uptime: "99.99%" },
                { name: "Cloud posture API", uptime: "99.99%" },
                { name: "Console & dashboard", uptime: "100%" },
                { name: "Webhooks & exports", uptime: "99.97%" },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between border-b border-line px-6 py-4 last:border-b-0">
                  <span className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                    {s.name}
                  </span>
                  <span className="font-mono text-sm text-ok">{s.uptime} (90-day)</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* disclosure */}
      <section className="border-b border-line">
        <Container className="grid items-start gap-12 py-16 md:py-20 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Responsible disclosure"
              title="Found a vulnerability? We'd like to know."
              description="We operate a safe-harbor vulnerability disclosure program and respond to every report."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-hi" />
                Acknowledgment within one business day; triage update within five.
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-hi" />
                Severity-based remediation targets: critical 72 hours, high 7 days, medium 30 days.
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-hi" />
                No legal action for good-faith research within published scope; no automated scanning without coordination.
              </li>
            </ul>
            <a
              href={`mailto:${site.securityEmail}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line-strong bg-bg px-4 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent/50"
            >
              {site.securityEmail}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading align="left" eyebrow="Subprocessors" title="Who else touches your data" />
            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-bg">
              <div className="grid grid-cols-[1.3fr_1fr_auto] gap-4 border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-faint">
                <span>Provider</span>
                <span>Purpose</span>
                <span>Region</span>
              </div>
              {subprocessors.map((s) => (
                <div key={s.name} className="grid grid-cols-[1.3fr_1fr_auto] items-center gap-4 border-b border-line px-5 py-4 text-sm last:border-b-0">
                  <span className="text-fg">{s.name}</span>
                  <span className="text-muted">{s.purpose}</span>
                  <Chip>{s.region}</Chip>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 font-mono text-[11px] leading-relaxed text-faint">
              <Server className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Placeholder list — publish your actual subprocessors and notify customers of changes per your DPA.
            </p>
            <Link href="/legal/dpa" className="mt-6 inline-block text-sm font-medium text-accent-hi hover:text-fg">
              Read the DPA summary →
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Questions about our security posture?"
        body="Enterprise evaluations welcome: request our latest pen-test summary and architecture documentation."
        primaryLabel="Contact the security team"
      />
    </>
  );
}

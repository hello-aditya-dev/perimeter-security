import type { Metadata } from "next";
import { Braces } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { integrationCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Perimeter to your cloud providers, CI/CD pipelines, SIEM, ticketing and identity providers — plus a full API for everything else.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Plugs into the stack you already run."
        lede="Native connections for cloud, code, identity and operations tooling — and an open API for everything this page doesn't list."
      />

      {/* placeholder notice */}
      <section className="border-b border-line">
        <Container className="pt-10">
          <Reveal>
            <p className="rounded-xl border border-line bg-surface px-4 py-3 text-center font-mono text-[11px] text-faint">
              Integration names shown are generic placeholders — replace with your
              actual partner list and official logo assets.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* categories */}
      <section className="border-b border-line">
        <Container className="space-y-14 py-14 md:py-16">
          {integrationCategories.map((cat, ci) => (
            <div key={cat.name}>
              <Reveal>
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-faint">
                  {String(ci + 1).padStart(2, "0")} · {cat.name}
                </h2>
              </Reveal>
              <div className="mt-5 flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <Reveal key={item} delay={i * 40}>
                    <span className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-elevated font-mono text-[11px] font-semibold text-accent-hi">
                        {item.slice(0, 1)}
                      </span>
                      {item}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* api callout */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-hi">
                  Everything is an API
                </p>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                  If it&rsquo;s not listed, build it in an afternoon.
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  GraphQL and REST interfaces cover every object in the platform —
                  findings, controls, telemetry queries, workflows. Webhooks push
                  events out the moment they happen.
                </p>
                <ul className="mt-6 space-y-2 font-mono text-xs text-faint">
                  <li>· OpenAPI 3.1 spec published</li>
                  <li>· Typed SDKs: TypeScript, Python, Go</li>
                  <li>· Rate limits designed for CI pipelines</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line-strong bg-bg shadow-xl">
                <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-critical/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warn/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ok/60" />
                  <span className="ml-2 font-mono text-[11px] text-faint">query.gql</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-muted">
                  <code>{`query {
  findings(
    severity: [CRITICAL],
    status: OPEN,
    reachable: true
  ) {
    edges {
      node {
        title
        asset { name environment }
        exploitPath { depth entry }
        slaDueAt
      }
    }
  }
}`}</code>
                </pre>
                <div className="flex items-center gap-2 border-t border-line px-4 py-2.5 text-[11px] text-ok">
                  <Braces className="h-3.5 w-3.5" />
                  Sample response omitted — see API reference
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Don't see your stack?"
        body="Tell us what you run — most connector requests ship within a quarter."
        primaryLabel="Request an integration"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { getIcon } from "@/components/icons";
import { capabilityCards, solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solution areas for modern security teams: threat detection, cloud security, DevSecOps and compliance — unified in one platform.",
};

export default function SolutionsPage() {
  const detailSlugs = new Set<string>(solutions.map((s) => s.slug));

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for the way attacks actually happen."
        lede="Adversaries chain misconfigurations, stolen credentials and unpatched dependencies. Our solutions map to those chains — not to org charts."
      />

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-2">
            {capabilityCards.map((card, i) => {
              const Icon = getIcon(card.icon);
              const hasDetail = card.href.startsWith("/solutions/") && detailSlugs.has(card.href.split("/")[2]);
              return (
                <Reveal key={card.title} delay={(i % 2) * 90}>
                  <Link
                    href={card.href}
                    className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-elevated text-accent-hi">
                        <Icon className="h-5 w-5" />
                      </span>
                      {hasDetail ? null : (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                          Platform capability
                        </span>
                      )}
                    </div>
                    <h2 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                      {card.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted">{card.body}</p>
                    <ul className="mt-4 space-y-1.5">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-faint">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Deep dives"
              title="Go deeper on the three core disciplines"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-bg p-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-hi">
                    {s.eyebrow}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg">{s.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {s.subhead}
                  </p>
                  <dl className="mt-5 space-y-2 border-t border-line pt-4">
                    {s.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs text-faint">{stat.label}</dt>
                        <dd className="font-mono text-sm font-medium text-fg">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

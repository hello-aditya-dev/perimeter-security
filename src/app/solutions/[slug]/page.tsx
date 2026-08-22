import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Pipeline } from "@/components/pipeline";
import { ButtonLink, Chip, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { solutions } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.subhead,
  };
}

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${solution.eyebrow} — ${solution.name}`}
        title={solution.headline}
        lede={solution.subhead}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Request a demo
          </ButtonLink>
          <ButtonLink href="/platform" variant="secondary" size="lg">
            Platform overview
          </ButtonLink>
        </div>
      </PageHero>

      {/* stats */}
      <section className="border-b border-line">
        <Container className="grid gap-8 py-12 sm:grid-cols-3">
          {solution.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="border-l-2 border-accent/50 pl-5">
                <p className="font-mono text-3xl font-semibold tracking-tight text-fg">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* capabilities */}
      <section className="border-b border-line bg-surface/40">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Capabilities" title={`What ${solution.name} includes`} />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solution.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 3) * 80}>
                <div className="card-hover h-full rounded-2xl border border-line bg-bg p-6">
                  <h3 className="font-semibold tracking-tight text-fg">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* devsecops gets the interactive pipeline */}
      {slug === "devsecops" ? (
        <section className="relative overflow-hidden border-b border-line">
          <Container className="py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="The pipeline"
                title="Six stages, enforced end to end"
                description="Click through each stage to see what runs, what it catches and the gate it enforces."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12">
                <Pipeline />
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {/* deep dive sections */}
      <section className="border-b border-line">
        <Container className="space-y-16 py-16 md:py-20">
          {solution.sections.map((section, i) => (
            <Reveal key={section.title}>
              <div
                className={`grid items-start gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <Chip tone="accent">0{i + 1}</Chip>
                  <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
                </div>
                {section.bullets.length > 0 ? (
                  <ul className="space-y-3 rounded-2xl border border-line bg-surface p-6">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok/80" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

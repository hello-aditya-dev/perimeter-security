import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, DisclaimerNote } from "@/components/ui";
import { legalDocs, LEGAL_DISCLAIMER } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.intro.slice(0, 155) };
}

export default async function LegalDocPage({
  params,
}: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) notFound();

  return (
    <>
      <section className="border-b border-line bg-surface/40">
        <Container className="max-w-3xl py-14 md:py-16">
          <Link
            href="/legal"
            className="inline-flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All legal documents
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-faint">
            Last updated: {formatDate(doc.updated)} · Template placeholder
          </p>
          <p className="mt-6 leading-relaxed text-muted">{doc.intro}</p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="max-w-3xl space-y-10 py-12 md:py-14">
          <DisclaimerNote>{LEGAL_DISCLAIMER}</DisclaimerNote>

          {doc.sections.map((section) => (
            <div key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="leading-[1.85] text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

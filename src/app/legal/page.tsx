import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { legalDocs, LEGAL_DISCLAIMER } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal documents: privacy policy, terms of service, data processing addendum and acceptable use policy.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Policies and agreements."
        lede="Everything below is placeholder template text. Have qualified counsel review and replace all legal copy before publishing."
      />

      <section className="border-b border-line">
        <Container className="py-14 md:py-16">
          <Reveal>
            <p className="mb-8 rounded-xl border border-warn/25 bg-warn/[0.06] px-4 py-3 text-sm leading-relaxed text-warn/90">
              {LEGAL_DISCLAIMER}
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {legalDocs.map((doc, i) => (
              <Reveal key={doc.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/legal/${doc.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] text-faint">
                      Updated {formatDate(doc.updated)}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold tracking-tight text-fg">{doc.title}</h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {doc.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    Read document
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

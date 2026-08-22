import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Chip, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research, guidance and product notes on threat detection, cloud security, DevSecOps and compliance.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field notes from the front lines."
        lede="Detection engineering, cloud posture, pipeline security and compliance practice — written by practitioners."
      />

      <section className="border-b border-line">
        <Container className="grid gap-4 py-14 md:py-16 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-hover group flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <Chip tone="accent">{post.category}</Chip>
                  <time dateTime={post.date} className="font-mono text-[11px] text-faint">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-fg">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[11px] text-faint">
                    {post.readingTime} min read
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-hi transition-colors group-hover:text-fg">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-b border-line bg-surface/40">
        <Container className="py-8">
          <p className="text-center font-mono text-[11px] text-faint">
            All articles are sample content included with this template.
          </p>
        </Container>
      </section>
    </>
  );
}

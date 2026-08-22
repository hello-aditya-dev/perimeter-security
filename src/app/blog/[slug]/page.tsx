import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Chip, Container } from "@/components/ui";
import { posts } from "@/lib/stories";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const post = posts[index];
  const si = sorted.findIndex((p) => p.slug === slug);
  const prev = sorted[si + 1] ?? null;
  const next = sorted[si - 1] ?? null;

  return (
    <>
      <article className="relative overflow-hidden">
        <div aria-hidden className="bg-grid mask-hero absolute inset-0" />
        <div aria-hidden className="absolute -top-32 left-1/2 h-64 w-[560px] -translate-x-1/2 glow-accent" />

        <Container className="relative max-w-3xl py-16 md:py-20">
          {/* header */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All articles
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Chip tone="accent">{post.category}</Chip>
            <time dateTime={post.date} className="font-mono text-xs text-faint">
              {formatDate(post.date)}
            </time>
            <span className="font-mono text-xs text-faint">{post.readingTime} min read</span>
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 border-l-2 border-accent/50 pl-4 text-lg leading-relaxed text-muted">
            {post.excerpt}
          </p>

          {/* body */}
          <div className="mt-12 space-y-6">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="pt-6 text-xl font-semibold tracking-tight text-fg sm:text-2xl"
                    >
                      {block.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={i} className="space-y-2.5 rounded-2xl border border-line bg-surface p-6">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <figure key={i} className="rounded-2xl border border-line bg-surface p-6">
                      <Quote className="h-5 w-5 text-accent-hi" />
                      <blockquote className="mt-3 text-base font-medium italic leading-relaxed text-fg">
                        “{block.text}”
                      </blockquote>
                    </figure>
                  );
                default:
                  return (
                    <p key={i} className="leading-[1.85] text-muted">
                      {block.text}
                    </p>
                  );
              }
            })}
          </div>

          <div className="mt-12 rounded-xl border border-line bg-bg px-4 py-3 font-mono text-[11px] leading-relaxed text-faint">
            This is a sample article shipped with the template. Replace or remove
            before publishing — opinions and figures are illustrative.
          </div>

          {/* prev / next */}
          <nav className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2" aria-label="More articles">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-faint">
                  <ArrowLeft className="h-3 w-3" /> Older
                </span>
                <span className="mt-2 block text-sm font-medium leading-snug text-muted transition-colors group-hover:text-fg">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group rounded-xl border border-line bg-surface p-5 text-right transition-colors hover:border-accent/40 sm:col-start-2"
              >
                <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] uppercase tracking-widest text-faint">
                  Newer <ArrowRight className="h-3 w-3" />
                </span>
                <span className="mt-2 block text-sm font-medium leading-snug text-muted transition-colors group-hover:text-fg">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        </Container>
      </article>
    </>
  );
}

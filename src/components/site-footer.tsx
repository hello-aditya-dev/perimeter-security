import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container, StatusDot } from "@/components/ui";
import { footerColumns, site } from "@/lib/site";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.69 1.25 3.34.96.11-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.68 5.38-5.24 5.67.41.35.78 1.05.78 2.13v3.16c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The unified platform for threat detection, cloud security and
              DevSecOps — protect every workload, detect every threat.
            </p>
            <div className="mt-5">
              <StatusDot label="All systems operational" />
            </div>
            <div className="mt-5 flex items-center gap-4 text-faint">
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-fg">
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="X / Twitter" className="transition-colors hover:text-fg">
                <XIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-fg">
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-line bg-bg/40 px-4 py-3 text-xs leading-relaxed text-faint">
          Template demonstration content: this site is a website template for
          security companies. All companies, metrics, testimonials,
          certifications and articles shown are illustrative placeholders —
          replace them with verified information before publishing.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-faint">
            <Link href="/legal/privacy" className="hover:text-fg">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-fg">Terms</Link>
            <Link href="/legal/dpa" className="hover:text-fg">DPA</Link>
            <Link href="/legal/acceptable-use" className="hover:text-fg">Acceptable Use</Link>
            <span aria-hidden>·</span>
            <span>{site.location}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { Mail, MapPin, ShieldAlert, Timer } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo of the Perimeter security operations platform or talk to a security engineer.",
};

const channels = [
  {
    icon: Mail,
    title: "Sales & demos",
    value: site.email,
    note: "Response within one business day",
  },
  {
    icon: ShieldAlert,
    title: "Security & disclosure",
    value: site.securityEmail,
    note: "Monitored 24/7 by the security team",
  },
  {
    icon: MapPin,
    title: "Offices",
    value: site.location,
    note: "Remote-first across three regions",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to people who run SOCs."
        lede="No SDR gauntlet — your request goes straight to a security engineer who can answer architecture and pricing questions on the first call."
      />

      <section className="border-b border-line">
        <Container className="grid items-start gap-10 py-14 md:py-16 lg:grid-cols-[1fr_380px]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-4 lg:sticky lg:top-24">
              {channels.map((c) => (
                <div key={c.title} className="card-hover rounded-2xl border border-line bg-surface p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong bg-elevated text-accent-hi">
                    <c.icon className="h-4.5 w-4.5" />
                  </span>
                  <h2 className="mt-3 text-sm font-semibold text-fg">{c.title}</h2>
                  <p className="mt-1 break-all font-mono text-[13px] text-accent-hi">{c.value}</p>
                  <p className="mt-1 text-xs text-faint">{c.note}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-line-strong p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                  <Timer className="h-4 w-4 text-ok" /> What happens next
                </p>
                <ol className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
                  <li>01 · Intro call scoped to your environment (30 min)</li>
                  <li>02 · Read-only pilot against your cloud estate</li>
                  <li>03 · Findings walkthrough with your engineers</li>
                </ol>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

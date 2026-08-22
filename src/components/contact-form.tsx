"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui";

const inputClass =
  "w-full rounded-lg border border-line-strong bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // TEMPLATE NOTE: wire this handler to your form backend
    // (e.g. POST to a route handler, Formspree, HubSpot, Marketo...).
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-ok/30 bg-ok/[0.05] p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ok/40 bg-ok/10 text-ok">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-xl font-semibold tracking-tight text-fg">
          Request received.
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          A security engineer will reach out within one business day. In the
          meantime, explore the platform overview or browse case studies.
        </p>
        <div className="mt-6 flex gap-3">
          <ButtonLink href="/platform" variant="secondary" size="md">
            Platform overview
          </ButtonLink>
          <ButtonLink href="/case-studies" variant="ghost" size="md">
            Case studies <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-7 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Full name</span>
          <input required type="text" name="name" placeholder="Alex Chen" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Work email</span>
          <input required type="email" name="email" placeholder="alex@company.com" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Company</span>
          <input required type="text" name="company" placeholder="Company, Inc." className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Company size</span>
          <select name="size" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>1–50</option>
            <option>51–200</option>
            <option>201–1000</option>
            <option>1000+</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-muted">What are you interested in?</span>
        <select name="interest" className={inputClass} defaultValue="Product demo">
          <option>Product demo</option>
          <option>Pilot program</option>
          <option>Pricing & packaging</option>
          <option>Security review / questionnaire</option>
          <option>Partnership</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-muted">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your environment, team size and timelines…"
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-white shadow-[0_8px_30px_-10px_rgb(77_127_255/0.55)] transition-all hover:bg-accent-hi disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Request a demo"}
        {!sending && <ArrowRight className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-faint">
        Template form — submissions are simulated client-side. Connect this form to
        your CRM, marketing automation or an API route before going live.
      </p>
    </form>
  );
}

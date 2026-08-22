"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* THREAT MONITOR — animated security operations panel                 */
/* Renders deterministically on the server; all motion starts in      */
/* useEffect so hydration never mismatches.                           */
/* ------------------------------------------------------------------ */

type Severity = "critical" | "high" | "medium" | "low" | "info";

type ThreatEvent = {
  sev: Severity;
  action: string;
  message: string;
  meta: string;
};

const EVENT_POOL: ThreatEvent[] = [
  { sev: "critical", action: "Isolated", message: "Ransomware behavior contained on finance workstation", meta: "EDR · finance-wks-04" },
  { sev: "high", action: "Blocked", message: "Credential stuffing attempt against auth endpoint", meta: "WAF · 312 attempts" },
  { sev: "high", action: "Challenged", message: "Impossible travel sign-in required step-up MFA", meta: "Identity · Okta" },
  { sev: "critical", action: "Blocked", message: "Exploit attempt against internet-facing edge service", meta: "WAF · CVE-2026-1337" },
  { sev: "medium", action: "Quarantined", message: "Malicious attachment removed before delivery", meta: "Email gateway" },
  { sev: "high", action: "Rotated", message: "Leaked API key detected and rotated automatically", meta: "Secrets · GitHub" },
  { sev: "medium", action: "Remediated", message: "Public object-store exposure closed in eu-west-1", meta: "Cloud · AWS" },
  { sev: "high", action: "Severed", message: "Lateral movement path between segments cut off", meta: "Network · prod segment" },
  { sev: "medium", action: "Flagged", message: "Kubernetes RBAC anomaly on service account", meta: "Cluster · prod-eu" },
  { sev: "low", action: "Logged", message: "New device enrolled outside standard window", meta: "Device trust" },
  { sev: "info", action: "Verified", message: "Nightly backup integrity checks passed", meta: "Resilience" },
  { sev: "info", action: "Resolved", message: "Vulnerability SLA met across 42 repositories", meta: "DevSecOps" },
];

const SEV_STYLE: Record<Severity, { chip: string; label: string }> = {
  critical: { chip: "border-critical/40 bg-critical/10 text-critical", label: "CRIT" },
  high: { chip: "border-warn/40 bg-warn/10 text-warn", label: "HIGH" },
  medium: { chip: "border-info/40 bg-info/10 text-info", label: "MED" },
  low: { chip: "border-line-strong bg-white/[0.04] text-muted", label: "LOW" },
  info: { chip: "border-ok/30 bg-ok/10 text-ok", label: "OK" },
};

const TARGETS = { detected: 2418, critical: 12, resolved: 2406 };
const SEED_FEED = [EVENT_POOL[0], EVENT_POOL[1], EVENT_POOL[2]];

type FeedItem = ThreatEvent & { id: number; time: string };

function utcClock(d: Date) {
  return d.toISOString().slice(11, 19);
}

export function ThreatMonitor() {
  const [detected, setDetected] = useState(TARGETS.detected - 38);
  const [critical, setCritical] = useState(TARGETS.critical);
  const [resolved, setResolved] = useState(TARGETS.resolved - 26);
  const [clock, setClock] = useState<string | null>(null);
  const [feed, setFeed] = useState<FeedItem[]>(
    SEED_FEED.map((e, i) => ({ ...e, id: i, time: "--:--:--" })),
  );

  const nextIdRef = useRef(SEED_FEED.length);
  const poolIdxRef = useRef(3);

  useEffect(() => {
    /* clock (deferred so no synchronous setState inside the effect) */
    const clockStart = setTimeout(() => setClock(utcClock(new Date())), 0);
    const clockTimer = setInterval(() => setClock(utcClock(new Date())), 1000);

    /* counter intro animation */
    const t0 = performance.now();
    let raf = 0;
    const animate = (t: number) => {
      const p = Math.min((t - t0) / 1600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDetected(Math.round((TARGETS.detected - 38) + 38 * eased));
      setResolved(Math.round((TARGETS.resolved - 26) + 26 * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    /* live feed */
    const pushEvent = () => {
      const ev = EVENT_POOL[poolIdxRef.current % EVENT_POOL.length];
      poolIdxRef.current += 1;
      const item: FeedItem = {
        ...ev,
        id: nextIdRef.current++,
        time: utcClock(new Date()),
      };
      setFeed((f) => [item, ...f].slice(0, 4));
      setDetected((d) => d + 1 + Math.floor(Math.random() * 2));
      if (ev.sev === "info") {
        setResolved((r) => r + 1 + Math.floor(Math.random() * 2));
        setCritical((c) => Math.max(9, c - 1));
      } else if (ev.sev === "critical") {
        setCritical((c) => Math.min(14, c + 1));
      }
    };

    const firstTick = setTimeout(() => {
      pushEvent();
      setInterval(pushEvent, 2600);
    }, 1400);

    return () => {
      clearTimeout(firstTick);
      clearTimeout(clockStart);
      clearInterval(clockTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      {/* glow behind card */}
      <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-accent/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/50">
        {/* scanline */}
        <div
          aria-hidden
          className="scanline pointer-events-none absolute inset-x-0 z-20 h-px bg-gradient-to-r from-transparent via-accent-hi/70 to-transparent"
        />

        {/* header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-fg">
              Threat Monitor
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-critical/40 bg-critical/10 px-2 py-0.5 font-mono text-[10px] tracking-widest text-critical">
              <span className="h-1.5 w-1.5 rounded-full bg-critical animate-pulse-dot" />
              LIVE
            </span>
          </div>
          <span className="font-mono text-xs tabular-nums text-faint">
            {clock ?? "--:--:--"} UTC
          </span>
        </div>

        {/* stats */}
        <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
          <Stat label="Threats detected" value={detected.toLocaleString("en-US")} tone="fg" />
          <Stat label="Critical" value={critical.toLocaleString("en-US")} tone="critical" />
          <Stat label="Resolved" value={resolved.toLocaleString("en-US")} tone="ok" />
        </div>

        {/* live feed */}
        <div className="min-h-[248px] px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Live event stream
          </p>
          <ul className="mt-3 space-y-2">
            {feed.map((e) => (
              <li
                key={e.id}
                className="feed-item flex items-start justify-between gap-3 rounded-lg border border-line bg-bg/60 px-3 py-2.5"
              >
                <div className="flex min-w-0 items-start gap-2.5">
                  <span
                    className={cn(
                      "mt-0.5 inline-block shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] leading-none",
                      SEV_STYLE[e.sev].chip,
                    )}
                  >
                    {SEV_STYLE[e.sev].label}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] leading-snug text-fg">
                      <span className="font-medium">{e.action}</span>{" "}
                      <span className="text-muted">— {e.message}</span>
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[11px] text-faint">{e.meta}</p>
                  </div>
                </div>
                <span className="shrink-0 pt-0.5 font-mono text-[11px] tabular-nums text-faint">
                  {e.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* status footer */}
        <div className="flex items-center justify-between border-t border-line bg-bg/40 px-5 py-3">
          <span className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full rounded-full bg-ok opacity-60 animate-pulse-dot" />
              <span className="relative h-2 w-2 rounded-full bg-ok" />
            </span>
            System status: All systems operational
          </span>
          <span className="hidden font-mono text-[11px] text-faint sm:block">
            demo data — replace with your telemetry
          </span>
        </div>
      </div>

      {/* caption */}
      <p className="mt-3 text-center font-mono text-[11px] text-faint">
        Illustrative dashboard — wire it to your own product screenshots or live metrics.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "fg" | "critical" | "ok";
}) {
  return (
    <div className="px-4 py-4 sm:px-5">
      <p className="text-[11px] uppercase tracking-wide text-faint">{label}</p>
      <p
        className={cn(
          "mt-1 font-mono text-xl font-semibold tabular-nums sm:text-2xl",
          tone === "fg" && "text-fg",
          tone === "critical" && "text-critical",
          tone === "ok" && "text-ok",
        )}
      >
        {value}
      </p>
    </div>
  );
}

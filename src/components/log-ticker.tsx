/**
 * LogTicker — full-width marquee of raw security log lines.
 * Purely decorative "ops floor" texture. Sample data only.
 */

const LOG_LINES = [
  { t: "03:41:07Z", tag: "DENY", tone: "text-critical", msg: "tcp 185.220.101.44:443 → auth.prod", rule: "PRM-0417" },
  { t: "03:41:09Z", tag: "QUARANTINE", tone: "text-warn", msg: "host fin-wks-04 · ransomware.canary", rule: "SL-2210" },
  { t: "03:41:12Z", tag: "STEPUP", tone: "text-info", msg: "impossible travel · j.alvarez@corp", rule: "GK-0093" },
  { t: "03:41:15Z", tag: "PATCH", tone: "text-ok", msg: "payments-sdk 2.3.1 → 2.3.4 auto-PR #4812", rule: "FD-1187" },
  { t: "03:41:18Z", tag: "REVOKE", tone: "text-warn", msg: "leaked key gh-org/deploy · rotated", rule: "PRM-0433" },
  { t: "03:41:21Z", tag: "ALLOW", tone: "text-faint", msg: "waf tuned · false-positive budget reset", rule: "SL-2205" },
  { t: "03:41:24Z", tag: "ISOLATE", tone: "text-critical", msg: "lateral path severed · segment prod-eu", rule: "SL-2244" },
  { t: "03:41:27Z", tag: "SBOM", tone: "text-ok", msg: "signed cyclonedx · build 88412", rule: "FD-1201" },
];

export function LogTicker() {
  const row = [...LOG_LINES, ...LOG_LINES];
  return (
    <div className="marquee marquee-fast relative overflow-hidden border-y border-line bg-surface/70">
      <div className="marquee-track flex w-max items-center gap-0 py-2.5">
        {row.map((line, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 border-r border-line px-6 font-mono text-[11px] whitespace-nowrap"
          >
            <span className="text-faint">{line.t}</span>
            <span className={`font-semibold ${line.tone}`}>{line.tag}</span>
            <span className="text-muted">{line.msg}</span>
            <span className="text-accent-hi">{line.rule}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

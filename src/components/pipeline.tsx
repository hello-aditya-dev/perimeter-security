"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  ScanSearch,
  BrainCircuit,
  Wrench,
  Rocket,
  Activity,
  CheckCircle2,
  TerminalSquare,
  GaugeCircle,
  type LucideIcon,
} from "lucide-react";
import { pipelineStages } from "@/lib/content";
import { cn } from "@/lib/utils";

const STAGE_ICONS: Record<string, LucideIcon> = {
  code: Code2,
  scan: ScanSearch,
  analyze: BrainCircuit,
  fix: Wrench,
  deploy: Rocket,
  monitor: Activity,
};

export function Pipeline({ autoPlay = true }: { autoPlay?: boolean }) {
  const [active, setActive] = useState(0);
  const interactedRef = useRef(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      if (!interactedRef.current) {
        setActive((a) => (a + 1) % pipelineStages.length);
      }
    }, 3600);
    return () => clearInterval(timer);
  }, [autoPlay]);

  function select(i: number) {
    interactedRef.current = true;
    setActive(i);
  }

  const stage = pipelineStages[active];
  const StageIcon = STAGE_ICONS[stage.id] ?? Code2;
  const progress = (active / (pipelineStages.length - 1)) * 100;

  return (
    <div>
      {/* stage rail */}
      <ol className="relative flex items-start justify-between gap-1">
        {/* connector */}
        <div aria-hidden className="absolute left-[7%] right-[7%] top-6 hidden h-px bg-line-strong sm:block" />
        <div
          aria-hidden
          className="absolute left-[7%] top-6 hidden h-px bg-accent transition-all duration-500 sm:block"
          style={{ width: `calc(${progress}% * 0.86)` }}
        />

        {pipelineStages.map((s, i) => {
          const Icon = STAGE_ICONS[s.id] ?? Code2;
          const isActive = i === active;
          return (
            <li key={s.id} className="relative z-10 flex-1">
              <button
                type="button"
                onClick={() => select(i)}
                aria-pressed={isActive}
                className="group flex w-full flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300",
                    isActive
                      ? "border-accent bg-accent/15 text-accent-hi shadow-[0_0_24px_rgb(77_127_255/0.35)]"
                      : i < active
                        ? "border-ok/50 bg-ok/10 text-ok"
                        : "border-line-strong bg-surface text-faint group-hover:border-accent/40 group-hover:text-muted",
                  )}
                >
                  {i < active ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? "text-fg" : "text-faint group-hover:text-muted",
                  )}
                >
                  {s.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* detail panel */}
      <div
        key={stage.id}
        className="feed-item mt-8 grid gap-6 rounded-2xl border border-line bg-surface p-6 md:grid-cols-[1fr_320px] md:p-8"
      >
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent-hi">
            <StageIcon className="h-4 w-4" />
            Stage {String(active + 1).padStart(2, "0")} — {stage.label}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-fg">{stage.blurb}</p>
          <ul className="mt-4 space-y-2">
            {stage.details.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ok/80" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-xl border border-line bg-bg/60 p-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Sample finding
            </p>
            <p className="mt-2 flex items-start gap-2 font-mono text-[12.5px] leading-relaxed text-warn">
              <TerminalSquare className="mt-0.5 h-4 w-4 shrink-0" />
              {stage.finding}
            </p>
          </div>
          <div className="border-t border-line pt-3">
            <p className="flex items-center gap-2 font-mono text-xs text-ok">
              <GaugeCircle className="h-4 w-4" />
              {stage.gate}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-faint sm:text-left">
        Click any stage to explore · sample values shown are illustrative
      </p>
    </div>
  );
}

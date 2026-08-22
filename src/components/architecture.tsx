"use client";

import { useState } from "react";
import { ShieldCheck, Cloud, Flame, Fingerprint, AppWindow, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { architectureLayers } from "@/lib/content";
import { cn } from "@/lib/utils";

const LAYER_ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  firewall: Flame,
  identity: Fingerprint,
  application: AppWindow,
  data: Database,
};

export function Architecture() {
  const [selected, setSelected] = useState(0);
  const layer = architectureLayers[selected];
  const LayerIcon = LAYER_ICONS[layer.id] ?? ShieldCheck;

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[380px_1fr]">
      {/* layer stack */}
      <div className="relative">
        {/* packet dots travelling down the stack */}
        <div aria-hidden className="pointer-events-none absolute inset-y-4 left-1/2 hidden w-px lg:hidden" />
        <ol className="relative space-y-2.5">
          {architectureLayers.map((l, i) => {
            const Icon = LAYER_ICONS[l.id] ?? ShieldCheck;
            const isActive = i === selected;
            return (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200",
                    isActive
                      ? "border-accent/60 bg-accent/[0.08] shadow-[0_0_30px_-10px_rgb(77_127_255/0.45)]"
                      : "border-line bg-surface hover:border-line-strong",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      isActive
                        ? "border-accent/50 bg-accent/15 text-accent-hi"
                        : "border-line-strong bg-bg text-faint group-hover:text-muted",
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-semibold transition-colors",
                        isActive ? "text-fg" : "text-muted group-hover:text-fg",
                      )}
                    >
                      {l.name}
                    </span>
                    <span className="block truncate text-xs text-faint">{l.tagline}</span>
                  </span>
                  {/* layer index */}
                  <span className="ml-auto font-mono text-[11px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>

                {/* connector between layers */}
                {i < architectureLayers.length - 1 ? (
                  <div aria-hidden className="relative mx-auto h-2.5 w-px bg-line-strong">
                    {[0, 1].map((k) => (
                      <span
                        key={k}
                        className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-hi shadow-[0_0_8px_rgb(122_165_255/0.9)]"
                        style={{
                          animation: `packet-y 2.4s linear ${k * 1.2}s infinite`,
                          top: "-2px",
                          ["--packet-distance" as string]: "calc(100% + 4px)",
                        }}
                      />
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      {/* detail panel */}
      <div
        key={layer.id}
        className="feed-item relative overflow-hidden rounded-2xl border border-line bg-surface p-7 md:p-9"
      >
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent-hi">
            <LayerIcon className="h-4 w-4" />
            Layer {String(selected + 1).padStart(2, "0")} / {architectureLayers.length} — {layer.name}
          </p>
          <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-fg">
            {layer.tagline}
          </h3>
          <ul className="mt-6 space-y-3">
            {layer.controls.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-lg border border-line bg-bg/60 px-4 py-3 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-ok" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
            Traffic and telemetry flow through every layer — each one contributes signals
            to the unified detection fabric.
          </p>
        </div>
      </div>
    </div>
  );
}

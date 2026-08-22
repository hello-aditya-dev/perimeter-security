import {
  Radar,
  Cloud,
  Fingerprint,
  Laptop,
  Code2,
  Database,
  Zap,
  Workflow,
  Plug,
  ShieldCheck,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  radar: Radar,
  cloud: Cloud,
  fingerprint: Fingerprint,
  laptop: Laptop,
  code: Code2,
  database: Database,
  zap: Zap,
  workflow: Workflow,
  plug: Plug,
  "shield-check": ShieldCheck,
  "scroll-text": ScrollText,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? ShieldCheck;
}

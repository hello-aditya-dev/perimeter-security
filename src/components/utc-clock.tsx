"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function utcClock(d: Date) {
  return d.toISOString().slice(11, 19);
}

/** Live UTC clock. Renders a placeholder on the server, ticks on the client. */
export function UtcClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const start = setTimeout(() => setTime(utcClock(new Date())), 0);
    const timer = setInterval(() => setTime(utcClock(new Date())), 1000);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, []);

  return (
    <span className={cn("font-mono tabular-nums", className)}>
      {time ?? "--:--:--"}
      <span className="ml-1.5 text-faint">UTC</span>
    </span>
  );
}

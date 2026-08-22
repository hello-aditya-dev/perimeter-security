"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink, StatusDot } from "@/components/ui";
import { UtcClock } from "@/components/utc-clock";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function closeMenus() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const isActive = (href?: string) =>
    href === "/" ? false : !!href && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors",
                      isActive(item.href)
                        ? "text-fg"
                        : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openMenu === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full mt-2 w-[340px] rounded-xl border border-line-strong bg-elevated p-2 shadow-2xl shadow-black/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenus}
                          className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                        >
                          <span>
                            <span className="block text-sm font-medium text-fg">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-faint">
                              {child.desc}
                            </span>
                          </span>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent-hi group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] text-faint">
            v2.4.1
          </span>
          <UtcClock className="text-xs text-muted" />
          <Link
            href="/security#status"
            className="transition-opacity hover:opacity-80"
          >
            <StatusDot label="All systems operational" />
          </Link>
          <Link href="/contact" className="text-sm text-muted transition-colors hover:text-fg">
            Contact
          </Link>
          <ButtonLink href="/contact" size="md">
            Request a demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:text-fg lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      {mobileOpen ? (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-5 pb-6 pt-3">
            {nav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-fg">
                      {item.label}
                      <ChevronDown className="h-4 w-4 text-faint transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="ml-3 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenus}
                        className="block rounded-lg px-3 py-2 text-sm text-muted hover:text-fg"
                      >
                        {child.label}
                      </Link>
                    ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href ?? "/"}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-fg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between gap-3 pt-4">
              <StatusDot label="All systems operational" />
              <ButtonLink href="/contact" size="md">
                Request a demo
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

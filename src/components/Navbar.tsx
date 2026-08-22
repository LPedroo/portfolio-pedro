"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Background" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/90 backdrop-blur dark:border-white/10 dark:bg-ink/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/favicon.png"
            alt="Pedro Ferreira"
            className="h-8 w-8 dark:invert"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight">PEDRO</span>
            <span className="text-[10px] font-medium tracking-widest text-ink/50 dark:text-cream/50">
              FERREIRA
            </span>
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${active
                    ? "border-b-2 border-accent text-ink dark:text-cream"
                    : "text-ink/50 hover:text-ink dark:text-cream/50 dark:hover:text-cream"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/cv/CV-Pedro-Ferreira.pdf"
            download
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-accent dark:border-white/15 sm:flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Baixar CV
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

type Slide = { image: string; title: string };

export default function WorkCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  function go(delta: number) {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }

  const active = slides[index];

  return (
    <div className="mt-8 max-w-xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="section-label">Trabalhos</span>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition hover:border-accent dark:border-white/15"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition hover:border-accent dark:border-white/15"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-line dark:border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={active.image} alt={active.title} className="aspect-[16/10] w-full object-cover object-top" />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-line dark:bg-white/10">
          <div
            className="h-full bg-accent transition-all"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs text-ink/50 dark:text-cream/50">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">{active.title}</p>
    </div>
  );
}

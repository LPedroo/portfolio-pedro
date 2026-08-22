"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = [
  { key: "all", label: "Todos" },
  { key: "product", label: "Produtos" },
] as const;

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4 dark:border-white/10">
        <span className="text-sm text-ink/50 dark:text-cream/50">{visible.length} projetos</span>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === f.key
                  ? "border-accent bg-accent text-white"
                  : "border-line text-ink/60 hover:border-accent dark:border-white/15 dark:text-cream/60"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-line dark:border-white/10"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-line/60 dark:bg-white/5">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-ink/40 dark:text-cream/40">
                  Screenshot em breve
                </div>
              )}
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">
                  {project.company} · {project.role}
                </p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-ink/40 dark:text-cream/40">
                {project.year}
              </span>
            </div>
            {(project.repo || project.site) && (
              <div className="flex gap-4 border-t border-line px-5 py-3 text-sm dark:border-white/10">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink/70 hover:text-accent dark:text-cream/70"
                  >
                    Repositório
                  </a>
                )}
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink/70 hover:text-accent dark:text-cream/70"
                  >
                    Site
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

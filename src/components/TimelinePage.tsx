"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/experience";
import { IconClock, IconPin, iconFor } from "@/components/icons";
import WorkCarousel from "@/components/WorkCarousel";
import SeletoArchitecture from "@/components/SeletoArchitecture";

const COMPANY_LABEL_OVERRIDES: Record<string, string> = {
  "Seleto Store": "SELETO",
  "iK3 Engenharia": "IK3",
  "VRL Technology": "VRL",
  "Faro Beach Club": "FARO",
};

function companyInitials(company: string) {
  if (COMPANY_LABEL_OVERRIDES[company]) return COMPANY_LABEL_OVERRIDES[company];
  const words = company.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TimelinePage() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.round((doc.scrollTop / scrollable) * 100)) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollTo(index: number) {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-6">
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 flex-col justify-between py-10 lg:flex">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="section-label">Trajetória Profissional</span>
            <span className="text-xs font-semibold text-ink/50 dark:text-cream/50">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <ol className="relative border-l border-line pl-5 dark:border-white/10">
            {experiences.map((exp, i) => (
              <li key={exp.id} className="mb-6 last:mb-0">
                <button
                  onClick={() => scrollTo(i)}
                  className="group flex items-start gap-3 text-left"
                >
                  <span
                    className={`absolute -left-[5px] mt-1 h-2.5 w-2.5 rounded-full border ${i === activeIndex
                        ? "border-accent bg-accent"
                        : i < activeIndex
                          ? "border-accent bg-accent/40"
                          : "border-ink/30 bg-cream dark:border-cream/30 dark:bg-ink"
                      }`}
                  />
                  <span>
                    <span
                      className={`block text-xs ${i === activeIndex ? "text-accent" : "text-ink/40 dark:text-cream/40"
                        }`}
                    >
                      {exp.year}
                    </span>
                    <span
                      className={`block text-sm font-medium ${i === activeIndex
                          ? "text-ink dark:text-cream"
                          : "text-ink/50 group-hover:text-ink dark:text-cream/50 dark:group-hover:text-cream"
                        }`}
                    >
                      {exp.company}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-ink/50 dark:text-cream/50">
            <span className="section-label">Progresso</span>
            <span className="font-semibold text-accent">{progress}%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-line dark:bg-white/10">
            <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </aside>

      <div className="flex-1 py-10 lg:py-24">
        <div className="sticky top-16 z-30 -mx-6 mb-6 bg-cream/95 px-6 py-4 backdrop-blur dark:bg-ink/95 lg:hidden">
          <span className="section-label mb-3 block">Trajetória Profissional</span>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-line dark:bg-white/10" />
            <div className="relative flex justify-between">
              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => scrollTo(i)}
                  className="flex flex-col items-center gap-2 px-1"
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 bg-cream transition dark:bg-ink ${i === activeIndex
                        ? "border-accent bg-accent ring-4 ring-accent/20"
                        : i < activeIndex
                          ? "border-accent bg-accent"
                          : "border-ink/30 dark:border-cream/30"
                      }`}
                  />
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wide ${i === activeIndex ? "text-accent" : "text-ink/40 dark:text-cream/40"
                      }`}
                  >
                    {companyInitials(exp.company)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {experiences.map((exp, i) => (
          <section
            key={exp.id}
            id={exp.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="flex min-h-[85vh] flex-col justify-center border-b border-line py-16 last:border-none dark:border-white/10"
          >
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <IconClock />
              {exp.period}
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{exp.company}</h2>
            <p className="mt-2 text-lg text-ink/70 dark:text-cream/70">{exp.role}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/50 dark:text-cream/50">
              {exp.location.map((loc) => (
                <span key={loc} className="flex items-center gap-1.5">
                  <IconPin />
                  {loc}
                </span>
              ))}
            </div>

            <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/80 dark:text-cream/80">
              {exp.summary.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {exp.architecture === "seleto" && <SeletoArchitecture />}

            {exp.work && exp.work.length > 0 && <WorkCarousel slides={exp.work} />}

            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {exp.skillGroups.map((group) => {
                const Icon = iconFor(group.icon);
                return (
                  <div key={group.label}>
                    <div className="mb-3 flex items-center gap-2 section-label">
                      <Icon />
                      {group.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="tag-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

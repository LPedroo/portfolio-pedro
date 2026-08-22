import TimelinePage from "@/components/TimelinePage";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight">
              Desenvolvedor Full Stack - Pleno
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 dark:text-cream/70">
              Atuação consolidada como referência técnica em projetos PJ e freelance, unindo
              Front-End e Back-End de ponta a ponta com React, Next.js, TypeScript e Node.js.
              Rio de Janeiro, RJ.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/cv/CV-Pedro-Ferreira.pdf"
                download
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Baixar currículo
              </a>
              <a
                href="mailto:pedroferreira0212@gmail.com"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:border-accent dark:border-white/15"
              >
                pedroferreira0212@gmail.com
              </a>
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/profile.jpg"
            alt="Pedro Ferreira"
            className="h-32 w-32 shrink-0 rounded-full border border-line object-cover dark:border-white/15 sm:h-40 sm:w-40"
          />
        </div>
      </section>

      <TimelinePage />
    </>
  );
}

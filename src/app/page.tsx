import TimelinePage from "@/components/TimelinePage";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Pedro Lucas Ferreira · Rio de Janeiro, RJ</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Full Stack Developer
            </h1>
            <p className="mt-3 text-base font-medium text-accent sm:text-lg">
              Software Engineering · System Architecture · Cloud &amp; DevOps
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 dark:text-cream/70">
              Construo sistemas corporativos e aplicações web de ponta a ponta: APIs REST,
              modelagem de bancos de dados, regras de negócio, integrações entre sistemas,
              arquitetura e implantação em produção.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60 dark:text-cream/60">
              Java, Spring Boot, Node.js, Go, Python, React e Next.js, com mensageria em RabbitMQ,
              PostgreSQL, Docker e infraestrutura AWS. Destaques: um sistema de Ordem de Serviço em
              Java/Spring Boot usado por mais de 100 usuários e a arquitetura de um ecossistema
              integrado de e-commerce, ERP e automação operacional.
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
              <a
                href="https://linkedin.com/in/pedro-lucas-ferreira-7a4a97260"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-ink/70 transition hover:text-accent dark:text-cream/70"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/LPedroo"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-ink/70 transition hover:text-accent dark:text-cream/70"
              >
                GitHub ↗
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

import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <span className="section-label">Portfolio / Projetos Selecionados</span>
      <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Trabalho que conecta o sistema inteiro.
        </h1>
        <p className="max-w-sm text-ink/70 dark:text-cream/70">
          Sistemas corporativos, APIs, integrações e aplicações web construídos de ponta a
          ponta — da arquitetura e do backend à interface e ao deploy em produção.
        </p>
      </div>

      <PortfolioGrid />
    </section>
  );
}

import PortfolioGrid from "@/components/PortfolioGrid";
import SeletoArchitecture from "@/components/SeletoArchitecture";

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <span className="section-label">Portfólio / Projetos Selecionados</span>
      <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Trabalho que conecta o sistema inteiro.
        </h1>
        <p className="max-w-sm text-ink/70 dark:text-cream/70">
          Sistemas corporativos, APIs, integrações e aplicações web construídos de ponta a
          ponta — da arquitetura e do backend à interface e ao deploy em produção.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="max-w-md">
          <span className="section-label">Em destaque · Seleto Store</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ecossistema de e-commerce, ERP e automação
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
            Arquitetura projetada do zero: uma API central em Node.js integra e-commerce, ERP e bots, e o
            processamento de pedidos e estoque é assíncrono, via RabbitMQ e um consumidor em Go. Ambientes
            DEV, STG e PROD isolados e deploy automático pelo Azure DevOps.
          </p>
        </div>
        <SeletoArchitecture />
      </div>

      <PortfolioGrid />
    </section>
  );
}

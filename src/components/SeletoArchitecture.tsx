// Diagrama da arquitetura da Seleto Store, montado com base no que está descrito no currículo:
// canais -> API central (Node.js) -> RabbitMQ -> consumidor (Go) -> PostgreSQL, com deploy via Azure DevOps.

function Node({
  title,
  detail,
  tech,
  strong = false,
}: {
  title: string;
  detail?: string;
  tech?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 ${
        strong
          ? "border-accent/60 bg-accent/[0.06] dark:bg-accent/10"
          : "border-line bg-white/60 dark:border-white/10 dark:bg-white/[0.03]"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-ink dark:text-cream">{title}</span>
        {tech && <span className="shrink-0 text-xs font-semibold text-accent">{tech}</span>}
      </div>
      {detail && <p className="mt-1 text-xs leading-relaxed text-ink/60 dark:text-cream/60">{detail}</p>}
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 py-1.5 pl-6" aria-hidden="true">
      <svg width="12" height="28" viewBox="0 0 12 28" className="shrink-0 text-accent">
        <path d="M6 0v24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1.5 19.5 6 25l4.5-5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-wider text-ink/50 dark:text-cream/50">
        {label}
      </span>
    </div>
  );
}

export default function SeletoArchitecture() {
  return (
    <figure className="mt-10 max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="section-label">Arquitetura do Ecossistema</span>
        <span className="hidden text-xs text-ink/40 dark:text-cream/40 sm:inline">visão simplificada</span>
      </div>

      <div className="grid gap-6 rounded-2xl border border-line p-5 dark:border-white/10 sm:p-6 md:grid-cols-[1fr_15rem]">
        {/* Fluxo de dados */}
        <div>
          <div className="flex flex-wrap gap-2">
            {["E-commerce", "ERP", "Bots (Python)"].map((c) => (
              <div
                key={c}
                className="flex-1 whitespace-nowrap rounded-lg border border-line px-3 py-2 text-center text-xs font-semibold text-ink/80 dark:border-white/10 dark:text-cream/80"
              >
                {c}
              </div>
            ))}
          </div>
          <Arrow label="REST" />
          <Node
            strong
            title="API central"
            tech="Node.js"
            detail="Alimenta e integra e-commerce, ERP e bots."
          />
          <Arrow label="publica pedidos e estoque" />
          <Node title="Fila de mensagens" tech="RabbitMQ" detail="Processamento assíncrono de pedidos e movimentações de estoque." />
          <Arrow label="consome" />
          <Node title="Consumidor" tech="Go" detail="Persiste os dados no banco." />
          <Arrow label="persiste" />
          <Node title="Banco de dados" tech="PostgreSQL" detail="Ambientes DEV, STG e PROD isolados por schemas." />
        </div>

        {/* Entrega e infraestrutura */}
        <div className="flex flex-col gap-3 border-t border-line pt-5 dark:border-white/10 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <span className="section-label">Deploy & Infra</span>
          <Node title="CI/CD" tech="Azure DevOps" detail="Repositórios e pipelines com deploy automático." />
          <Node
            title="VPS Linux"
            tech="Docker"
            detail="API, consumidor Go, RabbitMQ, PostgreSQL e chat de atendimento em containers."
          />
          <Node title="Front-ends" tech="Vercel" detail="Deploy automático das interfaces." />
          <div className="mt-auto rounded-xl bg-accent/[0.06] px-4 py-3 text-xs leading-relaxed text-ink/70 dark:bg-accent/10 dark:text-cream/70">
            <strong className="text-ink dark:text-cream">Resultado:</strong> bot, chat e ERP integrados elevaram
            as vendas em 25% e levaram a 90% de acerto no atendimento.
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Canais (e-commerce, ERP e bots) chamam a API central em Node.js, que publica pedidos e movimentações de
        estoque no RabbitMQ; um consumidor em Go persiste os dados no PostgreSQL. Deploy via Azure DevOps para VPS
        Linux com Docker e Vercel.
      </figcaption>
    </figure>
  );
}

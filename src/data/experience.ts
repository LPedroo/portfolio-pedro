export type SkillGroup = {
  label: string;
  icon: "leadership" | "frontend" | "backend" | "cloud" | "ai";
  skills: string[];
};

export type Experience = {
  id: string;
  year: string;
  company: string;
  role: string;
  period: string;
  location: string[];
  summary: string[];
  highlights?: string[];
  skillGroups: SkillGroup[];
  work?: { image: string; title: string }[];
  link?: string;
  architecture?: "seleto";
};

// Pra cada XP, me manda as techs que voce usou nela que eu atualizo o skillGroups.
// Projetos freelance entram como experiencia normal (role: "Freelancer"), um por empresa/cliente, com a data que voce informar.
export const experiences: Experience[] = [
  {
    id: "seleto-store",
    year: "2026",
    company: "Seleto Store",
    role: "Desenvolvedor Full Stack e Arquiteto de Software",
    period: "Maio 2026 – Atual",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Responsável pela arquitetura e por todo o ecossistema tecnológico da empresa, com atuação autônoma do levantamento de necessidades ao deploy e à sustentação em produção.",
      "Projetei do zero a API central em Node.js que alimenta e integra e-commerce, ERP e bots, e implementei com RabbitMQ o processamento assíncrono de pedidos e movimentações de estoque: a API publica na fila e um consumidor em Go persiste os dados no PostgreSQL.",
      "Desenvolvi do zero o e-commerce, o ERP e um sistema de chat online para atendimento, além de bots em Python para atendimento ao cliente (com encaminhamento à loja da última compra) e para sincronização de estoque entre ERP e e-commerce via API.",
      "Estruturei os ambientes DEV, STG e PROD, com isolamento de dados por schemas no PostgreSQL, e os pipelines de CI/CD no Azure DevOps, com deploy automático do backend em VPS Linux (containers Docker) e dos front-ends na Vercel.",
      "A integração entre bot, chat e ERP elevou as vendas em 25% e levou a 90% de acerto no atendimento, eliminando contatos de clientes sem resposta.",
    ],
    skillGroups: [
      {
        label: "Arquitetura & Produto",
        icon: "leadership",
        skills: ["Arquitetura de Software", "E-commerce", "ERP", "Ambientes DEV/STG/PROD", "Atuação Autônoma"],
      },
      {
        label: "Backend & Integrações",
        icon: "backend",
        skills: ["Node.js", "Go", "Python", "REST APIs", "RabbitMQ", "Processamento Assíncrono"],
      },
      {
        label: "Dados & Infra",
        icon: "cloud",
        skills: ["PostgreSQL", "Docker", "Linux", "VPS", "Azure DevOps", "CI/CD", "Vercel"],
      },
      {
        label: "Automação",
        icon: "ai",
        skills: ["Bots em Python", "Chat de Atendimento", "Sincronização ERP ↔ E-commerce"],
      },
    ],
    architecture: "seleto",
    work: [
      { image: "/img/projects/seleto-analytics.png", title: "Sistema de Gestão Seleto — Performance de Vendas" },
      { image: "/img/projects/seleto-ranking.png", title: "Sistema de Gestão Seleto — Ranking de Vendedores" },
      { image: "/img/projects/seleto-vez-do-vendedor.png", title: "Sistema de Gestão Seleto — Vez do Vendedor" },
      { image: "/img/projects/seleto-trafego-pago.png", title: "Sistema de Gestão Seleto — Tráfego Pago" },
    ],
  },
  {
    id: "ik3-engenharia",
    year: "2025",
    company: "iK3 Engenharia",
    role: "Desenvolvedor Full Stack",
    period: "Março 2025 – Outubro 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Desenvolvi sozinho, de ponta a ponta, um sistema corporativo de Ordem de Serviço com Java e Spring Boot (API REST, do servidor à interface), utilizado por mais de 100 usuários. O sistema substituiu o controle manual por planilhas e otimizou o atendimento aos clientes e o tempo de execução dos técnicos.",
      "Arquitetei um sistema supervisório de automação predial para monitoramento em tempo real do consumo de energia, dos reservatórios de água e da climatização (HVAC) do condomínio.",
      "Reconstruí o site institucional migrando de WordPress para Next.js com CMS headless (Contentful) e Tailwind CSS, elevando o score de SEO para 100.",
      "Realizei o deploy das aplicações em containers Docker na DigitalOcean e conduzi as entregas com Scrum e Kanban, organizando backlog e sprints conforme as prioridades do negócio.",
    ],
    skillGroups: [
      {
        label: "Arquitetura & Produto",
        icon: "leadership",
        skills: ["Sistemas Corporativos", "Produto Solo", "Automação Predial", "Scrum", "Kanban"],
      },
      {
        label: "Backend",
        icon: "backend",
        skills: ["Java", "Spring Boot", "REST APIs"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Contentful (Headless CMS)"],
      },
      {
        label: "Dados & Infra",
        icon: "cloud",
        skills: ["PostgreSQL", "Docker", "DigitalOcean", "Linux", "Git"],
      },
    ],
    work: [
      { image: "/img/projects/ik3-os-dashboard.png", title: "Sistema de Ordem de Serviço" },
      { image: "/img/projects/ik3-os-relatorio.png", title: "Sistema de Ordem de Serviço" },
      { image: "/img/projects/ik3-site-1.png", title: "Site Institucional iK3" },
      { image: "/img/projects/ik3-site-2.png", title: "Site Institucional iK3" },
    ],
  },
  {
    id: "vrl-technology",
    year: "2025",
    company: "VRL Technology",
    role: "Desenvolvedor Front-End",
    period: "Janeiro 2025 – Junho 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Desenvolvimento e manutenção de aplicações para 2 clientes simultâneos, em rituais ágeis (dailies, plannings e reviews), com resolução de 100% dos bugs reportados.",
      "Atuação com infraestrutura AWS (Lambda, S3 e RDS) e containers Docker no desenvolvimento, configuração, deploy e manutenção das aplicações.",
      "Reduzi em até 30% o tempo de carregamento das páginas por meio de otimização de performance, contribuindo para um aumento reportado de 35% no lucro dos clientes atendidos.",
      "Ajudei a preparar a arquitetura para suportar mais de 100 mil visitas simultâneas, garantindo estabilidade e performance em picos de alta demanda.",
    ],
    skillGroups: [
      {
        label: "Liderança & Produto",
        icon: "leadership",
        skills: ["Technology & Product Leadership", "E-commerce", "Lottery Systems", "SaaS", "Agile", "Platforms", "High-Scale Systems", "SEO"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "SSR", "TypeScript", "JavaScript", "Tailwind", "SCSS"],
      },
      {
        label: "Backend",
        icon: "backend",
        skills: ["Event-Driven Architecture", "Node.js", "Express.js", "TypeORM", "Microservices"],
      },
      {
        label: "Cloud & Infraestrutura",
        icon: "cloud",
        skills: ["DevOps", "AWS", "AWS Lambda", "AWS S3", "AWS RDS", "AWS SQS", "AWS SNS", "MongoDB", "PostgreSQL", "Redis", "Docker", "Linux"],
      },
      {
        label: "AI & Automação",
        icon: "ai",
        skills: ["AI", "ChatGPT", "OpenAI Codex", "Gemini", "Claude", "Cursor", "GitHub Copilot", "LLM", "AI Agents", "Prompt Engineering"],
      },
    ],
    work: [
      { image: "/img/projects/vrl-promotz-1.png", title: "Promotz" },
      { image: "/img/projects/vrl-promotz-2.png", title: "Promotz" },
      { image: "/img/projects/vrl-promotz-3.png", title: "Promotz" },
      { image: "/img/projects/vrl-promotz-4.png", title: "Promotz" },
      { image: "/img/projects/vrl-promotz-5.png", title: "Promotz" },
    ],
  },
  {
    id: "faro-beach-club",
    year: "2024",
    company: "Faro Beach Club",
    role: "Desenvolvedor Full Stack",
    period: "Junho 2024 – Janeiro 2025",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Desenvolvimento e manutenção full stack do site do Faro Beach Club, casa de eventos e shows no Leblon (RJ), incluindo ajustes de infraestrutura e nos servidores do domínio.",
      "SEO técnico e otimização para descoberta por LLMs (AEO/GEO).",
      "Apoio à gestão de CRM (HubSpot).",
    ],
    skillGroups: [
      {
        label: "Liderança & Produto",
        icon: "leadership",
        skills: ["Freelance", "Entrega Solo", "SEO", "AEO/GEO (Otimização para LLMs)"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "Tailwind CSS", "Contentful (Headless CMS)"],
      },
      {
        label: "Infra & CRM",
        icon: "cloud",
        skills: ["Servidores & Domínio", "HubSpot CRM"],
      },
    ],
    work: [
      { image: "/img/projects/faro-beach-club-home.png", title: "Faro Beach Club" },
      { image: "/img/projects/faro-beach-club-eventos.png", title: "Faro Beach Club" },
      { image: "/img/projects/faro-beach-club-estrutura.png", title: "Faro Beach Club" },
      { image: "/img/projects/faro-beach-club-shows.png", title: "Faro Beach Club" },
      { image: "/img/projects/faro-beach-club-midia.png", title: "Faro Beach Club" },
    ],
  },
  {
    id: "desbloquerio",
    year: "2023",
    company: "DesbloqueRio",
    role: "Desenvolvedor Front-End",
    period: "Setembro 2023 – Junho 2024",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Reconstruí do zero o site institucional de um studio automotivo, migrando de WordPress para Next.js e elevando o SEO em 100%.",
      "Implementei Google Pixel e Meta Pixel e apoiei a estratégia digital com anúncios segmentados; o cliente reportou aumento de 40% nas vendas após o conjunto dessas ações.",
    ],
    skillGroups: [
      {
        label: "Liderança & Produto",
        icon: "leadership",
        skills: ["Freelance", "Entrega Solo", "Migração de WordPress", "SEO"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "Tailwind CSS", "Contentful (Headless CMS)"],
      },
      {
        label: "Integrações & Analytics",
        icon: "cloud",
        skills: ["Google Pixel", "Meta Pixel", "SEO Técnico"],
      },
    ],
    work: [
      { image: "/img/projects/desbloquerio-home.png", title: "DesbloqueRio" },
      { image: "/img/projects/desbloquerio-servicos.png", title: "DesbloqueRio" },
      { image: "/img/projects/desbloquerio-blog.png", title: "DesbloqueRio" },
      { image: "/img/projects/desbloquerio-sobre.png", title: "DesbloqueRio" },
      { image: "/img/projects/desbloquerio-contato.png", title: "DesbloqueRio" },
    ],
  },
  {
    id: "ammarhes",
    year: "2023",
    company: "Ammarhes Consultoria",
    role: "Estagiário de Programação e TI",
    period: "Agosto 2023 – Setembro 2023",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Entreguei um site institucional completo durante o período de estágio.",
      "Prestei suporte técnico geral à equipe: configuração de redes, manutenção de impressoras e atendimento a usuários internos.",
    ],
    skillGroups: [
      {
        label: "Liderança & Produto",
        icon: "leadership",
        skills: ["Suporte Técnico", "Atendimento Interno"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      },
      {
        label: "Infra",
        icon: "cloud",
        skills: ["Configuração de Redes", "Manutenção de Hardware"],
      },
    ],
    work: [
      { image: "/img/projects/ammarhes-site.png", title: "Grupo Ammarhes" },
      { image: "/img/projects/ammarhes-ximed.png", title: "Ximed — Portal de Login" },
    ],
  },
];

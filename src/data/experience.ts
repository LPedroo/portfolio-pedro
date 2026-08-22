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
};

// Pra cada XP, me manda as techs que voce usou nela que eu atualizo o skillGroups.
// Projetos freelance entram como experiencia normal (role: "Freelancer"), um por empresa/cliente, com a data que voce informar.
export const experiences: Experience[] = [
  {
    id: "ik3-engenharia",
    year: "2025",
    company: "iK3 Engenharia",
    role: "Desenvolvedor Full Stack (PJ)",
    period: "Março 2025 – Outubro 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Referência técnica full stack na iK3 Engenharia, atuando do servidor à interface em produtos internos e no site institucional da empresa.",
      "Reconstruí o site institucional migrando de WordPress para Next.js com CMS headless (Contentful) e Tailwind CSS, elevando o score de SEO para 100%.",
      "Desenvolvi sozinho um sistema de Ordem de Serviço hoje utilizado por mais de 100 usuários, substituindo o controle manual por planilhas e otimizando o atendimento a clientes e o tempo de execução dos técnicos.",
      "Arquitetei um sistema supervisório de automação predial para monitoramento em tempo real de consumo de energia, reservatórios de água e climatização (HVAC).",
    ],
    skillGroups: [
      {
        label: "Liderança & Produto",
        icon: "leadership",
        skills: ["Referência Técnica", "Produto Solo", "Automação Predial", "SEO"],
      },
      {
        label: "Frontend",
        icon: "frontend",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Backend",
        icon: "backend",
        skills: ["Node.js", "Express", "Prisma ORM", "REST APIs", "PHP"],
      },
      {
        label: "Dados & Infra",
        icon: "cloud",
        skills: ["PostgreSQL", "Contentful (Headless CMS)", "Git", "Docker", "Linux"],
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
    role: "Desenvolvedor Front-End (PJ)",
    period: "Janeiro 2025 – Junho 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Atuei como referência técnica de front-end para 2 clientes simultâneos da operadora, sendo responsável pela resolução de 100% dos bugs reportados.",
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
        skills: ["DevOps", "AWS", "AWS Lambda", "AWS SQS", "AWS SNS", "AWS S3", "MongoDB", "PostgreSQL", "Redis", "Docker", "Linux"],
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
    year: "2025",
    company: "Faro Beach Club",
    role: "Freelancer",
    period: "Maio 2025 – Julho 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Criação e manutenção contínua do site do Faro Beach Club, casa de eventos e shows no Leblon frequentada por celebridades e grandes produções.",
      "Melhoria de SEO e otimização para descoberta por LLMs (AEO/GEO), além de ajustes na infraestrutura e nos servidores do domínio.",
      "Apoio com CRM HubSpot e suporte à estratégia de marketing digital do negócio.",
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
      {
        label: "Marketing Digital",
        icon: "ai",
        skills: ["Marketing Digital", "SEO"],
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
    year: "2025",
    company: "DesbloqueRio",
    role: "Freelancer",
    period: "Julho 2025 – Maio 2026",
    location: ["Rio de Janeiro, RJ – BR"],
    summary: [
      "Reconstruí do zero o site institucional de um studio automotivo (DesbloqueRio), migrando de um WordPress feito pelo próprio cliente para uma stack moderna e melhorando o SEO em 100%.",
      "Apoiei diretamente a estratégia de marketing digital: gestão do Instagram, implementação de Google Pixel e Meta Pixel, criação de anúncios segmentados e conquista do selo de verificado nas redes.",
      "Com o conjunto dessas ações, o cliente reportou um aumento de 40% nas vendas.",
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
        label: "Marketing Digital",
        icon: "ai",
        skills: ["Google Pixel", "Meta Pixel", "Anúncios Segmentados", "Gestão de Instagram", "Selo de Verificado"],
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
        skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "IA", "ChatGPT"],
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

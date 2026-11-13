export type Project = {
  id: string;
  title: string;
  company: string;
  year: string;
  role: string;
  image: string | null;
  category: "product" | "art" | "publication";
  summary: string;
  highlight?: string;
  stack: string[];
  repo?: string;
  site?: string;
};

// Troque `image: null` por um screenshot em /public/img/projects quando tiver.
export const projects: Project[] = [
  {
    id: "seleto-gestao",
    title: "Sistema de Gestão Seleto (ERP)",
    company: "Seleto Store",
    year: "2026",
    role: "Desenvolvedor Full Stack e Arquiteto de Software",
    image: "/img/projects/seleto-analytics.png",
    category: "product",
    summary:
      "ERP desenvolvido do zero para a rede de lojas: performance de vendas por loja, ranking e fila de atendimento dos vendedores e acompanhamento de tráfego pago. Integrado ao e-commerce e aos bots pela API central, com processamento assíncrono de pedidos e estoque via RabbitMQ.",
    highlight: "+25% em vendas com bot, chat e ERP integrados",
    stack: ["Node.js", "Go", "Python", "RabbitMQ", "PostgreSQL", "Docker", "Azure DevOps"],
  },
  {
    id: "ik3-os",
    title: "Sistema de Ordem de Serviço",
    company: "iK3 Engenharia",
    year: "2025",
    role: "Desenvolvedor Full Stack (solo)",
    image: "/img/projects/ik3-os-dashboard.png",
    category: "product",
    summary:
      "Sistema corporativo desenvolvido sozinho, de ponta a ponta, com Java e Spring Boot (API REST, do servidor à interface). Substituiu o controle manual por planilhas e otimizou o atendimento aos clientes e o tempo de execução dos técnicos.",
    highlight: "Mais de 100 usuários",
    stack: ["Java", "Spring Boot", "REST APIs", "Docker", "DigitalOcean"],
  },
  {
    id: "ik3-site",
    title: "Site Institucional iK3",
    company: "iK3 Engenharia",
    year: "2025",
    role: "Desenvolvedor Full Stack",
    image: "/img/projects/ik3-site-1.png",
    category: "product",
    summary:
      "Reconstrução do site institucional, migrando de WordPress para Next.js com CMS headless (Contentful) e Tailwind CSS.",
    highlight: "Score de SEO 100",
    stack: ["Next.js", "React", "Contentful", "Tailwind CSS"],
  },
  {
    id: "vrl-promotz",
    title: "Promotz",
    company: "VRL Technology",
    year: "2025",
    role: "Desenvolvedor Front-End",
    image: "/img/projects/vrl-promotz-1.png",
    category: "product",
    summary:
      "Desenvolvimento e manutenção de aplicação para cliente da VRL, com otimizações de performance e atuação no deploy e na manutenção em infraestrutura AWS com Docker.",
    highlight: "Até 30% menos tempo de carregamento",
    stack: ["Next.js", "React", "TypeScript", "AWS", "Docker"],
  },
  {
    id: "faro-beach-club",
    title: "Faro Beach Club",
    company: "Faro Beach Club",
    year: "2024",
    role: "Freelancer",
    image: "/img/projects/faro-beach-club-home.png",
    category: "product",
    summary:
      "Desenvolvimento e manutenção full stack do site da casa de eventos no Leblon (RJ), com SEO técnico, otimização para descoberta por LLMs (AEO/GEO) e ajustes na infraestrutura do domínio.",
    stack: ["Next.js", "React", "Tailwind CSS", "Contentful"],
  },
  {
    id: "desbloqueRio",
    title: "DesbloqueRio",
    company: "DesbloqueRio",
    year: "2023",
    role: "Freelancer",
    image: "/img/projects/desbloquerio-home.png",
    category: "product",
    summary:
      "Migração do site de um studio automotivo de WordPress para Next.js, com Google Pixel e Meta Pixel; o cliente reportou aumento de 40% nas vendas após o conjunto de ações.",
    highlight: "SEO elevado em 100%",
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "ammarhes-site",
    title: "Grupo Ammarhes",
    company: "Ammarhes Consultoria",
    year: "2023",
    role: "Estagiário de Programação e TI",
    image: "/img/projects/ammarhes-site.png",
    category: "product",
    summary: "Site institucional completo entregue durante o estágio.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
];

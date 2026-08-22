export type Project = {
  id: string;
  title: string;
  company: string;
  year: string;
  role: string;
  image: string | null;
  category: "product" | "art" | "publication";
  repo?: string;
  site?: string;
};

// Troque `image: null` por um screenshot em /public/img/projects quando tiver.
export const projects: Project[] = [
  {
    id: "ik3-os",
    title: "Sistema de Ordem de Serviço",
    company: "iK3 Engenharia",
    year: "2025",
    role: "Desenvolvedor Full Stack (solo)",
    image: "/img/projects/ik3-os-dashboard.png",
    category: "product",
  },
  {
    id: "ik3-site",
    title: "Site Institucional iK3",
    company: "iK3 Engenharia",
    year: "2025",
    role: "Desenvolvedor Full Stack",
    image: "/img/projects/ik3-site-1.png",
    category: "product",
  },
  {
    id: "vrl-promotz",
    title: "Promotz",
    company: "VRL Technology",
    year: "2025",
    role: "Desenvolvedor Front-End",
    image: "/img/projects/vrl-promotz-1.png",
    category: "product",
  },
  {
    id: "faro-beach-club",
    title: "Faro Beach Club",
    company: "Faro Beach Club",
    year: "2025",
    role: "Freelancer",
    image: "/img/projects/faro-beach-club-home.png",
    category: "product",
  },
  {
    id: "desbloqueRio",
    title: "DesbloqueRio",
    company: "DesbloqueRio",
    year: "2025",
    role: "Freelancer",
    image: "/img/projects/desbloquerio-home.png",
    category: "product",
  },
  {
    id: "ammarhes-site",
    title: "Grupo Ammarhes",
    company: "Ammarhes Consultoria",
    year: "2023",
    role: "Estagiário de Programação e TI",
    image: "/img/projects/ammarhes-site.png",
    category: "product",
  },
];

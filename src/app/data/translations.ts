export type Lang = 'pt' | 'en';

export interface Translations {
  brand_name: string;
  nav_projects: string;
  nav_trajectory: string;
  nav_certs: string;
  nav_cta: string;
  theme_label: string;
  lang_label: string;

  hero_eyebrow: string;
  hero_line1: string;
  hero_line2: string;
  hero_highlight: string;
  hero_line3: string;
  hero_byline_before: string;
  hero_byline_after: string;
  hero_lede: string;
  cta_projects: string;
  cta_contact: string;
  stat_java: string;
  stat_go: string;
  stat_loc: string;

  proj_eyebrow: string;
  proj_title: string;
  proj_all: string;
  status_done: string;
  status_wip: string;
  link_code: string;
  link_open: string;
  proj1_desc: string;
  proj2_desc: string;
  proj3_desc: string;
  proj4_desc: string;

  traj_eyebrow: string;
  traj_title: string;
  traj_edu_head: string;
  traj_exp_head: string;

  certs_eyebrow: string;
  certs_title: string;
  soon: string;

  contact_avail: string;
  contact_title: string;
  contact_cta: string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  pt: {
    brand_name: 'Raí Levi',
    nav_projects: 'Projetos',
    nav_trajectory: 'Trajetória',
    nav_certs: 'Certificações',
    nav_cta: 'Falar comigo ↗',
    theme_label: 'Alternar tema',
    lang_label: 'Switch language',

    hero_eyebrow: 'disponível para projetos',
    hero_line1: 'BACKEND',
    hero_line2: 'ENGINEER',
    hero_highlight: 'JAVA & GO',
    hero_line3: 'SEM ATALHO.',
    hero_byline_before: 'criado por ',
    hero_byline_after: ' · Fortaleza, BR',
    hero_lede:
      'Construo serviços e APIs de backend, principalmente em Java e Go. Gosto das partes que a maioria pula — deploy e observabilidade, o que mantém um sistema vivo depois da demo. Ultimamente venho combinando isso com fluxos assistidos por IA para ir mais rápido sem cortar caminho.',
    cta_projects: 'GitHub',
    cta_contact: 'LinkedIn',
    stat_java: 'stack principal',
    stat_go: 'apis rest',
    stat_loc: 'fortaleza, br',

    proj_eyebrow: 'projetos',
    proj_title: 'Projetos Destaque',
    proj_all: 'Ver todos ↗',
    status_done: 'concluído',
    status_wip: 'em desenvolvimento',
    link_code: 'ver código →',
    link_open: 'abrir projeto →',
    proj1_desc:
      'API de detecção de fraude construída para a Rinha de Backend, uma competição brasileira de backend. Compara transações de cartão contra 100 mil registros de referência usando busca por similaridade vetorial, sob limites rígidos de CPU e memória.',
    proj2_desc:
      'Gerador de currículo ATS-friendly. Preenche um template LaTeX a partir de dados estruturados e compila para PDF. Backend em Go, frontend estático.',
    proj3_desc: 'API REST para gestão de estoque e inventário.',
    proj4_desc:
      'Serviço encurtador de URLs, aceito como solução da comunidade no repositório de desafios técnicos do Backend Brasil.',

    traj_eyebrow: 'trajetória',
    traj_title: 'Trajetória',
    traj_edu_head: 'formação acadêmica',
    traj_exp_head: 'experiência profissional',

    certs_eyebrow: 'certificações',
    certs_title: 'Certificações',
    soon: 'em breve',

    contact_avail: 'aberto a projetos e freelas',
    contact_title: 'Vamos construir algo juntos?',
    contact_cta: 'Backend, deploy e monitoramento — sem enrolação.',
  },
  en: {
    brand_name: 'Raí Levi',
    nav_projects: 'Projects',
    nav_trajectory: 'Trajectory',
    nav_certs: 'Certifications',
    nav_cta: 'Get in touch ↗',
    theme_label: 'Switch theme',
    lang_label: 'Trocar idioma',

    hero_eyebrow: 'available for projects',
    hero_line1: 'BACKEND',
    hero_line2: 'ENGINEER',
    hero_highlight: 'JAVA & GO',
    hero_line3: 'NO SHORTCUTS.',
    hero_byline_before: 'made by ',
    hero_byline_after: ' · Fortaleza, BR',
    hero_lede:
      "I build backend services and APIs, mostly in Java and Go. I like the parts most people skip — deploy and observability, the stuff that keeps a system alive after the demo. Lately I've been pairing that with AI-assisted workflows to move faster without cutting corners.",
    cta_projects: 'GitHub',
    cta_contact: 'LinkedIn',
    stat_java: 'main stack',
    stat_go: 'rest apis',
    stat_loc: 'fortaleza, br',

    proj_eyebrow: 'projects',
    proj_title: 'Featured Projects',
    proj_all: 'View all ↗',
    status_done: 'done',
    status_wip: 'in progress',
    link_code: 'view code →',
    link_open: 'open project →',
    proj1_desc:
      'Fraud-detection API built for Rinha de Backend, a Brazilian backend competition. Matches card transactions against 100k reference records using vector similarity search, under tight CPU and memory limits.',
    proj2_desc:
      'ATS-friendly resume generator. Fills a LaTeX template from structured data and compiles it to PDF. Go backend, static frontend.',
    proj3_desc: 'REST API for stock and inventory management.',
    proj4_desc:
      "URL shortener service, accepted as the community solution in Backend Brasil's technical challenges repo.",

    traj_eyebrow: 'trajectory',
    traj_title: 'Trajectory',
    traj_edu_head: 'academic background',
    traj_exp_head: 'professional experience',

    certs_eyebrow: 'certifications',
    certs_title: 'Certifications',
    soon: 'coming soon',

    contact_avail: 'open to projects and freelance work',
    contact_title: "Let's build something together?",
    contact_cta: 'Backend, deploy and monitoring — no fluff.',
  },
};

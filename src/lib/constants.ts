import { STUDIO } from '@/lib/studio-pio';

export const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Trabalhos', href: '/projects' },
  { label: 'Entregáveis', href: '/services' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Instagram Studio Pio',
    href: STUDIO.instagramStudio,
    icon: 'Instagram',
  },
  {
    name: 'Instagram Ryan Pio',
    href: STUDIO.instagramFounder,
    icon: '@oryanpio',
  },
] as const;

/** Substituir quando o e-mail oficial do studio estiver definido */
export const CONTACT_EMAIL = 'contato@studiopio.com.br';

/** Projetos no carrossel do hero (ordem por id no MDX) */
export const HOME_HERO_PROJECT_COUNT = 4;

/** Case studies na home — quantidade e offset após os do hero */
export const HOME_CASE_STUDY_COUNT = 3;

/** Máximo de imagens por case study na home */
export const HOME_CASE_STUDY_IMAGE_COUNT = 5;

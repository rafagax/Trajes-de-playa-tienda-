export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://bikinislborgina.vercel.app').replace(/\/+$/, '');

export const SITE_NAME = "L'Borgina";
export const DEFAULT_SOCIAL_IMAGE = '/og-lborgina.jpg';

export const CATEGORY_SEO = {
  bikinis: {
    title: "Bikinis en Maracay | Colección L'Borgina",
    description: 'Explora bikinis ajustables disponibles en Maracay, con atención por WhatsApp y envíos a toda Venezuela.',
    heading: 'Bikinis disponibles en Maracay',
  },
  tornasol: {
    title: "Bikinis tornasol en Venezuela | L'Borgina",
    description: 'Descubre bikinis tornasol con acabado iridiscente, disponibles para consultar desde Maracay y enviar a toda Venezuela.',
    heading: 'Colección de bikinis tornasol',
  },
  enterizos: {
    title: "Trajes de baño enterizos en Maracay | L'Borgina",
    description: 'Encuentra trajes de baño enterizos disponibles en Maracay, con asesoría por WhatsApp y envíos nacionales.',
    heading: 'Trajes de baño enterizos',
  },
};

export const STATIC_ROUTES = ['/', '/tienda', '/envios', '/contacto', '/blog', '/faq'];

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

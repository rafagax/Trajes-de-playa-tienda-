import { absoluteUrl, SITE_NAME } from './site';

export const STORE_ID = absoluteUrl('/#tienda');
export const WEBSITE_ID = absoluteUrl('/#sitio-web');

export const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  '@id': STORE_ID,
  name: SITE_NAME,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/icon-512.png'),
  image: absoluteUrl('/og-lborgina-v2.jpg'),
  description: 'Tienda online de bikinis, enterizos y trajes de baño para mujer con atención en Maracay y envíos a toda Venezuela.',
  telephone: '+58 422-8151085',
  priceRange: '$$',
  currenciesAccepted: ['USD', 'VES'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maracay',
    addressRegion: 'Aragua',
    addressCountry: 'VE',
  },
  areaServed: [
    { '@type': 'City', name: 'Maracay' },
    { '@type': 'Country', name: 'Venezuela' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+58 422-8151085',
    contactType: 'sales',
    areaServed: 'VE',
    availableLanguage: 'es',
  },
  sameAs: [
    'https://www.instagram.com/lborgina/',
    'https://www.tiktok.com/@l.borgina',
    'https://youtube.com/@lborgina',
    'https://www.facebook.com/share/19GGDVHqeM/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: absoluteUrl('/'),
  inLanguage: 'es-VE',
  publisher: { '@id': STORE_ID },
};

export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const createProductSchema = (product, path) => {
  const productUrl = absoluteUrl(`${path}#producto-${product.id}`);

  return {
    '@type': 'Product',
    '@id': productUrl,
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.imageWebp || product.imageUrl),
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/LimitedAvailability',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: absoluteUrl('/'),
      },
    },
  };
};

export const createProductListSchema = (products, path, name) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': absoluteUrl(`${path}#catalogo`),
  name,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: createProductSchema(product, path),
  })),
});

export const createWebPageSchema = ({ type = 'WebPage', path, name, description }) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': absoluteUrl(`${path}#pagina`),
  url: absoluteUrl(path),
  name,
  description,
  inLanguage: 'es-VE',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': STORE_ID },
});

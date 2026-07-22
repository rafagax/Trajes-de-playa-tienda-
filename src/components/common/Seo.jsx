import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { absoluteUrl, DEFAULT_SOCIAL_IMAGE, SITE_NAME } from '../../seo/site';

const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `Portada de ${SITE_NAME}`,
  type = 'website',
  noindex = false,
  structuredData,
  children,
}) => {
  const canonical = path ? absoluteUrl(path) : null;
  const socialImage = absoluteUrl(image);

  useEffect(() => {
    const upsertMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        element.dataset.seoManaged = 'true';
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const removeMeta = (attribute, key) => {
      document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
    };

    document.title = title;
    upsertMeta('name', 'description', description);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (canonical && !noindex) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.dataset.seoManaged = 'true';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    } else {
      canonicalLink?.remove();
    }

    if (noindex) upsertMeta('name', 'robots', 'noindex, nofollow');
    else removeMeta('name', 'robots');

    const openGraph = {
      'og:locale': 'es_VE',
      'og:site_name': SITE_NAME,
      'og:type': type,
      'og:title': title,
      'og:description': description,
      'og:image': socialImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': imageAlt,
    };
    if (canonical) openGraph['og:url'] = canonical;
    else removeMeta('property', 'og:url');
    Object.entries(openGraph).forEach(([key, value]) => upsertMeta('property', key, value));

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', socialImage);
  }, [canonical, description, imageAlt, noindex, socialImage, title, type]);

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && !noindex && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:locale" content="es_VE" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {structuredData && (Array.isArray(structuredData) ? structuredData : [structuredData]).map((schema, index) => (
        <script key={`json-ld-${index}`} type="application/ld+json">
          {JSON.stringify(schema).replace(/</g, '\\u003c')}
        </script>
      ))}
      {children}
    </Helmet>
  );
};

export default Seo;

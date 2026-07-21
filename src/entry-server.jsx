import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppContent } from './App';
import { products } from './data/products';
import { blogPosts } from './data/blog';
import { CATEGORY_SEO, SITE_URL, STATIC_ROUTES } from './seo/site';

export const getPrerenderRoutes = () => {
  const populatedCategories = [...new Set(products.map((product) => product.category))]
    .filter((category) => CATEGORY_SEO[category])
    .map((category) => `/tienda/${category}`);
  const articleRoutes = blogPosts.map((post) => `/blog/${post.id}`);
  return [...STATIC_ROUTES, ...populatedCategories, ...articleRoutes];
};

export const getSiteUrl = () => SITE_URL;

export const render = (url) => {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();

  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].filter(Boolean).join('\n    '),
  };
};

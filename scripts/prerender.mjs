import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { getPrerenderRoutes, getSiteUrl, render } from '../dist-server/entry-server.js';

const distDir = join(process.cwd(), 'dist');
const template = await readFile(join(distDir, 'index.html'), 'utf8');
const siteUrl = getSiteUrl();
const routes = [...new Set(getPrerenderRoutes())];

const createDocument = (url) => {
  const { html, head } = render(url);
  return template
    .replace('<!--seo-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
};

for (const route of routes) {
  const output = route === '/'
    ? join(distDir, 'index.html')
    : join(distDir, `${route.slice(1)}.html`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, createDocument(route), 'utf8');
}

await writeFile(join(distDir, '404.html'), createDocument('/__pagina-no-encontrada__'), 'utf8');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

await writeFile(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(
  join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  'utf8',
);

console.log(`Prerendered ${routes.length} indexable routes plus 404.html.`);

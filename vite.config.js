import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin para transformar el CSS bloqueante en no-bloqueante
const deferCssPlugin = () => ({
  name: 'defer-css',
  enforce: 'post',
  transformIndexHtml(html) {
    return html.replace(
      /<link([^>]*?)rel="stylesheet"([^>]*?)>/g,
      (match) => {
        const hrefMatch = match.match(/href="([^"]+)"/);
        if (!hrefMatch) return match;
        const href = hrefMatch[1];
        return `<link rel="preload" as="style" href="${href}">
  <link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="${href}"></noscript>`;
      }
    );
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), deferCssPlugin()],
})

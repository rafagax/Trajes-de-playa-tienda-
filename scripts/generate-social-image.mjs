import sharp from 'sharp';

const hero = 'src/assets/traje de baño 1.jpeg';
const logo = 'public/favicon.png';

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#1a0533" stop-opacity="0.97" />
        <stop offset="0.58" stop-color="#5b168e" stop-opacity="0.82" />
        <stop offset="1" stop-color="#c026d3" stop-opacity="0.18" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)" />
    <text x="78" y="230" fill="#f0abfc" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="4">L'BORGINA · MARACAY</text>
    <text x="76" y="315" fill="#ffffff" font-family="Arial, sans-serif" font-size="62" font-weight="700">Trajes de baño</text>
    <text x="76" y="385" fill="#ffffff" font-family="Arial, sans-serif" font-size="62" font-weight="700">para sentirte tú</text>
    <text x="78" y="450" fill="#f7eaff" font-family="Arial, sans-serif" font-size="27">Bikinis y enterizos · Envíos a toda Venezuela</text>
  </svg>
`);

await sharp(hero)
  .resize(1200, 630, { fit: 'cover', position: 'right' })
  .composite([{ input: overlay }])
  .jpeg({ quality: 88, progressive: true })
  .toFile('public/og-lborgina.jpg');

await Promise.all([
  sharp(logo).resize(32, 32).png().toFile('public/favicon-32.png'),
  sharp(logo).resize(180, 180).png().toFile('public/apple-touch-icon.png'),
  sharp(logo).resize(192, 192).png().toFile('public/icon-192.png'),
  sharp(logo).resize(512, 512).png().toFile('public/icon-512.png'),
]);

console.log('SEO images generated: Open Graph, favicon and app icons.');

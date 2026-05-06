import fs from 'fs';
let c = fs.readFileSync('src/data/products.js', 'utf8');

c = c.replace(/import (\w+) from '([^']+\.(?:jpeg|jpg|png|jfif))';/g, (match, p1, p2) => {
    let webpUrl = p2.replace(/\.(jpeg|jpg|png|jfif)$/, '.webp');
    return `import ${p1} from '${p2}';\nimport ${p1}Webp from '${webpUrl}';`;
});

c = c.replace(/imageUrl:\s*(\w+)/g, 'imageUrl: $1, imageWebp: $1Webp');

fs.writeFileSync('src/data/products.js', c);

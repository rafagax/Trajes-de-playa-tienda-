import fs from 'fs';

let c = fs.readFileSync('src/data/products.js', 'utf8');

c = c.replace(/import (\w+)Webp from '([^']+\.webp)';/g, (match, p1, p2) => {
    let webp400Url = p2.replace(/\.webp$/, '-400w.webp');
    return `${match}\nimport ${p1}Webp400 from '${webp400Url}';`;
});

c = c.replace(/imageWebp:\s*(\w+)Webp/g, 'imageWebp: $1Webp, imageWebp400: $1Webp400');

fs.writeFileSync('src/data/products.js', c);
console.log('products.js updated');

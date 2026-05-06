import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const dirRaiz = path.dirname(fileURLToPath(import.meta.url));
const CARPETA_IMAGENES = path.join(dirRaiz, 'src', 'assets');

async function generarResponsivas() {
    console.log('🔄 Generando versiones responsivas (400w) para imágenes WebP...');
    const imagenes = globSync('**/*.webp', { cwd: CARPETA_IMAGENES, absolute: true, ignore: '**/*-400w.webp' });

    for (const rutaImagen of imagenes) {
        const datosRuta = path.parse(rutaImagen);
        const rutaWebp400 = path.join(datosRuta.dir, `${datosRuta.name}-400w.webp`);

        if (!fs.existsSync(rutaWebp400)) {
            console.log(`✅ Redimensionando: ${datosRuta.base} -> ${datosRuta.name}-400w.webp`);
            // Escalar la imagen para que su ancho sea 400px preservando aspecto
            await sharp(rutaImagen)
                .resize({ width: 400 })
                .webp({ quality: 80 })
                .toFile(rutaWebp400);
        }
    }
}

generarResponsivas().catch(err => console.error("Error ejecutando script:", err));

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const dirRaiz = path.dirname(fileURLToPath(import.meta.url));
const CARPETA_IMAGENES = path.join(dirRaiz, 'src', 'assets');
const MAX_SIZE_BYTES = 200 * 1024; // 200 KB limit

async function optimizarImagenes() {
    console.log('🔄 Buscando imágenes para convertir...');
    const imagenes = globSync('**/*.{jpg,jpeg,png,jfif}', { cwd: CARPETA_IMAGENES, absolute: true });

    for (const rutaImagen of imagenes) {
        const stats = fs.statSync(rutaImagen);

        // Solo toma las que pesan menos de 200KB
        if (stats.size <= MAX_SIZE_BYTES) {
            const datosRuta = path.parse(rutaImagen);
            const rutaWebp = path.join(datosRuta.dir, `${datosRuta.name}.webp`);

            // Si el webp no existe ya, convertir:
            if (!fs.existsSync(rutaWebp)) {
                console.log(`✅ Convirtiendo: ${datosRuta.base} -> ${datosRuta.name}.webp`);
                await sharp(rutaImagen)
                    .webp({ quality: 80 })
                    .toFile(rutaWebp);
            }
        } else {
            console.log(`❌ Skipped (too large): ${path.basename(rutaImagen)} (${(stats.size / 1024).toFixed(2)} KB)`);
        }
    }
}

optimizarImagenes().catch(err => console.error("Error ejecutando script:", err));

import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import path from 'path';
import { fileURLToPath } from 'url';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src', 'musica', 'summer.mp3');
const outputPath = path.join(__dirname, 'src', 'musica', 'summer-opt.mp3');

console.log('Comenzando compresión del audio...');

ffmpeg(inputPath)
    .outputOptions([
        '-b:a 48k', // Bitrate de audio bajo
        '-map a'    // Solo audio
    ])
    .on('end', () => {
        console.log('Audio comprimido exitosamente: ' + outputPath);
    })
    .on('error', (err) => {
        console.error('Error al comprimir el audio: ', err);
    })
    .save(outputPath);

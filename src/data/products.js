/**
 * @file data\products.js
 * @description Listado de productos de L'Borgina: Bikinis, Enterizos, Talla Plus y Tornasol.
 * Todos los modelos disponibles para venta en Maracay y envíos a toda Venezuela.
 */

import traje1 from '../assets/traje de baño 1.jpeg';
import traje1Webp from '../assets/traje de baño 1.webp';
import traje1Webp400 from '../assets/traje de baño 1-400w.webp';
import traje2 from '../assets/traje de baño 2.jpeg';
import traje2Webp from '../assets/traje de baño 2.webp';
import traje2Webp400 from '../assets/traje de baño 2-400w.webp';
import traje3 from '../assets/traje de baño 3.jpg';
import traje3Webp from '../assets/traje de baño 3.webp';
import traje3Webp400 from '../assets/traje de baño 3-400w.webp';
import traje4 from '../assets/traje de baño 4.jpeg';
import traje4Webp from '../assets/traje de baño 4.webp';
import traje4Webp400 from '../assets/traje de baño 4-400w.webp';
import traje5 from '../assets/traje de baño 5.jpeg';
import traje5Webp from '../assets/traje de baño 5.webp';
import traje5Webp400 from '../assets/traje de baño 5-400w.webp';
import traje6 from '../assets/traje de baño 6.jpeg';
import traje6Webp from '../assets/traje de baño 6.webp';
import traje6Webp400 from '../assets/traje de baño 6-400w.webp';

import model1 from '../assets/modelo-1.jfif';
import model1Webp from '../assets/modelo-1.webp';
import model1Webp400 from '../assets/modelo-1-400w.webp';
import model2 from '../assets/modelo-2.jfif';
import model2Webp from '../assets/modelo-2.webp';
import model2Webp400 from '../assets/modelo-2-400w.webp';
import model3 from '../assets/modelo-3.jfif';
import model3Webp from '../assets/modelo-3.webp';
import model3Webp400 from '../assets/modelo-3-400w.webp';
import model4 from '../assets/modelo-4.jfif';
import model4Webp from '../assets/modelo-4.webp';
import model4Webp400 from '../assets/modelo-4-400w.webp';
import model5 from '../assets/modelo-5.jfif';
import model5Webp from '../assets/modelo-5.webp';
import model5Webp400 from '../assets/modelo-5-400w.webp';
import model6 from '../assets/modelo-6.jfif';
import model6Webp from '../assets/modelo-6.webp';
import model6Webp400 from '../assets/modelo-6-400w.webp';
import model7 from '../assets/modelo-7.jfif';
import model7Webp from '../assets/modelo-7.webp';
import model7Webp400 from '../assets/modelo-7-400w.webp';
import model8 from '../assets/modelo-8.jfif';
import model8Webp from '../assets/modelo-8.webp';
import model8Webp400 from '../assets/modelo-8-400w.webp';
import model9 from '../assets/modelo-9.jfif';
import model9Webp from '../assets/modelo-9.webp';
import model9Webp400 from '../assets/modelo-9-400w.webp';
import model10 from '../assets/modelo-10.jfif';
import model10Webp from '../assets/modelo-10.webp';
import model10Webp400 from '../assets/modelo-10-400w.webp';
import model11 from '../assets/modelo-11.jfif';
import model11Webp from '../assets/modelo-11.webp';
import model11Webp400 from '../assets/modelo-11-400w.webp';
import model12 from '../assets/modelo-12.jfif';
import model12Webp from '../assets/modelo-12.webp';
import model12Webp400 from '../assets/modelo-12-400w.webp';

import tornasol1 from '../assets/tornasol1.webp';
import tornasol2 from '../assets/tornasol2.webp';
import tornasol3 from '../assets/tornasol3.webp';
import tornasol4 from '../assets/tornasol4.webp';

/**
 * Array de productos con metadatos SEO.
 * @type {Array<{id: number, category: string, name: string, price: number, imageUrl: string, imageWebp: stringWebp, imageWebp400: stringWebp400, badge: string, tag: string, description: string}>}
 */
export const products = [
    { id: 1, category: 'bikinis', name: 'Bikini Morado Lavanda - "Soft Dream"', price: 15.0, imageUrl: traje1, imageWebp: traje1Webp, imageWebp400: traje1Webp400, badge: 'COLOR TENDENCIA', tag: 'Look romántico y chic', description: 'El tono Lavanda más buscado. Diseño de triángulo ajustable con frunce.' },
    { id: 2, category: 'bikinis', name: 'Bikini Verde Menta - "Electric Pop"', price: 15.0, imageUrl: traje2, imageWebp: traje2Webp, imageWebp400: traje2Webp400, badge: 'BEST SELLER', tag: 'Atrévete a brillar bajo el sol', description: 'Máxima energía. Este turquesa vibrante garantiza que todas las miradas sean para ti.' },
    { id: 3, category: 'bikinis', name: 'Bikini Negro Espalda Cruzada - "Aqua Wave"', price: 15.0, imageUrl: traje3, imageWebp: traje3Webp, imageWebp400: traje3Webp400, badge: 'EDICIÓN VERANO', tag: 'Fresco como el mar', description: 'Elegante negro con tiras cruzadas en la espalda. Diseño de tiras atadas.' },
    { id: 4, category: 'bikinis', name: 'Bikini Rosado Barbie - "The Classic"', price: 15.0, imageUrl: traje4, imageWebp: traje4Webp, imageWebp400: traje4Webp400, badge: 'FONDO DE ARMARIO', tag: 'Infaltable y combinable', description: 'Este tono rosado suave es atemporal y fácil de combinar. Corte de triángulo.' },
    { id: 5, category: 'bikinis', name: 'Bikini Rojo Borgoña - "Sunset Glow"', price: 15.0, imageUrl: traje5, imageWebp: traje5Webp, imageWebp400: traje5Webp400, badge: 'NUEVO', tag: 'Inspirado en el atardecer', description: 'Un tono rojo vino profundo y cálido. El detalle del frunce añade textura.' },
    { id: 6, category: 'enterizos', name: 'Bikini Negro Total - "Poolside Vibe"', price: 15.0, imageUrl: traje6, imageWebp: traje6Webp, imageWebp400: traje6Webp400, badge: 'EXCLUSIVO', tag: 'Perfecto para la piscina', description: 'Un negro sólido y moderno. Este bikini de tela premium mantiene su forma.' },
    { id: 7, category: 'bikinis', name: 'Bikini Modelo 01', price: 15.0, imageUrl: model1, imageWebp: model1Webp, imageWebp400: model1Webp400, badge: 'NUEVA COLECCIÓN', tag: 'Diseño Exclusivo', description: 'Calidad premium y diseños en tendencia.' },
    { id: 8, category: 'bikinis', name: 'Bikini Modelo 02', price: 15.0, imageUrl: model2, imageWebp: model2Webp, imageWebp400: model2Webp400, badge: 'TENDENCIA', tag: 'Estilo Único', description: 'Calidad premium y diseños en tendencia.' },
    { id: 9, category: 'enterizos', name: 'Bikini Modelo 03', price: 15.0, imageUrl: model3, imageWebp: model3Webp, imageWebp400: model3Webp400, badge: 'DESTACADO', tag: 'Moda Verano', description: 'Calidad premium y diseños en tendencia.' },
    { id: 13, category: 'bikinis', name: 'Bikini Modelo 07', price: 15.0, imageUrl: model7, imageWebp: model7Webp, imageWebp400: model7Webp400, badge: 'FRESH', tag: 'Confort', description: 'Calidad premium y diseños en tendencia.' },
    { id: 14, category: 'enterizos', name: 'Bikini Modelo 08', price: 15.0, imageUrl: model8, imageWebp: model8Webp, imageWebp400: model8Webp400, badge: 'SUMMER', tag: 'Playero', description: 'Calidad premium y diseños en tendencia.' },
    { id: 17, category: 'bikinis', name: 'Bikini Modelo 11', price: 15.0, imageUrl: model11, imageWebp: model11Webp, imageWebp400: model11Webp400, badge: 'TOP', tag: 'Must Have', description: 'Calidad premium y diseños en tendencia.' },
    { id: 18, category: 'enterizos', name: 'Bikini Modelo 12', price: 15.0, imageUrl: model12, imageWebp: model12Webp, imageWebp400: model12Webp400, badge: 'EXCLUSIVE', tag: 'Premium', description: 'Calidad premium y diseños en tendencia.' },
    { id: 101, category: 'tornasol', name: 'Tornasol "Aurora"', price: 15.0, imageUrl: tornasol1, imageWebp: tornasol1, badge: 'NUEVO', tag: 'Efecto Iridiscente', description: 'Un efecto iridiscente que cambia de color según el ángulo de la luz. Ideal para destacar bajo el sol.' },
    { id: 102, category: 'tornasol', name: 'Tornasol "Prisma"', price: 15.0, imageUrl: tornasol2, imageWebp: tornasol2, badge: 'EDICIÓN ESPECIAL', tag: 'Brillo Camaleónico', description: 'Destellos multicolores y un acabado perlado que te hará brillar como nunca en la playa.' },
    { id: 103, category: 'tornasol', name: 'Tornasol "Galaxia"', price: 15.0, imageUrl: tornasol3, imageWebp: tornasol3, badge: 'POPULAR', tag: 'Reflejos Mágicos', description: 'Un diseño místico con reflejos púrpuras y azulados que evocan la belleza del mar profundo.' },
    { id: 104, category: 'tornasol', name: 'Tornasol "Destello"', price: 15.0, imageUrl: tornasol4, imageWebp: tornasol4, badge: 'GLAMOUR', tag: 'Acabado Espejo', description: 'Elegancia y magnetismo con un brillo tornasol que resalta tu bronceado de forma espectacular.' },
];

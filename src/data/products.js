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
import model7 from '../assets/modelo-7.jfif';
import model7Webp from '../assets/modelo-7.webp';
import model7Webp400 from '../assets/modelo-7-400w.webp';

import tornasol1 from '../assets/tornasol1.webp';
import tornasol2 from '../assets/tornasol2.webp';
import tornasol3 from '../assets/tornasol3.webp';
import tornasol4 from '../assets/tornasol4.webp';
import tornasol5 from '../assets/tornasol5.webp';
import tornasol6 from '../assets/tornasol6.webp';

import enterizoRojo from '../assets/enterizo-rojo-premium.webp';
import enterizoRosado from '../assets/enterizo-rosado-premium- .webp';
import enterizoRosadoNuevo from '../assets/vestido_de_bano_enterizo_061183_rosado.webp';

/**
 * Array de productos con metadatos SEO.
 * @type {Array<{id: number, category: string, name: string, price: number, imageUrl: string, imageWebp: stringWebp, imageWebp400: stringWebp400, badge: string, tag: string, description: string}>}
 */
export const products = [
    { id: 1, category: 'bikinis', name: 'Bikini lavanda ajustable', price: 15.0, imageUrl: traje1, imageWebp: traje1Webp, imageWebp400: traje1Webp400, badge: 'LAVANDA', tag: 'Triángulo con frunce', description: 'Modelo de dos piezas con tiras ajustables y detalle fruncido.' },
    { id: 2, category: 'bikinis', name: 'Bikini verde menta', price: 15.0, imageUrl: traje2, imageWebp: traje2Webp, imageWebp400: traje2Webp400, badge: 'MÁS PEDIDO', tag: 'Color vibrante', description: 'Diseño de dos piezas en verde menta para playa o piscina.' },
    { id: 3, category: 'bikinis', name: 'Bikini negro de tiras cruzadas', price: 15.0, imageUrl: traje3, imageWebp: traje3Webp, imageWebp400: traje3Webp400, badge: 'NEGRO', tag: 'Espalda cruzada', description: 'Modelo negro con tiras ajustables que se cruzan en la espalda.' },
    { id: 4, category: 'bikinis', name: 'Bikini rosado clásico', price: 15.0, imageUrl: traje4, imageWebp: traje4Webp, imageWebp400: traje4Webp400, badge: 'ROSADO', tag: 'Corte triángulo', description: 'Dos piezas en rosado suave con un corte sencillo y combinable.' },
    { id: 5, category: 'bikinis', name: 'Bikini borgoña con frunce', price: 15.0, imageUrl: traje5, imageWebp: traje5Webp, imageWebp400: traje5Webp400, badge: 'NUEVO', tag: 'Tono vino', description: 'Diseño de dos piezas en color borgoña con detalle fruncido.' },
    { id: 6, category: 'bikinis', name: 'Bikini negro esencial', price: 15.0, imageUrl: traje6, imageWebp: traje6Webp, imageWebp400: traje6Webp400, badge: 'NEGRO', tag: 'Fácil de combinar', description: 'Un modelo negro de líneas limpias para usar una y otra vez.' },
    { id: 7, category: 'bikinis', name: 'Bikini modelo 01', price: 15.0, imageUrl: model1, imageWebp: model1Webp, imageWebp400: model1Webp400, badge: 'COLECCIÓN', tag: 'Consulta disponibilidad', description: 'Escríbenos para confirmar colores, medidas y disponibilidad.' },
    { id: 8, category: 'bikinis', name: 'Bikini modelo 02', price: 15.0, imageUrl: model2, imageWebp: model2Webp, imageWebp400: model2Webp400, badge: 'COLECCIÓN', tag: 'Consulta disponibilidad', description: 'Escríbenos para confirmar colores, medidas y disponibilidad.' },
    { id: 13, category: 'bikinis', name: 'Bikini Modelo 07', price: 15.0, imageUrl: model7, imageWebp: model7Webp, imageWebp400: model7Webp400, badge: 'FRESH', tag: 'Confort', description: 'Calidad premium y diseños en tendencia.' },
    { id: 202, category: 'enterizos', name: 'Enterizo Rojo Pasión', price: 20.0, imageUrl: enterizoRojo, imageWebp: enterizoRojo, imageWebp400: enterizoRojo, badge: 'BEST SELLER', tag: 'Hecho para brillar', description: 'Un rojo intenso que resalta la figura de la mujer venezolana. Diseño estilizado.' },
    { id: 203, category: 'enterizos', name: 'Enterizo Rosado Dulce', price: 20.0, imageUrl: enterizoRosado, imageWebp: enterizoRosado, imageWebp400: enterizoRosado, badge: 'NUEVA COLECCIÓN', tag: 'Femenina y tropical', description: 'Un rosado suave y coqueto. Perfecto para la playa venezolana.' },
    { id: 204, category: 'enterizos', name: 'Enterizo Rosado "Chic"', price: 20.0, imageUrl: enterizoRosadoNuevo, imageWebp: enterizoRosadoNuevo, imageWebp400: enterizoRosadoNuevo, badge: 'PREMIUM', tag: 'Elegancia en Rosado', description: 'Diseño exclusivo con un ajuste perfecto para realzar tu belleza natural.' },
    { id: 101, category: 'tornasol', name: 'Tornasol "Aurora"', price: 17.0, imageUrl: tornasol1, imageWebp: tornasol1, badge: 'NUEVO', tag: 'Efecto Iridiscente', description: 'Un efecto iridiscente que cambia de color según el ángulo de la luz. Ideal para destacar bajo el sol.' },
    { id: 102, category: 'tornasol', name: 'Tornasol "Prisma"', price: 17.0, imageUrl: tornasol2, imageWebp: tornasol2, badge: 'EDICIÓN ESPECIAL', tag: 'Brillo Camaleónico', description: 'Destellos multicolores y un acabado perlado que te hará brillar como nunca en la playa.' },
    { id: 103, category: 'tornasol', name: 'Tornasol "Galaxia"', price: 17.0, imageUrl: tornasol3, imageWebp: tornasol3, badge: 'POPULAR', tag: 'Reflejos Mágicos', description: 'Un diseño místico con reflejos púrpuras y azulados que evocan la belleza del mar profundo.' },
    { id: 104, category: 'tornasol', name: 'Tornasol "Destello"', price: 17.0, imageUrl: tornasol4, imageWebp: tornasol4, badge: 'GLAMOUR', tag: 'Acabado Espejo', description: 'Elegancia y magnetismo con un brillo tornasol que resalta tu bronceado de forma espectacular.' },
    { id: 105, category: 'tornasol', name: 'Tornasol "Místico"', price: 17.0, imageUrl: tornasol5, imageWebp: tornasol5, badge: 'NUEVO', tag: 'Destellos Violetas', description: 'Un tono profundo que reacciona a la luz con destellos violetas y rosados. Especial para atardeceres.' },
    { id: 106, category: 'tornasol', name: 'Tornasol "Solar"', price: 17.0, imageUrl: tornasol6, imageWebp: tornasol6, badge: 'TENDENCIA', tag: 'Brillo Dorado', description: 'Captura la energía del sol con este acabado tornasol que vira hacia tonos cálidos y dorados.' },
];

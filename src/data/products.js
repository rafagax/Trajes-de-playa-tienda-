/**
 * @file data\products.js
 * @description Listado de productos de L'Borgina: Bikinis, Enterizos, Talla Plus y Tornasol.
 * Todos los modelos disponibles para venta en Maracay y envíos a toda Venezuela.
 */

import traje1 from '../assets/traje de baño 1.jpeg';
import traje2 from '../assets/traje de baño 2.jpeg';
import traje3 from '../assets/traje de baño 3.jpg';
import traje4 from '../assets/traje de baño 4.jpeg';
import traje5 from '../assets/traje de baño 5.jpeg';
import traje6 from '../assets/traje de baño 6.jpeg';

import model1 from '../assets/modelo-1.jfif';
import model2 from '../assets/modelo-2.jfif';
import model3 from '../assets/modelo-3.jfif';
import model4 from '../assets/modelo-4.jfif';
import model5 from '../assets/modelo-5.jfif';
import model6 from '../assets/modelo-6.jfif';
import model7 from '../assets/modelo-7.jfif';
import model8 from '../assets/modelo-8.jfif';
import model9 from '../assets/modelo-9.jfif';
import model10 from '../assets/modelo-10.jfif';
import model11 from '../assets/modelo-11.jfif';
import model12 from '../assets/modelo-12.jfif';

/**
 * Array de productos con metadatos SEO.
 * @type {Array<{id: number, category: string, name: string, price: number, imageUrl: string, badge: string, tag: string, description: string}>}
 */
export const products = [
    { id: 1, category: 'bikinis', name: 'Bikini Morado Lavanda - "Soft Dream"', price: 15.0, imageUrl: traje1, badge: 'COLOR TENDENCIA', tag: 'Look romántico y chic', description: 'El tono Lavanda más buscado. Diseño de triángulo ajustable con frunce.' },
    { id: 2, category: 'bikinis', name: 'Bikini Verde Menta - "Electric Pop"', price: 15.0, imageUrl: traje2, badge: 'BEST SELLER', tag: 'Atrévete a brillar bajo el sol', description: 'Máxima energía. Este turquesa vibrante garantiza que todas las miradas sean para ti.' },
    { id: 3, category: 'bikinis', name: 'Bikini Negro Espalda Cruzada - "Aqua Wave"', price: 15.0, imageUrl: traje3, badge: 'EDICIÓN VERANO', tag: 'Fresco como el mar', description: 'Elegante negro con tiras cruzadas en la espalda. Diseño de tiras atadas.' },
    { id: 4, category: 'bikinis', name: 'Bikini Rosado Barbie - "The Classic"', price: 15.0, imageUrl: traje4, badge: 'FONDO DE ARMARIO', tag: 'Infaltable y combinable', description: 'Este tono rosado suave es atemporal y fácil de combinar. Corte de triángulo.' },
    { id: 5, category: 'bikinis', name: 'Bikini Rojo Borgoña - "Sunset Glow"', price: 15.0, imageUrl: traje5, badge: 'NUEVO', tag: 'Inspirado en el atardecer', description: 'Un tono rojo vino profundo y cálido. El detalle del frunce añade textura.' },
    { id: 6, category: 'enterizos', name: 'Bikini Negro Total - "Poolside Vibe"', price: 15.0, imageUrl: traje6, badge: 'EXCLUSIVO', tag: 'Perfecto para la piscina', description: 'Un negro sólido y moderno. Este bikini de tela premium mantiene su forma.' },
    { id: 7, category: 'bikinis', name: 'Bikini Modelo 01', price: 15.0, imageUrl: model1, badge: 'NUEVA COLECCIÓN', tag: 'Diseño Exclusivo', description: 'Calidad premium y diseños en tendencia.' },
    { id: 8, category: 'bikinis', name: 'Bikini Modelo 02', price: 15.0, imageUrl: model2, badge: 'TENDENCIA', tag: 'Estilo Único', description: 'Calidad premium y diseños en tendencia.' },
    { id: 9, category: 'enterizos', name: 'Bikini Modelo 03', price: 15.0, imageUrl: model3, badge: 'DESTACADO', tag: 'Moda Verano', description: 'Calidad premium y diseños en tendencia.' },
    { id: 10, category: 'talla-plus', name: 'Bikini Modelo 04', price: 15.0, imageUrl: model4, badge: 'COLOR VIBRANTE', tag: 'Look de Playa', description: 'Calidad premium y diseños en tendencia.' },
    { id: 11, category: 'tornasol', name: 'Bikini Modelo 05', price: 15.0, imageUrl: model5, badge: 'ELEGANCIA', tag: 'Sofisticado', description: 'Calidad premium y diseños en tendencia.' },
    { id: 12, category: 'talla-plus', name: 'Bikini Modelo 06', price: 15.0, imageUrl: model6, badge: 'CHIC', tag: 'Moderno', description: 'Calidad premium y diseños en tendencia.' },
    { id: 13, category: 'bikinis', name: 'Bikini Modelo 07', price: 15.0, imageUrl: model7, badge: 'FRESH', tag: 'Confort', description: 'Calidad premium y diseños en tendencia.' },
    { id: 14, category: 'enterizos', name: 'Bikini Modelo 08', price: 15.0, imageUrl: model8, badge: 'SUMMER', tag: 'Playero', description: 'Calidad premium y diseños en tendencia.' },
    { id: 15, category: 'tornasol', name: 'Bikini Modelo 09', price: 15.0, imageUrl: model9, badge: 'GLAM', tag: 'Brilla', description: 'Calidad premium y diseños en tendencia.' },
    { id: 16, category: 'talla-plus', name: 'Bikini Modelo 10', price: 15.0, imageUrl: model10, badge: 'NUEVO', tag: 'Original', description: 'Calidad premium y diseños en tendencia.' },
    { id: 17, category: 'bikinis', name: 'Bikini Modelo 11', price: 15.0, imageUrl: model11, badge: 'TOP', tag: 'Must Have', description: 'Calidad premium y diseños en tendencia.' },
    { id: 18, category: 'enterizos', name: 'Bikini Modelo 12', price: 15.0, imageUrl: model12, badge: 'EXCLUSIVE', tag: 'Premium', description: 'Calidad premium y diseños en tendencia.' },
];

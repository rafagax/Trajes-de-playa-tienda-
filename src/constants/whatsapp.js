/**
 * @file constants\whatsapp.js
 * @description Configuración global para la comunicación por WhatsApp de L'Borgina.
 * Incluye el número central y generadores de enlaces para facilitar la compra de trajes de baño en Maracay.
 */

/**
 * Número de WhatsApp de atención al cliente (Formato internacional sin +)
 * @constant {string}
 */
export const WHATSAPP_NUMBER = '584228151085';

/**
 * Enlace predeterminado para el botón flotante de la tienda.
 * @constant {string}
 */
export const WHATSAPP_FLOAT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hola 👋, vengo desde la tienda online y quiero más información sobre los trajes de baño.'
)}`;

/**
 * Genera un enlace de WhatsApp personalizado para un producto específico.
 * @param {string} productName - Nombre del bikini o traje de baño.
 * @returns {string} URL de WhatsApp con mensaje personalizado.
 */
export const createWhatsAppUrl = (productName) => {
    const message = `Hola 👋, me interesa el modelo "${productName}" que vi en la web. ¿Está disponible en mi talla?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

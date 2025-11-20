// src/App.jsx
import React from 'react';
// Importamos el CSS de la tienda que crearás en el siguiente paso
 
// --- 1. IMPORTACIÓN DE IMÁGENES (NUEVAS LÍNEAS) ---
import traje1 from './assets/traje de baño 1.jpeg';
import traje2 from './assets/traje de baño 2.jpeg';
import traje3 from './assets/traje de baño 3.jpg';
import traje4 from './assets/traje de baño 4.webp';

// --- Configuración del Botón de WhatsApp ---
// ¡REEMPLAZA ESTE NÚMERO! (Código de país + número, sin '+', '00', o espacios)
const WHATSAPP_NUMBER = '584144735431'; 
const WHATSAPP_MESSAGE = 'Hola, estoy interesado/a en uno de sus trajes de baño. ¿Me pueden dar más información?';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// --- Datos de los Productos ---

const products = [
  { id: 1, name: 'Bikini Tropical Sunrise', price: 45.00, imageUrl: traje1 }, // Usamos la variable importada
  { id: 2, name: 'Traje Entero Clásico Azul', price: 60.00, imageUrl: traje2 },
  { id: 3, name: 'Bañador de Lentejuelas', price: 55.00, imageUrl: traje3 },
  { id: 4, name: 'Tanga Brasileña Naranja', price: 40.00, imageUrl: traje4 },
];

const App = () => { 
  return (
    <div className="shop-container">
      {/* --- Encabezado --- */}
      <header className="shop-header">
        <h1> GeorginaPg Trajes de Baño ☀️🌴🌊</h1>
        <p>Estilo y confort para la playa y la piscina.</p>
      </header>
      
      {/* --- Sección de Productos --- */}
      <section className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {/* Las imágenes deben estar en la carpeta public/images */}
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="product-image" 
            />
            <h2>{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button 
              className="details-button"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              Preguntar por WhatsApp
            </button>
          </div>
        ))}
      </section>

      {/* --- Botón Flotante de WhatsApp (CLAVE) --- */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button-float"
        aria-label="Contactar por WhatsApp"
      >
        <i className="whatsapp-icon">💬</i>
      </a>

      {/* --- Pie de Página --- */}
      <footer className="shop-footer">
        <p>&copy; 2025 GeorginaPg. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
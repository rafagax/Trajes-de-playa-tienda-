// src/App.jsx
import React from 'react';
import './App.css';

// Imágenes
import traje1 from './assets/traje de baño 1.jpeg';
import traje2 from './assets/traje de baño 2.jpeg';
import traje3 from './assets/traje de baño 3.jpg';
import traje4 from './assets/traje de baño 4.jpeg';
import traje5 from './assets/traje de baño 5.jpeg';
import traje6 from './assets/traje de baño 6.jpeg';
import trajeLogo from './assets/LOGO-PNG.png';
import precios from './assets/22.png';
import bikinis from './assets/2.jpeg';
// Número de WhatsApp (sin +, sin espacios)
const WHATSAPP_NUMBER = '584228151085'; 

// Mensaje general (botón flotante / contacto)
const WHATSAPP_FLOAT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola 👋, vengo desde la tienda online y quiero más información sobre los trajes de baño.'
)}`;

// Función para crear mensaje con el nombre del producto
const createWhatsAppUrl = (productName) => {
  const message = `Hola 👋, me interesa el modelo "${productName}" que vi en la web. ¿Está disponible en mi talla?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Datos de los productos
const products = [

  {
  id: 1,
  name: 'Bikini Morado Lavanda - "Soft Dream"', // Color: Morado
  price: 15.0,
  imageUrl: traje1, 
  badge: 'COLOR TENDENCIA',
  tag: 'Look romántico y chic',
  description: 'El tono Lavanda más buscado. Diseño de triángulo ajustable con frunce que se adapta a cualquier talla de busto, ofreciendo un soporte sutil y muy cómodo.'
 },
 {
  id: 2,
  name: 'Bikini Verde Menta - "Electric Pop"', // Color: Verde Menta/Turquesa
  price: 15.0,
  imageUrl: traje2, 
  badge: 'BEST SELLER',
  tag: 'Atrévete a brillar bajo el sol',
  description: 'Máxima energía. Este turquesa vibrante garantiza que todas las miradas sean para ti. La tela de secado rápido es perfecta para días largos en la playa.' 
 },
 {
  id: 3,
  name: 'Bikini Negro Espalda Cruzada - "Aqua Wave"', // Color: Negro
  price: 15.0,
  imageUrl: traje3, 
  badge: 'EDICIÓN VERANO',
  tag: 'Fresco como el mar',
  description: 'Elegante negro con tiras cruzadas en la espalda. Su diseño clásico de tiras atadas te permite personalizar el ajuste tanto en el cuello como en la espalda.' 
 },
 {
  id: 4,
  name: 'Bikini Rosado Barbie - "The Classic"', // Color: Rosado/Fucsia Brillante
  price: 15.0,
  imageUrl: traje4, 
  badge: 'FONDO DE ARMARIO',
  tag: 'Infaltable y combinable',
  description: 'Este tono rosado suave es atemporal y fácil de combinar con cualquier pareo o accesorio. Corte de triángulo, súper versátil para múltiples looks.' 
 },
 {
  id: 5,
  name: 'Bikini Rojo Borgoña - "Sunset Glow"', // ¡NOMBRE CORREGIDO AL COLOR ROJO/VINO!
  price: 15.0, 
  imageUrl: traje5, 
  badge: 'NUEVO',
  tag: 'Inspirado en el atardecer',
  description: 'Un tono rojo vino profundo y cálido que evoca las tardes de verano. El detalle del frunce añade textura y ayuda a moldear la figura naturalmente.' // Descripción ajustada al nuevo color
 },
 {
  id: 6,
  name: 'Bikini Negro Total - "Poolside Vibe"', // Color: Negro
  price: 15.0,
  imageUrl: traje6, 
  badge: 'EXCLUSIVO',
  tag: 'Perfecto para la piscina',
  description: 'Un negro sólido y moderno. Este bikini de tela premium mantiene su forma y color, garantizando durabilidad temporada tras temporada.' 
 },
];

const App = () => {
  const handleScrollToCollection = () => {
    const section = document.getElementById('coleccion');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* HEADER + NAV + HERO */}
      <header className="shop-header">
       
        <nav className="navbar">
          <div className="logo">
          <img src={trajeLogo} alt="Logo L'borgina" className="brand-logo" />
            {/* <span className="logo-mark">L'B</span> */}
            
            
          </div>

          <ul className="nav-links">
            <li>
              <button className="nav-link" onClick={handleScrollToCollection}>
                Colección
              </button>
            </li>
            <li>
              <a
                className="nav-link"
                href={WHATSAPP_FLOAT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero">
          <div className="hero-content">
            <span className="logo-text">L'borgina</span>
            <span className="hero-badge">Nueva colección 2025</span>
            
            <h1 className="hero-title">
           Trajes de baño con actitud veraniega☀️🌴🌊
            </h1>

            {/* IMAGEN INSERTADA AQUÍ */}
            <img 
                src={bikinis} 
                alt="Bikini destacada en el banner" 
                className="product-image-wrapper" 
            /> 
            {/* FIN DE IMAGEN INSERTADA */}
            <p className="hero-subtitle">
              Diseños pensados para realzar tu figura, sentirte segura y
              disfrutar al máximo la playa, la piscina y cada momento bajo el sol.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={handleScrollToCollection}>
                Ver colección
              </button>
              <a
                className="secondary-btn"
                href={WHATSAPP_FLOAT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <p className="hero-note">
              Envíos nacionales · Pagos móviles y transferencias · Atención personalizada
            </p>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="shop-main">
        {/* Beneficios rápidos */}
        <section className="benefits">
          <div className="benefit-card">
            <h3>✨ Calidad & confort</h3>
            <p>Telas suaves, que se ajustan a tu cuerpo y secado rápido.</p>
          </div>
          <div className="benefit-card">
            <h3>📦 Envíos seguros</h3>
            <p>Empaques cuidados y seguimiento hasta que te llegue.</p>
          </div>
          <div className="benefit-card">
            <h3>💬 Asesoría personalizada</h3>
            <p>Te ayudamos a elegir talla y modelo ideal por WhatsApp.</p>
          </div>
        </section>

        {/* Colección */}
        <section id="coleccion" className="product-section">
          <div className="section-header">
            {/* IMAGEN INSERTADA AQUÍ */}
            <img 
                src={precios} 
                alt="Bikini destacada en el banner" 
                className="product-image-wrapper" 
            /> 
            {/* FIN DE IMAGEN INSERTADA */}
            <h2>Colección Georgina'S Tienda - Trajes de Baño</h2>
            <p>Elige tu modelo favorito y escríbenos para reservar tu talla.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}

                <div className="product-image-wrapper">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  {product.tag && <p className="product-tag">{product.tag}</p>}
                  <p className="product-description">{product.description}</p>

                  <div className="product-bottom">
                    <span className="product-price">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      className="details-button"
                      onClick={() =>
                        window.open(createWhatsAppUrl(product.name), '_blank')
                      }
                    >
                      Preguntar por WhatsApp
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Botón flotante WhatsApp */}
      <a
        href={WHATSAPP_FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button-float"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
      </a>

      {/* Footer */}
      <footer className="shop-footer">
        <p>&copy; 2025 L'Borgina. Todos los derechos reservados.</p>
        <small>Hecho con 💜💙 para que te vistas de verano todo el año.</small>
      </footer>
    </div>
  );
};

export default App;

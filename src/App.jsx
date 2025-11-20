// src/App.jsx
import React from 'react';
import './App.css';

// Imágenes
import traje1 from './assets/traje de baño 1.jpeg';
import traje2 from './assets/traje de baño 2.jpeg';
import traje3 from './assets/traje de baño 3.jpg';
import traje4 from './assets/traje de baño 4.webp';
import traje5 from './assets/logoGeorgina.jpeg';
// Número de WhatsApp (sin +, sin espacios)
const WHATSAPP_NUMBER = '584144735431';

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
    name: 'Bikini Tropical Sunrise',
    price: 45.0,
    imageUrl: traje1,
    badge: 'Best seller',
    tag: 'Ideal para playa y piscina',
    description: 'Bikini de tiro alto con estampado tropical que realza tu figura.'
  },
  {
    id: 2,
    name: 'Traje Entero Clásico Azul',
    price: 60.0,
    imageUrl: traje2,
    badge: 'Clásico',
    tag: 'Soporte y comodidad',
    description: 'Traje entero moldeador, perfecto para un look elegante y cómodo.'
  },
  {
    id: 3,
    name: 'Bañador de Lentejuelas',
    price: 55.0,
    imageUrl: traje3,
    badge: 'Edición limitada',
    tag: 'Brilla de noche',
    description: 'Bañador con detalles de brillo para tus pool parties y viajes.'
  },
  {
    id: 4,
    name: 'Tanga Brasileña Naranja',
    price: 40.0,
    imageUrl: traje4,
    badge: 'Nuevo',
    tag: 'Corte brasileño',
    description: 'Diseño atrevido y cómodo para lucir piernas infinitas.'
  }
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
          <img src={traje5} alt="Logo L'borgina" className="brand-logo" />
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

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
import musicaFondo from './musica/summer.mp3';

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

// Evento personalizado para silenciar
const triggerSilence = () => {
  window.dispatchEvent(new Event('silence-audio'));
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
    description: 'Un tono rojo vino profundo y cálido que evoca las tardes de verano. El detalle del frunce añade textura y ayuda a moldear la figura naturalmente.'
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
                onClick={triggerSilence}
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
                onClick={triggerSilence}
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
                      onClick={() => {
                        triggerSilence();
                        window.open(createWhatsAppUrl(product.name), '_blank');
                      }}
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
        onClick={triggerSilence}
      >
        <span className="whatsapp-icon">💬</span>
      </a>

      {/* Footer */}
      <footer className="shop-footer">
        {/* Sección de Redes Sociales */}
        <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/lborgina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* TIKTOK */}
          <a href="https://www.tiktok.com/@l.borgina?_r=1&_t=ZM-91z4v6FN6Pj" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-brand-tiktok"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
            </svg>
          </a>

          {/* YOUTUBE */}
          <a href="https://youtube.com/@lborgina?si=AfmXNj1znSltDWwx" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-youtube"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/share/19GGDVHqeM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>

        <p>&copy; 2025 L'Borgina. Todos los derechos reservados.</p>
        <small>Hecho con 💜💙 para que te vistas de verano todo el año.</small>
      </footer>
      <AudioController />
    </div>
  );
};

/* Componente para manejar el audio */
const AudioController = () => {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    // Escuchar evento de silencio
    const handleSilence = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
    window.addEventListener('silence-audio', handleSilence);

    // Definimos la función de interacción fuera para poder removerla después
    const handleInteraction = () => {
      if (!audioRef.current) return;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Éxito: limpiamos todos los listeners
            removeListeners();
          })
          .catch(error => {
            console.log("Autoplay prevenido (esperando más interacción):", error);
          });
      }
    };

    const addListeners = () => {
      window.addEventListener('click', handleInteraction);
      window.addEventListener('keydown', handleInteraction);
      window.addEventListener('scroll', handleInteraction, { once: true });
      window.addEventListener('touchstart', handleInteraction);
      window.addEventListener('touchend', handleInteraction);
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('touchend', handleInteraction);
    };

    // Intentar reproducir apenas cargue
    const tryAutoPlay = async () => {
      if (!audioRef.current) return;
      try {
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
        // Si funcionó (ej. el usuario refrescó y el navegador recuerda la interacción), no necesitamos listeners
      } catch (err) {
        console.log("Autoplay inicial bloqueado. Activando listeners de interacción.");
        addListeners();
      }
    };

    tryAutoPlay();

    // Cleanup al desmontar
    return () => {
      removeListeners();
      window.removeEventListener('silence-audio', handleSilence);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error(e));
    }
  };

  return (
    <div className="audio-control" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      {/* Usamos los eventos nativos para controlar el estado visual */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={musicaFondo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlay}
        style={{
          background: 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label={isPlaying ? "Silenciar música" : "Activar música"}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
};

export default App;

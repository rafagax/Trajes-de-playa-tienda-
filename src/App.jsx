// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import musicaFondo from './musica/summer.mp3';

// Nuevos imports para modelos del 1 al 12 (Extension .jfif)
import model1 from './assets/modelo-1.jfif';
import model2 from './assets/modelo-2.jfif';
import model3 from './assets/modelo-3.jfif';
import model4 from './assets/modelo-4.jfif';
import model5 from './assets/modelo-5.jfif';
import model6 from './assets/modelo-6.jfif';
import model7 from './assets/modelo-7.jfif';
import model8 from './assets/modelo-8.jfif';
import model9 from './assets/modelo-9.jfif';
import model10 from './assets/modelo-10.jfif';
import model11 from './assets/modelo-11.jfif';
import model12 from './assets/modelo-12.jfif';

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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="white" style={{ display: 'block' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- COMPONENTES COMPARTIDOS ---

const SocialLinks = () => (
  <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
    <a href="https://www.instagram.com/lborgina/" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro Instagram de trajes de baño" onClick={triggerSilence}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
    <a href="https://www.tiktok.com/@l.borgina" target="_blank" rel="noopener noreferrer" aria-label="Ver TikTok de bikinis en Maracay" onClick={triggerSilence}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-tiktok">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
      </svg>
    </a>
    <a href="https://youtube.com/@lborgina" target="_blank" rel="noopener noreferrer" aria-label="Ver canal de YouTube de moda playera" onClick={triggerSilence}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    </a>
    <a href="https://www.facebook.com/share/19GGDVHqeM/" target="_blank" rel="noopener noreferrer" aria-label="Seguir en Facebook para ofertas de trajes de baño" onClick={triggerSilence}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </a>
  </div>
);

const Navbar = ({ onScrollToCollection }) => (
  <nav className="navbar">
    <Link to="/" className="logo" style={{ textDecoration: 'none' }} title="Ir a la página de inicio de L'Borgina">
      <img src={trajeLogo} alt="Logotipo de L'Borgina - Tienda de bikinis en Maracay" className="brand-logo" />
      <span className="logo-text">L'borgina</span>
    </Link>
    <ul className="nav-links">
      <li>{onScrollToCollection ? <button className="nav-link" onClick={onScrollToCollection}>Colección</button> : <Link className="nav-link" to="/" title="Ver catálogo de trajes de baño online">Tienda</Link>}</li>
      <li><Link className="nav-link" to="/blog" title="Blog sobre tendencias de moda playera en Maracay">Blog</Link></li>
      <li><Link className="nav-link" to="/envios" title="Políticas de envíos y devoluciones en Venezuela">Envíos</Link></li>
      <li><Link className="nav-link" to="/guia-tallas" title="Guía de tallas para comprar bikinis sin errores">Tallas</Link></li>
      <li><Link className="nav-link" to="/contacto" title="Contacta con nuestra tienda de trajes de baño en Maracay">Contacto</Link></li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="shop-footer">
    <SocialLinks />
    <p>© 2025 L'Borgina. Todos los derechos reservados.</p>
    <small>Hecho con 💜 para que te vistas de verano todo el año. <strong>Bikinis con envío a toda Venezuela.</strong> Venta de trajes de baño online Venezuela.</small>
  </footer>
);

const AudioController = () => {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const handleSilence = () => audioRef.current?.pause();
    window.addEventListener('silence-audio', handleSilence);
    const handleInteraction = () => {
      audioRef.current?.play().then(() => removeListeners()).catch(e => console.log("Autoplay blocked"));
    };
    const addListeners = () => {
      ['click', 'keydown', 'scroll', 'touchstart', 'touchend'].forEach(e => window.addEventListener(e, handleInteraction));
    };
    const removeListeners = () => {
      ['click', 'keydown', 'scroll', 'touchstart', 'touchend'].forEach(e => window.removeEventListener(e, handleInteraction));
    };
    if (audioRef.current) audioRef.current.volume = 0.5;
    audioRef.current?.play().catch(() => addListeners());
    return () => { removeListeners(); window.removeEventListener('silence-audio', handleSilence); };
  }, []);

  return (
    <div className="audio-control" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      <audio ref={audioRef} loop src={musicaFondo} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <button onClick={() => isPlaying ? audioRef.current?.pause() : audioRef.current?.play()} style={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', fontSize: '20px' }}>
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
};

// --- DATOS Y LOGICA ---

const products = [
  { id: 1, category: 'bikinis', name: 'Bikini Morado Lavanda - "Soft Dream"', price: 15.0, imageUrl: traje1, badge: 'COLOR TENDENCIA', tag: 'Look romántico y chic', description: 'El tono Lavanda más buscado. Diseño de triángulo ajustable con frunce.' },
  { id: 2, category: 'bikinis', name: 'Bikini Verde Menta - "Electric Pop"', price: 15.0, imageUrl: traje2, badge: 'BEST SELLER', tag: 'Atrévete a brillar bajo el sol', description: 'Máxima energía. Este turquesa vibrante garantiza que todas las miradas sean para ti.' },
  { id: 3, category: 'bikinis', name: 'Bikini Negro Espalda Cruzada - "Aqua Wave"', price: 15.0, imageUrl: traje3, badge: 'EDICIÓN VERANO', tag: 'Fresco como el mar', description: 'Elegante negro con tiras cruzadas en la espalda. Diseño de tiras atadas.' },
  { id: 4, category: 'bikinis', name: 'Bikini Rosado Barbie - "The Classic"', price: 15.0, imageUrl: traje4, badge: 'FONDO DE ARMARIO', tag: 'Infaltable y combinable', description: 'Este tono rosado suave es atemporal y fácil de combinar. Corte de triángulo.' },
  { id: 5, category: 'bikinis', name: 'Bikini Rojo Borgoña - "Sunset Glow"', price: 15.0, imageUrl: traje5, badge: 'NUEVO', tag: 'Inspirado en el atardecer', description: 'Un tono rojo vino profundo y cálido. El detalle del frunce añade textura.' },
  { id: 6, category: 'enterizos', name: 'Bikini Negro Total - "Poolside Vibe"', price: 15.0, imageUrl: traje6, badge: 'EXCLUSIVO', tag: 'Perfecto para la piscina', description: 'Un negro sólido y moderno. Este bikini de tela premium mantiene su forma.' },
  { id: 7, category: 'bikinis', name: 'Bikini Modelo 01', price: 15.0, imageUrl: model1, badge: 'NUEVA COLECCIÓN', tag: 'Diseño Exclusivo', description: 'Calidad premium y diseños en tendencia.' },
  { id: 8, category: 'bikinis', name: 'Bikini Modelo 02', price: 15.0, imageUrl: model2, badge: 'TENDENCIA', tag: 'Estilo Único', description: 'Calidad premium y diseños en tendencia.' },
  { id: 9, category: 'enterizos', name: 'Bikini Modelo 03', price: 15.0, imageUrl: model3, badge: 'DESTACADO', tag: 'Moda Verano', description: 'Calidad premium y diseños en tendencia.' },
  { id: 10, category: 'tallas-plus', name: 'Bikini Modelo 04', price: 15.0, imageUrl: model4, badge: 'COLOR VIBRANTE', tag: 'Look de Playa', description: 'Calidad premium y diseños en tendencia.' },
  { id: 11, category: 'salidas', name: 'Bikini Modelo 05', price: 15.0, imageUrl: model5, badge: 'ELEGANCIA', tag: 'Sofisticado', description: 'Calidad premium y diseños en tendencia.' },
  { id: 12, category: 'tallas-plus', name: 'Bikini Modelo 06', price: 15.0, imageUrl: model6, badge: 'CHIC', tag: 'Moderno', description: 'Calidad premium y diseños en tendencia.' },
  { id: 13, category: 'bikinis', name: 'Bikini Modelo 07', price: 15.0, imageUrl: model7, badge: 'FRESH', tag: 'Confort', description: 'Calidad premium y diseños en tendencia.' },
  { id: 14, category: 'enterizos', name: 'Bikini Modelo 08', price: 15.0, imageUrl: model8, badge: 'SUMMER', tag: 'Playero', description: 'Calidad premium y diseños en tendencia.' },
  { id: 15, category: 'salidas', name: 'Bikini Modelo 09', price: 15.0, imageUrl: model9, badge: 'GLAM', tag: 'Brilla', description: 'Calidad premium y diseños en tendencia.' },
  { id: 16, category: 'tallas-plus', name: 'Bikini Modelo 10', price: 15.0, imageUrl: model10, badge: 'NUEVO', tag: 'Original', description: 'Calidad premium y diseños en tendencia.' },
  { id: 17, category: 'bikinis', name: 'Bikini Modelo 11', price: 15.0, imageUrl: model11, badge: 'TOP', tag: 'Must Have', description: 'Calidad premium y diseños en tendencia.' },
  { id: 18, category: 'enterizos', name: 'Bikini Modelo 12', price: 15.0, imageUrl: model12, badge: 'EXCLUSIVE', tag: 'Premium', description: 'Calidad premium y diseños en tendencia.' },
];

const ProductGrid = ({ items }) => (
  <div className="product-grid">
    {items.map((product) => (
      <article key={product.id} className="product-card">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <div className="product-image-wrapper">
          <img src={product.imageUrl} alt={`Comprar ${product.name} - Traje de baño exclusivo en Venezuela`} className="product-image" loading="lazy" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          {product.tag && <p className="product-tag">{product.tag}</p>}
          <p className="product-description">{product.description}</p>
          <div className="product-bottom">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button className="details-button" onClick={() => { triggerSilence(); window.open(createWhatsAppUrl(product.name), '_blank'); }}>Preguntar por WhatsApp</button>
          </div>
        </div>
      </article>
    ))}
  </div>
);

// --- PAGINAS ---

const Home = () => {
  const handleScrollToCollection = () => {
    const section = document.getElementById('coleccion');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Venta de trajes de baño en Maracay | Tienda de bikinis Maracay | L'Borgina</title>
        <meta name="description" content="Venta de trajes de baño en Maracay y online para toda Venezuela. Encuentra bikinis, enterizos y tallas completas con diseños exclusivos. ¡Compra hoy!" />
        <meta name="keywords" content="venta de trajes de baño en maracay, tienda de bikinis maracay, venta de trajes de baño online venezuela, bikinis con envio a toda venezuela" />
      </Helmet>

      <div className="app">
        <header className="shop-header">
          <Navbar onScrollToCollection={handleScrollToCollection} />
          <div className="hero">
            <div className="hero-content">
              <span className="hero-badge">✨ Nueva colección Semana Santa 2026</span>
              <h1 className="hero-title">Venta de trajes de baño en Maracay con actitud veraniega ☀️🌴🌊</h1>
              <p className="hero-subtitle">Diseños pensados para realzar tu figura, sentirte segura y disfrutar al máximo la playa, la piscina y cada momento bajo el sol.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={handleScrollToCollection}>✦ Ver colección de bikinis</button>
                <a className="secondary-btn" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer" onClick={triggerSilence}>💬 WhatsApp Directo</a>
              </div>
              <p className="hero-note">Envíos nacionales · Pagos móviles y transferencias · Atención personalizada</p>
            </div>
          </div>
        </header>

        <main className="shop-main">
          {/* Categorías destacadas */}
          <section className="categories-preview" aria-label="Categorías de trajes de baño" style={{ marginBottom: '3rem', display: 'flex', gap: '10px', overflowX: 'auto', padding: '10px' }}>
            <Link to="/tienda/bikinis" className="nav-link" style={{ background: 'var(--accent)', color: 'white' }}>Bikinis (Dos piezas)</Link>
            <Link to="/tienda/enterizos" className="nav-link" style={{ background: 'var(--accent)', color: 'white' }}>Enterizos</Link>
            <Link to="/tienda/tallas-plus" className="nav-link" style={{ background: 'var(--accent)', color: 'white' }}>Tallas Plus (Curvy)</Link>
            <Link to="/tienda/salidas" className="nav-link" style={{ background: 'var(--accent)', color: 'white' }}>Salidas de Baño</Link>
          </section>

          <section className="benefits">
            <div className="benefit-card">
              <h3>✨ Calidad Premium & Envíos a toda Venezuela 📦</h3>
              <p>Telas de la mejor calidad que se ajustan a tu cuerpo con doble tela. Hacemos que tus bikinis lleguen seguros a cualquier parte del país.</p>
            </div>
          </section>

          <section id="coleccion" className="product-section">
            <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Vitrina de Bikinis y Trajes de Baño</h2>
            <ProductGrid items={products} />
          </section>

          <section className="wholesale-banner">
            <div className="wholesale-image-container">
              <img src={precios} alt="Precios al mayor de trajes de baño en Maracay" className="wholesale-image" />
            </div>
          </section>
        </main>

        <Footer />
        <AudioController />
      </div>
    </>
  );
};

const Tienda = () => {
  const { cat } = useParams();
  const filtered = cat ? products.filter(p => p.category === cat) : products;

  const titles = {
    bikinis: 'Precio de bikinis tiro alto | Comprar bikinis online Venezuela',
    enterizos: 'Comprar traje de baño enterizo negro | Enterizos elegantes',
    'tallas-plus': 'Venta de trajes de baño tallas completas | Tallas Plus Curvy',
    salidas: 'Comprar salida de baño tejida | Salidas de baño y pareos'
  };

  const descriptions = {
    bikinis: 'Encuentra los mejores precios de bikinis tiro alto y diseños de dos piezas. Envíos a toda Venezuela desde nuestra tienda en Maracay.',
    enterizos: '¿Buscas comprar un traje de baño enterizo negro con estilo? Descubre nuestra colección de enterizos elegantes y calidad premium.',
    'tallas-plus': 'Expertos en venta de trajes de baño tallas completas. Diseños Curvy que realzan tu figura y brindan el máximo confort.',
    salidas: 'Completa tu look playero. Comprar salida de baño tejida, pareos y más en nuestra tienda online.'
  };

  return (
    <>
      <Helmet>
        <title>{cat ? titles[cat] : 'Tienda de bikinis Maracay precios | Comprar traje de baño'}</title>
        <meta name="description" content={cat ? descriptions[cat] : 'Explora nuestra tienda de bikinis en Maracay con los mejores precios. Venta de trajes de baño online en Venezuela con envíos rápidos.'} />
        <meta name="keywords" content="comprar traje de baño, bikinis maracay precios, trajes de baño online venezuela, bikinis con envio" />
      </Helmet>
      <div className="app">
        <header className="shop-header">
          <Navbar />
        </header>
        <main className="shop-main" style={{ padding: '2rem' }}>
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>{cat ? titles[cat].split('|')[0].trim() : 'Nuestra Tienda de Trajes de Baño'}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/tienda/bikinis" className="nav-link">Bikinis</Link>
            <Link to="/tienda/enterizos" className="nav-link">Enterizos</Link>
            <Link to="/tienda/tallas-plus" className="nav-link">Tallas Plus</Link>
            <Link to="/tienda/salidas" className="nav-link">Salidas de Baño</Link>
          </div>
          <ProductGrid items={filtered} />
        </main>
        <Footer />
      </div>
    </>
  );
};

const GuiaTallas = () => (
  <div className="app">
    <Helmet>
      <title>Guía de Tallas de Bikinis | Medidas para comprar trajes de baño</title>
      <meta name="description" content="Consulta nuestra guía de tallas antes de comprar tus bikinis. Asegura el ajuste perfecto con nuestras tablas de medidas en centímetros." />
    </Helmet>
    <header className="shop-header"><Navbar /></header>
    <main className="shop-main" style={{ padding: '3rem 1.5rem', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>📏 Guía de Tallas de Trajes de Baño</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>En Bikinis L'Borgina queremos que te sientas perfecta. Sigue nuestra tabla de medidas para elegir tu talla ideal de bikini o enterizo.</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', maxWidth: '600px', margin: '0 auto', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.1)', borderRadius: '15px' }}>
          <thead>
            <tr style={{ background: 'var(--accent)' }}>
              <th style={{ padding: '15px' }}>Talla</th>
              <th style={{ padding: '15px' }}>Busto (cm)</th>
              <th style={{ padding: '15px' }}>Cintura (cm)</th>
              <th style={{ padding: '15px' }}>Cadera (cm)</th>
            </tr>
          </thead>
          <tbody>
            {[['S', '85-90', '60-65', '85-95'], ['M', '90-95', '65-72', '95-102'], ['L', '95-100', '72-80', '102-110'], ['XL', '100-110', '80-92', '110-120']].map(row => (
              <tr key={row[0]} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {row.map((cell, i) => <td key={i} style={{ padding: '15px', textAlign: 'center' }}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    <Footer />
  </div>
);

const Envios = () => (
  <div className="app">
    <Helmet>
      <title>Políticas de Envíos y Devoluciones | Bikinis con envío a toda Venezuela</title>
      <meta name="description" content="Información sobre envíos de trajes de baño en Venezuela (MRW, Zoom, Tealca) y entregas personales en Maracay. Conoce nuestras políticas de devolución." />
    </Helmet>
    <header className="shop-header"><Navbar /></header>
    <main className="shop-main" style={{ padding: '3rem 1.5rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📦 Envíos y Devoluciones de L'Borgina</h1>
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '20px', marginTop: '2rem' }}>
        <h3>📍 Entregas personales en Maracay</h3>
        <p>Realizamos entregas sin costo adicional en centros comerciales de Maracay (Las Américas, Los Aviadores, Hyper Jumbo) previo acuerdo.</p>
        <h3 style={{ marginTop: '1.5rem' }}>🚚 Envíos Nacionales (Toda Venezuela)</h3>
        <p>Tus trajes de baño viajan seguros con <strong>MRW, Zoom y Tealca</strong>. Despachos rápidos para que estrenes tus bikinis en tiempo récord.</p>
        <h3 style={{ marginTop: '1.5rem' }}>⚠️ Políticas de Devolución por Higiene</h3>
        <p>Por razones de salud, <strong>no aceptamos devoluciones de las partes inferiores</strong>. Recomendamos revisar cuidadosamente la Guía de Tallas. Garantía por defectos de fábrica disponible las primeras 48h.</p>
      </div>
    </main>
    <Footer />
  </div>
);

const Contacto = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí iría la lógica de envío
  };

  return (
    <div className="app">
      <Helmet>
        <title>Contacto y Quiénes Somos | Tienda de trajes de baño Maracay</title>
        <meta name="description" content="Conoce la historia de L'Borgina y contacta con nuestra tienda de trajes de baño en Maracay. Asesoría personalizada por WhatsApp para tus compras online." />
      </Helmet>
      <header className="shop-header"><Navbar /></header>
      <main className="shop-main" style={{ padding: '3rem 1.5rem' }}>
        <div className="contact-container">
          <section className="contact-info-section">
            <h1 className="section-title">💜 L'Borgina: Nuestra Historia</h1>
            <p className="contact-description">
              Somos una marca nacida en el corazón de <strong>Maracay</strong>, apasionada por resaltar la belleza natural de la mujer venezolana.
              Cada pieza es seleccionada pensando en calidad, confort y ese estilo único que te hace brillar bajo el sol.
            </p>
            <div className="direct-contact-cards">
              <div className="contact-card-small">
                <span className="icon">📍</span>
                <h4>Ubicación</h4>
                <p>Maracay, Edo. Aragua. Venezuela.</p>
              </div>
              <div className="contact-card-small">
                <span className="icon">💬</span>
                <h4>Ventas WhatsApp</h4>
                <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">Asesoría Inmediata</a>
              </div>
            </div>
          </section>

          <section className="contact-form-section">
            {submitted ? (
              <div className="form-success-message">
                <h3>¡Mensaje enviado con éxito! ✨</h3>
                <p>Te responderemos lo antes posible por correo electrónico.</p>
                <button className="primary-btn" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Escríbenos</h2>
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input type="text" id="name" name="name" placeholder="Ej. Maria Perez" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" placeholder="maria@ejemplo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" name="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                </div>
                <button type="submit" className="primary-btn form-submit-btn">Enviar Mensaje ✦</button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Blog = () => (
  <div className="app">
    <Helmet>
      <title>Blog de Moda Playera | Tendencias de Bikinis y Trajes de Baño</title>
      <meta name="description" content="Descubre tips de estilo, tendencias de trajes de baño en Maracay y consejos para cuidar tus bikinis en nuestro Blog oficial." />
    </Helmet>
    <header className="shop-header"><Navbar /></header>
    <main className="shop-main" style={{ padding: '3rem 1.5rem' }}>
      <header className="blog-page-header">
        <h1 className="section-title" style={{ color: 'white', fontSize: '2.5rem' }}>L'Borgina Blog: Verano Infinito 🌊</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Tendencias, cuidado de prendas y mucho más.</p>
      </header>

      <div className="blog-posts-grid">
        <article className="blog-post-card">
          <div className="post-image-container">
            <img src={model1} alt="Tendencias de bikinis 2026" />
          </div>
          <div className="post-content">
            <span className="post-category">TENDENCIAS</span>
            <h3>Bikinis 2026: Los colores que dominarán esta temporada</h3>
            <p>Desde el lila lavanda hasta el verde eléctrico, descubre qué tonos serán tendencia este año en las playas venezolanas.</p>
            <button className="read-more">Leer más ✦</button>
          </div>
        </article>

        <article className="blog-post-card">
          <div className="post-image-container">
            <img src={model5} alt="Cómo cuidar tu traje de baño" />
          </div>
          <div className="post-content">
            <span className="post-category">CONSEJOS</span>
            <h3>Guía definitiva para que tus bikinis duren años</h3>
            <p>El cloro y el sol pueden dañar las telas. Te enseñamos los trucos de lavado para mantener los colores vibrantes.</p>
            <button className="read-more">Leer más ✦</button>
          </div>
        </article>

        <article className="blog-post-card">
          <div className="post-image-container">
            <img src={model8} alt="Mejores playas de Aragua" />
          </div>
          <div className="post-content">
            <span className="post-category">DESTINOS</span>
            <h3>5 Playas de Aragua ideales para lucir tu L'Borgina</h3>
            <p>De Cata a Cepe: un recorrido por los mejores paraísos cercanos a Maracay para tu próxima escapada.</p>
            <button className="read-more">Leer más ✦</button>
          </div>
        </article>
      </div>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <div style={{ position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/tienda/:cat" element={<Tienda />} />
        <Route path="/guia-tallas" element={<GuiaTallas />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-button-float" aria-label="Hablar por WhatsApp con la tienda" onClick={triggerSilence}>
        <WhatsAppIcon />
      </a>
    </div>
  </Router>
);

export default App;

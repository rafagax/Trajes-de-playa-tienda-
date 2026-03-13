/**
 * @file pages\Home.jsx
 * @description Página de inicio de L'Borgina.
 * Punto de entrada visual con la nueva colección de bikinis y trajes de baño en Maracay.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AudioController from '../components/common/AudioController';
import ProductGrid from '../components/shop/ProductGrid';
import { products } from '../data/products';
import { WHATSAPP_FLOAT_URL } from '../constants/whatsapp';
import precios from '../assets/1.jpeg';
import preciosWebp from '../assets/1.webp';

/**
 * Iconos SVG para beneficios
 */
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l1.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"></path><path d="M5 3L6 4"></path><path d="M19 3L18 4"></path><path d="M5 21L6 20"></path><path d="M19 21L18 20"></path></svg>
);

const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);

/**
 * Componente funcional para la página de Inicio.
 */
const Home = () => {
    /**
     * Maneja el scroll suave hacia la sección de la vitrina.
     */
    const handleScrollToCollection = () => {
        const section = document.getElementById('coleccion');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Trajes de Baño en Maracay | Tienda de Bikinis L'Borgina</title>
                <meta name="description" content="La mejor tienda de trajes de baño en Maracay. Bikinis, enterizos y tallas completas con envíos a toda Venezuela. ¡Diseños exclusivos de L'Borgina!" />
                <meta name="keywords" content="trajes de baño en maracay, tienda de bikinis maracay, venta de trajes de baño online venezuela, bikinis lborgina maracay" />
                <link rel="canonical" href="https://bikinislborgina.vercel.app/" />
            </Helmet>

            <div className="app">
                <header className="shop-header">
                    <Navbar onScrollToCollection={handleScrollToCollection} />
                    <div className="hero">
                        <div className="hero-content">
                            <span className="hero-badge">Nueva colección Semana Santa 2026</span>
                            <h1 className="hero-title">Venta de trajes de baño en Maracay con actitud veraniega ☀️🌴🌊</h1>
                            <p className="hero-subtitle">Diseños pensados para realzar tu figura, sentirte segura y disfrutar al máximo la playa, la piscina y cada momento bajo el sol.</p>
                            {/* <div className="hero-actions">
                                <button className="primary-btn" onClick={handleScrollToCollection}>✦ Ver colección de bikinis</button>
                                <a className="secondary-btn" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">💬 WhatsApp Directo</a>
                            </div> */}
                            {/* <p className="hero-note">Envíos nacionales · Pagos móviles y transferencias · Atención personalizada</p> */}
                        </div>
                    </div>
                </header>

                <main className="shop-main">
                    {/* Categorías destacadas para navegación rápida */}
                    <section className="categories-preview" aria-label="Categorías de trajes de baño">
                        <Link to="/tienda/bikinis" className="category-pill">Bikinis</Link>
                        <Link to="/tienda/tornasol" className="category-pill">Tornasol</Link>
                        <Link to="/tienda/enterizos" className="category-pill">Enterizos</Link>
                    </section>

                    {/* <section className="benefits">
                        <div className="benefit-card">
                            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <SparklesIcon /> Calidad Premium & Envíos Nacionales <PackageIcon />
                            </h3>
                            <p>Telas de la mejor calidad que se ajustan a tu cuerpo con doble tela. Hacemos que tus bikinis lleguen seguros a cualquier parte del país (Zoom, Tealca y MRW).</p>
                        </div>
                    </section> */}

                    <section id="coleccion" className="product-section">
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Vitrina de Bikinis y Trajes de Baño</h2>
                        <ProductGrid items={products.slice(0, 8)} />
                        
                        <h3 style={{ 
                            color: 'white', 
                            textAlign: 'center', 
                            marginTop: '3.5rem', 
                            marginBottom: '1rem', 
                            fontSize: '1.2rem', 
                            fontWeight: '500', 
                            opacity: '0.9',
                            letterSpacing: '0.05em'
                        }}>
                            ¡Explora más modelos increíbles! 🌸✨
                        </h3>

                        <div className="categories-preview" style={{ marginTop: '0.5rem' }}>
                            <Link to="/tienda/bikinis" className="category-pill">Bikinis</Link>
                            <Link to="/tienda/tornasol" className="category-pill">Tornasol</Link>
                            <Link to="/tienda/enterizos" className="category-pill">Enterizos</Link>
                        </div>
                    </section>

                    <section className="wholesale-banner">
                        <div className="wholesale-image-container">
                            <picture>
                                <source srcSet={preciosWebp} type="image/webp" />
                                <img
                                    src={precios}
                                    alt="Precios al mayor de trajes de baño en Maracay"
                                    className="wholesale-image"
                                    width="1120"
                                    height="340"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </section>
                </main>

                <Footer />
                <AudioController />
            </div>
        </>
    );
};

export default Home;

/**
 * @file pages\Home.jsx
 * @description P├ígina de inicio de L'Borgina.
 * Punto de entrada visual con la nueva colecci├│n de bikinis y trajes de ba├▒o en Maracay.
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
import precios from '../assets/22.png';

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
 * Componente funcional para la p├ígina de Inicio.
 */
const Home = () => {
    /**
     * Maneja el scroll suave hacia la secci├│n de la vitrina.
     */
    const handleScrollToCollection = () => {
        const section = document.getElementById('coleccion');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Trajes de Ba├▒o en Maracay | Tienda de Bikinis L'Borgina</title>
                <meta name="description" content="La mejor tienda de trajes de ba├▒o en Maracay. Bikinis, enterizos y tallas completas con env├¡os a toda Venezuela. ┬íDise├▒os exclusivos de L'Borgina!" />
                <meta name="keywords" content="trajes de ba├▒o en maracay, tienda de bikinis maracay, venta de trajes de ba├▒o online venezuela, bikinis lborgina maracay" />
            </Helmet>

            <div className="app">
                <header className="shop-header">
                    <Navbar onScrollToCollection={handleScrollToCollection} />
                    <div className="hero">
                        <div className="hero-content">
                            <span className="hero-badge">Nueva colecci├│n Semana Santa 2026</span>
                            <h1 className="hero-title">Venta de trajes de ba├▒o en Maracay con actitud veraniega ΓÿÇ∩╕Å≡ƒî┤≡ƒîè</h1>
                            <p className="hero-subtitle">Dise├▒os pensados para realzar tu figura, sentirte segura y disfrutar al m├íximo la playa, la piscina y cada momento bajo el sol.</p>
                            <div className="hero-actions">
                                <button className="primary-btn" onClick={handleScrollToCollection}>Γ£ª Ver colecci├│n de bikinis</button>
                                <a className="secondary-btn" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">≡ƒÆ¼ WhatsApp Directo</a>
                            </div>
                            <p className="hero-note">Env├¡os nacionales ┬╖ Pagos m├│viles y transferencias ┬╖ Atenci├│n personalizada</p>
                        </div>
                    </div>
                </header>

                <main className="shop-main">
                    {/* Categor├¡as destacadas para navegaci├│n r├ípida */}
                    <section className="categories-preview" aria-label="Categor├¡as de trajes de ba├▒o">
                        <Link to="/tienda/bikinis" className="category-pill">Bikinis</Link>
                        <Link to="/tienda/tornasol" className="category-pill">Tornasol</Link>
                        <Link to="/tienda/enterizos" className="category-pill">Enterizos</Link>
                        <Link to="/tienda/talla-plus" className="category-pill">Talla Plus</Link>
                    </section>

                    {/* <section className="benefits">
                        <div className="benefit-card">
                            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <SparklesIcon /> Calidad Premium & Env├¡os Nacionales <PackageIcon />
                            </h3>
                            <p>Telas de la mejor calidad que se ajustan a tu cuerpo con doble tela. Hacemos que tus bikinis lleguen seguros a cualquier parte del pa├¡s (Zoom, Tealca y MRW).</p>
                        </div>
                    </section> */}

                    <section id="coleccion" className="product-section">
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Vitrina de Bikinis y Trajes de Ba├▒o</h2>
                        <ProductGrid items={products} />
                    </section>

                    <section className="wholesale-banner">
                        <div className="wholesale-image-container">
                            <img
                                src={precios}
                                alt="Precios al mayor de trajes de ba├▒o en Maracay"
                                className="wholesale-image"
                                width="1120"
                                height="340"
                                loading="lazy"
                            />
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

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
import precios from '../assets/22.png';

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
                                <a className="secondary-btn" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">💬 WhatsApp Directo</a>
                            </div>
                            <p className="hero-note">Envíos nacionales · Pagos móviles y transferencias · Atención personalizada</p>
                        </div>
                    </div>
                </header>

                <main className="shop-main">
                    {/* Categorías destacadas para navegación rápida */}
                    <section className="categories-preview" aria-label="Categorías de trajes de baño">
                        <Link to="/tienda/bikinis" className="category-pill">Bikinis</Link>
                        <Link to="/tienda/tornasol" className="category-pill">Tornasol</Link>
                        <Link to="/tienda/enterizos" className="category-pill">Enterizos</Link>
                        <Link to="/tienda/talla-plus" className="category-pill">Talla Plus</Link>
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
                            <img
                                src={precios}
                                alt="Precios al mayor de trajes de baño en Maracay"
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

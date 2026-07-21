/**
 * @file pages\Home.jsx
 * @description Página de inicio de L'Borgina.
 * Punto de entrada visual con la nueva colección de bikinis y trajes de baño en Maracay.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import { products } from '../data/products';
import { WHATSAPP_FLOAT_URL } from '../constants/whatsapp';
import heroImage from '../assets/traje de baño 1.jpeg';
import heroImageWebp from '../assets/traje de baño 1.webp';

const featuredProducts = [
    products[2],
    products[1],
    products[3],
    products[4],
    products[0],
    products[8],
    products[6],
    products[7],
    products[5],
];

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
            <Seo
                title="Trajes de baño en Maracay | Bikinis L'Borgina"
                description="Compra trajes de baño para mujer online. Encuentra bikinis y enterizos con entregas en Maracay y envíos a toda Venezuela."
                path="/"
                imageAlt="Trajes de baño para mujer con entregas en Maracay y envíos a Venezuela"
            />

            <div className="app home-page">
                <header className="shop-header">
                    <Navbar onScrollToCollection={handleScrollToCollection} />
                    <div className="hero">
                        <div className="hero-inner">
                            <div className="hero-content">
                                <span className="hero-badge">Colección 2026</span>
                                <h1 className="hero-title"><span>Trajes de baño</span>{' '}<span>para mujer</span></h1>
                                <p className="hero-subtitle">Compra bikinis y enterizos online, con entregas en Maracay y envíos a toda Venezuela.</p>
                                <div className="hero-actions">
                                    <button className="primary-btn" onClick={handleScrollToCollection}>Comprar trajes de baño</button>
                                    <a className="secondary-btn" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
                                </div>
                                <p className="hero-note">Entregas en Maracay · Envíos a toda Venezuela</p>
                            </div>
                            <div className="hero-media" aria-label="Bikini lavanda ajustable de L'Borgina">
                                <picture>
                                    <source srcSet={heroImageWebp} type="image/webp" />
                                    <img src={heroImage} alt="Modelo luciendo bikini lavanda ajustable L'Borgina" width="540" height="680" fetchPriority="high" />
                                </picture>
                                <div className="hero-media-caption">
                                    <span>Bikini lavanda</span>
                                    <strong>Triángulo con frunce</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="shop-main">
                    {/* Categorías destacadas para navegación rápida */}
                    <section className="collection-intro" aria-labelledby="collection-intro-title">
                        <p className="section-eyebrow">Explora por estilo</p>
                        <h2 id="collection-intro-title">Encuentra el tuyo</h2>
                        <div className="categories-preview" aria-label="Categorías de trajes de baño">
                            <Link to="/tienda/bikinis" className="category-pill"><strong>Bikinis</strong><span>Dos piezas ajustables</span></Link>
                            <Link to="/tienda/tornasol" className="category-pill"><strong>Tornasol</strong><span>Acabado iridiscente</span></Link>
                            <Link to="/tienda/enterizos" className="category-pill"><strong>Enterizos</strong><span>Una sola pieza</span></Link>
                        </div>
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
                        <div className="section-heading">
                            <p className="section-eyebrow">Selección L'Borgina</p>
                            <h2>Los favoritos de la colección</h2>
                            <p>Catálogo sujeto a disponibilidad.</p>
                        </div>
                        <ProductGrid items={featuredProducts} />

                        <div className="collection-links">
                            <p>¿Quieres ver más modelos?</p>
                            <div className="categories-preview">
                                <Link to="/tienda/bikinis" className="category-pill">Ver bikinis</Link>
                                <Link to="/tienda/tornasol" className="category-pill">Ver tornasol</Link>
                                <Link to="/tienda/enterizos" className="category-pill">Ver enterizos</Link>
                            </div>
                        </div>
                    </section>

                    <section className="pricing-section" aria-labelledby="pricing-title">
                        <div className="section-heading section-heading--light">
                            <p className="section-eyebrow">Precios claros</p>
                            <h2 id="pricing-title">Compra una pieza o arma tu pedido</h2>
                            <p>Elige la opción que te conviene para comprar una pieza o hacer un pedido al mayor.</p>
                        </div>
                        <div className="pricing-grid">
                            <article className="pricing-card">
                                <div className="pricing-topline">
                                    <p>Elige tu favorito</p>
                                </div>
                                <h3>1 bikini</h3>
                                <p className="pricing-description">Para elegir tu modelo favorito y disfrutarlo desde el primer día.</p>
                                <div className="pricing-footer">
                                    <p className="pricing-price"><span>$</span>15</p>
                                    <span className="pricing-detail">Una pieza</span>
                                </div>
                            </article>
                            <article className="pricing-card pricing-card--featured">
                                <div className="pricing-topline">
                                    <p>Arma tu combinación</p>
                                </div>
                                <h3>2 bikinis</h3>
                                <p className="pricing-description">Combina colores o comparte el pedido con alguien especial.</p>
                                <div className="pricing-footer">
                                    <p className="pricing-price"><span>$</span>20</p>
                                    <span className="pricing-detail">$10 cada uno</span>
                                </div>
                            </article>
                            <article className="pricing-card">
                                <div className="pricing-topline">
                                    <p>Impulsa tu negocio</p>
                                </div>
                                <h3>Desde 6 bikinis</h3>
                                <p className="pricing-description">Precio al mayor para revendedoras y pedidos desde seis piezas.</p>
                                <div className="pricing-footer">
                                    <p className="pricing-price"><span>$</span>30</p>
                                    <span className="pricing-detail">$5 cada uno</span>
                                </div>
                            </article>
                        </div>
                        <a className="pricing-cta" href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">Comprar por WhatsApp</a>
                        <p className="pricing-note">Catálogo sujeto a disponibilidad. Confirma colores, modelos y condiciones antes de pagar.</p>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;

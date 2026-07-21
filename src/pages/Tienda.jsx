/**
 * @file pages\Tienda.jsx
 * @description Catálogo completo de L'Borgina.
 * Permite filtrar trajes de baño por categoría (bikinis, enterizos, talla plus, tornasol).
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import NotFound from './NotFound';
import { products } from '../data/products';
import { CATEGORY_SEO } from '../seo/site';

/**
 * Componente funcional para la página de la Tienda.
 */
const Tienda = () => {
    const { cat } = useParams();

    // Filtrado de productos basado en la categoría seleccionada en la URL
    const filtered = cat ? products.filter(p => p.category === cat) : products;

    const meta = cat ? CATEGORY_SEO[cat] : {
        title: "Tienda de trajes de baño en Maracay | L'Borgina",
        description: 'Explora bikinis, enterizos y modelos tornasol disponibles en Maracay, con atención por WhatsApp y envíos a toda Venezuela.',
        heading: 'Tienda de trajes de baño en Maracay',
    };

    if (cat && !meta) return <NotFound />;

    return (
        <>
            <Seo title={meta.title} description={meta.description} path={`/tienda${cat ? `/${cat}` : ''}`} />
            <div className="app">
                <header className="shop-header">
                    <Navbar />
                </header>
                <main className="shop-main catalog-main">
                    <div className="catalog-heading">
                        <p>Colección L'Borgina</p>
                        <h1>{meta.heading}</h1>
                    </div>

                    {/* Sub-navegación por categorías */}
                    <nav className="catalog-tabs" aria-label="Categorías de trajes de baño">
                        <Link to="/tienda/bikinis" className={`catalog-tab${cat === 'bikinis' ? ' is-active' : ''}`} aria-current={cat === 'bikinis' ? 'page' : undefined}>Bikinis</Link>
                        <Link to="/tienda/tornasol" className={`catalog-tab${cat === 'tornasol' ? ' is-active' : ''}`} aria-current={cat === 'tornasol' ? 'page' : undefined}>Tornasol</Link>
                        <Link to="/tienda/enterizos" className={`catalog-tab${cat === 'enterizos' ? ' is-active' : ''}`} aria-current={cat === 'enterizos' ? 'page' : undefined}>Enterizos</Link>
                    </nav>

                    <ProductGrid items={filtered} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Tienda;

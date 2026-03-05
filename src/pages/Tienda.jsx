/**
 * @file pages\Tienda.jsx
 * @description Catálogo completo de L'Borgina.
 * Permite filtrar trajes de baño por categoría (bikinis, enterizos, talla plus, tornasol).
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import { products } from '../data/products';

/**
 * Componente funcional para la página de la Tienda.
 */
const Tienda = () => {
    const { cat } = useParams();

    // Filtrado de productos basado en la categoría seleccionada en la URL
    const filtered = cat ? products.filter(p => p.category === cat) : products;

    // Títulos dinámicos para optimización SEO por categoría
    const titles = {
        bikinis: 'Precio de bikinis tiro alto | Comprar bikinis en Maracay',
        tornasol: 'Bikinis Tornasol | Diseños que brillan con el sol',
        enterizos: 'Comprar traje de baño enterizo | Enterizos elegantes'
    };

    // Descripciones dinámicas para optimización SEO
    const descriptions = {
        bikinis: 'Encuentra los mejores precios de bikinis tiro alto y diseños de dos piezas. Envíos a toda Venezuela desde nuestra tienda en Maracay.',
        tornasol: 'Descubre nuestra exclusiva colección de bikinis tornasol. Colores vibrantes y acabados que cambian con la luz.',
        enterizos: '¿Buscas comprar un traje de baño enterizo con estilo? Descubre nuestra colección de enterizos elegantes y calidad premium.'
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
                    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
                        {cat ? titles[cat].split('|')[0].trim() : 'Nuestra Tienda de Trajes de Baño en Maracay'}
                    </h1>

                    {/* Sub-navegación por categorías */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <Link to="/tienda/bikinis" className="nav-link">Bikinis</Link>
                        <Link to="/tienda/tornasol" className="nav-link">Tornasol</Link>
                        <Link to="/tienda/enterizos" className="nav-link">Enterizos</Link>
                    </div>

                    <ProductGrid items={filtered} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Tienda;

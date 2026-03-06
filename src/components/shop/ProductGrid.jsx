/**
 * @file components\shop\ProductGrid.jsx
 * @description Rejilla de productos para la vitrina de L'Borgina.
 * Muestra las tarjetas de bikinis, enterizos y otros modelos disponibles en Maracay.
 */

import React from 'react';
import { createWhatsAppUrl } from '../../constants/whatsapp';

/**
 * Componente de tarjeta de producto individual.
 */
const ProductCard = ({ product }) => {
    const handleWhatsAppClick = () => {
        // Silenciamos audio si está sonando al salir a WhatsApp
        window.dispatchEvent(new Event('silence-audio'));
        window.open(createWhatsAppUrl(product.name), '_blank');
    };

    return (
        <article className="product-card">
            {product.badge && <span className="product-badge">{product.badge}</span>}
            <div className="product-image-wrapper">
                <picture>
                    {product.imageWebp && <source srcSet={product.imageWebp} type="image/webp" />}
                    <img
                        src={product.imageUrl}
                        alt={`Comprar ${product.name} - Traje de baño exclusivo en Venezuela`}
                        className="product-image"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product.tag && <p className="product-tag">{product.tag}</p>}
                <p className="product-description">{product.description}</p>
                <div className="product-bottom">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button
                        className="details-button"
                        onClick={handleWhatsAppClick}
                    >
                        Preguntar por WhatsApp
                    </button>
                </div>
            </div>
        </article>
    );
};

/**
 * Componente que renderiza una cuadrícula de productos.
 * @param {Object} props - Component props.
 * @param {Array} props.items - Listado de productos a mostrar.
 */
const ProductGrid = ({ items }) => (
    <div className="product-grid">
        {items.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
);

export default ProductGrid;

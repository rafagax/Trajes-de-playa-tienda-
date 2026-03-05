/**
 * @file pages\Articulo.jsx
 * @description Vista detallada de un artículo del blog de L'Borgina.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogPosts } from '../data/blog';

/**
 * Componente funcional para un artículo individual del blog.
 */
const Articulo = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="app" style={{ color: 'white', textAlign: 'center', padding: '5rem' }}>
                <h1>Artículo no encontrado</h1>
                <Link to="/blog" className="primary-btn">Volver al Blog</Link>
            </div>
        );
    }

    return (
        <div className="app">
            <Helmet>
                <title>{post.title} | Blog L'Borgina</title>
                <meta name="description" content={post.description} />
            </Helmet>
            <header className="shop-header"><Navbar /></header>
            <main className="shop-main">
                <div className="blog-container" style={{ padding: '3rem 1.5rem' }}>
                    <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>← Volver al Blog</Link>
                    <span className="post-category">{post.category}</span>
                    <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>{post.title}</h1>
                    <div className="article-image-full" style={{ width: '100%', borderRadius: '25px', overflow: 'hidden', marginBottom: '2rem' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: post.content }}></div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '25px', textAlign: 'center' }}>
                        <h3>¿Te gustó este artículo?</h3>
                        <p>Mira nuestra colección completa de trajes de baño en Maracay.</p>
                        <Link to="/" className="primary-btn" style={{ marginTop: '1rem' }}>Ir a la Tienda ✦</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Articulo;

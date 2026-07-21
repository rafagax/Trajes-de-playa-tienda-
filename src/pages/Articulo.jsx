/**
 * @file pages\Articulo.jsx
 * @description Vista detallada de un artículo del blog de L'Borgina.
 */

import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogPosts } from '../data/blog';
import NotFound from './NotFound';

/**
 * Componente funcional para un artículo individual del blog.
 */
const Articulo = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) return <NotFound />;

    return (
        <div className="app">
            <Seo
                title={`${post.title} | Blog L'Borgina`}
                description={post.description}
                path={`/blog/${id}`}
                type="article"
            />
            <header className="shop-header"><Navbar /></header>
            <main className="shop-main">
                <div className="blog-container" style={{ padding: '0.5rem 1.5rem 3rem' }}>
                    <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>← Volver al Blog</Link>
                    <span className="post-category">{post.category}</span>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="blog-image-wrapper" style={{ marginBottom: '3rem' }}>
                        <picture>
                            <source srcSet={post.imageWebp || post.image} type="image/webp" />
                            <img src={post.image} alt={post.title} className="blog-inline-image" loading="lazy" />
                        </picture>
                    </div>
                    <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: post.content }}></div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '25px', textAlign: 'center' }}>
                        <h3>¿Te gustó este artículo?</h3>
                        <p>Mira nuestra colección completa de trajes de baño en Maracay.</p>
                        <Link to="/" className="primary-btn" style={{ marginTop: '1rem' }}>Ir a la tienda</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Articulo;

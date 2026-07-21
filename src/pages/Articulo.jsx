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
import { WHATSAPP_FLOAT_URL } from '../constants/whatsapp';
import { absoluteUrl, SITE_NAME } from '../seo/site';
import NotFound from './NotFound';

const formatArticleDate = (date) => new Intl.DateTimeFormat('es-VE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
}).format(new Date(`${date}T12:00:00Z`));

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

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.imageWebp || post.image),
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: absoluteUrl('/'),
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: absoluteUrl('/'),
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/icon-512.png'),
            },
        },
        mainEntityOfPage: absoluteUrl(`/blog/${id}`),
    };

    return (
        <div className="app">
            <Seo
                title={`${post.title} | Blog L'Borgina`}
                description={post.description}
                path={`/blog/${id}`}
                image={post.imageWebp || post.image}
                imageAlt={post.imageAlt || post.title}
                type="article"
            >
                <meta property="article:published_time" content={post.datePublished} />
                <meta property="article:modified_time" content={post.dateModified} />
                <meta property="article:author" content={post.author} />
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Seo>
            <header className="shop-header"><Navbar /></header>
            <main className="shop-main">
                <div className="blog-container" style={{ padding: '0.5rem 1.5rem 3rem' }}>
                    <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>← Volver al Blog</Link>
                    <span className="post-category">{post.category}</span>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="article-meta" aria-label="Información del artículo">
                        <span>Por <strong>{post.author}</strong></span>
                        <span>Publicado el <time dateTime={post.datePublished}>{formatArticleDate(post.datePublished)}</time></span>
                        <span>Actualizado el <time dateTime={post.dateModified}>{formatArticleDate(post.dateModified)}</time></span>
                    </div>
                    <div className="blog-image-wrapper" style={{ marginBottom: '3rem' }}>
                        <picture>
                            <source srcSet={post.imageWebp || post.image} type="image/webp" />
                            <img src={post.image} alt={post.imageAlt || post.title} className="blog-inline-image" loading="eager" fetchPriority="high" />
                        </picture>
                    </div>
                    <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: post.content }}></div>

                    <div className="article-closing-cta">
                        <h3>¿Te gustó este artículo?</h3>
                        <p>Explora los modelos disponibles o escríbenos para recibir orientación antes de elegir.</p>
                        <div className="article-closing-actions">
                            <Link to="/" className="primary-btn">Ver colección</Link>
                            <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer" className="secondary-btn">Orientación por WhatsApp</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Articulo;

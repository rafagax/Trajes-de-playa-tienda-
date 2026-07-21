/**
 * @file pages\Blog.jsx
 * @description Sección de artículos y consejos sobre trajes de baño y tendencias en Maracay.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogPosts } from '../data/blog';

const formatArticleDate = (date) => new Intl.DateTimeFormat('es-VE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
}).format(new Date(`${date}T12:00:00Z`));

/**
 * Componente funcional para el listado del Blog.
 */
const Blog = () => (
    <div className="app">
        <Seo
            title="Blog de moda playera y bikinis | L'Borgina"
            description="Guías sobre cuidado de trajes de baño, tendencias de bikinis y destinos de playa en Aragua preparadas por L'Borgina."
            path="/blog"
        />
        <header className="shop-header"><Navbar /></header>
        <main className="shop-main">
            <div className="blog-container">
                <header className="blog-page-header">
                    <h1 className="section-title" style={{ color: 'white', fontSize: '2.5rem' }}>L'Borgina Blog</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Tendencias, cuidado de prendas y mucho más sobre bikinis en Maracay.</p>
                </header>

                <div className="blog-posts-grid">
                    {[...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).map(post => (
                        <article key={post.id} className="blog-post-card">
                            <div className="post-image-container">
                                <picture>
                                    <source srcSet={post.listImageWebp || post.listImage || post.imageWebp || post.image} type="image/webp" />
                                    <img src={post.listImage || post.image} alt={post.imageAlt || post.title} loading="lazy" />
                                </picture>
                            </div>
                            <div className="post-content">
                                <span className="post-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <div className="post-meta">
                                    <span>Por {post.author}</span>
                                    <time dateTime={post.datePublished}>{formatArticleDate(post.datePublished)}</time>
                                </div>
                                <p>{post.description}</p>
                                <Link to={`/blog/${post.id}`} className="read-more" style={{ textDecoration: 'none' }}>Leer más</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default Blog;

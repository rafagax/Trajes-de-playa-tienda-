/**
 * @file pages\Blog.jsx
 * @description Sección de artículos y consejos sobre trajes de baño y tendencias en Maracay.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogPosts } from '../data/blog';

/**
 * Componente funcional para el listado del Blog.
 */
const Blog = () => (
    <div className="app">
        <Helmet>
            <title>Blog de Moda Playera | Tendencias de Bikinis y Trajes de Baño</title>
            <meta name="description" content="Descubre tips de estilo, tendencias de trajes de baño en Maracay y consejos para cuidar tus bikinis en nuestro Blog oficial." />
        </Helmet>
        <header className="shop-header"><Navbar /></header>
        <main className="shop-main">
            <div className="blog-container">
                <header className="blog-page-header">
                    <h1 className="section-title" style={{ color: 'white', fontSize: '2.5rem' }}>L'Borgina Blog: Verano Infinito 🌊</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Tendencias, cuidado de prendas y mucho más sobre bikinis en Maracay.</p>
                </header>

                <div className="blog-posts-grid">
                    {blogPosts.map(post => (
                        <article key={post.id} className="blog-post-card">
                            <div className="post-image-container">
                                <picture>
                                    <source srcSet={post.imageWebp || post.image} type="image/webp" />
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                </picture>
                            </div>
                            <div className="post-content">
                                <span className="post-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <Link to={`/blog/${post.id}`} className="read-more" style={{ textDecoration: 'none' }}>Leer más ✦</Link>
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

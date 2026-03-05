/**
 * @file pages\Contacto.jsx
 * @description Página de contacto e historia de L'Borgina, tu tienda de trajes de baño en Maracay.
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { WHATSAPP_FLOAT_URL } from '../constants/whatsapp';

/**
 * Componente funcional para la página de Contacto.
 */
const Contacto = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulación de envío de formulario
    };

    return (
        <div className="app">
            <Helmet>
                <title>Contacto y Quiénes Somos | Tienda de trajes de baño Maracay</title>
                <meta name="description" content="Conoce la historia de L'Borgina y contacta con nuestra tienda de trajes de baño en Maracay. Asesoría personalizada por WhatsApp para tus compras online." />
            </Helmet>
            <header className="shop-header"><Navbar /></header>
            <main className="shop-main" style={{ padding: '2rem 1.5rem 0' }}>
                <div className="contact-container">
                    {/* 1. SECCIÓN WHATSAPP (Aparece primero en móvil) */}
                    <section className="contact-info-section">
                        <div className="direct-contact-cards">
                            <div className="contact-card-small">
                                <h4>WhatsApp Directo</h4>
                                <p>¿Quieres una respuesta rápida? Escribenos al WhatsApp</p>
                                <p>  </p>
                                <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer" style={{
                                    color: 'rgb(37, 211, 102)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    flexDirection: 'row-reverse'
                                }}>
                                    <WhatsAppIcon /> Chatear ahora
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* 2. SECCIÓN FORMULARIO (Aparece segundo en móvil) */}
                    <section className="contact-form-section">
                        {submitted ? (
                            <div className="form-success-message">
                                <h3>¡Mensaje enviado con éxito! ✨</h3>
                                <p>Te responderemos lo antes posible por correo electrónico.</p>
                                <button className="primary-btn" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2>Cuéntanos qué necesitas</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre completo</label>
                                    <input type="text" id="name" name="name" placeholder="Ej. Maria Perez" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" id="email" name="email" placeholder="maria@ejemplo.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea id="message" name="message" rows="4" placeholder="¿En qué podemos ayudarte con tus bikinis?" required></textarea>
                                </div>
                                <button type="submit" className="primary-btn form-submit-btn">Enviar Mensaje ✦</button>
                            </form>
                        )}
                    </section>

                    {/* 3. SECCIÓN TÍTULO COMUNIDAD (Aparece tercero en móvil) */}
                    <header className="contact-header-section">
                        <h1 className="section-title">✨ Conéctate con L'Borgina ✨</h1>
                        <p className="contact-description">
                            Estamos activos en todas nuestras plataformas de redes sociales para brindarte la mejor atención.
                            Síguenos para no perderte las nuevas colecciones, ofertas exclusivas y tips de moda playera.
                        </p>
                    </header>

                    {/* 4. SECCIÓN REDES SOCIALES (Aparece cuarto en móvil) */}
                    <section className="social-info-section">
                        <div className="contact-card-small" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <h4>Nuestras Redes Sociales</h4>
                            <p>¿Quieres ver nuestros últimos diseños? Visita nuestras redes sociales</p>
                            <br />
                            <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                <a href="https://www.instagram.com/lborgina/" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.35a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" /></svg>
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.tiktok.com/@l.borgina" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68l.06.67a6.32 6.32 0 0 0 10.66 4.31l.16-.18V8.67a8.41 8.41 0 0 0 4.7 1.47V6.69z" /></svg>
                                    <span>TikTok</span>
                                </a>
                                <a href="https://www.facebook.com/share/19GGDVHqeM/" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    <span>Facebook</span>
                                </a>
                                <a href="https://youtube.com/@lborgina" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    <span>YouTube</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer showSocial={false} />
        </div>
    );
};

export default Contacto;

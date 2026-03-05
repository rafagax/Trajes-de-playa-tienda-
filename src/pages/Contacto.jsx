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
            <main className="shop-main" style={{ padding: 'rem 1.5rem 0' }}>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.tiktok.com/@l.borgina" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" /></svg>
                                    <span>TikTok</span>
                                </a>
                                <a href="https://www.facebook.com/share/19GGDVHqeM/" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    <span>Facebook</span>
                                </a>
                                <a href="https://youtube.com/@lborgina" target="_blank" rel="noopener noreferrer" className="social-item" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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

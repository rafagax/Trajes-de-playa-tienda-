/**
 * @file pages\Contacto.jsx
 * @description Página de contacto e historia de L'Borgina, tu tienda de trajes de baño en Maracay.
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
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
            <main className="shop-main" style={{ padding: '3rem 1.5rem' }}>
                <div className="contact-container">
                    <section className="contact-info-section">
                        <h1 className="section-title">💜 L'Borgina: Nuestra Historia</h1>
                        <p className="contact-description">
                            Somos una marca nacida en el corazón de <strong>Maracay</strong>, apasionada por resaltar la belleza natural de la mujer venezolana.
                            Cada pieza es seleccionada pensando en calidad, confort y ese estilo único que te hace brillar bajo el sol con los mejores trajes de baño.
                        </p>
                        <div className="direct-contact-cards">
                            <div className="contact-card-small">
                                <span className="icon">📍</span>
                                <h4>Ubicación</h4>
                                <p>Maracay, Edo. Aragua. Venezuela.</p>
                            </div>
                            <div className="contact-card-small">
                                <span className="icon">💬</span>
                                <h4>Ventas WhatsApp</h4>
                                <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">Asesoría Inmediata</a>
                            </div>
                        </div>
                    </section>

                    <section className="contact-form-section">
                        {submitted ? (
                            <div className="form-success-message">
                                <h3>¡Mensaje enviado con éxito! ✨</h3>
                                <p>Te responderemos lo antes posible por correo electrónico.</p>
                                <button className="primary-btn" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2>Escríbenos</h2>
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
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contacto;

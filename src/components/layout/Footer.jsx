/**
 * @file components\layout\Footer.jsx
 * @description Pie de página de L'Borgina.
 * Contiene enlaces a redes sociales y mensajes de marca enfocados en bikinis y trajes de baño.
 */

import React from 'react';

/**
 * Componente de enlaces a redes sociales.
 */
const SocialLinks = () => (
    <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
        <a href="https://www.instagram.com/lborgina/" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro Instagram de trajes de baño" onClick={() => window.dispatchEvent(new Event('silence-audio'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        </a>
        <a href="https://www.tiktok.com/@l.borgina" target="_blank" rel="noopener noreferrer" aria-label="Ver TikTok de bikinis en Maracay" onClick={() => window.dispatchEvent(new Event('silence-audio'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-brand-tiktok">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
            </svg>
        </a>
        <a href="https://youtube.com/@lborgina" target="_blank" rel="noopener noreferrer" aria-label="Ver canal de YouTube de moda playera" onClick={() => window.dispatchEvent(new Event('silence-audio'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
        </a>
        <a href="https://www.facebook.com/share/19GGDVHqeM/" target="_blank" rel="noopener noreferrer" aria-label="Seguir en Facebook para ofertas de trajes de baño" onClick={() => window.dispatchEvent(new Event('silence-audio'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        </a>
    </div>
);

/**
 * Footer component principal.
 */
const Footer = () => (
    <footer className="shop-footer">
        <SocialLinks />
        <p>© 2025 L'Borgina. Todos los derechos reservados.</p>
        <p style={{ marginTop: '5px', fontSize: '0.85rem' }}>
            Sitio desarrollado por <a href="https://portafolio-kpi-jv.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>Ing. Jesús Vásquez</a>
        </p>
        <small>Hecho con 💜 para que te vistas de verano todo el año. <strong>Bikinis con envío a toda Venezuela.</strong> Venta de trajes de baño online Venezuela.</small>
    </footer>
);

export default Footer;

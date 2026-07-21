/**
 * @file components\layout\Navbar.jsx
 * @description Barra de navegación principal de L'Borgina.
 * Facilita el acceso a la tienda de trajes de baño y las secciones clave.
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trajeLogo from '../../assets/LOGO-PNG.png';
import trajeLogoWebp from '../../assets/LOGO-PNG.webp';

/**
 * Navbar component.
 * @param {Object} props - Component props.
 * @param {Function} [props.onScrollToCollection] - Función opcional para hacer scroll suave a la colección en el inicio.
 */
const Navbar = ({ onScrollToCollection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);
    const handleCollectionClick = () => {
        closeMenu();
        onScrollToCollection?.();
    };

    return (
        <nav className={`navbar${isMenuOpen ? ' menu-open' : ''}`} aria-label="Navegación principal">
            <Link
                to="/"
                className="logo"
                style={{ textDecoration: 'none' }}
                title="Ir a la página de inicio de L'Borgina - Trajes de baño en Maracay"
                onClick={closeMenu}
            >
                <picture>
                    <source srcSet={trajeLogoWebp} type="image/webp" />
                    <img src={trajeLogo} alt="Logotipo de L'Borgina - Tienda de bikinis en Maracay" className="brand-logo" width="160" height="58" />
                </picture>
                <span className="logo-text">L'borgina</span>
            </Link>

            <button
                className="menu-toggle"
                type="button"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul id="primary-navigation" className="nav-links">
                {!onScrollToCollection && (
                    <li className="nav-home-mobile"><Link className="nav-link" to="/" onClick={closeMenu}>Inicio</Link></li>
                )}
                <li>
                    {onScrollToCollection ? (
                        <button className="nav-link" onClick={handleCollectionClick}>Colección</button>
                    ) : (
                        <Link className="nav-link" to="/" title="Ver catálogo de trajes de baño online" onClick={closeMenu}>Tienda</Link>
                    )}
                </li>
                <li><Link className="nav-link" to="/blog" title="Blog sobre tendencias de moda playera en Maracay" onClick={closeMenu}>Blog</Link></li>
                <li><Link className="nav-link" to="/envios" title="Políticas de envíos y devoluciones en Venezuela" onClick={closeMenu}>Envíos</Link></li>
                <li><Link className="nav-link" to="/faq" title="Preguntas frecuentes sobre trajes de baño ajustables L'Borgina" onClick={closeMenu}><span className="nav-label-desktop">Preguntas Frecuentes</span><span className="nav-label-mobile">FAQ</span></Link></li>
                <li><Link className="nav-link" to="/contacto" title="Contacta con nuestra tienda de trajes de baño en Maracay" onClick={closeMenu}>Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

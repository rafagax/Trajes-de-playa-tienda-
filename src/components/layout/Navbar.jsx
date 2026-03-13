/**
 * @file components\layout\Navbar.jsx
 * @description Barra de navegación principal de L'Borgina.
 * Facilita el acceso a la tienda de trajes de baño y las secciones clave.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import trajeLogo from '../../assets/LOGO-PNG.png';
import trajeLogoWebp from '../../assets/LOGO-PNG.webp';

/**
 * Navbar component.
 * @param {Object} props - Component props.
 * @param {Function} [props.onScrollToCollection] - Función opcional para hacer scroll suave a la colección en el inicio.
 */
const Navbar = ({ onScrollToCollection }) => (
    <nav className="navbar">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }} title="Ir a la página de inicio de L'Borgina - Trajes de baño en Maracay">
            <picture>
                <source srcSet={trajeLogoWebp} type="image/webp" />
                <img src={trajeLogo} alt="Logotipo de L'Borgina - Tienda de bikinis en Maracay" className="brand-logo" width="160" height="58" />
            </picture>
            <span className="logo-text">L'borgina</span>
        </Link>
        <ul className="nav-links">
            <li>
                {onScrollToCollection ? (
                    <button className="nav-link" onClick={onScrollToCollection}>Colección</button>
                ) : (
                    <Link className="nav-link" to="/" title="Ver catálogo de trajes de baño online">Tienda</Link>
                )}
            </li>
            <li><Link className="nav-link" to="/blog" title="Blog sobre tendencias de moda playera en Maracay">Blog</Link></li>
            <li><Link className="nav-link" to="/envios" title="Políticas de envíos y devoluciones en Venezuela">Envíos</Link></li>
            <li><Link className="nav-link" to="/faq" title="Preguntas frecuentes sobre trajes de baño ajustables L'Borgina"><span className="nav-label-desktop">Preguntas Frecuentes</span><span className="nav-label-mobile">FAQ</span></Link></li>
            <li><Link className="nav-link" to="/contacto" title="Contacta con nuestra tienda de trajes de baño en Maracay">Contacto</Link></li>
        </ul>
    </nav>
);

export default Navbar;

/**
 * @file App.jsx
 * @description Punto de entrada principal y configuración de rutas para la tienda L'Borgina.
 * Organiza la navegación entre las secciones de bikinis, enterizos y blog de trajes de baño en Maracay.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importación de Páginas
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Envios from './pages/Envios';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import Articulo from './pages/Articulo';

// Componentes Globales
import WhatsAppIcon from './components/common/WhatsAppIcon';
import { WHATSAPP_FLOAT_URL } from './constants/whatsapp';

/**
 * Componente principal de la aplicación.
 * Define la estructura de rutas y elementos globales como el botón flotante de WhatsApp.
 */
const App = () => (
  <Router>
    <div style={{ position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/tienda/:cat" element={<Tienda />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Articulo />} />
      </Routes>

      {/* Botón flotante de WhatsApp global - Venta de trajes de baño online Venezuela */}
      <a
        href={WHATSAPP_FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button-float"
        aria-label="Hablar por WhatsApp con la tienda de trajes de baño"
        onClick={() => window.dispatchEvent(new Event('silence-audio'))}
      >
        <WhatsAppIcon />
      </a>
    </div>
  </Router>
);

export default App;

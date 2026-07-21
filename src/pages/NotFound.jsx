import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => (
  <div className="app">
    <Seo
      title="Página no encontrada | L'Borgina"
      description="La página que buscas no está disponible. Regresa a la colección de trajes de baño de L'Borgina."
      noindex
    />
    <header className="shop-header"><Navbar /></header>
    <main className="shop-main" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '5rem 1.5rem', textAlign: 'center' }}>
      <div>
        <p className="section-eyebrow">Error 404</p>
        <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>Esta página no está disponible</h1>
        <p style={{ color: 'rgba(255,255,255,.75)', marginBottom: '2rem' }}>Puede que el enlace haya cambiado o que el contenido ya no exista.</p>
        <Link to="/" className="primary-btn">Volver al inicio</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;

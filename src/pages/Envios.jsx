/**
 * @file pages\Envios.jsx
 * @description Información sobre envíos de trajes de baño en Venezuela y políticas de L'Borgina.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Componente funcional para la página de Envíos.
 */
const Envios = () => (
    <div className="app">
        <Helmet>
            <title>Políticas de Envíos y Devoluciones | Bikinis con envío a toda Venezuela</title>
            <meta name="description" content="Información sobre envíos de trajes de baño en Venezuela (MRW, Zoom, Tealca) y entregas personales en Maracay. Conoce nuestras políticas de devolución." />
        </Helmet>
        <header className="shop-header"><Navbar /></header>
        <main className="shop-main" style={{ padding: '3rem 1.5rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            <h1> Envíos y Devoluciones de L'Borgina</h1>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '20px', marginTop: '2rem' }}>
                <h3> Entregas personales en Maracay</h3>
                <p>Realizamos entregas sin costo adicional en centros comerciales de Maracay (Las Américas, Los Aviadores, Hyper Jumbo) o plaza de Turmero con previo acuerdo.</p>

                <h3 style={{ marginTop: '1.5rem' }}> Envíos Nacionales (Toda Venezuela)</h3>
                <p>Tus trajes de baño viajan seguros con <strong>MRW, Zoom y Tealca</strong>. Despachos rápidos para que estrenes tus bikinis en tiempo récord.</p>

                <h3 style={{ marginTop: '1.5rem' }}> Políticas de Devolución por Higiene</h3>
                <p>Por razones de salud, <strong>no aceptamos devoluciones de las partes inferiores</strong> de los trajes de baño. Si hay un defecto de fábrica, tienes 48h para reportarlo.</p>
            </div>
        </main>
        <Footer />
    </div>
);

export default Envios;

/**
 * @file pages\Envios.jsx
 * @description Información sobre envíos de trajes de baño en Venezuela y políticas de L'Borgina.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Iconos SVG definidos localmente para mantener el estilo limpio de la marca.
 */
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

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
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TruckIcon /> Envíos y Devoluciones de L'Borgina
            </h1>

            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '20px', marginTop: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f0abfc' }}>
                    <MapPinIcon /> Entregas personales en Maracay
                </h3>
                <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Realizamos entregas sin costo adicional en centros comerciales de Maracay (Las Américas, Los Aviadores, Hyper Jumbo) o plaza de Turmero con previo acuerdo.</p>

                <h3 style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#f0abfc' }}>
                    <TruckIcon /> Envíos Nacionales (Toda Venezuela)
                </h3>
                <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Tus trajes de baño viajan seguros con <strong>MRW, Zoom y Tealca</strong>. Despachos rápidos para que estrenes tus bikinis en tiempo récord.</p>

                <h3 style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#f0abfc' }}>
                    <ShieldIcon /> Políticas de Devolución por Higiene
                </h3>
                <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Por razones de salud, <strong>no aceptamos devoluciones de las partes inferiores</strong> de los trajes de baño. Si hay un defecto de fábrica, tienes 48h para reportarlo.</p>
            </div>
        </main>
        <Footer />
    </div>
);

export default Envios;

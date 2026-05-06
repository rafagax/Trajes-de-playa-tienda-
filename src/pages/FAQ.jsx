/**
 * @file pages\FAQ.jsx
 * @description Página de Preguntas Frecuentes de L'Borgina.
 * Incluye video tutorial de ajuste de trajes de baño y FAQs sobre compras.
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { WHATSAPP_FLOAT_URL } from '../constants/whatsapp';

/**
 * Datos de preguntas frecuentes agrupadas por categoría.
 */
const FAQ_DATA = [
  {
    categoria: '👙 Sobre los Trajes de Baño',
    preguntas: [
      {
        id: 'faq-talla',
        pregunta: '¿Los trajes de baño son talla única?',
        respuesta:
          'Sí, todos nuestros trajes de baño son talla única ajustable. Gracias a su diseño innovador con cordones y lazos regulables, se adaptan perfectamente a cuerpos desde XS hasta XL. ¡El video de arriba te muestra cómo ajustarlos de distintas formas!',
      },
      {
        id: 'faq-ajuste',
        pregunta: '¿Cómo ajusto mi traje de baño para que me quede perfecto?',
        respuesta:
          'Nuestros trajes tienen múltiples puntos de ajuste: los lazos de los hombros, los laterales de la cintura y la parte inferior. Puedes usarlos de diferentes maneras para crear distintos looks. Te recomendamos ver el video tutorial en esta página donde mostramos todos los estilos posibles.',
      },
      {
        id: 'faq-material',
        pregunta: '¿Son transparentes los trajes de baño?',
        respuesta:
          'No, para nada. Todos nuestros trajes de baño están confeccionados con doble tela y forro interior, lo que garantiza total comodidad y cobertura. Usamos tela especializada de alta calidad para trajes de baño, resistente al cloro, al sol y al agua salada, manteniendo su forma y color con el uso.',
      },
      {
        id: 'faq-tornasol',
        pregunta: '¿Qué son los trajes tornasol?',
        respuesta:
          'Los trajes tornasol tienen un efecto iridiscente especial: cambian de color según el ángulo de la luz y el movimiento. Son perfectos para lucir un look único y llamativo en la playa o piscina. Puedes ver nuestra colección tornasol en la tienda.',
      },
    ],
  },
  {
    categoria: '🛒 Sobre las Compras',
    preguntas: [
      {
        id: 'faq-como-comprar',
        pregunta: '¿Cómo hago un pedido?',
        respuesta:
          'Para hacer tu pedido, simplemente elige el traje que te guste en nuestra tienda y haz clic en "Pedir por WhatsApp". Te redirigirá directamente a nuestra cuenta oficial donde podrás confirmar tu pedido, color y forma de entrega con una de nuestras asesoras.',
      },
      {
        id: 'faq-pago',
        pregunta: '¿Qué métodos de pago aceptan?',
        respuesta:
          'Aceptamos pago móvil (Venezuela), transferencia bancaria en bolívares, Zelle, y divisas en efectivo. Nuestras asesoras te indicarán los datos de pago al confirmar tu pedido por WhatsApp.',
      },
      {
        id: 'faq-mayoreo',
        pregunta: '¿Tienen precios al mayor?',
        respuesta:
          'Sí, manejamos precios especiales para compras al mayor (mínimo 6 piezas). Si te interesa revender nuestros trajes de baño o hacer una compra grande, contáctanos por WhatsApp para recibir nuestra lista de precios al mayor.',
      },
      {
        id: 'faq-disponibilidad',
        pregunta: '¿Cómo sé si hay disponibilidad de un traje específico?',
        respuesta:
          'Toda la colección mostrada en nuestra tienda está disponible. Sin embargo, dado que manejamos stock limitado de algunos modelos, te recomendamos consultar por WhatsApp para confirmar disponibilidad antes de realizar tu pago.',
      },
    ],
  },
  {
    categoria: '🚚 Sobre los Envíos',
    preguntas: [
      {
        id: 'faq-envio-donde',
        pregunta: '¿Hacen envíos a todo Venezuela?',
        respuesta:
          'Sí, enviamos a todo el territorio nacional a través de empresas de encomiendas. Trabajamos con MRW, Zoom y encomiendas locales. También ofrecemos entrega en mano en Maracay, estado Aragua.',
      },
      {
        id: 'faq-envio-tiempo',
        pregunta: '¿Cuánto tarda en llegar mi pedido?',
        respuesta:
          'Los envíos dentro de Maracay tardan 1-2 días hábiles. Los envíos nacionales pueden tardar entre 2 y 5 días hábiles dependiendo de la empresa de encomiendas y tu ciudad. Te informaremos el número de seguimiento una vez despachado.',
      },
      {
        id: 'faq-envio-costo',
        pregunta: '¿El envío tiene costo adicional?',
        respuesta:
          'Sí, el costo de envío corre por cuenta del comprador y varía según la empresa de encomiendas y tu ubicación. En Maracay ofrecemos entrega en mano sin costo adicional. Consulta en nuestra sección de Envíos para más detalles.',
      },
      {
        id: 'faq-cambios',
        pregunta: '¿Puedo cambiar o devolver mi traje de baño?',
        respuesta:
          'Por cuestiones de higiene, no realizamos cambios ni devoluciones en trajes de baño ya usados. Sin embargo, si el producto llegó defectuoso o dañado, puedes contactarnos dentro de las primeras 24 horas de recibir tu pedido con fotos del problema para buscar una solución.',
      },
    ],
  },
  {
    categoria: '📦 Sobre los Pedidos',
    preguntas: [
      {
        id: 'faq-seguimiento',
        pregunta: '¿Cómo puedo rastrear mi pedido?',
        respuesta:
          'Una vez que despachemos tu pedido, te enviaremos por WhatsApp el número de tracking y la empresa de encomiendas para que puedas rastrear tu paquete en tiempo real.',
      },
      {
        id: 'faq-embalaje',
        pregunta: '¿Cómo viene empacado el traje de baño?',
        respuesta:
          'Todos nuestros trajes vienen en un empaque cuidado y discreto, listo para regalo. Nos aseguramos de que llegue en perfectas condiciones.',
      },
      {
        id: 'faq-mayorista',
        pregunta: '¿Trabajan con revendedoras?',
        respuesta:
          'Sí, tenemos un programa especial para revendedoras con precios preferenciales y catálogo exclusivo. Si te interesa trabajar con nosotras, escríbenos por WhatsApp con el asunto "Quiero ser revendedora" y una asesora se comunicará contigo.',
      },
    ],
  },
];

/**
 * Componente de ítem de pregunta frecuente con acordeón animado.
 */
const FAQItem = ({ pregunta, respuesta, id }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={`faq-item ${abierto ? 'faq-item--open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls={`respuesta-${id}`}
        id={`pregunta-${id}`}
      >
        <span>{pregunta}</span>
        <span className="faq-icon" aria-hidden="true">
          {abierto ? '−' : '+'}
        </span>
      </button>
      <div
        id={`respuesta-${id}`}
        role="region"
        aria-labelledby={`pregunta-${id}`}
        className="faq-answer"
        style={{ maxHeight: abierto ? '400px' : '0' }}
      >
        <p>{respuesta}</p>
      </div>
    </div>
  );
};

/**
 * Componente principal de la página de Preguntas Frecuentes.
 */
const FAQ = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Preguntas Frecuentes | Trajes de Baño Ajustables L'Borgina Maracay</title>
        <meta
          name="description"
          content="Resuelve todas tus dudas sobre nuestros trajes de baño ajustables talla única de L'Borgina. Cómo ajustarlos, cómo comprar, envíos a toda Venezuela y métodos de pago."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes bikinis, traje de baño ajustable, talla única bikini Venezuela, cómo usar bikini ajustable, envíos trajes de baño Venezuela, L'Borgina FAQ"
        />
        <link rel="canonical" href="https://bikinislborgina.vercel.app/faq" />
        {/* Schema.org FAQPage para SEO enriquecido en Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_DATA.flatMap((cat) =>
              cat.preguntas.map((faq) => ({
                '@type': 'Question',
                name: faq.pregunta,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.respuesta,
                },
              }))
            ),
          })}
        </script>
      </Helmet>

      <header className="shop-header">
        <Navbar />
      </header>

      <main className="shop-main faq-main">
        {/* ── HERO DE LA SECCIÓN ── */}
        <div className="faq-hero">
          <span className="faq-hero-badge">✨ Centro de Ayuda</span>
          <h1 className="faq-hero-title">Preguntas Frecuentes</h1>
          <p className="faq-hero-subtitle">
            Todo lo que necesitas saber sobre nuestros trajes de baño ajustables y el proceso de
            compra. Si no encuentras tu respuesta, ¡escríbenos!
          </p>
        </div>

        {/* ── SECCIÓN VIDEO TUTORIAL ── */}
        <section className="faq-video-section" aria-labelledby="video-titulo">
          <div className="faq-video-header">
            <span className="faq-section-badge">🎬 Video Tutorial</span>
            <h2 id="video-titulo" className="faq-section-title">
              ¿Cómo ajustar tu traje de baño?
            </h2>
            <p className="faq-section-desc">
              Nuestros trajes son <strong>talla única ajustable</strong>. En este video te
              mostramos todas las formas de usarlos y ajustarlos para lucir perfecta.
            </p>
          </div>

          <div className="faq-video-wrapper">
            <div className="faq-video-container">
              {/*
               * INSTRUCCIÓN PARA EL PROPIETARIO DEL SITIO:
               * Reemplaza el src del iframe con el enlace embed de tu video de YouTube.
               * Ejemplo: si tu video es https://www.youtube.com/watch?v=ABC123
               * El src del iframe debe ser: https://www.youtube.com/embed/ABC123
               *
               * Para obtener el enlace embed:
               * 1. Abre tu video en YouTube
               * 2. Haz clic en "Compartir" → "Insertar"
               * 3. Copia el src del código iframe que te da YouTube
               */}
              <iframe
                className="faq-video-iframe"
                src="https://www.youtube.com/embed/M1Vf2NI0Xuw"
                title="Tutorial: Cómo usar y ajustar tu traje de baño L'Borgina - Talla única ajustable"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                width="560"
                height="315"
              />
            </div>
            <div className="faq-video-tips">
              <h3>💡 En el video verás:</h3>
              <ul>
                <li>✅ Cómo ajustar los lazos superiores</li>
                <li>✅ Diferentes estilos con el mismo traje</li>
                <li>✅ Tips para un ajuste perfecto</li>
                <li>✅ Cómo verse increíble en la playa</li>
              </ul>
              <a
                href={WHATSAPP_FLOAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-whatsapp-cta"
              >
                💬 ¿Más dudas? Escríbenos
              </a>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN PREGUNTAS FRECUENTES ── */}
        <section className="faq-questions-section" aria-label="Preguntas frecuentes">
          <div className="faq-questions-header">
            <span className="faq-section-badge">❓ FAQ</span>
            <h2 className="faq-section-title">Respuestas a tus preguntas</h2>
            <p className="faq-section-desc">
              Haz clic en cada pregunta para ver la respuesta.
            </p>
          </div>

          <div className="faq-categories">
            {FAQ_DATA.map((categoria) => (
              <div key={categoria.categoria} className="faq-category">
                <h3 className="faq-category-title">{categoria.categoria}</h3>
                <div className="faq-list">
                  {categoria.preguntas.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      id={faq.id}
                      pregunta={faq.pregunta}
                      respuesta={faq.respuesta}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="faq-cta-section" aria-label="Contactar a L'Borgina">
          <div className="faq-cta-card">
            <span style={{ fontSize: '3rem' }}>🤔</span>
            <h2>¿No encontraste tu respuesta?</h2>
            <p>
              Nuestras asesoras están disponibles en WhatsApp para ayudarte con cualquier consulta
              sobre nuestros trajes de baño, pedidos y envíos.
            </p>
            <a
              href={WHATSAPP_FLOAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-btn"
              id="btn-whatsapp-faq"
            >
              💬 Chatear por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer showSocial={false} />
    </div>
  );
};

export default FAQ;

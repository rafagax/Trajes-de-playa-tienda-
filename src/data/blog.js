/**
 * @file data\blog.js
 * @description Artículos del blog de L'Borgina sobre moda playera, cuidados y tendencias de bikinis en Maracay.
 */

import model1 from '../assets/modelo-1.jfif';
import model1Webp from '../assets/modelo-1.webp';
import model5 from '../assets/modelo-5.jfif';
import model5Webp from '../assets/modelo-5.webp';
import model8 from '../assets/modelo-8.jfif';
import model8Webp from '../assets/modelo-8.webp';

/**
 * Array de posts del blog.
 * @type {Array<{id: string, category: string, title: string, description: string, content: string, image: string}>}
 */
export const blogPosts = [
  {
    id: 'colores-2026',
    category: 'TENDENCIAS',
    title: 'Bikinis 2026: Los colores que dominarán esta temporada',
    description: 'Desde el lila lavanda hasta el verde eléctrico, descubre qué tonos serán tendencia este año en las playas venezolanas.',
    content: `
      <p>El 2026 llega cargado de energía y frescura. En **L'Borgina**, hemos analizado las pasarelas y el estilo de calle para traerte lo último en moda playera.</p>
      
      <h3>1. Lavanda Dream</h3>
      <p>El color morado lavanda sigue siendo el rey. Es un tono romántico que resalta el bronceado de forma espectacular.</p>
      
      <h3>2. Neón Eléctrico</h3>
      <p>Para las que buscan no pasar desapercibidas, el verde menta y el amarillo neón vuelven con fuerza. Ideales para fiestas en la piscina o días de sol intenso.</p>
      
      <h3>3. Clásicos Atemporales</h3>
      <p>El negro y el rojo borgoña nunca mueren. Son piezas elegantes que toda mujer debe tener en su maleta de viaje.</p>
    `,
    image: model1,
    imageWebp: model1Webp
  },
  {
    id: 'cuidado-bikinis',
    category: 'CONSEJOS',
    title: 'Guía definitiva para que tus bikinis duren años',
    description: 'El cloro y el sol pueden dañar las telas. Te enseñamos los trucos de lavado para mantener los colores vibrantes.',
    content: `
      <p>Invertir en un buen traje de baño es importante, pero saber cuidarlo es vital para que mantenga su forma y color original.</p>
      
      <h3>Lavado a mano</h3>
      <p>Nunca metas tus bikinis en la lavadora. El calor y la agitación rompen las fibras de lycra. Usa agua fría y jabón neutro.</p>
      
      <h3>Secado a la sombra</h3>
      <p>El sol directo es el peor enemigo de los colores. Seca tus prendas a la sombra y nunca las exprimas con fuerza.</p>
    `,
    image: model5,
    imageWebp: model5Webp
  },
  {
    id: 'playas-aragua',
    category: 'DESTINOS',
    title: '5 Playas de Aragua ideales para lucir tu L\'Borgina',
    description: 'De Cata a Cepe: un recorrido por los mejores paraísos cercanos a Maracay para tu próxima escapada.',
    content: `
      <p>Viviendo en Maracay, tenemos la suerte de tener el paraíso a pocos kilómetros. Aquí te dejamos nuestro top 5:</p>
      
      <ul>
        <li><strong>Bahía de Cata:</strong> El clásico por excelencia, perfecto para fotos con el mar azul de fondo.</li>
        <li><strong>La Ciénaga:</strong> Aguas cristalinas y tranquilas para lucir tus bikinis más delicados.</li>
        <li><strong>Cepe:</strong> Para las que buscan aventura y un contacto más puro con la naturaleza.</li>
        <li><strong>Choroní:</strong> Estilo y tradición en un solo lugar.</li>
        <li><strong>Cuyagua:</strong> El spot favorito para las amantes del surf y el estilo deportivo.</li>
      </ul>
    `,
    image: model8,
    imageWebp: model8Webp
  }
];

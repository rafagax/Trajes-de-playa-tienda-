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
import model9Webp from '../assets/modelo-9.webp';
import model10Webp from '../assets/modelo-10.webp';
import traje1Webp from '../assets/traje de baño 1.webp';
import traje2Webp from '../assets/traje de baño 2.webp';
import traje5Webp from '../assets/traje de baño 5.webp';
import traje6Webp from '../assets/traje de baño 6.webp';
import tornasol1 from '../assets/tornasol1.webp';
import tornasol2 from '../assets/tornasol2.webp';
import tornasol3 from '../assets/tornasol3.webp';
import tornasol4 from '../assets/tornasol4.webp';
import choroniWebp from '../assets/Playa_Grande,_Choroní,_Aragua.webp';
import cataWebp from '../assets/costas-de-aragua-venezuela.webp';
import cienagaWebp from '../assets/La-ciénaga.webp';
import cepeWebp from '../assets/cepe-aragua-venezuela.webp';
import cuyaguaWebp from '../assets/Cuyagua.webp';

/**
 * Array de posts del blog.
 * @type {Array<{id: string, category: string, title: string, description: string, content: string, image: string}>}
 */
export const blogPosts = [
  {
    id: 'coleccion-tornasol-2026',
    category: 'NUEVA COLECCIÓN',
    title: 'Bikinis Tornasol: La tendencia que domina las playas en 2026',
    description: 'Bikinis que cambian de color con la luz del sol. Descubre por qué la colección Tornasol es el must-have de este año.',
    content: `
      <p>Este 2026, la moda playera da un salto hacia lo futurista y fantástico con nuestra nueva colección <strong>Tornasol</strong>. Inspirada en los reflejos del mar y los colores del prisma, estas piezas están diseñadas para brillar con cada movimiento, ofreciendo una apariencia única que te hará destacar en cualquier playa, piscina o yate.</p>
      
      <p>Atrás quedaron los días en que un traje de baño debía ser simple o monótono. La tecnología textil ha avanzado y en <a href="/tienda" class="blog-link">L'Borgina</a> hemos abrazado estas innovaciones para traerte piezas de lujo accesibles. Los tejidos iridiscentes son la gran apuesta del año y te contamos exactamente por qué no querrás quitártelos esta temporada.</p>

      <div class="blog-image-wrapper">
        <img src="${tornasol2}" alt="Modelo luciendo traje de baño tornasol en la playa" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>1. El Efecto Iridiscente Único y Tecnológico</h3>
      <p>Nuestros modelos están fabricados utilizando telas premium con tecnología iridiscente, lo que significa que el material interactúa directa y dinámicamente con las fuentes de luz. A medida que te mueves bajo el sol radiante de playas espectaculares como la <a href="/blog/playas-aragua" class="blog-link">Bahía de Cata o Choroní</a>, tu traje de baño exhibirá un espectro de colores cambiantes, que van desde púrpuras profundos hasta sofisticados verdes esmeralda.</p>
      
      <p>Esta capacidad de reflejar la luz crea un efecto visual hipnótico. Las fotografías al aire libre, sin filtros, parecieran tomadas en un estudio. Es un nivel de fotogenia que garantiza que tus fotos de Instagram sean absolutamente inolvidables.</p>

      <div class="blog-image-wrapper">
        <img src="${tornasol3}" alt="Bikini colección tornasol detalle iridiscente" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>2. Diseños Vanguardistas y Exclusivos</h3>
      <p>La colección Tornasol 2026 ha sido creada pensando en la diversidad de nuestros cuerpos y preferencias de estilo. Para las que buscan un look sensual y misterioso, ofrecemos piezas enterizas con cortes atrevidos, o bikinis de talle alto con nudos elegantes. Y si tu estilo es más minimalista, encontrarás modelos donde la magia recae íntegramente en la tela y en la sencillez de los cortes láser.</p>
      
      <p>Cada pieza ha sido probada durante meses en agua salada y cloro para asegurar que los colores resplandecientes se mantengan igual de brillantes que el primer día. (Para saber más de cómo lavar estas piezas, visita nuestra <a href="/blog/cuidado-bikinis" class="blog-link">Guía definitiva de cuidados</a>).</p>

      <div class="blog-image-wrapper">
        <img src="${tornasol4}" alt="Diseños de bikinis tornasol en Venezuela" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>3. Magnetismo Natural: La Hora Dorada</h3>
      <p>El punto más alto de lucir la línea Tornasol es en el atardecer o la llamada <em>Golden Hour</em>. La luz suave resalta los contrastes de la prenda, creando destellos espectaculares que combinan perfectamente con todos los tonos de piel, iluminando tu bronceado y resaltando tu silueta de forma natural, sin depender de otros <a href="/blog/colores-2026" class="blog-link">tonos neones que igual dominan esta temporada</a>.</p>
      
      <div class="blog-cta-box">
        <h3>¿Estás lista para deslumbrar este verano?</h3>
        <p>Atrévete a llevar el brillo más deslumbrante del 2026 y sé la envidia en todas tus escapadas tropicales.</p>
        <div style="margin-top: 1.5rem">
          <a href="/tienda/tornasol" class="primary-btn">Comprar Colección Tornasol ✦</a>
        </div>
      </div>
    `,
    image: tornasol1,
    imageWebp: tornasol1
  },
  {
    id: 'playas-aragua',
    category: 'DESTINOS',
    title: '5 Playas de Aragua ideales para lucir tu L\'Borgina',
    description: 'De Cata a Cepe: un recorrido por los mejores paraísos cercanos a Maracay para tu próxima escapada.',
    content: `
      <p>Viviendo en Maracay o de visita en la región central, tenemos la inmensa suerte de contar con el paraíso a pocos kilómetros de distancia. La costa aragüeña es famosa no solo por sus montañas impresionantes que chocan con el mar, sino por la calidez de sus aguas. ¡El escenario perfecto para estrenar ese <a href="/tienda/bikinis" class="blog-link">bikini nuevo</a>!</p>

      <p>A continuación, te dejamos nuestro <strong>Top 5 de playas imperdibles</strong> en Aragua, detallando qué estilo de traje de baño de L'Borgina va mejor con la vibra de cada destino.</p>

      <h3>1. Bahía de Cata: El Clásico de Aguas Azules</h3>
      <p>Cata es probablemente la playa más icónica de Aragua. Su forma de medialuna y sus aguas de un azul profundo la hacen el fondo perfecto para tus fotos de verano. Aquí reina el estilo clásico. Un <a href="/tienda/enterizos" class="blog-link">enterizo negro asimétrico</a> o un bikini en colores sólidos brillantes como nuestro "Verde Menta" contrastarán maravillosamente con la arena blanca y el azul del Caribe.</p>

      <div class="blog-image-wrapper">
        <img src="${cataWebp}" alt="Hermosa vista aérea de la Bahía de Cata" class="blog-inline-image" loading="lazy" />
      </div>

      <h3>2. La Ciénaga: El Refugio de Aguas Cristalinas</h3>
      <p>Solo accesible por lancha, La Ciénaga es prácticamente una piscina gigante natural de aguas tranquilas y transparentes. Es el lugar ideal para relajarse y hacer paddle o snorkel. Para este ambiente chill, recomendamos nuestros bikinis de la <a href="/blog/coleccion-tornasol-2026" class="blog-link">Colección Tornasol</a>; bajo este sol despejado brillarán en su máximo esplendor mientras flotas en sus aguas.</p>

      <div class="blog-image-wrapper">
        <img src="${cienagaWebp}" alt="Aguas cristalinas de La Ciénaga" class="blog-inline-image" loading="lazy" />
      </div>

      <h3>3. Cepe: Naturaleza Pura y Aventura</h3>
      <p>Si buscas un contacto más puro con la naturaleza, alejándote de las multitudes, Cepe es para ti. Rodeada de montañas verdes y un mar más movido, aquí el espíritu es aventurero. Necesitarás algo cómodo y seguro. Te sugerimos nuestros modelos deportivos tipo top, que te brindarán soporte mientras exploras y caminas por sus senderos.</p>

      <div class="blog-image-wrapper">
        <img src="${cepeWebp}" alt="Paisaje natural de Cepe en Aragua" class="blog-inline-image" loading="lazy" />
      </div>

      <h3>4. Choroní (Playa Grande): Tradición y Sabor</h3>
      <p>Choroní no es solo playa, es cultura y sabor. Después de un día bajo el sol en Playa Grande, probablemente vayas al malecón a escuchar tambores. Aquí puedes lucir estilos más atrevidos, estampados tropicales y colores neón cálidos que combinen con la energía vibrante, como el rojo atardecer o naranjas.</p>

      <div class="blog-image-wrapper">
        <img src="${choroniWebp}" alt="Palmeral de Playa Grande, Choroní" class="blog-inline-image" loading="lazy" />
      </div>

      <h3>5. Cuyagua: La Meca del Surf</h3>
      <p>Cuyagua es libertad, olas grandes, buena vibra surfista y campamentos bajo las estrellas. El ambiente es ultra relajado. Aquí recomendamos conjuntos prácticos, resistentes a las olas y que puedas usar como top de uso diario junto a unos shorts vaqueros. (¡Recuerda leer nuestros <a href="/blog/cuidado-bikinis" class="blog-link">consejos de cuidado</a> si pasas muchos días acampando!).</p>

      <div class="blog-image-wrapper">
        <img src="${cuyaguaWebp}" alt="Surf y olas en Cuyagua" class="blog-inline-image" loading="lazy" />
      </div>

      <div class="blog-cta-box">
        <h3>¿Ya tienes lista tu maleta?</h3>
        <p>No te vayas a la playa con un traje de baño viejo. Descubre nuestros estilos perfectos para Aragua y el Caribe.</p>
        <div style="margin-top: 1.5rem">
          <a href="/tienda" class="primary-btn">Ver Catálogo de Tienda ✦</a>
        </div>
      </div>
    `,
    image: model8Webp,
    imageWebp: model8Webp
  },
  {
    id: 'colores-2026',
    category: 'TENDENCIAS',
    title: 'Bikinis 2026: Los colores que dominarán esta temporada',
    description: 'Desde el lila lavanda hasta el verde eléctrico, descubre qué tonos serán tendencia este año en las playas venezolanas.',
    content: `
      <p>El 2026 llega cargado de energía y frescura. En <a href="/tienda" class="blog-link">L'Borgina</a>, hemos analizado las pasarelas, las playas internacionales y el estilo de calle para traerte lo último en moda playera. Este año, la paleta de colores se divide entre los tonos magnéticos y los clásicos reimaginados. Te mostramos los must-have absolutos.</p>
      
      <h3>1. Lavanda Dream: El Nuevo Neutro</h3>
      <p>El color morado lavanda, que el año pasado hizo tímidas apariciones, ahora se consolida como el rey de la temporada. Es un tono excepcionalmente romántico y suave que tiene una gran ventaja: resalta el bronceado de forma espectacular sin ser agresivo a la vista.</p>
      
      <div class="blog-image-wrapper">
        <img src="${traje1Webp}" alt="Bikini morado lavanda de tendencia" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>2. Neón Eléctrico: Para No Pasar Desapercibida</h3>
      <p>Para las que tienen una personalidad vibrante y aman ser el centro de atención, los tonos neón regresan con fuerza, especialmente el <strong>verde menta eléctrico</strong> y los amarillos cítricos. Son ideales para <a href="/blog/playas-aragua" class="blog-link">fiestas en la piscina en Maracay</a> o días de sol intenso en altamar.</p>

      <div class="blog-image-wrapper">
        <img src="${traje2Webp}" alt="Bikini verde menta eléctrico" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>3. Brillos Especiales y Tornasol</h3>
      <p>No todo se trata de colores sólidos. Este 2026, la extravagancia elegante está de moda. Las telas que cambian de color con el sol son una categoría en sí mismas. Entérate de toda la magia detrás de este tejido en nuestro post especial sobre la <a href="/blog/coleccion-tornasol-2026" class="blog-link">Colección Tornasol 2026</a>.</p>

      <h3>4. Clásicos Atemporales: Negros y Borgoñas</h3>
      <p>El negro sólido y el rojo borgoña profundo nunca mueren. Son piezas elegantes que toda mujer debe tener en su maleta de viaje como "fondo de armario" playero. Te sacan de apuros y siempre lucen impecables y lujosos.</p>
      
      <div class="blog-cta-box">
        <h3>¿Qué color te define esta temporada?</h3>
        <p>No importa si eres team Lavanda, Neón o Clásico, tenemos el bikini soñado esperando por ti.</p>
        <div style="margin-top: 1.5rem">
          <a href="/tienda" class="primary-btn">Explorar Tienda por Colores ✦</a>
        </div>
      </div>
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
      <p>Invertir en un buen traje de baño de <a href="/tienda" class="blog-link">L'Borgina</a> es asegurarte de tener una pieza de calidad premium. Sin embargo, el cuidado que le des en casa es vital para que las fibras de lycra no cedan y los colores se mantengan vibrantes verano tras verano. Aquí tienes la guía definitiva dictada por los expertos.</p>
      
      <h3>1. Lavado a Mano Inmediato</h3>
      <p>Esta es la regla de oro: nunca metas tus bikinis en la lavadora ni uses suavizantes agresivos. El calor, la fricción y los químicos fuertes rompen las fibras de lycra y elastano. Inmediatamente después de salir de la playa o la piscina, sumerge tu traje de baño en agua fría con un chorrito de jabón suave o neutro. Frota delicadamente para sacar la sal o el cloro.</p>
      
      <div class="blog-image-wrapper">
        <img src="${traje5Webp}" alt="Cuidados del traje de baño rojo en la playa" class="blog-inline-image" loading="lazy" />
      </div>
      
      <h3>2. Especial Cuidado con Telas Iridiscentes</h3>
      <p>Si compraste una pieza de nuestra <a href="/blog/coleccion-tornasol-2026" class="blog-link">Nueva Colección Tornasol</a>, debes tener el doble de cuidado al no retorcer la prenda. Estas telas cuentan con una capa iridiscente especial superficial. Para quitarles el exceso de agua, envuelve el traje de baño en una toalla limpia y presiona suavemente (como si abrazaras la toalla) para absorber la humedad, ¡nunca los exprimas como un trapo!</p>

      <h3>3. Secado Exclusivamente a la Sombra</h3>
      <p>El sol directo es el peor enemigo de la ropa de color, y más aún de los trajes de baño mojados. Si bien los materiales están hechos para estar bajo el sol marino mientras los usas, dejarlos goteando colgando al sol horas y horas es lo que "tuesta" la tela y destiñe colores intensos como <a href="/blog/colores-2026" class="blog-link">el Neón o el negro de nuestros enterizos</a>. Sécalos planos sobre una superficie seca a la sombra o extendidos en un área muy ventilada.</p>
      
      <div class="blog-image-wrapper">
        <img src="${traje6Webp}" alt="Un traje de baño negro clásico bien cuidado es eterno" class="blog-inline-image" loading="lazy" />
      </div>

      <h3>4. Cuidado con los Protectores Solares</h3>
      <p>Evita que el bronceador o protector solar entre en contacto directo con las orillas del traje de baño (especialmente si tu traje de baño es de un color claro). Algunos químicos en las cremas pueden manchar irremediablemente la lycra. Aplica tu crema, espera unos minutos a que la piel la absorba y luego ponte tu traje.</p>
      
      <div class="blog-cta-box">
        <h3>Tus bikinis durarán más que nunca</h3>
        <p>Aplica estos tips y tus piezas favoritas estarán listas para tu próximo viaje. ¿Falta añadir uno nuevo a la colección?</p>
        <div style="margin-top: 1.5rem">
          <a href="/tienda" class="primary-btn">Comprar Traje de Baño Nuevo ✦</a>
        </div>
      </div>
    `,
    image: model5,
    imageWebp: model5Webp
  }
];

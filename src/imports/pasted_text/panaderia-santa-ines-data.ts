Complemento avanzado con datos reales del proyecto:

Actualizar el proyecto para Panadería Santa Inés usando los siguientes datos reales y criterios comerciales.

1. Identidad del negocio

Nombre exacto:
“Panadería Santa Inés”

No usar “Panadería Santa Inés Huasco” como nombre principal. Huasco debe aparecer como ubicación o refuerzo local, no como parte obligatoria del nombre.

Logo:
Actualmente existe logo/letrero, pero se desea rediseñar. Crear una propuesta de identidad textual elegante y cálida, basada en:
- Panadería tradicional renovada.
- Raíz familiar.
- Estética premium, pero cercana.
- Colores sobrios y cálidos.

Frase principal:
“Tradición horneada cada día en Huasco”

Tono de marca:
- Tradicional.
- Familiar.
- Popular en origen, pero con imagen más premium.
- Moderno.
- Elegante.
- Cercano.
- Local.

La marca debe sentirse como una panadería de barrio renovada, no como cafetería genérica ni como tienda gourmet fría.

2. Datos de contacto reales

businessInfo:
- name: "Panadería Santa Inés"
- tagline: "Tradición horneada cada día en Huasco"
- address: "Guacolda 575, Huasco, Atacama"
- phone: "(51) 253 1274"
- whatsapp: "+56 9 7989 3159"
- schedule: "Lunes a sábado de 7:15 a.m. a 1:00 p.m. y de 3:30 p.m. a 7:00 p.m."
- googleMapsUrl: "https://maps.app.goo.gl/N7QHzc6fZCCCdev67"
- instagramUrl: placeholder, porque aún no existe pero se creará.
- facebookUrl: placeholder o dejar oculto si no existe.
- delivery: true
- orders: true
- orderAudience: "Empresas, pymes, familias y clientes particulares"

El sitio debe destacar:
- Encargos por WhatsApp.
- Despacho disponible.
- Atención para empresas y pymes.
- Ubicación clara en Huasco.

3. Objetivo comercial del sitio

Prioridad de objetivos:

1. Que el negocio se vea más profesional.
2. Que pidan por WhatsApp.
3. Que vean productos.
4. Que consulten por tortas, panadería y encargos.
5. Que la gente encuentre la ubicación.
6. Que conozcan la remodelación.

Esto significa que el diseño debe priorizar imagen de marca, confianza visual, WhatsApp y catálogo simple.

4. Estructura del sitio

El sitio debe tener máximo 3 páginas/rutas:

Página 1: Inicio
- Hero.
- Productos destacados.
- Servicios principales.
- Encargos por WhatsApp.
- Sección breve de historia.
- Sección breve de remodelación / próximamente café.
- CTA de ubicación.

Página 2: Productos y Encargos
- Categorías.
- Productos destacados.
- Encargos para empresas/pymes.
- Despacho.
- CTA fuerte a WhatsApp.

Página 3: Nosotros y Ubicación
- Historia local.
- Diferenciadores.
- Remodelación.
- Horario.
- Mapa.
- Contacto.
- Cómo llegar.

Si Figma Make prefiere una landing de una página, mantener las mismas secciones por anclas, pero dejar la arquitectura preparada para separarse después en máximo 3 páginas.

5. Productos reales

Crear el catálogo inicial en `data.ts` usando estos productos reales:

Categorías:

Panadería:
- Hallulla
- Marraqueta
- Pan especial
- Ciabatta

Pastelería:
- Mil hojas
- Pasteles individuales

Tortas y kuchen:
- Kuchen de manzana

Productos especiales:
- Ciabatta
- Ciabatta de aceituna

Bebidas y abarrotes:
- Monster Energy Drink
- Cecinas
- Productos para la once

Productos más vendidos:
- Marraqueta

Producto que se quiere destacar:
- Pan especial

Productos por encargo:
Dejar estructura editable para panadería, pastelería, tortas, cecinas y pedidos para empresas/pymes.

No mostrar precios por ahora. Dejar `price` como campo opcional.

Modelo sugerido:

featuredProducts: [
  {
    name: "Marraqueta",
    category: "Panadería",
    description: "Pan tradicional, crujiente y fresco, uno de los favoritos de los clientes de Santa Inés.",
    badge: "Más vendido",
    image: "/images/products/marraqueta.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por marraquetas en Panadería Santa Inés."
  },
  {
    name: "Hallulla",
    category: "Panadería",
    description: "Clásica hallulla para el desayuno, la once o para acompañar cada día.",
    badge: "Tradicional",
    image: "/images/products/hallulla.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por hallullas en Panadería Santa Inés."
  },
  {
    name: "Pan especial",
    category: "Panadería",
    description: "Producto destacado de la casa, ideal para quienes buscan un pan diferente y de mejor presentación.",
    badge: "Destacado",
    image: "/images/products/pan-especial.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por el pan especial de Panadería Santa Inés."
  },
  {
    name: "Ciabatta",
    category: "Productos especiales",
    description: "Pan especial de textura rústica, ideal para preparaciones más gourmet.",
    badge: "Especial",
    image: "/images/products/ciabatta.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por ciabatta en Panadería Santa Inés."
  },
  {
    name: "Ciabatta de aceituna",
    category: "Productos de temporada",
    description: "Variante especial con aceitunas, sujeta a disponibilidad.",
    badge: "Temporada",
    image: "/images/products/ciabatta-aceituna.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por ciabatta de aceituna en Panadería Santa Inés."
  },
  {
    name: "Mil hojas",
    category: "Pastelería",
    description: "Pastelería tradicional para compartir, consultar disponibilidad en vitrina o por encargo.",
    badge: "Pastelería",
    image: "/images/products/mil-hojas.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por mil hojas en Panadería Santa Inés."
  },
  {
    name: "Kuchen de manzana",
    category: "Tortas y kuchen",
    description: "Kuchen tradicional de manzana, ideal para la once o reuniones familiares.",
    badge: "Para compartir",
    image: "/images/products/kuchen-manzana.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por kuchen de manzana en Panadería Santa Inés."
  },
  {
    name: "Cecinas",
    category: "Abarrotes y once",
    description: "Productos complementarios para acompañar el pan y resolver la once en un solo lugar.",
    badge: "Para la once",
    image: "/images/products/cecinas.webp",
    price: null,
    whatsappMessage: "Hola, quiero consultar por cecinas disponibles en Panadería Santa Inés."
  }
]

6. Cafetería y remodelación

La cafetería todavía no está habilitada.

Comunicarla como:
- “Próximamente”
- “Nueva experiencia”
- “Café al paso”
- “Pequeño espacio para sentarse”
- “Perfecto para acompañar con un pastel”

No comunicar:
- Cafetería abierta.
- Café disponible actualmente.
- Brunch.
- Café de especialidad confirmado.
- Servicio activo de cafetería.

Texto sugerido para la sección:

Título:
“Muy pronto: café al paso en Santa Inés”

Texto:
“Como parte de nuestra visión futura, estamos preparando una nueva experiencia para que puedas acompañar tu pan o pastelería con un café express, ya sea al paso o en un pequeño espacio pensado para disfrutar con calma.”

Badge:
“Próximamente”

CTA:
“Consultar novedades por WhatsApp”

7. Historia y diferenciadores

Usar esta historia de forma cuidadosa, sin prometer datos no verificados como hechos legales duros.

Mensaje base:
“Santa Inés es parte de la memoria cotidiana de Huasco. Clientes de distintas generaciones recuerdan su pan desde los años 80, convirtiéndola en una panadería reconocida por su sabor tradicional, frescura y cercanía.”

Diferenciadores:
- Tradición local.
- Pan reconocido por clientes de Huasco.
- Frescura diaria.
- Variedad para la once.
- Cecinas, pastelería y pan en un solo lugar.
- Precios accesibles.
- Atención cercana.
- Posibilidad de pago moderno.
- Confianza construida durante años.

Evitar afirmaciones absolutas como:
- “La mejor panadería de Huasco”
- “Desde 1985” como dato oficial, salvo que se confirme.

Se puede usar:
- “Reconocida por muchos clientes como una de las panaderías tradicionales de Huasco.”
- “Con presencia recordada por generaciones.”
- “Un punto habitual para comprar pan, pastelería y productos para la once.”

8. Textos clave para usar en el sitio

Hero:
“Santa Inés, tradición horneada cada día en Huasco”

Subtítulo:
“Pan fresco, pastelería tradicional, productos para la once y encargos para familias, empresas y pymes.”

Bienvenida:
“¡Bienvenido a lo nuestro! Pasa y déjate llevar por el aroma del pan recién salido del horno. En Santa Inés, cada crujido cuenta una historia de nuestra tierra.”

Encargos:
“¿Tienes un evento, reunión o una once especial? Nosotros ponemos el sabor. Haz tu pedido de pan, pastelería o productos para compartir con anticipación y consulta disponibilidad por WhatsApp.”

Remodelación:
“Estamos amasando algo nuevo para ti. Nos renovamos por fuera para seguir ofreciéndote la calidad de siempre por dentro.”

Cafetería futura:
“Muy pronto, el olor a pan recién horneado tendrá un nuevo compañero: el aroma del café. Estamos preparando un rincón especial para tus mañanas y tardes en Huasco.”

Historia:
“Desde hace décadas, Santa Inés forma parte de la mesa de muchas familias de Huasco. Más que vender pan, somos parte de desayunos, onces, celebraciones y rutinas compartidas.”

Eslogan secundario:
“Tradición que se siente, frescura que se nota.”

9. Preferencias visuales

Referencia positiva:
- https://lafloresta.cl/

Referencia negativa:
- https://www.panbo.cl/

No copiar La Floresta, solo usarla como referencia de estructura simple, vitrina clara y navegación comercial.

Colores a usar:
- Gris grafito.
- Café madera.
- Beige / crema.
- Blanco cálido.
- Negro suave.
- Dorado tenue.
- Terracota como acento opcional.

Paleta sugerida:

colors: {
  warmWhite: "#FFFCF7",
  flour: "#FFF8EC",
  cream: "#F3E8D2",
  graphite: "#2F2F2F",
  espresso: "#2B211B",
  wood: "#8A5A3B",
  honey: "#C99648",
  terracotta: "#A85F3F",
  softBlack: "#171717"
}

Colores a evitar:
- Rojo intenso.
- Amarillo chillón.
- Verde brillante.
- Azul eléctrico.
- Tonos neón.
- Combinaciones demasiado coloridas.

Estilo fotográfico:
- Artesanal.
- Elegante.
- Moderno.
- Familiar.
- Pan recién hecho.
- Vitrinas cálidas.
- Detalles de masa.
- Pasteles.
- Cecinas.
- Atención cercana.
- Fachada renovada.
- Ambiente limpio y cuidado.

Dirección visual:
“Panadería premium con raíz tradicional.”

10. Imágenes

Preparar placeholders para futuras fotos reales:

/images/hero-santa-ines.webp
/images/fachada.webp
/images/interior.webp
/images/vitrina-pasteles.webp
/images/vitrina-cecinas.webp
/images/panaderia.webp
/images/productos/marraqueta.webp
/images/productos/hallulla.webp
/images/productos/pan-especial.webp
/images/productos/ciabatta.webp
/images/productos/ciabatta-aceituna.webp
/images/productos/mil-hojas.webp
/images/productos/kuchen-manzana.webp
/images/productos/cecinas.webp
/images/equipo.webp
/images/remodelacion-cafe.webp

El diseño debe funcionar aunque las imágenes sean reemplazadas después.

11. Datos técnicos

Dominio deseado:
panaderiasantaines.cl

Hosting:
HostGator

Tipo de sitio:
Máximo 3 páginas.

Formulario:
No usar formulario. Solo WhatsApp.

Google Analytics:
Dejar preparado como comentario o placeholder, sin implementar código real si no existe el ID.

Google Business:
Dejar enlace a Google Maps y botón “Cómo llegar”.

SEO sugerido:

title:
“Panadería Santa Inés | Panadería y Pastelería en Huasco”

description:
“Pan fresco, pastelería, productos para la once, encargos y despacho en Panadería Santa Inés, ubicada en Guacolda 575, Huasco, Atacama.”

og:title:
“Panadería Santa Inés | Tradición horneada cada día en Huasco”

og:description:
“Panadería tradicional de Huasco con pan fresco, pastelería, productos para la once, encargos y despacho.”

og:image:
"/og-santa-ines.jpg"

12. WhatsApp

Usar WhatsApp como principal canal de conversión.

Número:
+56 9 7989 3159

Mensaje general:
“Hola, quiero consultar por productos o encargos de Panadería Santa Inés.”

Mensaje para empresas/pymes:
“Hola, quiero consultar por encargos para empresa o pyme en Panadería Santa Inés.”

Mensaje para despacho:
“Hola, quiero consultar si tienen despacho disponible para un pedido de Panadería Santa Inés.”

El botón flotante debe estar siempre disponible, especialmente en mobile.

13. Componentes extra recomendados

Agregar estos componentes:

- BusinessHighlights.tsx
  Para mostrar: despacho, encargos, ubicación, horario.

- OrdersForBusiness.tsx
  Para destacar encargos para empresas y pymes.

- RenovationPreview.tsx
  Para mostrar la visión futura de remodelación y cafetería.

- ProductAvailabilityNote.tsx
  Para indicar: “Productos sujetos a disponibilidad diaria.”

- ServiceStatusBadge.tsx
  Para mostrar estados como “Disponible” y “Próximamente”.

14. Restricciones finales

No inventar precios.
No inventar fecha de apertura de cafetería.
No declarar “desde 1985” como dato oficial si no está confirmado.
No decir “la mejor panadería de Huasco” como afirmación absoluta.
No mostrar cafetería como servicio activo.
No usar ecommerce complejo.
No usar formulario.
No usar colores llamativos o infantiles.
No usar estética de cafetería internacional.

El resultado debe ser un sitio profesional, cálido, simple, local y comercialmente efectivo.
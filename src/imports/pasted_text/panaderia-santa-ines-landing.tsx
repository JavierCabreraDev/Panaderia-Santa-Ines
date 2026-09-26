Crea el frontend completo para el sitio web de “Panadería Santa Inés”, una panadería tradicional de Huasco, Región de Atacama, Chile.

El sitio debe inspirarse estructuralmente en sitios simples de panadería/pastelería como La Floresta: inicio claro, presentación de marca, categorías de productos, productos destacados, sección nosotros, encargos, ubicación, contacto y llamados a la acción. No copiar visualmente La Floresta; usarlo solo como referencia de arquitectura comercial simple.

Objetivo principal:
Construir un sitio web moderno, cálido, local y confiable para Panadería Santa Inés, mostrando tradición, cercanía, pan fresco, pastelería y productos para encargo. Debe sentirse como una panadería renovada, con identidad familiar, pero con una imagen más elegante y profesional.

Importante:
La panadería Santa Inés existe actualmente como panadería local. Como parte de su remodelación se proyecta incorporar una experiencia de cafetería, pero la cafetería aún no está habilitada. Por lo tanto, el sitio debe vender y comunicar principalmente:

- Panadería activa.
- Pastelería activa.
- Encargos por WhatsApp.
- Ubicación local.
- Confianza y tradición.
- Remodelación / renovación visual.
- Cafetería como próxima etapa, no como servicio disponible actualmente.

No comunicar la cafetería como servicio activo.

Contexto visual:
La panadería tendrá una estética renovada similar a una fachada cálida y sobria: muros color crema, madera natural, letreros en tonos café oscuro/dorado, iluminación cálida, mesas exteriores, vitrinas de pan y pastelería. El diseño debe transmitir aroma a pan recién horneado, barrio, tradición, cercanía y calidad.

La imagen de fachada compartida debe usarse como referencia conceptual de dirección visual, no como fotografía final obligatoria. El diseño debe traducir esa intención a una identidad web: fachada cálida, madera, crema, tipografía elegante, iluminación suave y sensación de local renovado.

Paleta de colores recomendada:
- Crema cálido: #F3E8D2
- Harina / fondo claro: #FFF8EC
- Café espresso: #2B211B
- Madera tostada: #8A5A3B
- Caramelo / miel: #C99648
- Taupe elegante: #5E5148
- Negro suave: #171717
- Blanco cálido: #FFFCF7

Estilo visual:
- Moderno, limpio y cálido.
- Panadería tradicional renovada.
- No debe parecer una cafetería genérica internacional.
- No debe parecer una tienda gourmet fría o distante.
- Debe sentirse local, cercano, confiable y familiar.
- Usar fotografías grandes, cards limpias, bordes redondeados, sombras suaves y textura sutil.
- Puede incluir detalles visuales como trigo, migas, líneas finas, marcos tipo etiqueta artesanal, textura de papel o madera.
- Evitar colores demasiado saturados.
- Priorizar legibilidad, buena jerarquía visual y conversión.

Stack técnico obligatorio:
- React + Vite + TypeScript.
- Tailwind CSS v3.
- No usar Tailwind v4.
- No usar @theme.
- No usar @custom-variant.
- Usar componentes modulares.
- Centralizar todo el contenido editable en `src/content/data.ts`.
- Separar secciones en componentes dentro de `src/components/sections`.
- Usar `lucide-react` para iconos.
- Usar animaciones suaves con `framer-motion` o `motion/react` solo donde aporte valor.
- Código limpio, ordenado, responsive y listo para seguir desarrollando.

Estructura de archivos sugerida:

src/
  app/
    main.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      WhatsAppButton.tsx
    ui/
      Button.tsx
      SectionHeader.tsx
      ProductCard.tsx
      CategoryCard.tsx
      InfoBadge.tsx
      ServiceStatusBadge.tsx
    sections/
      Hero.tsx
      FeaturedCategories.tsx
      FeaturedProducts.tsx
      About.tsx
      DailyFresh.tsx
      RenovationPreview.tsx
      OrdersCTA.tsx
      Location.tsx
      ContactCTA.tsx
  content/
    data.ts
  styles/
    index.css
  App.tsx

Crear todo como una landing page responsive de una sola página, con navegación por anclas:

- Inicio
- Productos
- Nosotros
- Encargos
- Renovación
- Ubicación
- Contacto

Debe quedar preparado para una futura tienda online, pero en esta primera versión no implementar carrito, pasarela de pago ni control de stock. Los productos deben tener botón “Consultar por WhatsApp” o “Encargar”.

Contenido editable en `data.ts`:

1. businessInfo:

- name: "Panadería Santa Inés"
- tagline: "Tradición horneada cada día en Huasco"
- description: "Panadería y pastelería tradicional con atención cercana, productos frescos y sabor de barrio."
- phone: "+56 51 253 1274"
- whatsapp: dejar editable
- address: "Huasco, Región de Atacama"
- googleMapsUrl: placeholder
- instagramUrl: placeholder
- facebookUrl: placeholder

2. navItems:

- Inicio
- Productos
- Nosotros
- Encargos
- Renovación
- Ubicación
- Contacto

3. hero:

- eyebrow: "Panadería · Pastelería · Encargos"
- title: "Santa Inés, el sabor tradicional de Huasco"
- subtitle: "Pan fresco, pastelería y productos para compartir en familia, con la cercanía de siempre y una imagen renovada."
- primaryCTA: "Ver productos"
- secondaryCTA: "Encargar por WhatsApp"
- image: "/images/hero-santa-ines.webp"

4. services:

Crear servicios editables con estado:

services: [
  {
    title: "Panadería",
    status: "active",
    description: "Pan fresco y productos tradicionales disponibles cada día.",
    icon: "Wheat",
    image: "/images/services/panaderia.webp"
  },
  {
    title: "Pastelería",
    status: "active",
    description: "Productos dulces, pasteles y opciones para compartir.",
    icon: "CakeSlice",
    image: "/images/services/pasteleria.webp"
  },
  {
    title: "Tortas y encargos",
    status: "active",
    description: "Encargos sujetos a disponibilidad y confirmación por WhatsApp.",
    icon: "ClipboardList",
    image: "/images/services/encargos.webp"
  },
  {
    title: "Cafetería",
    status: "comingSoon",
    description: "Nuevo espacio considerado dentro de la remodelación de la panadería.",
    icon: "Coffee",
    image: "/images/services/cafeteria-proximamente.webp"
  }
]

Los componentes deben interpretar estos estados:

- active: mostrar como servicio disponible.
- comingSoon: mostrar con etiqueta “Próximamente”.
- hidden: no mostrar en la interfaz.

5. categories:

Crear cards para:

- Panadería
- Pastelería
- Tortas y encargos
- Especiales del día
- Productos para compartir
- Próximamente cafetería

Cada categoría debe tener:

- title
- description
- icon
- image
- status
- cta

La categoría “Próximamente cafetería” debe mostrarse como futura etapa, no como producto disponible.

6. featuredProducts:

Crear productos de ejemplo, editables:

- Marraqueta
- Hallulla
- Pan amasado
- Empanadas
- Kuchen
- Tortas familiares
- Pasteles individuales
- Especiales del día

Cada producto debe tener:

- name
- category
- description
- image
- badge opcional: "Más vendido", "Del día", "Por encargo"
- price opcional
- whatsappMessage

No incluir café como producto destacado disponible. Si se menciona café, debe aparecer solo dentro de la sección de renovación o próximamente.

7. about:

Título:
"Una panadería con historia en Huasco"

Texto:
Destacar trayectoria local, atención familiar, pan fresco, tradición de barrio y nueva imagen renovada. No inventar años exactos de trayectoria si no están confirmados.

Incluir 3 pilares:

- Tradición local
- Producción diaria
- Atención cercana

8. dailyFresh:

Sección para reforzar “horneado del día”.

Debe tener diseño atractivo con cards:

- Pan fresco desde temprano
- Pastelería para compartir
- Encargos para ocasiones especiales
- Productos tradicionales

9. RenovationPreview:

Esta sección reemplaza cualquier sección de cafetería activa.

Título sugerido:
"Una nueva experiencia está por llegar"

Texto sugerido:
"Como parte de nuestra renovación, Panadería Santa Inés prepara un espacio más cálido para disfrutar productos frescos, pastelería y, próximamente, una propuesta de cafetería."

Debe comunicar:
- Remodelación.
- Nueva imagen.
- Mejor experiencia para clientes.
- Cafetería como proyección futura.

CTA sugerido:
"Conoce nuestra renovación"
o
"Consultar novedades por WhatsApp"

No usar botón “Pedir café”.
No usar botón “Comprar café”.
No usar textos que indiquen que la cafetería ya está operativa.

10. ordersCTA:

Sección enfocada en conversión.

Título:
"¿Quieres hacer un encargo?"

Texto:
"Escríbenos por WhatsApp y consulta disponibilidad de panes, tortas, pasteles o productos especiales."

Botón grande:
"Encargar por WhatsApp"

11. location:

Incluir dirección editable, horario editable y espacio para iframe de Google Maps.

El mapa debe estar dentro de una card elegante.

Agregar cards pequeñas:

- Horario de atención
- Teléfono
- Ubicación
- Encargos

Debe ser muy claro para clientes locales y turistas.

Incluir botón:
"Cómo llegar"

12. footer:

- Logo textual “Panadería Santa Inés”
- Texto breve.
- Links de navegación.
- Contacto.
- Ubicación.
- Créditos simples.

Diseño por secciones:

Navbar:
- Sticky top.
- Fondo blanco cálido con blur al hacer scroll.
- Logo textual elegante.
- Menú desktop.
- Menú mobile hamburguesa.
- Botón destacado: “Encargar”.
- Top mini bar opcional con teléfono y ubicación.

Hero:
- Layout responsive.
- En desktop: texto a la izquierda, imagen grande de fachada o productos a la derecha.
- En mobile: imagen arriba o fondo con overlay suave.
- Usar fondo crema cálido.
- Incluir badges: "Pan fresco", "Pastelería", "Encargos".
- CTA principal y secundario.
- Debe verse cálido, premium y cercano.

FeaturedCategories:
- Grid de categorías.
- Cards con imagen, icono, título, descripción y estado.
- Hover suave.
- Usar colores crema, madera y café.
- La cafetería debe aparecer como “Próximamente”, no como activa.

FeaturedProducts:
- Grid de productos destacados.
- Cards con imagen, badge, categoría y botón WhatsApp.
- No implementar precios obligatorios; dejar precio opcional.
- Mantener estructura lista para agregar precios después.

About:
- Sección con imagen del local, fachada, vitrina o producción.
- Texto emocional pero simple.
- Incluir métricas visuales editables:
  - “Tradición local”
  - “Producción diaria”
  - “Atención cercana”

DailyFresh:
- Sección visual con fondo oscuro café espresso.
- Textos en blanco cálido.
- Detalles dorados/caramelo.
- Debe transmitir pan recién salido del horno.

RenovationPreview:
- Sección visual sobre la remodelación.
- Puede usar imagen referencial de fachada, madera, cafetería futura o vitrina.
- Debe tener etiqueta visible “Próximamente”.
- No comunicar disponibilidad actual de café.
- Debe generar expectativa sin prometer apertura inmediata.

OrdersCTA:
- Banda horizontal potente.
- Fondo caramelo/madera o imagen con overlay.
- Botón WhatsApp destacado.
- Texto directo y comercial.

Location:
- Mapa, horario, teléfono y contacto.
- Debe ser muy claro para clientes locales y turistas.
- Incluir botón “Cómo llegar”.

WhatsAppButton:
- Botón flotante inferior derecho.
- Visible en mobile y desktop.
- Debe abrir mensaje prellenado:
“Hola, quiero consultar por productos o encargos de Panadería Santa Inés.”

Patrones UX:
- Sitio rápido, simple y fácil de leer.
- CTAs visibles en Hero, Productos, Encargos y Footer.
- Mobile first.
- Buen contraste.
- Imágenes con aspect-ratio consistente.
- Cards reutilizables.
- Espaciado amplio.
- Scroll suave.
- No saturar con demasiados textos.
- Evitar fricción: el usuario debe poder consultar por WhatsApp en máximo 1 click desde secciones clave.

SEO básico:

Configurar `index.html` con:

- title: "Panadería Santa Inés | Panadería y Pastelería en Huasco"
- description: "Pan fresco, pastelería y encargos en Panadería Santa Inés, Huasco, Región de Atacama."
- og:title
- og:description
- og:image: "/og-santa-ines.jpg"
- favicon placeholder.

Tono de textos:
- Cercano.
- Local.
- Profesional.
- Familiar.
- Comercial sin sonar exagerado.

Ejemplos de copy que puede usar:

- “El sabor tradicional de Huasco”
- “Pan fresco cada mañana”
- “Pastelería para compartir”
- “Encargos para momentos especiales”
- “Santa Inés se renueva”
- “Tradición renovada, sabor de siempre”
- “Una nueva experiencia está por llegar”

Restricciones:
- No crear una estética genérica de cafetería internacional.
- No comunicar la cafetería como servicio activo.
- No usar textos como “ven por tu café”, “disfruta nuestro café”, “cafetería abierta”, “brunch” o “café de especialidad disponible”.
- No usar colores fríos como base.
- No abusar de negro puro.
- No crear un ecommerce complejo.
- No usar datos duros no confirmados como años exactos de trayectoria, dirección específica, horarios finales o precios finales; dejarlos editables en `data.ts`.
- No usar Lorem Ipsum; crear contenido realista y editable.

Resultado esperado:
Entregar una aplicación React completa, responsive, visualmente pulida y fácil de mantener, con toda la información centralizada en `data.ts`, lista para adaptar con fotos reales de la panadería y preparada para activar la cafetería en una futura etapa.
import { businessInfo } from "./business";
import { hero } from "./hero";
import { featuredProducts } from "./products";
import { navItems } from "./navigation";
export { featuredProducts };
export { hero };
export { businessInfo };
import { schedule } from "./schedule";
export const businessHighlights = [
  {
    icon: "Truck",
    title: "Despacho disponible",
    description:
      "Pedidos con despacho para familias, empresas y pymes. Consulta disponibilidad.",
    cta: "Consultar",
    href: "whatsapp",
  },
  {
    icon: "MessageCircle",
    title: "Encargos por WhatsApp",
    description:
      "Tortas, pan, pastelería y pedidos especiales. Escríbenos con anticipación.",
    cta: "Encargar",
    href: "whatsapp",
  },
  {
    icon: "Clock",
    title: "Horario de atención",
    description: `${schedule.days} · ${schedule.morning} · ${schedule.afternoon}`,
  },
  {
    icon: "MapPin",
    title: "Encuéntranos",
    description: businessInfo.address,
    cta: "Cómo llegar",
    href: "maps",
  },
] as const;

export { navItems };
export { schedule };
// ─── Servicios ────────────────────────────────────────────────
// status: "active" | "comingSoon" | "hidden"
// Para activar cafetería: cambiar "comingSoon" → "ative"
export const services = [
  {
    id: "panaderia",
    title: "Panadería",
    status: "active" as const,
    description:
      "Pan fresco y productos tradicionales disponibles cada mañana.",
    icon: "Wheat",
    image:
      "https://images.unsplash.com/photo-1551239271-aed421a79754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: "pasteleria",
    title: "Pastelería",
    status: "active" as const,
    description:
      "Productos dulces, pasteles y opciones para compartir en familia.",
    icon: "CakeSlice",
    image:
      "https://images.unsplash.com/photo-1629610186507-5b75c48d7d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: "encargos",
    title: "Tortas y encargos",
    status: "active" as const,
    description:
      "Encargos sujetos a disponibilidad y confirmación por WhatsApp.",
    icon: "ClipboardList",
    image:
      "https://images.unsplash.com/photo-1568820780293-f33ebe8c49ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: "cafeteria",
    title: "Cafetería",
    status: "active" as const,
    description:
      "Un rincón especial para acompañar tu pan o pastelería con un café express, al paso o con calma.",
    icon: "Coffee",
    image:
      "https://images.unsplash.com/photo-1660203861072-318f2c468d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

// ─── Categorías ───────────────────────────────────────────────
export const categories = [
  {
    id: "panaderia",
    title: "Panadería",
    description:
      "Marraqueta, hallulla, pan especial, ciabatta y más. Frescos cada mañana.",
    icon: "Wheat",
    status: "active" as const,
    cta: "Consultar por WhatsApp",
  },
  {
    id: "pasteleria",
    title: "Pastelería",
    description:
      "Mil hojas, pasteles individuales y productos dulces para cada ocasión.",
    icon: "CakeSlice",
    status: "active" as const,
    cta: "Consultar por WhatsApp",
  },
  {
    id: "tortas",
    title: "Tortas y Kuchen",
    description:
      "Kuchen de manzana y tortas por encargo para celebraciones especiales.",
    icon: "Gift",
    status: "active" as const,
    cta: "Encargar por WhatsApp",
  },
  {
    id: "once",
    title: "Productos para la once",
    description: "Cecinas, abarrotes y todo lo que necesitas en un solo lugar.",
    icon: "ShoppingBasket",
    status: "active" as const,
    cta: "Consultar por WhatsApp",
  },
  {
    id: "especiales",
    title: "Especiales del día",
    description:
      "Productos de temporada y preparaciones especiales sujetos a disponibilidad.",
    icon: "Star",
    status: "active" as const,
    cta: "Consultar por WhatsApp",
  },
  {
    id: "cafeteria",
    title: "Cafetería",
    description:
      "Próximamente un espacio para disfrutar tu café acompañado de pan o pastelería.",
    icon: "Coffee",
    status: "active" as const,
    cta: "Consultar novedades",
  },
];

// ─── Productos destacados ─────────────────────────────────────

// ─── Nosotros ─────────────────────────────────────────────────
export const about = {
  title: "Una panadería con historia en Huasco",
  subtitle: "Tradición que se siente, frescura que se nota.",
  text: "Santa Inés es parte de la memoria cotidiana de Huasco. Clientes de distintas generaciones recuerdan su pan, convirtiéndola en una panadería reconocida por su sabor tradicional, frescura y cercanía.\n\nDesde hace décadas, Santa Inés forma parte de la mesa de muchas familias de Huasco. Más que vender pan, somos parte de desayunos, onces, celebraciones y rutinas compartidas. Hoy nos renovamos por fuera para seguir ofreciéndote la calidad de siempre por dentro.",
  image: "/images/pos/2026-03-23.webp",
  pillars: [
    {
      icon: "MapPin",
      title: "Tradición local",
      description: "Reconocida por generaciones de familias de Huasco.",
    },
    {
      icon: "Clock",
      title: "Producción diaria",
      description: "Pan fresco horneado cada mañana sin excepción.",
    },
    {
      icon: "Heart",
      title: "Atención cercana",
      description: "Trato familiar, precios accesibles y calidad constante.",
    },
  ],
};

// ─── Daily Fresh ──────────────────────────────────────────────
export const dailyFresh = {
  title: "Horneado fresco cada día",
  subtitle: "Porque el buen pan no espera.",
  items: [
    {
      icon: "Sun",
      title: "Pan fresco desde temprano",
      description:
        "Nuestros productos salen del horno desde las 7:15 de la mañana.",
    },
    {
      icon: "CakeSlice",
      title: "Pastelería para compartir",
      description: "Mil hojas, pasteles individuales y más para cada ocasión.",
    },
    {
      icon: "ClipboardList",
      title: "Encargos con anticipación",
      description:
        "Tortas, kuchen y pedidos especiales para tu evento o reunión.",
    },
    {
      icon: "ShoppingBasket",
      title: "Todo en un solo lugar",
      description: "Pan, pastelería, cecinas y productos para la once.",
    },
  ],
};

// ─── Renovación ───────────────────────────────────────────────
export const renovation = {
  badge: "Próximamente",
  title: "Muy pronto: café al paso en Santa Inés",
  subtitle: "Santa Inés se renueva",
  text: "Estamos amasando algo nuevo para ti. Nos renovamos por fuera para seguir ofreciéndote la calidad de siempre por dentro. Como parte de nuestra visión futura, estamos preparando una nueva experiencia para que puedas acompañar tu pan o pastelería con un café express, ya sea al paso o en un pequeño espacio pensado para disfrutar con calma.",
  detail:
    "Muy pronto, el olor a pan recién horneado tendrá un nuevo compañero: el aroma del café. Estamos preparando un rincón especial para tus mañanas y tardes en Huasco.",
  cta: "Yo quiero probarlo",
  ctaMessage:
    "Hola, me interesa mucho la nueva experiencia de café al paso en Santa Inés. Quiero estar atento para probarlo cuando esté disponible.",
  image: "/images/pos/afiche.png",
  highlights: [
    "Nueva imagen y espacio renovado",
    "Mejor experiencia para clientes",
    "Café al paso (próximamente)",
    "Mismo sabor de siempre",
  ],
};

// ─── Encargos ─────────────────────────────────────────────────
export const orders = {
  title: "¿Tienes un encargo especial?",
  text: "¿Tienes un evento, reunión o una once especial? Nosotros ponemos el sabor. Haz tu pedido de pan, pastelería o productos para compartir con anticipación y consulta disponibilidad por WhatsApp.",
  cta: "Encargar por WhatsApp",
  ctaMessage: "Hola, quiero hacer un encargo en Panadería Santa Inés.",
  types: [
    { label: "Tortas y pasteles", icon: "CakeSlice" },
    { label: "Pan por mayor", icon: "Wheat" },
    { label: "Kuchen y especiales", icon: "Gift" },
    { label: "Pedidos para empresa", icon: "Building2" },
  ],
};

// ─── Encargos para empresas ───────────────────────────────────
export const ordersForBusiness = {
  title: "Encargos para empresas y pymes",
  subtitle: "Atendemos pedidos institucionales",
  text: "Proveemos pan, pastelería y productos para desayunos, reuniones, eventos corporativos y requerimientos regulares. Consulta disponibilidad y condiciones por WhatsApp.",
  cta: "Consultar para mi empresa",
  ctaMessage:
    "Hola, quiero consultar por encargos para empresa o pyme en Panadería Santa Inés.",
  deliveryCta: "Consultar despacho",
  deliveryMessage:
    "Hola, quiero consultar si tienen despacho disponible para un pedido de Panadería Santa Inés.",
  highlights: [
    { icon: "Building2", label: "Empresas y pymes" },
    { icon: "Truck", label: "Despacho disponible" },
    { icon: "MessageCircle", label: "Pedidos por WhatsApp" },
    { icon: "Package", label: "Volúmenes por encargo" },
  ],
};

// ─── Ubicación ────────────────────────────────────────────────
export const location = {
  title: "Encuéntranos en Huasco",
  address: "Sgto. Aldea 408, Huasco, Atacama",
  phone: "(51) 253 1274",
  whatsapp: "+56 9 7989 3159",
  googleMapsUrl: "https://maps.app.goo.gl/wxVsMGPXKeKMvsZ36",
  directionsCta: "Cómo llegar",
  schedule: {
    days: "Lunes a Sábado",
    morning: "7:15 a.m. – 1:00 p.m.",
    afternoon: "3:30 p.m. – 7:00 p.m.",
    closed: "Domingos cerrado",
  },
};
// ─── figures ────────────────────────────────────────────────

// ─── Figuras decorativas / lluvia visual ──────────────────────
export const figuresRain = {
  figures: [
    {
      id: "trigo",
      src: "/images/figures/trigo.png",
      alt: "Trigo",
    },
    {
      id: "gorro",
      src: "/images/figures/gorro.png",
      alt: "Gorro panadero",
    },
    {
      id: "ciabatta",
      src: "/images/figures/ciabatta.png",
      alt: "Ciabatta",
    },
    {
      id: "pan",
      src: "/images/figures/pan.png",
      alt: "Pan",
    },
    {
      id: "timon",
      src: "/images/figures/timon.png",
      alt: "Timón de barco",
    },
  ],

  coffeeFigures: [
    {
      id: "grano-cafe",
      src: "/images/figures/grano.png",
      alt: "Grano de café",
    },
    {
      id: "cafe-expresso",
      src: "/images/figures/cafe.png",
      alt: "Café expresso",
    },
    {
      id: "tasa",
      src: "/images/figures/tasa.png",
      alt: "Taza de café",
    },
    {
      id: "cup",
      src: "/images/figures/cup.png",
      alt: "Vaso de café al paso",
    },
    {
      id: "slice-of-cake",
      src: "/images/figures/cake.png",
      alt: "Porción de torta",
    },
  ],

  presets: {
    businessHighlights: {
      variant: "warm" as const,
      density: "ultra" as const,
      opacity: 1,
      itemOpacity: 1,
      minSize: 34,
      maxSize: 76,
      count: 56,
      overlay: true,
    },

    about: {
      variant: "warm" as const,
      density: "ultra" as const,
      opacity: 1,
      itemOpacity: 1,
      minSize: 38,
      maxSize: 92,
      count: 64,
      overlay: true,
    },

    dailyFresh: {
      variant: "dark" as const,
      density: "ultra" as const,
      opacity: 1,
      itemOpacity: 1,
      minSize: 50,
      maxSize: 150,
      count: 30,
      overlay: false,
    },

    renovationPreview: {
      variant: "warm" as const,
      density: "ultra" as const,
      opacity: 1,
      itemOpacity: 0.9,
      minSize: 42,
      maxSize: 118,
      count: 46,
      overlay: true,
    },
  },
  floatingCard: {
    title: "Horneado cada mañana",
    subtitle: "Desde las 7:15 a.m.",
    emoji: "🌾",
  },
};

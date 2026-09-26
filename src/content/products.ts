import type { FeaturedProduct } from "./types";

export const featuredProducts = [
  {
    id: "marraqueta",
    name: "Marraqueta",
    category: "Panadería",
    description:
      "Pan tradicional, crujiente y fresco. Uno de los favoritos de los clientes de Santa Inés.",
    badge: "Más vendido",
    badgeColor: "honey",
    price: null,
    image: "/images/products/marraqueta.png",
    whatsappMessage:
      "Hola, quiero consultar por marraquetas en Panadería Santa Inés.",
  },
  {
    id: "ciabatta",
    name: "Ciabatta",
    category: "Productos especiales",
    description:
      "Pan especial de textura rústica, ideal para preparaciones más elaboradas.",
    badge: "Destaca",
    badgeColor: "terracotta",
    price: null,
    image: "/images/products/ciabatta.png",
    whatsappMessage:
      "Hola, quiero consultar por ciabatta en Panadería Santa Inés.",
  },
  {
    id: "hallulla",
    name: "Hallulla",
    category: "Panadería",
    description:
      "Clásica hallulla para el desayuno, la once o para acompañar cada día.",
    badge: "Tradicional",
    badgeColor: "cream",
    price: null,
    image: "/images/products/hallulla.png",
    whatsappMessage:
      "Hola, quiero consultar por hallullas en Panadería Santa Inés.",
  },
  {
    id: "pan-especial",
    name: "Pan especial",
    category: "Productos especiales",
    description:
      "Producto destacado de la casa. Ideal para quienes buscan un pan diferente y de mejor presentación.",
    badge: "Especial",
    badgeColor: "wood",
    price: null,
    image: "/images/products/especial.png",
    whatsappMessage:
      "Hola, quiero consultar por el pan especial de Panadería Santa Inés.",
  },
  {
    id: "mil-hojas",
    name: "Mil hojas",
    category: "Pastelería",
    description:
      "Pastelería tradicional para compartir. Consultar disponibilidad en vitrina o por encargo.",
    badge: "Pastelería",
    badgeColor: "honey",
    price: null,
    image: "/images/products/milhojas.png",
    whatsappMessage:
      "Hola, quiero consultar por mil hojas en Panadería Santa Inés.",
  },
  {
    id: "cachito-manjar",
    name: "Cachito de manjar",
    category: "Pastelería y dulces",
    description:
      "Cachito relleno con suave manjar o pastelera, de masa delicada y sabor ideal para acompañar la once o disfrutar como un antojo dulce.",
    badge: "Dulce",
    badgeColor: "caramel",
    price: null,
    image: "/images/products/cachitos.png",
    whatsappMessage:
      "Hola, quiero consultar por cachito de manjar en Panadería Santa Inés.",
  },
  {
    id: "ciabatta-aceituna",
    name: "Ciabatta de aceituna",
    category: "Productos de temporada",
    description:
      "Variante especial con aceitunas. Sujeto a disponibilidad de temporada.",
    badge: "Temporada",
    badgeColor: "terracotta",
    price: null,
    image: "/images/products/ciabatta-aceituna.png",
    whatsappMessage:
      "Hola, quiero consultar por ciabatta de aceituna en Panadería Santa Inés.",
  },
  {
    id: "cecinas",
    name: "Cecinas",
    category: "Abarrotes y once",
    description:
      "Productos complementarios para acompañar el pan y resolver la once en un solo lugar.",
    badge: "Para la once",
    badgeColor: "cream",
    price: null,
    image:
      "https://images.unsplash.com/photo-1775343962994-0e3d7c373cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    whatsappMessage:
      "Hola, quiero consultar por cecinas disponibles en Panadería Santa Inés.",
  },
] satisfies FeaturedProduct[];

export const productCategories = [
  "Todos",
  ...Array.from(new Set(featuredProducts.map((p) => p.category))),
] as const;

export type ProductCategory = (typeof productCategories)[number];

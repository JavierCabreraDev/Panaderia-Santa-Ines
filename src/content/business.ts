import type { BusinessInfo } from "./types";

export const businessInfo: BusinessInfo = {
  name: "Panadería Santa Inés",
  tagline: "Panadería · Huasco",

  description:
    "Pan fresco, pastelería tradicional y productos para la once en Huasco.",

  phone: "(51) 253 1274",
  whatsapp: "56979893159",
  email: "contacto@panaderiasantaines.cl",
  address: "Sgto. Aldea 408, Huasco, Atacama",
  googleMapsUrl: "https://maps.app.goo.gl/wxVsMGPXKeKMvsZ36",

  openingHours: {
    days: "Lunes a Sábado",
    morning: "7:15 a.m. – 1:00 p.m.",
    afternoon: "3:30 p.m. – 7:00 p.m.",
    closed: "Domingos cerrado",
  },

  orderAudience: "Familias, empresas y pymes",
};

// src/lib/constants.ts

import { businessInfo } from "../content/data";

export const HEADER_SCROLL_OFFSET = 20;

export const WHATSAPP_MESSAGE =
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés.";

export const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

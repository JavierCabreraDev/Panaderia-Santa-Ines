// src/content/types.ts

/* ---------- Shared ---------- */

export type ProductBadgeVariant =
  | "honey"
  | "wood"
  | "cream"
  | "terracotta"
  | "caramel";

/* ---------- Business ---------- */

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;

  phone: string;
  whatsapp: string;
  address: string;
  googleMapsUrl: string;

  openingHours: {
    days: string;
    morning: string;
    afternoon: string;
    closed: string;
  };

  orderAudience: string;
}

/* ---------- Schedule ---------- */

export interface Schedule {
  days: string;
  morning: string;
  afternoon: string;
}

/* ---------- Navigation ---------- */

export interface NavItem {
  label: string;
  href: `#${string}`;
}

/* ---------- Hero ---------- */

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  primaryCTA: string;
  primaryHref: `#${string}`;
  secondaryCTA: string;
  image: string;
  trustLine: string;
}

/* ---------- Products ---------- */

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  badge?: string;
  badgeColor?: ProductBadgeVariant;
  price: number | null;
  image: string;
  whatsappMessage: string;
}

/* ---------- Figures Rain ---------- */

export interface FigureRainPreset {
  quantity: number;
  size: number;
  opacity: number;
  speed: number;
}

export interface FiguresRainConfig {
  figures: string[];
  presets: Record<string, FigureRainPreset>;
}

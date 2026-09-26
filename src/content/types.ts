export type BadgeVariant =
  | "honey"
  | "terracotta"
  | "cream"
  | "wood"
  | "caramel";

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: BadgeVariant;
  price?: number | null;
  whatsappMessage: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;

  primaryCTA: string;
  secondaryCTA: string;
  primaryHref: string;

  image: string;

  badges: readonly string[];

  trustLine?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;

  whatsapp: string;
  phone: string;
  email: string;

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

export interface NavItem {
  label: string;
  href: string;
}

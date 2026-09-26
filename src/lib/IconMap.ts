import {
  Truck,
  MessageCircle,
  Clock,
  MapPin,
  Wheat,
  Coffee,
  CakeSlice,
  ClipboardList,
  ShoppingBasket,
  Building2,
  Gift,
  Star,
  Package,
  Heart,
  Sun,
} from "lucide-react";

export const iconMap = {
  Truck,
  MessageCircle,
  Clock,
  MapPin,
  Wheat,
  Coffee,
  CakeSlice,
  ClipboardList,
  ShoppingBasket,
  Building2,
  Gift,
  Star,
  Package,
  Heart,
  Sun,
} as const;

export type IconName = keyof typeof iconMap;

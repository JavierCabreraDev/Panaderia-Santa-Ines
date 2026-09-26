import { motion } from "motion/react";
import { memo } from "react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ProductBadge } from "./ProductBadge";
import type { ProductBadgeVariant } from "./ProductBadge";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    badge?: string;
    badgeColor?: string;
    whatsappMessage?: string;
  };
  waUrl: string;
  delay?: number;
};

export const ProductCard = memo(function ProductCard({
  product,
  waUrl,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={`${product.name} de Panadería Santa Inés`}
          width={600}
          height={450}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {product.badge && product.badgeColor && (
          <div className="absolute left-3 top-3">
            <ProductBadge
              label={product.badge}
              variant={product.badgeColor as ProductBadgeVariant}
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.08em] text-secondary">
            {product.category}
          </p>

          <h3 className="mt-1 font-display text-lg font-semibold text-primary">
            {product.name}
          </h3>
        </div>

        <p className="flex-1 text-sm leading-6 text-[#5E5148]">
          {product.description}
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-cream transition-all hover:opacity-90 active:scale-95 hover:shadow-md focus-visible:ring-2
          focus-visible:ring-[#C99648]
          focus-visible:ring-offset-2"
        >
          Agregar +1
        </a>
      </div>
    </motion.article>
  );
});

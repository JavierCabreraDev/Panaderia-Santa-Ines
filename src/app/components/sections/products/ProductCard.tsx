import { motion } from "motion/react";
import { memo } from "react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { ProductBadge } from "./ProductBadge";
import type { ProductBadgeVariant } from "./ProductBadge";
import { Button } from "../../ui/button";
import { theme } from "../../../../lib/theme";
import type { FeaturedProduct } from "../../../../content/types";
type ProductCardProps = {
  product: FeaturedProduct;
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

        <p
          className="flex-1 text-sm leading-6"
          style={{ color: theme.colors.secondary }}
        >
          {product.description}
        </p>

        <Button asChild className="mt-auto w-full rounded-xl">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            Agregar +1
          </a>
        </Button>
      </div>
    </motion.article>
  );
});

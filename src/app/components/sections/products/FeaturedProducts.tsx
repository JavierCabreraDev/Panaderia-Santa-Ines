import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Info } from "lucide-react";

import { featuredProducts, businessInfo } from "../../../../content/data";
import { ProductCard } from "./ProductCard";
import { buildWhatsAppUrl } from "../../../../lib/whatsapp";
import { cn } from "../../../../lib/cn";

/**
 * Temporalmente las categorías siguen viviendo aquí.
 * En el Commit 12.6 migrarán definitivamente a products.ts.
 */
const CATEGORIES = [
  "Todos",
  ...Array.from(new Set(featuredProducts.map((p) => p.category))),
] as const;

type Category = (typeof CATEGORIES)[number];

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filtered = useMemo(
    () =>
      activeCategory === "Todos"
        ? featuredProducts
        : featuredProducts.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="productos" className="bg-[#FFF8EC] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-3"
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-[#C99648]" />

            <span className="font-inter text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#C99648]">
              Nuestros productos
            </span>
          </div>

          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight text-[#2B211B]">
            Pan fresco y pastelería
          </h2>

          <p className="max-w-xl text-[0.9rem] leading-7 text-[#5E5148]">
            Consulta disponibilidad y realiza tu encargo directamente por
            WhatsApp.
          </p>
        </motion.div>

        {/* Availability pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C99648]/20 bg-[#C99648]/10 px-4 py-2">
          <Info
            size={14}
            className="shrink-0 text-[#8A5A3B]"
            aria-hidden="true"
          />

          <span className="text-[0.75rem] font-medium text-[#8A5A3B]">
            Productos sujetos a disponibilidad diaria · Sin precios fijos
          </span>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all duration-300",
                activeCategory === cat
                  ? "bg-[#2B211B] text-[#F3E8D2] font-semibold shadow-sm"
                  : "bg-[#2B211B]/5 text-[#5E5148] hover:bg-[#2B211B]/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              waUrl={buildWhatsAppUrl(
                businessInfo.whatsapp,
                product.whatsappMessage
              )}
              delay={(index % 4) * 0.06}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-[0.85rem] text-[#5E5148]">
            ¿No encuentras lo que buscas?{" "}
            <a
              href={buildWhatsAppUrl(
                businessInfo.whatsapp,
                "Hola, quiero consultar por un producto específico en Panadería Santa Inés."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#8A5A3B] transition-colors hover:text-[#6E472E]"
            >
              Pregúntanos por WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

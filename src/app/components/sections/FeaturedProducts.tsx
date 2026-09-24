import { useState } from "react";
import { motion } from "motion/react";
import { featuredProducts, businessInfo } from "../../../content/data";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Info } from "lucide-react";

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  honey: { bg: "#C99648", text: "#fff" },
  wood: { bg: "#8A5A3B", text: "#fff" },
  cream: { bg: "#F3E8D2", text: "#5E5148" },
  terracotta: { bg: "#A85F3F", text: "#fff" },
};

// Dynamically derive categories from actual product data
const UNIQUE_CATEGORIES = Array.from(
  new Set(featuredProducts.map((p) => p.category))
);
const CATEGORIES = ["Todos", ...UNIQUE_CATEGORIES];

function buildWAUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="productos"
      style={{ backgroundColor: "#FFF8EC" }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-10"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-px" style={{ backgroundColor: "#C99648" }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#C99648",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Nuestros productos
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#2B211B",
              lineHeight: 1.2,
            }}
          >
            Pan fresco y pastelería
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#5E5148",
              lineHeight: 1.7,
            }}
          >
            Consulta disponibilidad y haz tu encargo directo por WhatsApp.
          </p>
        </motion.div>

        {/* Availability note */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            backgroundColor: "rgba(201,150,72,0.1)",
            border: "1px solid rgba(201,150,72,0.2)",
          }}
        >
          <Info
            size={14}
            className="shrink-0"
            style={{ color: "#8A5A3B" }}
            aria-hidden="true"
          />

          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#8A5A3B",
              fontWeight: 500,
            }}
          >
            Productos sujetos a disponibilidad diaria · Sin precios fijos
          </span>
        </div>
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: activeCategory === cat ? 600 : 400,
                backgroundColor:
                  activeCategory === cat ? "#2B211B" : "rgba(43,33,27,0.06)",
                color: activeCategory === cat ? "#F3E8D2" : "#5E5148",
                border: "none",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product, i) => {
            const badgeStyle =
              BADGE_COLORS[product.badgeColor] || BADGE_COLORS.honey;
            const waUrl = buildWAUrl(
              businessInfo.whatsapp,
              product.whatsappMessage
            );
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="flex flex-col rounded-2xl overflow-hidden group"
                style={{
                  backgroundColor: "#FFFCF7",
                  border: "1px solid rgba(139,90,59,0.1)",
                  boxShadow: "0 2px 12px rgba(43,33,27,0.05)",
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: badgeStyle.bg,
                        color: badgeStyle.text,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.68rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      color: "#8A5A3B",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#2B211B",
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="flex-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#5E5148",
                      lineHeight: 1.6,
                    }}
                  >
                    {product.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm transition-all hover:opacity-90 active:scale-95"
                    style={{
                      backgroundColor: "#2B211B",
                      color: "#F3E8D2",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#5E5148",
            }}
          >
            ¿No encuentras lo que buscas?{" "}
            <a
              href={buildWAUrl(
                businessInfo.whatsapp,
                "Hola, quiero consultar por un producto específico en Panadería Santa Inés."
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#8A5A3B", fontWeight: 600 }}
            >
              Pregúntanos por WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

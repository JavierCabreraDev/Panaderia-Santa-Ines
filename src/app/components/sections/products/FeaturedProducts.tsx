import { useState } from "react";
import { motion } from "motion/react";
import { featuredProducts, businessInfo } from "../../../../content/data";
import { Info } from "lucide-react";
import { ProductCard } from "../products/ProductCard";

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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              waUrl={buildWAUrl(businessInfo.whatsapp, product.whatsappMessage)}
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

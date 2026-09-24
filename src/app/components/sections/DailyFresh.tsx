import React from "react";
import { motion } from "motion/react";
import { Sun, CakeSlice, ClipboardList, ShoppingBasket } from "lucide-react";
import { dailyFresh, figuresRain } from "../../../content/data";
import { FiguresRain } from "../ui/FiguresRain";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  Sun,
  CakeSlice,
  ClipboardList,
  ShoppingBasket,
};

export function DailyFresh() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: "#2B211B" }}
    >
      <FiguresRain
        figures={figuresRain.figures}
        {...figuresRain.presets.dailyFresh}
      />
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, rgba(201,150,72,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Wheat decoration */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "rgba(201,150,72,0.35)" }}
            />
            <span style={{ fontSize: "1.1rem" }}>🌾</span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "rgba(201,150,72,0.35)" }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#F3E8D2",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            {dailyFresh.title}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#8A5A3B",
              fontStyle: "italic",
            }}
          >
            {dailyFresh.subtitle}
          </p>
        </motion.div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dailyFresh.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Sun;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,248,236,0.04)",
                  border: "1px solid rgba(201,150,72,0.14)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,150,72,0.12)" }}
                >
                  <Icon size={18} style={{ color: "#C99648" }} />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#F3E8D2",
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#8A5A3B",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Accent line */}
                <div
                  className="h-0.5 w-8 rounded-full mt-auto"
                  style={{ backgroundColor: "rgba(201,150,72,0.28)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.05rem",
              fontStyle: "italic",
              color: "rgba(243,232,210,0.5)",
            }}
          >
            ¡Bienvenido a lo nuestro! Déjate llevar por el aroma del pan recién
            salido del horno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

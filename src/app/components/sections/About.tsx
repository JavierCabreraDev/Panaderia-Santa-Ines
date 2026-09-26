import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Heart } from "lucide-react";
import { about, figuresRain } from "../../../content/data";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FiguresRain } from "../ui/FiguresRain";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  MapPin,
  Clock,
  Heart,
};

export function About() {
  return (
    <section
      id="nosotros"
      style={{ backgroundColor: "#FFFCF7" }}
      className="relative overflow-hidden py-16 md:py-20"
    >
      <FiguresRain
        figures={figuresRain.figures}
        {...figuresRain.presets.about}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "5/4",
                boxShadow: "0 20px 56px rgba(43,33,27,0.14)",
              }}
            >
              <ImageWithFallback
                src={about.image}
                alt="Panadería Santa Inés, Huasco"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(43,33,27,0.35) 100%)",
                }}
              />

              <div className="absolute bottom-5 left-5">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "#F3E8D2",
                    lineHeight: 1.4,
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  "{about.subtitle}"
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl -z-10"
              style={{ backgroundColor: "#F3E8D2", opacity: 0.7 }}
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: "#C99648" }}
              />
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
                Nuestra historia
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: "#2B211B",
                lineHeight: 1.25,
              }}
            >
              {about.title}
            </h2>

            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "#5E5148",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}
            >
              {about.text}
            </div>

            <div
              className="h-px w-16 my-1"
              style={{ backgroundColor: "rgba(201,150,72,0.35)" }}
            />

            <div className="flex flex-col gap-4">
              {about.pillars.map((pillar, i) => {
                const Icon = ICON_MAP[pillar.icon] || MapPin;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-4 rounded-xl p-3"
                    style={{
                      backgroundColor: "rgba(255, 252, 247, 0.76)",
                      border: "1px solid rgba(139,90,59,0.08)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#F3E8D2" }}
                    >
                      <Icon size={16} style={{ color: "#8A5A3B" }} />
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#2B211B",
                          marginBottom: "2px",
                        }}
                      >
                        {pillar.title}
                      </h4>

                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          color: "#5E5148",
                          lineHeight: 1.6,
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

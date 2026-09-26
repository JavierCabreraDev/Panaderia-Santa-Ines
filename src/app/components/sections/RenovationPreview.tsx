import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { renovation, figuresRain, businessInfo } from "../../../content/data";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FiguresRain } from "../ui/FiguresRain";

export function RenovationPreview() {
  const waUrl = `https://wa.me/${
    businessInfo.whatsapp
  }?text=${encodeURIComponent(renovation.ctaMessage)}`;
  return (
    <section
      id="renovacion"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#FFFCF7" }}
    >
      <FiguresRain
        figures={figuresRain.coffeeFigures}
        {...figuresRain.presets.renovationPreview}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(168,95,63,0.1)",
              border: "1px solid rgba(168,95,63,0.2)",
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#A85F3F" }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#A85F3F",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {renovation.badge}
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
            {renovation.subtitle}
          </h2>
        </motion.div>

        {/* Main card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 16px 48px rgba(43,33,27,0.1)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
              style={{ minHeight: "320px" }}
            >
              <ImageWithFallback
                src={renovation.image}
                alt="Renovación Panadería Santa Inés"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px" }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(43,33,27,0.55) 0%, rgba(43,33,27,0.15) 70%)",
                }}
              />

              <div
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(43,33,27,0.8)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,150,72,0.3)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#C99648" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#C99648",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Próximamente
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{ backgroundColor: "rgba(255, 248, 236, 0.96)" }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 700,
                  color: "#2B211B",
                  lineHeight: 1.25,
                }}
              >
                {renovation.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  color: "#5E5148",
                  lineHeight: 1.8,
                }}
              >
                {renovation.text}
              </p>

              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(201,150,72,0.08)",
                  border: "1px solid rgba(201,150,72,0.15)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "#8A5A3B",
                    lineHeight: 1.7,
                  }}
                >
                  "{renovation.detail}"
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-2.5">
                {renovation.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="shrink-0"
                      style={{ color: "#8A5A3B" }}
                    />

                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        color: "#5E5148",
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all hover:opacity-90 w-fit mt-2"
                style={{
                  backgroundColor: "#2B211B",
                  color: "#F3E8D2",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {renovation.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

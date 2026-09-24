import { motion } from "motion/react";
import { hero, businessInfo } from "../../../content/data";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

const BADGE_STYLES = {
  backgroundColor: "rgba(43,33,27,0.08)",
  color: "#5E5148",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 500,
  letterSpacing: "0.06em",
};

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFF8EC" }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
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
                {hero.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#2B211B",
                lineHeight: 1.18,
                whiteSpace: "pre-line",
              }}
            >
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.97rem",
                color: "#5E5148",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {hero.subtitle}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full"
                  style={BADGE_STYLES}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => handleScroll(hero.primaryHref)}
                className="px-7 py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#2B211B",
                  color: "#F3E8D2",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {hero.primaryCTA}
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "transparent",
                  color: "#2B211B",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  border: "1.5px solid rgba(43,33,27,0.25)",
                }}
              >
                {hero.secondaryCTA}
              </a>
            </div>

            {/* Trust line */}
            <div
              className="flex items-center gap-2 pt-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "#8A5A3B",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#25D366" }}
              />
              Encargos para familias, empresas y pymes · Despacho disponible
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 24px 64px rgba(43,33,27,0.18)",
              }}
            >
              <ImageWithFallback
                src={hero.image}
                alt="Pan fresco de Panadería Santa Inés"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(43,33,27,0.08) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 px-4 py-3 rounded-xl shadow-xl"
              style={{
                backgroundColor: "#FFFCF7",
                border: "1px solid rgba(139,90,59,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <span style={{ fontSize: "1.1rem" }}>🌾</span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#2B211B",
                    }}
                  >
                    Horneado cada mañana
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      color: "#8A5A3B",
                    }}
                  >
                    Desde las 7:15 a.m.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decoration dot */}
            <div
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#C99648", opacity: 0.35 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div
        className="relative h-8 overflow-hidden"
        style={{ marginTop: "-1px" }}
      >
        <svg
          viewBox="0 0 1440 32"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          style={{ height: "32px" }}
        >
          <path
            d="M0,16 C360,32 1080,0 1440,16 L1440,32 L0,32 Z"
            fill="#FFFCF7"
          />
        </svg>
      </div>
    </section>
  );
}

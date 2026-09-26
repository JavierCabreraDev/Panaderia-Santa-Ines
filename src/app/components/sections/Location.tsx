import { motion } from "motion/react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { location } from "../../../content/data";

export function Location() {
  return (
    <section
      id="ubicacion"
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
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
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
              Dónde estamos
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
            {location.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "380px",
                border: "1px solid rgba(139,90,59,0.12)",
                boxShadow: "0 4px 20px rgba(43,33,27,0.08)",
                backgroundColor: "#F3E8D2",
              }}
            >
              {/* Map placeholder with link */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238A5A3B' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2B211B" }}
                  >
                    <MapPin size={28} style={{ color: "#C99648" }} />
                  </div>
                  <div className="text-center">
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#2B211B",
                        marginBottom: "4px",
                      }}
                    >
                      {location.address}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        color: "#5E5148",
                      }}
                    >
                      Huasco, Región de Atacama
                    </p>
                  </div>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
                    style={{
                      backgroundColor: "#2B211B",
                      color: "#F3E8D2",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    <Navigation size={14} />
                    {location.directionsCta}
                  </a>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-opacity hover:opacity-70"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8A5A3B",
                    }}
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Schedule */}
            <div
              className="p-5 rounded-2xl flex flex-col gap-3"
              style={{
                backgroundColor: "#FFFCF7",
                border: "1px solid rgba(139,90,59,0.1)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <Clock size={14} style={{ color: "#8A5A3B" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "#2B211B",
                  }}
                >
                  Horario
                </h3>
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "#5E5148",
                  lineHeight: 1.8,
                }}
              >
                <div style={{ fontWeight: 500, color: "#2B211B" }}>
                  {location.schedule.days}
                </div>
                <div>{location.schedule.morning}</div>
                <div>{location.schedule.afternoon}</div>
                <div className="mt-1.5 text-xs" style={{ color: "#8A5A3B" }}>
                  {location.schedule.closed}
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${location.phone}`}
              className="p-5 rounded-2xl flex items-center gap-3 transition-all hover:opacity-80"
              style={{
                backgroundColor: "#FFFCF7",
                border: "1px solid rgba(139,90,59,0.1)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#F3E8D2" }}
              >
                <Phone size={14} style={{ color: "#8A5A3B" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.68rem",
                    color: "#8A5A3B",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  Teléfono
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#2B211B",
                  }}
                >
                  {location.phone}
                </div>
              </div>
            </a>

            {/* Address */}
            <div
              className="p-5 rounded-2xl flex items-center gap-3"
              style={{
                backgroundColor: "#FFFCF7",
                border: "1px solid rgba(139,90,59,0.1)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#F3E8D2" }}
              >
                <MapPin size={14} style={{ color: "#8A5A3B" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.68rem",
                    color: "#8A5A3B",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  Dirección
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#2B211B",
                    lineHeight: 1.4,
                  }}
                >
                  {location.address}
                </div>
              </div>
            </div>

            {/* WhatsApp
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl flex items-center gap-3 transition-all hover:opacity-90"
              style={{
                backgroundColor: "#25D366",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <MessageCircle size={14} style={{ color: "#fff" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  WhatsApp
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Consultar ahora
                </div>
              </div>
            </a>  */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

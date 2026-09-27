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
          className="mb-12"
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
              {location.eyebrow}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#2B211B",
            }}
          >
            {location.title}
          </h2>

          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5E5148",
              lineHeight: 1.8,
            }}
          >
            {location.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={location.image}
                alt="Panadería Santa Inés"
                className="w-full h-[380px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,252,247,.9)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: "#2B211B",
                  }}
                >
                  {location.badge}
                </span>

                <h3
                  className="mt-4 text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {location.reference}
                </h3>
              </div>
            </div>

            {/* Google Maps */}
            <div
              className="mt-6 rounded-3xl overflow-hidden border"
              style={{
                borderColor: "rgba(139,90,59,.12)",
              }}
            >
              <iframe
                title="Mapa Panadería Santa Inés"
                src="https://www.google.com/maps?q=Panadería+Santa+Inés+Huasco&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          {/* Panel derecho */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "#2B211B",
                color: "#F8F3E9",
              }}
            >
              <Navigation size={20} />
              <div className="mt-3">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {location.directionsCta}
                </p>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(248,243,233,.8)",
                    lineHeight: 1.6,
                  }}
                >
                  {location.address}
                </p>

                <p
                  className="mt-1 text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#C99648",
                  }}
                >
                  {location.reference}
                </p>
              </div>
            </a>

            <div
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: "#FFFCF7",
                borderColor: "rgba(139,90,59,.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <Clock size={18} style={{ color: "#8A5A3B" }} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    color: "#2B211B",
                  }}
                >
                  {location.schedule.title}
                </h3>
              </div>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5E5148",
                  lineHeight: 1.9,
                }}
              >
                <div className="font-semibold text-[#2B211B]">
                  {location.schedule.days}
                </div>

                <div>{location.schedule.morning}</div>
                <div>{location.schedule.afternoon}</div>

                <div className="text-sm mt-2 text-[#8A5A3B]">
                  {location.schedule.closed}
                </div>
              </div>
            </div>

            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="rounded-2xl p-5 border transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFCF7",
                borderColor: "rgba(139,90,59,.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <Phone size={18} style={{ color: "#8A5A3B" }} />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      color: "#2B211B",
                    }}
                  >
                    {location.phoneCta}
                  </p>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#5E5148",
                    }}
                  >
                    {location.phone}
                  </p>
                </div>
              </div>
            </a>

            <div
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: "#FFFCF7",
                borderColor: "rgba(139,90,59,.12)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <MapPin size={18} style={{ color: "#8A5A3B" }} />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      color: "#2B211B",
                    }}
                  >
                    {location.address}
                  </p>

                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8A5A3B",
                    }}
                  >
                    {location.reference}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Truck, MessageCircle, Clock, MapPin } from "lucide-react";
import { businessInfo, schedule, figuresRain } from "../../../content/data";
import { FiguresRain } from "../ui/FiguresRain";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

const highlights = [
  {
    icon: Truck,
    title: "Despacho disponible",
    description:
      "Pedidos con despacho para familias, empresas y pymes. Consulta disponibilidad.",
    cta: "Consultar",
    href: WHATSAPP_URL,
  },
  {
    icon: MessageCircle,
    title: "Encargos por WhatsApp",
    description:
      "Tortas, pan, pastelería y pedidos especiales. Escríbenos con anticipación.",
    cta: "Encargar",
    href: WHATSAPP_URL,
  },
  {
    icon: Clock,
    title: "Horario de atención",
    description: `${schedule.days} · ${schedule.morning} · ${schedule.afternoon}`,
    cta: null,
    href: null,
  },
  {
    icon: MapPin,
    title: "Encuéntranos",
    description: businessInfo.address,
    cta: "Cómo llegar",
    href: businessInfo.googleMapsUrl,
  },
];

export function BusinessHighlights() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-14"
      style={{ backgroundColor: "#FFFCF7" }}
    >
      <FiguresRain
        figures={figuresRain.figures}
        {...figuresRain.presets.businessHighlights}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-3 p-5 rounded-xl backdrop-blur-[2px]"
                style={{
                  backgroundColor: "rgba(255, 248, 236, 0.94)",
                  border: "1px solid rgba(139,90,59,0.16)",
                  boxShadow: "0 18px 50px rgba(43,33,27,0.06)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#F3E8D2" }}
                >
                  <Icon size={16} style={{ color: "#8A5A3B" }} />
                </div>

                <div>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "#2B211B",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#5E5148",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {item.cta && item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-auto transition-opacity hover:opacity-70 flex items-center gap-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      color: "#8A5A3B",
                    }}
                  >
                    {item.cta}
                    <span style={{ fontSize: "0.85em" }}>→</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

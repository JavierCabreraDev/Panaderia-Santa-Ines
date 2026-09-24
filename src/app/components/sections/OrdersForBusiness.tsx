import React from "react";
import { motion } from "motion/react";
import { Building2, Truck, MessageCircle, Package } from "lucide-react";
import { ordersForBusiness, businessInfo } from "../../../content/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Building2,
  Truck,
  MessageCircle,
  Package,
};

export function OrdersForBusiness() {
  const waUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
    ordersForBusiness.ctaMessage
  )}`;
  const deliveryUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
    ordersForBusiness.deliveryMessage
  )}`;

  return (
    <section
      className="py-14 md:py-16"
      style={{ backgroundColor: "#FFF8EC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#FFFCF7",
            border: "1px solid rgba(139,90,59,0.1)",
            boxShadow: "0 4px 24px rgba(43,33,27,0.06)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="p-8 md:p-10 flex flex-col gap-5"
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
                  Empresas y pymes
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  color: "#2B211B",
                  lineHeight: 1.25,
                }}
              >
                {ordersForBusiness.title}
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  color: "#5E5148",
                  lineHeight: 1.8,
                }}
              >
                {ordersForBusiness.text}
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{
                    backgroundColor: "#2B211B",
                    color: "#F3E8D2",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {ordersForBusiness.cta}
                </a>
                <a
                  href={deliveryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all hover:opacity-80"
                  style={{
                    backgroundColor: "transparent",
                    color: "#5E5148",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    border: "1.5px solid rgba(43,33,27,0.2)",
                  }}
                >
                  <Truck size={14} />
                  {ordersForBusiness.deliveryCta}
                </a>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="p-8 md:p-10 flex flex-col justify-center gap-4"
              style={{ backgroundColor: "#F3E8D2" }}
            >
              {ordersForBusiness.highlights.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Building2;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(43,33,27,0.06)" }}
                    >
                      <Icon size={16} style={{ color: "#8A5A3B" }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "#2B211B",
                      }}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}

              <div
                className="mt-2 pt-4 border-t"
                style={{ borderColor: "rgba(139,90,59,0.15)" }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "#8A5A3B",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  Atendemos a {businessInfo.orderAudience}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Clock } from "lucide-react";
import { businessInfo, navItems, schedule } from "../../../content/data";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#171717" }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#F3E8D2",
                  letterSpacing: "0.04em",
                }}
              >
                Santa Inés
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  color: "#8A5A3B",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Panadería · Pastelería · Huasco
              </div>
            </div>
            <p
              className="leading-relaxed max-w-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "#5E5148",
                lineHeight: 1.7,
              }}
            >
              {businessInfo.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#C99648",
                letterSpacing: "0.02em",
              }}
            >
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm transition-colors hover:opacity-60"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5E5148",
                    fontWeight: 400,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#C99648",
              }}
            >
              Contacto y ubicación
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#8A5A3B" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#5E5148",
                    lineHeight: 1.6,
                  }}
                >
                  {businessInfo.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone
                  size={14}
                  className="shrink-0"
                  style={{ color: "#8A5A3B" }}
                />
                <a
                  href={`tel:${businessInfo.phone}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#5E5148",
                  }}
                >
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#8A5A3B" }}
                />
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#5E5148",
                    lineHeight: 1.7,
                  }}
                >
                  <div>{schedule.days}</div>
                  <div>{schedule.morning}</div>
                  <div>{schedule.afternoon}</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-full text-sm transition-all hover:opacity-90"
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.82rem",
              }}
            >
              {/* WhatsApp icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#2F2F2F",
            }}
          >
            © {new Date().getFullYear()} Panadería Santa Inés · Huasco, Atacama
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#2F2F2F",
            }}
          >
            Tradición horneada cada día
          </span>
        </div>
      </div>
    </footer>
  );
}

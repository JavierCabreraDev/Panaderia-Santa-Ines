import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { businessInfo, navItems } from "../../../content/data";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "#2B211B" }} className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
              style={{ color: "#C99648" }}
            >
              <Phone size={12} />
              <span style={{ color: "#F3E8D2" }}>{businessInfo.phone}</span>
            </a>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "#F3E8D2" }}
            >
              <MapPin size={12} style={{ color: "#C99648" }} />
              <span>{businessInfo.address}</span>
            </div>
          </div>
          <div className="text-xs" style={{ color: "#8A5A3B" }}>
            Lun – Sáb &nbsp;7:15 – 13:00 &nbsp;|&nbsp; 15:30 – 19:00
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,252,247,0.96)" : "#FFFCF7",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(139,90,59,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 16px rgba(43,33,27,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => handleNavClick("#inicio")}
            className="flex items-center gap-3 leading-tight select-none"
          >
            <img
              src="/images/brand/iso-sbg.png"
              alt="Iso Santa Inés"
              className="h-12 w-12 object-contain"
            />

            <div className="flex flex-col">
              <span
                className="tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#2B211B",
                  letterSpacing: "0.04em",
                }}
              >
                Santa Inés
              </span>

              <span
                className="tracking-widest"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  color: "#8A5A3B",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Panadería · Huasco
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm transition-colors hover:opacity-70"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#2B211B",
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

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#2B211B",
                color: "#F3E8D2",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.82rem",
              }}
            >
              Encargar
            </a>
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#2B211B" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              backgroundColor: "#FFFCF7",
              borderColor: "rgba(139,90,59,0.12)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-3 px-3 rounded-lg text-sm transition-colors hover:opacity-70"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#2B211B",
                    fontWeight: 400,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full text-sm transition-all"
                style={{
                  backgroundColor: "#2B211B",
                  color: "#F3E8D2",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
                onClick={() => setMenuOpen(false)}
              >
                Encargar por WhatsApp
              </a>
              {/* Mobile info */}
              <div
                className="mt-3 pt-3 border-t flex flex-col gap-2"
                style={{ borderColor: "rgba(139,90,59,0.12)" }}
              >
                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "#5E5148" }}
                >
                  <Phone size={12} style={{ color: "#C99648" }} />
                  {businessInfo.phone}
                </div>
                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "#5E5148" }}
                >
                  <MapPin size={12} style={{ color: "#C99648" }} />
                  {businessInfo.address}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

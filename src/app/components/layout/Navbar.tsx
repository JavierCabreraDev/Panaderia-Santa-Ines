import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

import { NavLinks } from "./NavLinks";
import { businessInfo } from "../../../content/data";
import { WHATSAPP_URL } from "../../../lib/constants";
import { useScrolled } from "../../../hooks/useScrolled";

import { TopBar } from "./TopBar";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const target = document.getElementById(href.slice(1));

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
        }
      };

      window.addEventListener("keydown", onKeyDown);

      return () => window.removeEventListener("keydown", onKeyDown);
    }, []);
  };

  return (
    <>
      <TopBar />

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
          <Logo onClick={() => handleNavClick("#inicio")} />

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegación principal"
          >
            <NavLinks onNavigate={handleNavClick} />
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
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t"
            style={{
              backgroundColor: "#FFFCF7",
              borderColor: "rgba(139,90,59,0.12)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              <NavLinks mobile onNavigate={handleNavClick} />
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

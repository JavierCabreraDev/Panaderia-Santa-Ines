import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { navItems } from "../../../content/data";

import { WHATSAPP_URL } from "../../../lib/constants";
import { cn } from "../../../lib/cn";
import { MobileMenu } from "./MobileMenu";

import { useScrolled } from "../../../hooks/useScrolled";
import { useScrollSpy } from "../../../hooks/useScrollSpy";

import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = useScrolled();
  const activeId = useScrollSpy(navItems.map((item) => item.href.slice(1)));

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const target = document.getElementById(href.slice(1));

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <TopBar />

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-xl border-b border-primary/10 shadow-sm"
            : "bg-surface border-b border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo onClick={() => handleNavClick("#inicio")} />

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegación principal"
          >
            <NavLinks onNavigate={handleNavClick} activeId={activeId} />
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[0.82rem] font-medium text-cream transition-all hover:opacity-90 active:scale-95"
            >
              Encargar
            </a>

            <button
              className="rounded-lg p-2 text-primary transition-all duration-200 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <MobileMenu
            open={menuOpen}
            activeId={activeId}
            onNavigate={handleNavClick}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
}

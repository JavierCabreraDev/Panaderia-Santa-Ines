import { MapPin, Phone, Clock } from "lucide-react";
import { businessInfo, navItems, schedule } from "../../../content/data";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="bg-[#111111] text-[#F3E8D2]">
      {/* Contenido principal */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Marca */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="/images/brand/iso-sbg.png"
                alt="Logo Panadería Santa Inés"
                className="h-16 w-16 object-contain"
              />

              <div>
                <h2 className="font-display text-[2rem] font-bold leading-none">
                  Santa Inés
                </h2>

                <p className="mt-2 text-[0.82rem] uppercase tracking-[0.24em] text-[#B56B2A]">
                  Panadería · Pastelería · Huasco
                </p>
              </div>
            </div>

            <p className="max-w-sm text-[1.05rem] leading-10 text-[#6D5C50]">
              Panadería y pastelería tradicional con atención cercana, productos
              frescos y sabor de barrio. Encargos para familias, empresas y
              pymes.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold text-[#D08C2F]">
              Navegación
            </h3>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-[1.05rem] text-[#6D5C50] transition-colors hover:text-[#F3E8D2]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold text-[#D08C2F]">
              Contacto y ubicación
            </h3>

            <div className="space-y-5 text-[#6D5C50]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#B56B2A]" />
                <span className="text-[1.05rem] leading-8">
                  Sgto. Aldea 408, Huasco, Atacama
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#B56B2A]" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-[1.05rem] hover:text-[#F3E8D2]"
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-[#B56B2A]" />

                <div className="space-y-1 text-[1.05rem] leading-8">
                  <div>{schedule.days}</div>
                  <div>{schedule.morning}</div>
                  <div>{schedule.afternoon}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-[1.05rem] font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-white/5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-6 py-6 text-center md:grid-cols-3 md:text-left">
          <span className="text-sm text-[#5A4B42]">
            © {new Date().getFullYear()} Panadería Santa Inés · Huasco, Atacama
          </span>

          <span className="font-display text-lg font-semibold tracking-[0.08em] text-[#D08C2F] text-center">
            SABOR · TRADICIÓN · HUASCO
          </span>

          <a
            href="https://javiercabreravejar.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-right text-sm text-[#B56B2A] transition-colors hover:text-[#D08C2F]"
          >
            Creado por Javier Cabrera
          </a>
        </div>
      </div>
    </footer>
  );
}

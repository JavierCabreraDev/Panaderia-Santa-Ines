import { useEffect } from "react";
import { Phone, MapPin } from "lucide-react";

import { businessInfo } from "../../../content/data";
import { WHATSAPP_URL } from "../../../lib/constants";
import { cn } from "../../../lib/cn";
import { NavLinks } from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  activeId?: string;
  onNavigate: (href: string) => void;
  onClose: () => void;
};

export function MobileMenu({
  open,
  activeId,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "overflow-hidden border-t bg-surface transition-all duration-200 md:hidden",
        open
          ? "max-h-[32rem] opacity-100"
          : "max-h-0 opacity-0 border-transparent"
      )}
      style={{ borderColor: "rgba(139,90,59,0.12)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
        <NavLinks mobile activeId={activeId} onNavigate={onNavigate} />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-cream transition-all hover:opacity-90 active:scale-95"
        >
          Encargar por WhatsApp
        </a>

        <div
          className="mt-3 flex flex-col gap-2 border-t pt-3"
          style={{ borderColor: "rgba(139,90,59,0.12)" }}
        >
          <div className="flex items-center gap-2 text-xs text-[#5E5148]">
            <Phone size={12} className="text-accent" />
            {businessInfo.phone}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5E5148]">
            <MapPin size={12} className="text-accent" />
            {businessInfo.address}
          </div>
        </div>
      </div>
    </div>
  );
}

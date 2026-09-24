import { Phone, MapPin } from "lucide-react";
import { businessInfo } from "../../../content/data";

export function TopBar() {
  return (
    <div className="hidden md:block" style={{ backgroundColor: "#2B211B" }}>
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
          {businessInfo.openingHours}
        </div>
      </div>
    </div>
  );
}

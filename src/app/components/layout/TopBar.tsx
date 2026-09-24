import { Phone, MapPin } from "lucide-react";
import { businessInfo } from "../../../content/data";

export function TopBar() {
  return (
    <div className="hidden bg-primary md:block">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-1.5 text-xs text-accent transition-opacity hover:opacity-80"
          >
            <Phone size={12} />
            <span className="text-cream">{businessInfo.phone}</span>
          </a>

          <div className="flex items-center gap-1.5 text-xs text-cream">
            <MapPin size={12} style={{ color: "#C99648" }} />
            <span>{businessInfo.address}</span>
          </div>
        </div>

        <div className="text-xs text-secondary">
          {businessInfo.openingHours}
        </div>
      </div>
    </div>
  );
}

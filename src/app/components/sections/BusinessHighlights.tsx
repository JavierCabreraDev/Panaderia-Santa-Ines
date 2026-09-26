import {
  businessInfo,
  businessHighlights,
  figuresRain,
} from "../../../content/data";
import { FiguresRain } from "../ui/FiguresRain";
import { HighlightCard } from "./business-highlights/HighlightCard";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(
  "Hola, quiero consultar por productos o encargos de Panadería Santa Inés."
)}`;

export function BusinessHighlights() {
  return (
    <section className="relative overflow-hidden bg-surface py-12 md:py-14">
      <FiguresRain
        figures={figuresRain.figures}
        {...figuresRain.presets.businessHighlights}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessHighlights.map((item, index) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              cta={"cta" in item ? item.cta : undefined}
              href={
                "href" in item
                  ? item.href === "whatsapp"
                    ? WHATSAPP_URL
                    : item.href === "maps"
                    ? businessInfo.googleMapsUrl
                    : undefined
                  : undefined
              }
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

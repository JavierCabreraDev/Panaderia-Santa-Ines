import { businessInfo, hero } from "../../../../content/data";
import { WHATSAPP_MESSAGE } from "../../../../lib/constants";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type HeroCTAProps = {
  onPrimary: () => void;
};

export function HeroCTA({ onPrimary }: HeroCTAProps) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      <button
        onClick={onPrimary}
        className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-cream transition-all hover:opacity-90 active:scale-95"
      >
        {hero.primaryCTA}
      </button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-medium text-primary transition-all hover:opacity-90 active:scale-95"
      >
        {hero.secondaryCTA}
      </a>
    </div>
  );
}

import { businessInfo, hero } from "../../../../content/data";
import { WHATSAPP_MESSAGE } from "../../../../lib/constants";
import { Button } from "../../ui/button";

const WHATSAPP_URL = `https://wa.me/${
  businessInfo.whatsapp
}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type HeroCTAProps = {
  onPrimary: () => void;
};

export function HeroCTA({ onPrimary }: HeroCTAProps) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      <Button onClick={onPrimary}>{hero.primaryCTA}</Button>

      <Button asChild variant="outline">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          {hero.secondaryCTA}
        </a>
      </Button>
    </div>
  );
}

import { businessInfo } from "../../../../content/data";

export function HeroStatus() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F7EC] px-3 py-1.5">
      <span className="h-2 w-2 rounded-full bg-[#25D366]" />

      <span className="text-xs font-medium text-[#2B211B]">
        Abierto desde las 7:15 · Horneado fresco cada mañana
      </span>
    </div>
  );
}

import { schedule } from "../../../../content/data";
import { theme } from "../../../../lib/theme";

export function HeroStatus() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
      style={{ backgroundColor: "#E8F7EC" }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: "#25D366" }}
      />

      <span
        className="text-xs font-medium"
        style={{
          color: theme.colors.primary,
          fontFamily: theme.typography.body,
        }}
      >
        Abierto desde las {schedule.morning.split("–")[0].trim()} · Horneado
        fresco cada mañana
      </span>
    </div>
  );
}

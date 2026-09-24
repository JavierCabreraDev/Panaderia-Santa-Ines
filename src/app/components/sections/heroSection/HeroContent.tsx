import { motion } from "motion/react";
import { hero } from "../../../../content/data";
import { HeroBadge } from "./HeroBadge";
import { HeroCTA } from "./HeroCTA";

type HeroContentProps = {
  onPrimary: () => void;
};

export function HeroContent({ onPrimary }: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-2">
        <div className="h-px w-6 bg-accent" />

        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {hero.eyebrow}
        </span>
      </div>

      <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.18] whitespace-pre-line text-primary">
        {hero.title}
      </h1>

      <p className="max-w-lg text-base leading-7 text-[#5E5148]">
        {hero.subtitle}
      </p>

      <div className="flex flex-wrap gap-2">
        {hero.badges.map((badge) => (
          <HeroBadge key={badge}>{badge}</HeroBadge>
        ))}
      </div>

      <HeroCTA onPrimary={onPrimary} />

      <div className="flex items-center gap-2 pt-2 text-xs text-secondary">
        <div className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
        Encargos para familias, empresas y pymes · Despacho disponible
      </div>
    </motion.div>
  );
}

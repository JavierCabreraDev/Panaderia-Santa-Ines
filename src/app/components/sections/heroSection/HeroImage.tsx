import { motion } from "motion/react";
import { hero } from "../../../../content/data";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: "easeOut",
      }}
      className="relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(43,33,27,0.18)]"
        style={{ aspectRatio: "4/3" }}
      >
        <ImageWithFallback
          src={hero.image}
          alt="Pan recién horneado en Panadería Santa Inés"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
        className="absolute -bottom-4 -left-4 rounded-xl border border-primary/10 bg-surface px-4 py-3 shadow-xl sm:-bottom-6 sm:-left-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream">
            🌾
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-primary">
              Horneado cada mañana
            </div>

            <div className="text-xs text-secondary">Desde las 7:15 a.m.</div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-accent/35" />
    </motion.div>
  );
}

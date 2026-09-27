import { motion } from "motion/react";
import { hero } from "../../../../content/data";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="group relative"
    >
      {/* Halo cálido */}
      <div
        className="absolute -inset-12 -z-10 blur-[80px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,150,72,.28) 0%, rgba(201,150,72,.08) 42%, transparent 78%)",
        }}
      />

      {/* Imagen */}
      <div
        className="relative z-10 overflow-hidden rounded-[28px] shadow-[0_24px_64px_rgba(43,33,27,0.18)]"
        style={{ aspectRatio: "4/3" }}
      >
        <ImageWithFallback
          src={hero.image}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          style={{
            filter: "saturate(1.12) contrast(1.08) brightness(.98)",
          }}
        />

        {/* Overlay cálido */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(43,33,27,.08) 0%, rgba(201,150,72,.05) 35%, transparent 80%)",
          }}
        />
      </div>

      {/* Tarjeta flotante */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute -bottom-5 left-5 z-20 rounded-2xl border border-primary/10 bg-surface/85 px-4 py-3 backdrop-blur-md shadow-[0_18px_40px_rgba(43,33,27,0.16)]"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream"
          >
            🌾
          </motion.div>

          <div>
            <div className="font-display text-sm font-semibold text-primary">
              Horneado cada mañana
            </div>

            <div className="text-xs text-secondary">Desde las 7:15 a.m.</div>
          </div>
        </div>
      </motion.div>

      {/* Detalle decorativo */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-3 -top-3 z-20 h-6 w-6 rounded-full bg-accent/35"
      />
    </motion.div>
  );
}

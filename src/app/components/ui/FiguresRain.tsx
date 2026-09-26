import { motion } from "motion/react";

type FigureRainVariant = "light" | "warm" | "dark";
type FigureRainDensity = "low" | "medium" | "high" | "ultra";

interface FigureItem {
  id: string;
  src: string;
  alt?: string;
}

interface FiguresRainProps {
  figures: FigureItem[];
  variant?: FigureRainVariant;
  density?: FigureRainDensity;
  opacity?: number;
  itemOpacity?: number;
  minSize?: number;
  maxSize?: number;
  count?: number;
  overlay?: boolean;
  className?: string;
}

const densityCount: Record<FigureRainDensity, number> = {
  low: 10,
  medium: 18,
  high: 30,
  ultra: 48,
};

const variantFilter: Record<FigureRainVariant, string> = {
  light: "sepia(0.08) saturate(0.9)",
  warm: "sepia(0.28) saturate(1.05) contrast(1.02)",
  dark: "sepia(0.2) saturate(0.8) brightness(0.75)",
};

function createRainItems(total: number, minSize: number, maxSize: number) {
  return Array.from({ length: total }, (_, index) => {
    const column = index % 12;

    const leftBase = column * 8.4;
    const leftOffset = ((index * 17) % 7) - 3;

    const sizeRange = maxSize - minSize;
    const size = minSize + ((index * 19) % Math.max(sizeRange, 1));

    const startY = -180 - ((index * 37) % 420);
    const endY = 980 + ((index * 29) % 220);

    return {
      left: `${Math.min(Math.max(leftBase + leftOffset, -4), 98)}%`,
      size,
      rotate: ((index * 31) % 72) - 36,
      rotateEnd: ((index * 43) % 120) - 60,
      delay: -(index * 0.9),
      duration: 16 + (index % 9) * 2.2,
      startY,
      endY,
      drift: ((index * 13) % 40) - 20,
    };
  });
}

export function FiguresRain({
  figures,
  variant = "warm",
  density = "high",
  opacity = 1,
  itemOpacity = 1,
  minSize = 34,
  maxSize = 82,
  count,
  overlay = true,
  className = "",
}: FiguresRainProps) {
  const totalItems = count ?? densityCount[density];
  const items = createRainItems(totalItems, minSize, maxSize);

  if (!figures.length) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {items.map((item, index) => {
        const figure = figures[index % figures.length];

        return (
          <motion.img
            key={`${figure.id}-${index}`}
            src={figure.src}
            alt=""
            className="absolute select-none"
            initial={{
              x: 0,
              y: item.startY,
              opacity: itemOpacity,
              rotate: item.rotate,
            }}
            animate={{
              x: [0, item.drift, -item.drift, 0],
              y: [item.startY, item.endY],
              rotate: [item.rotate, item.rotateEnd, item.rotate],
              opacity: itemOpacity,
            }}
            transition={{
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              },
              x: {
                duration: item.duration * 0.55,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
                delay: item.delay,
              },
              rotate: {
                duration: item.duration * 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              },
            }}
            style={{
              left: item.left,
              top: 0,
              width: `${item.size}px`,
              height: `${item.size}px`,
              objectFit: "contain",
              filter: variantFilter[variant],
            }}
          />
        );
      })}

      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,252,247,0.68), rgba(255,248,236,0.78))",
          }}
        />
      )}
    </div>
  );
}

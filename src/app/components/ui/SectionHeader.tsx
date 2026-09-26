import { motion } from "motion/react";
import { theme } from "../../../lib/theme";
import { cn } from "../../../lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className="h-px w-6"
          style={{ backgroundColor: theme.colors.accent }}
        />

        <span
          style={{
            fontFamily: theme.typography.body,
            fontSize: "0.72rem",
            fontWeight: 600,
            color: theme.colors.accent,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        style={{
          fontFamily: theme.typography.display,
          fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
          fontWeight: 700,
          color: theme.colors.primary,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn("max-w-xl", centered && "mx-auto")}
          style={{
            fontFamily: theme.typography.body,
            fontSize: "0.9rem",
            color: theme.colors.secondary,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

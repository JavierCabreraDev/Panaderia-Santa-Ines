import { motion } from "motion/react";
import { IconName, iconMap } from "../../../../lib/IconMap";
import { Surface } from "../../ui/Surface";
import { theme } from "../../../../lib/theme";
type HighlightCardProps = {
  icon: IconName;
  title: string;
  description: string;
  cta?: string;
  href?: string;
  delay?: number;
};

export function HighlightCard({
  icon,
  title,
  description,
  cta,
  href,
  delay = 0,
}: HighlightCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Surface variant="glass" className="flex h-full flex-col gap-3 p-5">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: theme.colors.cream }}
        >
          <Icon size={16} style={{ color: theme.colors.accentDark }} />
        </div>

        <div>
          <h3
            className="mb-1"
            style={{
              fontFamily: theme.typography.display,
              fontSize: "0.92rem",
              fontWeight: 600,
              color: theme.colors.primary,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontFamily: theme.typography.body,
              fontSize: "0.78rem",
              color: theme.colors.secondary,
              lineHeight: 1.65,
            }}
          >
            {description}
          </p>
        </div>

        {cta && href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-1 text-xs transition-opacity hover:opacity-70"
            style={{
              fontFamily: theme.typography.body,
              fontWeight: 500,
              color: theme.colors.accentDark,
            }}
          >
            {cta}
            <span style={{ fontSize: "0.85em" }}>→</span>
          </a>
        )}
      </Surface>
    </motion.div>
  );
}

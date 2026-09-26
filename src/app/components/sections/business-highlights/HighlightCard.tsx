import { motion } from "motion/react";
import { IconName, iconMap } from "../../../../lib/IconMap";

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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-primary/10 bg-background/95 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream text-secondary transition-colors group-hover:bg-primary/10 group-hover:text-accent">
        <Icon size={18} aria-hidden="true" />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-[0.95rem] font-semibold text-primary">
          {title}
        </h3>

        <p className="mt-1 text-[0.8rem] leading-6 text-[#5E5148]">
          {description}
        </p>
      </div>

      {cta && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-secondary transition-colors hover:text-accent"
        >
          {cta}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </motion.article>
  );
}

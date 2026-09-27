type HeroBadgeProps = {
  children: React.ReactNode;
};

export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <span
      className="
    rounded-full
    border
    border-primary/15
    bg-surface/70
    backdrop-blur-sm
    px-4
    py-2
    text-sm
    "
    >
      {children}
    </span>
  );
}

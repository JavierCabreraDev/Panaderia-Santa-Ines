type HeroBadgeProps = {
  children: React.ReactNode;
};

export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <span className="rounded-full bg-primary/8 px-3 py-1 text-[0.72rem] font-medium tracking-[0.06em] text-[#5E5148]">
      {children}
    </span>
  );
}

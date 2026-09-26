import { cn } from "../../../../lib/cn";

const badgeVariants = {
  honey: "bg-accent text-white",
  wood: "bg-secondary text-white",
  cream: "bg-cream text-[#5E5148]",
  terracotta: "bg-[#A85F3F] text-white",
  caramel: "bg-[#B7773C] text-white",
} as const;

type ProductBadgeProps = {
  label: string;
  variant: keyof typeof badgeVariants;
};

export function ProductBadge({ label, variant }: ProductBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.04em]",
        badgeVariants[variant]
      )}
    >
      {label}
    </span>
  );
}

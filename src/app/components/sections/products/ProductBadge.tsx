import { cn } from "../../../../lib/cn";

const badgeVariants = {
  honey: "bg-[#C99648] text-white",
  wood: "bg-[#8A5A3B] text-white",
  cream: "bg-[#F3E8D2] text-[#5E5148]",
  terracotta: "bg-[#A85F3F] text-white",
  caramel: "bg-[#B7773C] text-white",
} as const;

export type ProductBadgeVariant = keyof typeof badgeVariants;

type ProductBadgeProps = {
  label: string;
  variant: ProductBadgeVariant;
};

export function ProductBadge({ label, variant }: ProductBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.04em] transition-transform duration-300 group-hover:scale-105",
        badgeVariants[variant]
      )}
    >
      {label}
    </span>
  );
}

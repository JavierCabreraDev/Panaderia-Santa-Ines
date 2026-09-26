import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#C99648]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[#2B211B] text-[#F3E8D2] hover:opacity-90",

        outline:
          "border border-[#2B211B]/20 bg-transparent text-[#2B211B] hover:bg-[#2B211B]/5",

        secondary: "bg-[#F3E8D2] text-[#2B211B] hover:bg-[#E8DAC0]",

        ghost: "text-[#8A5A3B] hover:bg-[#2B211B]/5",
      },

      size: {
        sm: "h-8 px-4 text-sm",
        md: "h-9 px-5 text-sm",
        lg: "h-11 px-7 text-[0.9rem]",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

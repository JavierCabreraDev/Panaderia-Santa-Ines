import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#2B211B] text-[#F3E8D2] hover:opacity-90",

        outline:
          "border border-[#2B211B]/20 text-[#2B211B] bg-transparent hover:bg-[#2B211B]/5",

        ghost: "text-[#8A5A3B] hover:bg-[#2B211B]/5",
      },

      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-7 py-3.5 text-[0.9rem]",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

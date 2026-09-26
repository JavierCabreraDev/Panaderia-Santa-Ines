import type { ReactNode } from "react";

import { cn } from "../../../lib/cn";
import { theme } from "../../../lib/theme";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
  variant?: "card" | "elevated" | "glass";
};

const styles = {
  card: {
    backgroundColor: theme.colors.background,
    border: `1px solid ${theme.colors.borderStrong}`,
    boxShadow: theme.shadow.md,
  },

  elevated: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    boxShadow: theme.shadow.lg,
  },

  glass: {
    backgroundColor: "rgba(255,248,236,.94)",
    border: `1px solid ${theme.colors.borderStrong}`,
    boxShadow: theme.shadow.md,
    backdropFilter: "blur(6px)",
  },
} as const;

export function Surface({
  children,
  className,
  variant = "card",
}: SurfaceProps) {
  return (
    <div
      className={cn("rounded-2xl", className)}
      style={styles[variant]}
    >
      {children}
    </div>
  );
}
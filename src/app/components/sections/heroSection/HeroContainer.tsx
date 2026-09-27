import type { ReactNode } from "react";

type HeroContainerProps = {
  children: ReactNode;
};

export function HeroContainer({ children }: HeroContainerProps) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      {children}
    </div>
  );
}

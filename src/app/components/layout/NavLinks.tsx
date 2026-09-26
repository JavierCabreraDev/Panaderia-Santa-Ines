import { navItems } from "../../../content/data";
import { cn } from "../../../lib/cn";

type NavLinksProps = {
  onNavigate: (href: string) => void;
  activeId?: string;
  mobile?: boolean;
};

export function NavLinks({
  onNavigate,
  activeId,
  mobile = false,
}: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => {
        const isActive = activeId === item.href.slice(1);

        return (
          <button
            key={item.href}
            onClick={() => onNavigate(item.href)}
            className={cn(
              mobile
                ? "w-full rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-secondary/5"
                : "relative text-sm transition-colors",
              isActive
                ? "font-semibold text-accent"
                : "text-primary hover:text-secondary"
            )}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="relative">
              {item.label}

              {!mobile && isActive && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-accent" />
              )}
            </span>
          </button>
        );
      })}
    </>
  );
}

import { navItems } from "../../../content/data";

type NavLinksProps = {
  onNavigate: (href: string) => void;
  mobile?: boolean;
};

export function NavLinks({ onNavigate, mobile = false }: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => onNavigate(item.href)}
          className={
            mobile
              ? "w-full text-left py-3 px-3 rounded-lg text-sm transition-colors hover:bg-[#8A5A3B]/5"
              : "text-sm transition-colors hover:opacity-70"
          }
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#2B211B",
            fontWeight: 400,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {item.label}
        </button>
      ))}
    </>
  );
}

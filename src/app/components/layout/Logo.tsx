type LogoProps = {
  onClick: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label="Ir al inicio"
      className="flex items-center gap-3 leading-tight select-none"
    >
      <img
        src="/images/brand/iso-sbg.png"
        alt="Logo de Panadería Santa Inés"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />

      <div className="flex flex-col">
        <span
          className="tracking-wide"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#2B211B",
            letterSpacing: "0.04em",
          }}
        >
          Santa Inés
        </span>

        <span
          className="tracking-widest"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 500,
            color: "#8A5A3B",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Panadería · Huasco
        </span>
      </div>
    </a>
  );
}

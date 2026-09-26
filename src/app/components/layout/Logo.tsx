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
        <span className="font-display text-[1.15rem] font-bold tracking-wide text-primary">
          Santa Inés
        </span>

        <span className="font-display text-[1.15rem] font-bold tracking-wide text-primary">
          Panadería · Huasco
        </span>
      </div>
    </a>
  );
}

export function HeroBackground() {
  return (
    <>
      {/* Textura */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/textures/paper-grain.png')",
          backgroundSize: "520px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 72% 36%, rgba(201,150,72,.12) 0%, transparent 45%)",
        }}
      />
    </>
  );
}

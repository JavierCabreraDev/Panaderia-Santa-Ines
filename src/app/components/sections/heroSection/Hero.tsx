import { HeroContent } from "../heroSection/HeroContent";
import { HeroImage } from "../heroSection/HeroImage";

export function Hero() {
  const handleScroll = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      {/* overlay */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <HeroContent onPrimary={() => handleScroll("#productos")} />

        <HeroImage />
      </div>

      {/* wave */}
    </section>
  );
}

import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroBackground } from "./HeroBackground";
import { HeroContainer } from "./HeroContainer";
import { smoothScrollTo } from "../../../../lib/scroll";

<HeroContent onPrimary={() => smoothScrollTo("#productos")} />;
export function Hero() {
  const handleScroll = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <HeroBackground />

      <HeroContainer>
        <HeroContent onPrimary={() => handleScroll("#productos")} />
        <HeroImage />
      </HeroContainer>
    </section>
  );
}

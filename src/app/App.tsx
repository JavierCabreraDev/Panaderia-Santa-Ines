import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";

import { Hero } from "./components/sections/Hero";
import { BusinessHighlights } from "./components/sections/BusinessHighlights";
import { FeaturedProducts } from "./components/sections/FeaturedProducts";
import { DailyFresh } from "./components/sections/DailyFresh";
import { OrdersCTA } from "./components/sections/OrdersCTA";
import { OrdersForBusiness } from "./components/sections/OrdersForBusiness";
import { About } from "./components/sections/About";
import { Location } from "./components/sections/Location";
import { RenovationPreview } from "./components/sections/RenovationPreview";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EC] font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <BusinessHighlights />
        <FeaturedProducts />
        <DailyFresh />
        <OrdersCTA />
        <OrdersForBusiness />
        <About />
        <Location />
        <RenovationPreview />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

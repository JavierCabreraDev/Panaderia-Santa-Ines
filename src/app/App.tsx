import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { BusinessHighlights } from "./components/sections/BusinessHighlights";
import { FeaturedProducts } from "./components/sections/FeaturedProducts";
import { DailyFresh } from "./components/sections/DailyFresh";
import { About } from "./components/sections/About";
import { OrdersCTA } from "./components/sections/OrdersCTA";
import { OrdersForBusiness } from "./components/sections/OrdersForBusiness";
import { RenovationPreview } from "./components/sections/RenovationPreview";
import { Location } from "./components/sections/Location";

export default function App() {
  // Smooth scroll polyfill
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#FFF8EC",
      }}
    >
      {/* ─── Navigation ─────────────────────────────────── */}
      <Navbar />

      {/* ─── Main content ───────────────────────────────── */}
      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Quick highlights bar */}
        <BusinessHighlights />

        {/* Products catalog */}
        <FeaturedProducts />

        {/* Daily fresh dark section */}
        <DailyFresh />

        {/* Orders CTA */}
        <OrdersCTA />

        {/* Orders for business */}
        <OrdersForBusiness />

        {/* About / history */}
        <About />

        {/* Location */}
        <Location />

        {/* Renovation preview / café próximamente */}
        <RenovationPreview />
      </main>

      {/* ─── Footer ─────────────────────────────────────── */}
      <Footer />

      {/* ─── Floating WhatsApp button ────────────────────── */}
      <WhatsAppButton />
    </div>
  );
}

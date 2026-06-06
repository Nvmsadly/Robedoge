/* ============================================================
   PAGE: Home
   Design: Holographic Glass Cosmos — full-page portfolio
   Sections: Navbar, Hero, Work, Services, About, Process, Contact, Footer
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.02 265)" }}>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

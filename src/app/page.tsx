import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WebMobileShowcase from "@/components/sections/WebMobileShowcase";
import AiAutomationShowcase from "@/components/sections/AiAutomationShowcase";
import WhyOrdynSection from "@/components/sections/WhyOrdynSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WebMobileShowcase />
        <AiAutomationShowcase />
        <WhyOrdynSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}


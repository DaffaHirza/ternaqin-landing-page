import HeroContent from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";

import Pricing from "@/components/pages/Pricing";
import Faqs from "@/components/pages/Faqs";
import TestimonialSection from "@/components/pages/Testimonial";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
import Analytics from "@/components/pages/Analytics";

export default function Home() {
  function StackSection({
    children,
    z,
  }: {
    children: React.ReactNode;
    z: number;
  }) {
    return (
      <section className="relative min-h-[200vh]">
        <div
          className="sticky top-0 min-h-screen bg-white"
          style={{ zIndex: z }}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <main className="relative">
      {/* STACK SECTIONS (punya kamu) */}
      <StackSection z={10}>
        <HeroContent />
      </StackSection>

      <StackSection z={20}>
        <FeaturesSection />
      </StackSection>

      <StackSection z={30}>
        <ServiceSection />
      </StackSection>

      <StackSection z={40}>
        <ProcessSection />
      </StackSection>

      {/* SECTION PUNYA DAFFA */}
      <Analytics />
      <Pricing />
      <Faqs />
      <TestimonialSection />
      <Contact />
      <Footer />
    </main>
  );
}
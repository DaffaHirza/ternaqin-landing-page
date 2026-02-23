import Image from "next/image";
import Hero from "@/components/Hero";
import Pricing from "@/components/pages/Pricing";
import Faqs from "@/components/pages/Faqs";
import TestimonialSection from "@/components/pages/Testimonial";
import Contact from "@/components/pages/Contact";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Hero />
      </section>
      <Pricing />
      <Faqs />
      <TestimonialSection />
      <Contact />
    </>
  );
}

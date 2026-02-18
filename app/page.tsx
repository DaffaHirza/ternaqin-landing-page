import HeroContent from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";

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
    </main>
  );
}

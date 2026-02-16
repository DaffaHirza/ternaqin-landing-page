import ScrollReveal from "@/components/ScrollReveal";

export default function SectionReveal() {
  return (
    <section className="relative text-white py-[15vh] lg:py-[20vh] xl:py-[26vh]">
      <div className="relative z-20 h-full w-full px-4">
        <ScrollReveal
          baseOpacity={0.35}
          enableBlur
          baseRotation={5}
          blurStrength={20}
        >
          End to end ecosystem platform empowering livestock businesses to
          manage operations, monitor performance, and grow sustainably with
          trust and transparency.
        </ScrollReveal>
      </div>
    </section>
  );
}

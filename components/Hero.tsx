"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const revealSectionRef = useRef<HTMLDivElement>(null);
  const [targetOpacity, setTargetOpacity] = useState(0.25);
  const [renderedOpacity, setRenderedOpacity] = useState(0.25);
  const [overlayOpacity, setOverlayOpacity] = useState(0.45);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    const container = scrollRef.current;
    const reveal = revealSectionRef.current;
    if (!container || !reveal) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      const start = reveal.offsetTop - containerHeight * 0.7;
      const end = reveal.offsetTop - containerHeight * 0.3;

      const progress = Math.min(
        Math.max((scrollTop - start) / (end - start), 0),
        1,
      );

      // dari 0.45 → 0.75
      const opacity = 0.4 + Math.pow(progress, 1.5) * 0.4;
      setOverlayOpacity(opacity);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let rafId: number;

    const smoothUpdate = () => {
      setRenderedOpacity((prev) => {
        const ease = 0.08; // makin kecil = makin smooth
        return prev + (targetOpacity - prev) * ease;
      });

      rafId = requestAnimationFrame(smoothUpdate);
    };

    smoothUpdate();

    return () => cancelAnimationFrame(rafId);
  }, [targetOpacity]);

  return (
    <section className="h-screen min-h-screen p-[10px]">
      <div className="relative h-full w-full overflow-hidden rounded-[32px]">
        {/* Background */}
        <Image
          src="/img/hero.png"
          alt="Livestock farm"
          fill
          priority
          className="object-cover"
        />

        {/* Full Dark Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
          }}
        />

        {/* Navbar */}
        <div className="absolute inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        {/* Content */}
        <div
          ref={scrollRef}
          className="relative z-20 h-full overflow-y-auto overscroll-contain pt-[0px]"
        >
          <div
            className="mx-auto h-full max-w-[1800px]"
            style={{ paddingTop: 140 }}
          >
            {/* ===== TOP AREA ===== */}
            <div className="relative px-4 xl:px-0">
              {/* LEFT TEXT */}
              <div className="max-w-[1348px]">
                <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] xl:text-[120px] font-medium leading-[1.05] tracking-tight text-white">
                  Elevate Livestock Quality
                  <br />
                  Global Market Advantage
                </h1>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-[1px] py-[12px]">
                  {["Blockchain", "QR Code", "AI Assistance"].map((item) => (
                    <span
                      key={item}
                      className="rounded-[12px] bg-[#FFFFFF33] border border-white px-4 py-1 text-[14px] sm:text-[16px] xl:text-[20px] text-white/80 backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT FLOAT CARD */}
              <div className="hidden xl:block xl:absolute xl:right-0 xl:top-0">
                <div className="w-full max-w-[352px] rounded-2xl border border-white bg-white/10 p-4 backdrop-blur-md">
                  <div className="overflow-hidden rounded-[22px]">
                    <Image
                      src="/img/hero-quality.png"
                      alt="Premium Quality Cattle"
                      width={320}
                      height={200}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-[25px] font-medium leading-[150%] text-white">
                    Premium Quality Cattle —
                    <br />
                    Limited Stock Available
                  </h3>

                  <div className="mt-3 flex w-full items-center justify-between text-[16px] text-white/70">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/location.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>Semarang</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/shop.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>10 Animals in Stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===== BOTTOM AREA ===== */}
            <div className="absolute bottom-6 left-6 right-6 xl:bottom-10 xl:left-10 xl:right-10 flex flex-col xl:flex-row gap-10 xl:gap-0 items-start xl:items-center justify-between">
              {/* LEFT CTA */}
              <div>
                <p className="max-w-[680px] text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] text-white">
                  Join our live product demo to see the platform in action and
                  explore all its features
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <button className="flex px-[48px] py-[16px] items-center rounded-[12px] bg-white text-[20px] xl:text-[24px] font-medium text-[#1F4941]">
                    Book Now
                  </button>

                  <button className="flex px-[16px] py-[16px] items-center rounded-[12px] bg-white">
                    <Image
                      src="/icons/arrow-right.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>

              {/* RIGHT STATS */}
              <div className="flex w-full xl:w-[1024px] flex-col sm:flex-row gap-8 xl:gap-[60px] text-white">
                {/* STAT 1 */}
                <div className="flex items-center gap-[12px]">
                  <p className="flex items-start text-[40px] sm:text-[52px] xl:text-[68px] font-medium leading-none">
                    <span>91M</span>
                    <span className="ml-1 text-[18px] sm:text-[22px] xl:text-[28px] translate-y-2">
                      +
                    </span>
                  </p>

                  <Image src="/icons/line.svg" alt="" width={2} height={68} />

                  <p className="text-[18px] sm:text-[22px] xl:text-[32px] flex flex-col leading-tight">
                    Manage Livestock
                    <span className="text-[16px] sm:text-[18px] xl:text-[24px] text-white/70">
                      Empowering livestock at scale
                    </span>
                  </p>
                </div>

                {/* STAT 2 */}
                <div className="flex items-center gap-[12px]">
                  <p className="flex items-start text-[40px] sm:text-[52px] xl:text-[68px] font-medium leading-none">
                    <span>87K</span>
                    <span className="ml-1 text-[18px] sm:text-[22px] xl:text-[28px] translate-y-2">
                      +
                    </span>
                  </p>

                  <Image src="/icons/line.svg" alt="" width={2} height={68} />

                  <p className="text-[18px] sm:text-[22px] xl:text-[32px] flex flex-col leading-tight">
                    Cooperative Farms
                    <span className="text-[16px] sm:text-[18px] xl:text-[24px] text-white/70">
                      Trusted by farming network
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* ===== END BOTTOM ===== */}
            <div className="h-[50vh]" />
            <div
              ref={revealSectionRef}
              className="h-screen flex items-center text-white px-6 xl:px-0"
            >
              <ScrollReveal
                scrollContainerRef={scrollRef}
                baseOpacity={0.5}
                enableBlur
                baseRotation={4}
                blurStrength={10}
              >
                End to end ecosystem platform empowering livestock businesses to
                manage operations, monitor performance, and grow sustainably
                with trust and transparency.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

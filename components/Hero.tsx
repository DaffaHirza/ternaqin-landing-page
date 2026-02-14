"use client";

import Image from "next/image";
import PinnedScene from "@/components/PinnedScene";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeroContent() {
  return (
    <PinnedScene
      frame={16}
      background={
        <>
          {/* Background Image */}
          <Image
            src="/img/hero.png"
            alt="cow farm"
            fill
            priority
            className="object-cover"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.35) 40%,
        rgba(0,0,0,0.55) 75%,
        rgba(0,0,0,0.7) 100%
      )
    `,
            }}
          />

          {/* Scroll Darkening */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "black",
              opacity:
                "calc(var(--pinned-progress, 0) * var(--pinned-progress, 0) * 0.7)",
            }}
          />
        </>
      }
    >
      <div className="relative w-full h-screen overflow-hidden text-white">
        {/* NAVBAR */}
        <div className="absolute inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        <div className="relative z-20 h-full max-w-[1800px] mx-auto px-6 lg:px-16">
          {/* HERO TITLE */}
          <section className="absolute top-24 lg:top-28 left-6 lg:left-16 max-w-[1100px]">
            <h1 className="font-medium leading-[1.05] tracking-tight text-[clamp(38px,6vw,120px)]">
              Elevate Livestock Quality
              <br />
              Global Market Advantage
            </h1>

            <div className="mt-6 flex flex-wrap gap-2 py-3">
              {["Blockchain", "QR Code", "AI Assistance"].map((item) => (
                <span
                  key={item}
                  className="rounded-[12px] bg-[#FFFFFF33] border border-white px-4 py-1 text-[14px] sm:text-[16px] xl:text-[20px] text-white/80 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* FLOAT CARD (HILANG DI MOBILE) */}
          <section className="hidden lg:block absolute top-[120px] lg:top-32 right-6 lg:right-16 w-[240px] sm:w-[300px] lg:w-[320px]">
            <div className="w-full rounded-2xl border border-white bg-white/10 p-4 backdrop-blur-md shadow-xl">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src="/img/hero-quality.png"
                  alt="Premium Quality Cattle"
                  width={320}
                  height={200}
                  className="h-[180px] sm:h-[200px] w-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-[18px] sm:text-[22px] font-medium leading-[150%]">
                Premium Quality Cattle —
                <br />
                Limited Stock Available
              </h3>
            </div>
          </section>

          {/* CTA + STATS Wrapper */}
          <div className="absolute bottom-24 left-0 w-full px-6 lg:px-16 flex items-end justify-between">
            {/* CTA */}
            <section className="max-w-[640px]">
              <p className="text-[clamp(16px,2.2vw,28px)] max-w-[680px]">
                Join our live product demo to see the platform in action and
                explore all its features
              </p>

              <div className="mt-6">
                <button className="px-[36px] sm:px-[48px] py-[14px] sm:py-[16px] rounded-[12px] bg-white text-[#1F4941] text-[16px] sm:text-[20px] xl:text-[24px] font-medium hover:scale-105 transition">
                  Book Now
                </button>
              </div>
            </section>

            {/* STATS */}
            <div className="flex gap-10 sm:gap-16 lg:gap-24 text-center">
              <div>
                <p className="text-[clamp(32px,5vw,68px)] font-medium leading-none">
                  91M+
                </p>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] text-white/70">
                  Manage Livestock
                </p>
              </div>

              <div>
                <p className="text-[clamp(32px,5vw,68px)] font-medium leading-none">
                  87K+
                </p>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] text-white/70">
                  Cooperative Farms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCENE 2 : TEXT REVEAL ================= */}
      <section className="relative text-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-16">
          <div className="">
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
        </div>
      </section>
    </PinnedScene>
  );
}

"use client";

import Image from "next/image";
import PinnedScene from "@/components/PinnedScene";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div id="hero" className="relative w-full min-h-[100svh] lg:h-screen text-white">
      <div className="relative z-20 h-full min-h-[100svh] w-full mx-auto px-4 pb-6 sm:pb-8 lg:pb-0">
        {/* HERO TITLE */}
        <section className="pt-24 sm:pt-28 lg:pt-40">
          <h1 className="font-medium tracking-tight text-[clamp(28px,9vw,110px)] leading-[1.08] sm:leading-[1.05] max-w-[16ch] lg:max-w-none">
            Elevate Livestock Quality
            <br />
            Global Market Advantage
          </h1>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-[1px] py-2 sm:py-3">
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
        <section className="hidden lg:block absolute top-32 right-8 xl:right-16 w-[320px] xl:w-[352px]">
          <div className="relative rounded-[28px] border border-white bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Background Gradient Statis */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />

            <div className="relative p-5">
              {/* Image */}
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src="/img/hero-quality.png"
                  alt="Premium Quality Cattle"
                  width={400}
                  height={250}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[26px] font-medium leading-[140%] text-white">
                Premium Quality Cattle —
                <br />
                Limited Stock Available
              </h3>

              {/* Info Bottom */}
              <div className="mt-5 flex items-center gap-6 text-white/90 text-[15px]">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
            9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 
            2.5S13.38 11.5 12 11.5z"
                    />
                  </svg>
                  <span>Semarang</span>
                </div>

                <div className="w-[6px] h-[6px] bg-white/60 rounded-full" />

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M4 18v-2c0-1.1.9-2 2-2h3v4H4zm0-6V8c0-1.1.9-2 2-2h3v6H4zm11 
            6v-4h3c1.1 0 2 .9 2 2v2h-5zm0-12h3c1.1 0 2 .9 2 2v4h-5V6zM10 
            4h4v16h-4z"
                    />
                  </svg>
                  <span>10 Animals in Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:bottom-16 left-0 w-full px-4 text-white">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* CTA */}
            <section className="max-w-full lg:max-w-[520px]">
              <p className="text-[15px] sm:text-[18px] lg:text-[22px] leading-[150%] text-white/90 max-w-[34ch] sm:max-w-none">
                Join our live product demo to see the platform in action and
                explore all its features
              </p>

              <div className="mt-4 sm:mt-6 flex items-center gap-1">
                <Link
                  href="/book-now"
                  className="px-5 sm:px-15 h-[48px] sm:h-[60px] rounded-[12px] bg-white text-[#1F4941] text-[15px] sm:text-[22px] font-medium shadow-md hover:scale-105 transition flex items-center justify-center"
                >
                  Book Now
                </Link>

                <Link
                  href="/book-now"
                  className="w-[48px] sm:w-[60px] h-[48px] sm:h-[60px] rounded-[12px] bg-white flex items-center justify-center text-[#1F4941] text-[22px] sm:text-[32px] shadow-md hover:scale-105 transition"
                >
                  <Image
                    src="/img/arrow-right.svg"
                    alt="arrow-right"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
            </section>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              {/* STAT 1 */}
              <div className="grid grid-cols-[128px_1px_minmax(0,1fr)] sm:grid-cols-[150px_1px_minmax(0,1fr)] lg:grid-cols-[180px_1px_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-6">
                {/* Number */}
                <div className="flex items-start">
                  <span className="text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[72px] font-medium leading-none tracking-tight">
                    <AnimatedCounter end={91} suffix="M" />
                  </span>
                  <span className="text-[18px] sm:text-[24px] lg:text-[30px] ml-1 mt-2 font-medium">
                    +
                  </span>
                </div>

                {/* Divider */}
                <div className="h-[70px] sm:h-[80px] lg:h-[90px] w-px bg-white/25" />

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-medium">
                    Manage Livestock
                  </p>
                  <p className="text-white/70 text-[14px] sm:text-[16px] lg:text-[17px] mt-1">
                    Empowering livestock at scale
                  </p>
                </div>
              </div>

              {/* STAT 2 */}
              <div className="grid grid-cols-[128px_1px_minmax(0,1fr)] sm:grid-cols-[150px_1px_minmax(0,1fr)] lg:grid-cols-[180px_1px_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-6">
                <div className="flex items-start">
                  <span className="text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[72px] font-medium leading-none tracking-tight">
                    <AnimatedCounter end={87} suffix="K" />
                  </span>
                  <span className="text-[18px] sm:text-[24px] lg:text-[30px] ml-1 mt-2 font-medium">
                    +
                  </span>
                </div>

                <div className="h-[70px] sm:h-[80px] lg:h-[90px] w-px bg-white/25" />

                <div className="flex flex-col justify-center">
                  <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-medium">
                    Cooperative Farms
                  </p>
                  <p className="text-white/70 text-[14px] sm:text-[16px] lg:text-[17px] mt-1">
                    Trusted by farming network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionReveal />
    </div>
  );
}

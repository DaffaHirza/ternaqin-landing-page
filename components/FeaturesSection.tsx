"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress 0 → 1 saat section masuk viewport
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      // geser dari 100px → 0px
      const translateY = 100 * (1 - progress);

      el.style.transform = `translateY(${translateY}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="
relative z-20 bg-[#f3f3f3] 
py-16 md:py-20 lg:py-24 
px-4 sm:px-4 md:px-4
will-change-transform transition-transform
"
    >
      <div className="w-full space-y-4">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-18">
          {/* LEFT — Badge */}
          <div className="md:col-span-2 mt-0 sm:mt-2 md:mt-5 lg:mt-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <Image
                src="/img/flash-circle.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
              Features
            </span>
          </div>

          {/* RIGHT — Heading */}
          <div className="md:col-span-10">
            <h2
              className="
      text-[32px] 
      sm:text-[40px] 
      md:text-[56px] 
      lg:text-[72px] 
      font-semibold 
      leading-[1.1] 
      md:leading-[1.05] 
      tracking-[-0.02em] 
      text-[#1c1c1c]
    "
            >
              Purpose-Built With Intelligent Automation
              <br className="hidden md:block" />
              <span className="text-[#bcbcbc] font-medium">
                To Optimize Livestock Management And
                <br className="hidden md:block" />
                Accelerate Sustainable Growth
              </span>
            </h2>
          </div>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-4">
          {/* LEFT CARD */}
          <div
            className="
    md:col-span-5 
    relative 
    bg-white 
    rounded-[24px] md:rounded-[32px] 
    aspect-auto md:aspect-square 
    p-6 sm:p-8 md:p-14 
    overflow-hidden
    group
    [perspective:1200px]
  "
          >
            {/* Decorative Background */}
            <img
              src="/img/bg-features-top-card.svg"
              alt=""
              className="
    absolute inset-0
    w-full h-full
    object-cover
    pointer-events-none

    rotate-[90deg]
    scale-110
    translate-y-4

    transition-all
    duration-[1400ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]
    will-change-transform

    delay-300
    group-hover:delay-0

    group-hover:rotate-0
    group-hover:scale-100
    group-hover:translate-y-0
  "
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top Row — Logo */}
              <div className="flex justify-end">
                <img
                  src="/img/Ternaqin-logo.svg"
                  alt="TernaQin"
                  className="w-16 sm:w-20 md:w-28"
                />
              </div>

              {/* Center Heading */}
              <div className="flex-1 flex items-center py-6 md:py-0">
                <h3
                  className="
        text-[28px] 
        sm:text-[36px] 
        md:text-[48px] 
        lg:text-[60px] 
        leading-[1.15] 
        md:leading-[1.1] 
        font-medium
      "
                >
                  <span className="text-[#1f3d34]">
                    Advancing Livestock
                    <br className="hidden sm:block" />
                    Management
                  </span>{" "}
                  <span className="text-[#bdbdbd] font-medium">
                    Through Proven
                    <br className="hidden sm:block" />
                    Performance and Innovation
                  </span>
                </h3>
              </div>

              {/* Bottom Row — CTA */}
              <div>
                <span
                  className="
        inline-flex 
        items-center 
        gap-2 
        px-4 sm:px-5 
        py-2 
        text-xs sm:text-sm 
        border-2 
        border-[#1f3d34] 
        rounded-[6px] 
        text-[#1f3d34] 
        bg-[#D9F5E5]/50
      "
                >
                  <span className="w-2 h-2 bg-[#1f3d34] rounded-full" />
                  System Track Record
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
    group
    md:col-span-7 
    relative 
    rounded-[24px] md:rounded-[32px] 
    overflow-hidden 
   min-h-[360px] sm:min-h-[420px] md:min-h-[520px]
  "
          >
            {/* Background */}
            <img
              src="/img/bg-top-card-2.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />

            {/* Blur Overlay */}
            <div
              className="
    absolute inset-0 
    backdrop-blur-md 
    bg-black/40
    opacity-0 
    group-hover:opacity-100
    transition-all 
    duration-500
  "
            />

            <div
              className="
    relative z-10 
    p-6 sm:p-8 md:p-10 
    text-white 
    flex flex-col 
    h-full
  "
            >
              {/* TOP SECTION */}
              <div>
                <div
                  className="
        flex 
        flex-wrap 
        gap-0.5 
        text-xs sm:text-sm md:text-base 
        mb-4
      "
                >
                  {["SCM", "CRM", "POS", "SEO"].map((item) => (
                    <span
                      key={item}
                      className="
              px-3 sm:px-4 md:px-6 
              py-1.5 md:py-2 
              bg-white/20 
              border 
              border-white/40 
              rounded-[8px] md:rounded-[12px] 
              backdrop-blur
            "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3
                  className="
        text-[28px] 
        sm:text-[36px] 
        md:text-[44px] 
        lg:text-[55px] 
        leading-[1.15] 
        md:leading-[1.1] 
        font-medium
      "
                >
                  Intelligent Livestock
                  <br className="hidden sm:block" />
                  Management
                </h3>
              </div>

              {/* PUSHER */}
              <div className="flex-1" />

              {/* BOTTOM SECTION */}
              <div className="space-y-4 md:space-y-6">
                {/* Description (Hidden Default) */}
                <div
                  className="
      transform
      translate-y-6
      opacity-0
      group-hover:translate-y-0
      group-hover:opacity-100
      transition-all
      duration-500
    "
                >
                  <p
                    className="
        text-white/80 
        text-sm 
        sm:text-base 
        md:text-lg 
        lg:text-[22px] 
        leading-relaxed 
      "
                  >
                    A QR code-based digital livestock management system enabling
                    real-time tracking and monitoring of cattle health, feed,
                    and history to enhance farm efficiency and operational
                    transparency.
                  </p>
                </div>

                {/* CTA Row */}
                <Link
                  href="/intelligent-livestock-management"
                  className="flex items-center gap-2 group"
                >
                  {/* Learn More Wrapper */}
                  <div
                    className="
      overflow-hidden
      transition-all
      duration-500
      ease-out
      max-w-0
      group-hover:max-w-[200px]
    "
                  >
                    <div
                      className="
        whitespace-nowrap
        px-5 md:px-8
        h-[48px] md:h-[60px]
        rounded-[10px] md:rounded-[12px]
        bg-white
        text-[#1F4941]
        text-sm md:text-lg
        font-medium
        shadow-md
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        flex items-center
      "
                    >
                      Learn More
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
      flex-shrink-0
      w-[48px] md:w-[60px]
      h-[48px] md:h-[60px]
      rounded-[10px] md:rounded-[12px]
      bg-white
      flex items-center justify-center
      shadow-md
      transition-transform duration-500
      group-hover:translate-x-1
    "
                  >
                    <Image
                      src="/img/arrow-right.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 SMALL CARDS */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Blockchain",
              img: "/img/blockchain-bg-card.svg",
              desc: "Storing livestock data securely and transparently, including health history, vaccinations, and slaughter.",
              href: "/blockchain",
            },
            {
              title: "QR Code",
              img: "/img/qr-bg-card.svg",
              desc: "Digital identity for cattle and meat products to track origin, health, and production in real time.",
              href: "/qr-code",
            },
            {
              title: "AI Assistance",
              img: "/img/ai-bg-card.svg",
              desc: "Providing recommendations for care, feed, and vaccination reminders based on livestock data analysis.",
              href: "/ai-assistance",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
        group
        relative 
        rounded-3xl 
        overflow-hidden 
        h-[380px] sm:h-[450px] md:h-[650px] lg:h-[750px]
        shadow-sm
        block
      "
            >
              {/* Background */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 text-white flex flex-col h-full">
                {/* Title */}
                <h3 className="text-[40px] md:text-[55px] font-medium">
                  {item.title}
                </h3>

                <div className="flex-1" />

                {/* Bottom Content */}
                <div className="space-y-4">
                  {/* Description */}
                  <p
                    className="
              text-white/80
              text-[18px] md:text-[24px]
              transform
              translate-y-6
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
                  >
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2">
                    {/* Learn More */}
                    <div
                      className="
                overflow-hidden
                transition-all
                duration-500
                ease-out
                max-w-0
                group-hover:max-w-[200px]
              "
                    >
                      <div
                        className="
                  whitespace-nowrap
                  px-5 md:px-8
                  h-[48px] md:h-[60px]
                  rounded-[10px] md:rounded-[12px]
                  bg-white
                  text-[#1F4941]
                  text-sm md:text-lg
                  font-medium
                  shadow-md
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  flex items-center
                "
                      >
                        Learn More
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="
                flex-shrink-0
                w-[48px] md:w-[60px]
                h-[48px] md:h-[60px]
                rounded-[10px] md:rounded-[12px]
                bg-white
                flex items-center justify-center
                shadow-md
                transition-transform duration-500
                group-hover:translate-x-1
              "
                    >
                      <Image
                        src="/img/arrow-right.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
          {/* LEFT LARGE (Flexible - 7 cols) */}
          <div
            className="
      md:col-span-7
      relative 
      rounded-[24px] md:rounded-[32px] 
      overflow-hidden 
     min-h-[360px] sm:min-h-[420px] md:min-h-[520px]
      shadow-sm
    "
          >
            <img
              src="/img/next-generation-bg.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 p-4 text-white h-full flex flex-col justify-between">
              <h3 className="font-medium text-[32px] sm:text-[40px] md:text-[55px] leading-tight">
                Next-Generation Platform Ecosystem with AI Assistant
              </h3>

              <button
                className="
          w-[48px] md:w-[60px] 
          h-[48px] md:h-[60px] 
          rounded-[10px] md:rounded-[12px] 
          bg-white 
          flex 
          items-center 
          justify-center 
          shadow-md 
          hover:scale-105 
          transition
        "
              >
                <Image
                  src="/img/arrow-right.svg"
                  alt="arrow-right"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>

          {/* RIGHT SQUARE */}
          <div
            className="
    group
    md:col-span-5
    relative
    rounded-[32px]
    aspect-auto md:aspect-square
    overflow-hidden
    px-4 py-8
    text-white
    shadow-sm
    min-h-[420px] sm:min-h-[480px] md:min-h-0
  "
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/img/pricing-bg.svg')" }}
            />

            {/* Radial Decoration */}
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

            {/* Hover darken */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* TOP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/img/ternaqin.svg"
                    alt="TernaQin Logo"
                    width={300}
                    height={32}
                  />
                </div>

                <p className="text-white/60 text-[18px] sm:text-[22px] md:text-[28px]">
                  The trial access is now available. Try it now!
                </p>
              </div>

              {/* STATS DIAGONAL AREA */}
              <div className="relative flex flex-col md:block flex-1">
                {/* 85% */}
                <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-y-[100%] md:translate-x-[-5%] mb-10 md:mb-0">
                  <p className="text-[60px] sm:text-[80px] md:text-[110px] leading-[0.9] font-semibold tracking-tight text-[#EDEDED]">
                    85
                    <span className="text-[20px] sm:text-[26px] md:text-[34px] align-top ml-1 text-white/60">
                      %
                    </span>
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 bg-white/20 border border-white rounded-[8px] text-white backdrop-blur-md">
                    <Image
                      src="/img/status-up.svg"
                      alt="growth"
                      width={28}
                      height={28}
                    />
                    Livestock Revenue Growth
                  </div>
                </div>

                {/* 95% */}
                <div className="relative md:absolute md:top-1/2 md:left-1/2 md:translate-y-[-40%] md:-translate-x-[95%]">
                  <p className="text-[60px] sm:text-[80px] md:text-[110px] leading-[0.9] font-semibold tracking-tight text-[#EDEDED]">
                    95
                    <span className="text-[20px] sm:text-[26px] md:text-[34px] align-top ml-1 text-white/60">
                      %
                    </span>
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 bg-white/20 border border-white rounded-[8px] text-white backdrop-blur-md">
                    <Image
                      src="/img/lovely.svg"
                      alt="love"
                      width={28}
                      height={28}
                    />
                    Satisfied With Our Services
                  </div>
                </div>
              </div>

              {/* ================= CTA BAR ================= */}
              <div
                className="
      absolute inset-x-0 bottom-0 z-20
      translate-y-12 opacity-0
      group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
    "
              >
                {/* content */}
                <div className="relative flex items-center justify-between px-6 py-6">
                  <p className="text-white/90 text-[16px] sm:text-[20px] md:text-[24px] tracking-wide">
                    *Free 1 Month Trial Access
                  </p>

                  {/* Arrow */}
                  <button
                    className="
      flex-shrink-0
      w-[48px] md:w-[60px]
      h-[48px] md:h-[60px]
      rounded-[10px] md:rounded-[12px]
      bg-white
      flex items-center justify-center
      shadow-md
      transition-transform duration-500
      group-hover:translate-x-1
    "
                  >
                    <Image
                      src="/img/arrow-right.svg"
                      alt="arrow-right"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

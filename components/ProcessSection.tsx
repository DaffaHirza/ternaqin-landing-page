"use client";

import { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "./processData";
import { useRouter } from "next/navigation";

export default function ProcessSection() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  const current = PROCESS_STEPS[step];

  const changeStep = (newStep: number) => {
    if (animating) return;

    setAnimating(true);
    setStep(newStep);

    setTimeout(() => setAnimating(false), 450);
  };

  const next = () => changeStep((step + 1) % PROCESS_STEPS.length);
  const prev = () =>
    changeStep((step - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);

  return (
    <section className="bg-[#F3F3F3] py-8 md:py-8 lg:py-8">
      <div className="w-full px-4 space-y-16">
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
              Process
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
              Delivering Integrated, Transparent, and Intelligent Livestock
              Management{" "}
              <br className="hidden md:block" />
              <span className="text-[#bcbcbc] font-medium">
                Powered By QR Based Tracking
              </span>
            </h2>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-stretch">
          {/* LEFT IMAGE */}
          <div className="md:col-span-5 flex">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] md:min-h-[620px] rounded-[28px] overflow-hidden">
              <Image
                key={step}
                src={PROCESS_STEPS[step].image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover animate-fade"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-7 flex flex-col gap-6 md:gap-4 h-full">
            {/* STEP BAR */}
            <div
              className="
bg-[#F7F7F7] 
rounded-[24px] md:rounded-[28px] 
px-6 md:px-10 
py-6 md:py-12 
flex items-center justify-between
"
            >
              <div className="flex items-center gap-4">
                <span className="text-[28px] md:text-[40px] font-semibold text-[#1A1A1A]">
                  {String(current.id).padStart(2, "0")}
                </span>
                <span className="text-[20px] text-[#9A9A9A]">From 04</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-[52px] h-[52px] rounded-[14px] border border-[#E5E5E5] flex items-center justify-center"
                >
                  <Image
                    src="/img/arrow-left.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>

                <button
                  onClick={next}
                  className="w-[52px] h-[52px] rounded-[14px] bg-[#1F4941] flex items-center justify-center"
                >
                  <Image
                    src="/img/h-arrow-right.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
            {/* LOWER GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[6.5fr_5.5fr] gap-6 md:gap-4 flex-1">
              {/* INFO CARD */}
              <div className="bg-[#F7F7F7] rounded-[28px] p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <h3 className="text-[24px] sm:text-[30px] md:text-[32px] lg:text-[36px] w-full font-semibold text-[#1A1A1A] leading-[1.2]">
                    {current.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {current.roles.map((role) => (
                      <span
                        key={role}
                        className="px-4 md:px-5 py-2 rounded-[12px] text-xs sm:text-sm font-medium border-2 border-[#1F4941] bg-[#D9F5E5]/50 text-[#1F4941]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-[16px] md:text-[18px] text-justify text-[#9A9A9A] leading-[1.8] max-w-[650px]">
                    {current.desc}
                  </p>
                </div>

                {/* STAT */}
                <div className="flex items-end gap-4 md:gap-6 mt-12 md:mt-14 lg:mt-16">
                  <span className="text-[42px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-semibold text-[#1F4941] leading-none">
                    {current.stat}
                  </span>

                  <div className="border-l border-black/25 pl-4 md:pl-6">
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium text-[#1A1A1A]">
                      {current.statLabel}
                    </p>
                    <p className="text-sm md:text-base text-[#9A9A9A]">{current.statSub}</p>
                  </div>
                </div>
              </div>

              {/* DEMO CARD */}
              <div className="relative rounded-[32px] p-6 md:p-8 lg:p-10 text-white overflow-hidden h-full">
                {/* SVG Background */}
                <Image
                  src="/img/bg-process-card-3.svg"
                  alt="background"
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* HEADING */}
                  <p className="mb-5 text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.35] lg:leading-[1.5] font-medium text-white/90 max-w-[28ch]">
                    Join our live product demo to see the platform in action and
                    explore all its features
                  </p>

                  {/* PUSH CONTENT BELOW TO BOTTOM */}
                  <div className="mt-auto">
                    {/* DATE & LOCATION */}
                    <div className="space-y-4 lg:space-y-5 text-[15px] sm:text-[16px] lg:text-[18px] text-white/70 mb-6 lg:mb-8">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/img/calendar.svg"
                          alt="calendar"
                          width={18}
                          height={18}
                          className="opacity-80"
                        />
                        <span>January 01, 2027</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <Image
                          src="/img/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                          className="opacity-80"
                        />
                        <span>Online (Via Zoom & Discord)</span>
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-px bg-white/20 mb-6 lg:mb-8" />

                    <div className="flex gap-4">
                      <button
                        onClick={() => router.push("/book-now")}
                        className="flex-1 h-[50px] sm:h-[56px] lg:h-[64px] bg-white text-[#1F4941] rounded-[14px] lg:rounded-[18px] font-medium text-[18px] sm:text-[20px] lg:text-[24px] hover:scale-[1.02] transition"
                      >
                        Book Now
                      </button>

                      <button
                        onClick={() => router.push("/book-now")}
                        className="w-[50px] sm:w-[56px] lg:w-[64px] h-[50px] sm:h-[56px] lg:h-[64px] bg-white rounded-[14px] lg:rounded-[18px] flex items-center justify-center hover:scale-[1.02] transition"
                      >
                        <Image
                          src="/img/arrow-right.svg"
                          alt="arrow"
                          width={28}
                          height={28}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

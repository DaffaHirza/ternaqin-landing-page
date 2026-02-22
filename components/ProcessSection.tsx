"use client";

import { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "./processData";

export default function ProcessSection() {
  const [step, setStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  const current = PROCESS_STEPS[step];
  const previous = PROCESS_STEPS[prevStep];

  const changeStep = (newStep: number) => {
    if (animating) return;

    setAnimating(true);
    setPrevStep(step);
    setStep(newStep);

    setTimeout(() => setAnimating(false), 450);
  };

  const next = () => changeStep((step + 1) % PROCESS_STEPS.length);
  const prev = () =>
    changeStep((step - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);

  return (
    <section className="bg-[#F3F3F3] py-24">
      <div className="w-full px-4 space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-18">
          {/* LEFT — Badge */}
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <span className="w-2 h-2 bg-white rounded-full" />
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

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-4 items-stretch">
          {/* LEFT IMAGE */}
          <div className="col-span-5 flex">
            <div className="relative w-full h-full min-h-[620px] rounded-[28px] overflow-hidden">
              {/* OLD */}
              <Image
                key={prevStep}
                src={previous.image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className={`object-cover transition-opacity duration-500 ${
                  animating ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* NEW */}
              <Image
                key={step}
                src={current.image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className={`object-cover transition-opacity duration-500 ${
                  animating ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-7 flex flex-col gap-4 h-full">
            {/* STEP BAR */}
            <div className="bg-[#F7F7F7] rounded-[28px] px-10 py-12 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[40px] font-semibold text-[#1A1A1A]">
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
            <div className="grid grid-cols-[6.5fr_5.5fr] gap-4 flex-1">
              {/* INFO CARD */}
              <div className="bg-[#F7F7F7] rounded-[28px] p-10 flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <h3 className="text-[36px] w-full font-semibold text-[#1A1A1A] leading-[1.2]">
                    {current.title}
                  </h3>

                  <div className="flex gap-2">
                    {current.roles.map((role) => (
                      <span
                        key={role}
                        className="px-5 py-2 rounded-[12px] text-sm font-medium border-2 border-[#1F4941] bg-[#D9F5E5]/50 text-[#1F4941]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-[18px] text-justify text-[#9A9A9A] leading-[1.8] max-w-[650px]">
                    {current.desc}
                  </p>
                </div>

                {/* STAT */}
                <div className="flex items-end gap-6 mt-16">
                  <span className="text-[72px] font-semibold text-[#1F4941] leading-none">
                    {current.stat}
                  </span>

                  <div className="border-l border-black/25 pl-6">
                    <p className="text-[22px] font-medium text-[#1A1A1A]">
                      {current.statLabel}
                    </p>
                    <p className="text-[#9A9A9A]">{current.statSub}</p>
                  </div>
                </div>
              </div>

              {/* DEMO CARD */}
              <div className="relative rounded-[32px] p-10 text-white overflow-hidden h-full">
                {/* SVG Background */}
                <Image
                  src="/img/bg-process-card-3.svg"
                  alt="background"
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* HEADING */}
                  <p className="text-[30px] leading-[1.5] font-medium text-white/90">
                    Join our live product demo to see the platform in action and
                    explore all its features
                  </p>

                  {/* PUSH CONTENT BELOW TO BOTTOM */}
                  <div className="mt-auto">
                    {/* DATE & LOCATION */}
                    <div className="space-y-5 text-[18px] text-white/70 mb-8">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/img/calendar.svg"
                          alt="calendar"
                          width={22}
                          height={22}
                          className="opacity-80"
                        />
                        <span>January 01, 2027</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <Image
                          src="/img/location.svg"
                          alt="location"
                          width={22}
                          height={22}
                          className="opacity-80"
                        />
                        <span>Online (Via Zoom & Discord)</span>
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-px bg-white/20 mb-8" />

                    {/* BUTTON ROW */}
                    <div className="flex gap-4">
                      <button className="flex-1 h-[64px] bg-white text-[#1F4941] rounded-[18px] font-medium text-[24px] hover:scale-[1.02] transition">
                        Book Now
                      </button>

                      <button className="w-[64px] h-[64px] bg-white rounded-[18px] flex items-center justify-center hover:scale-[1.02] transition">
                        <Image
                          src="/img/arrow-right.svg"
                          alt="arrow"
                          width={40}
                          height={40}
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

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SectionService() {
  const [activeCard, setActiveCard] = useState(1);

  const baseCardStyle = `
  relative
  rounded-[32px]
  overflow-hidden
  transition-all
  duration-500
  ease-in-out
  cursor-pointer
  min-h-[280px] lg:min-h-0
`;

  return (
    <section className="relative bg-[#F3F3F3] py-4 overflow-hidden">
      <div className="w-full px-4 space-y-12 relative z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-18">
          <div className="md:col-span-2 mt-0 sm:mt-2 md:mt-5 lg:mt-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <Image
                src="/img/flash-circle.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
              Services
            </span>
          </div>

          <div className="md:col-span-10">
            <h2 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A]">
              Optimizing Livestock
            </h2>

            <p className="mt-8 text-[24px] md:text-[32px] text-[#9A9A9A] leading-relaxed">
              Providing smart, transparent, and scalable digital solutions to
              streamline livestock management through QR-based tracking and farm
              operations for sustainable growth and efficiency.
            </p>
          </div>
        </div>

        {/* FLEX EXPANDING CARDS */}
        <div
          className="
  flex flex-col lg:flex-row 
  gap-4 
  h-auto lg:h-[820px]
"
        >
          {/* 01 */}
          <div
            onMouseEnter={() => setActiveCard(1)}
            className={`${baseCardStyle} ${
              activeCard === 1
                ? "lg:flex-[3] flex-none lg:p-10 p-6 text-white"
                : "lg:flex-[1] flex-none lg:p-8 p-6 text-black"
            }`}
          >
            {/* Background Layer */}
            <div className="absolute inset-0">
              {/* Disable BG */}
              <Image
                src="/img/service-bg-card-disable.svg"
                alt=""
                fill
                className="object-cover"
              />

              {/* Active BG */}
              <Image
                src="/img/bg-service-card-1.svg"
                alt=""
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${
                  activeCard === 1 ? "opacity-100" : "opacity-0"
                }`}
                priority
              />

              {/* 🔥 MOBILE OVERLAY ONLY */}
              {activeCard === 1 && (
                <div className="absolute inset-0 bg-black/60 lg:hidden transition-opacity duration-500" />
              )}
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[40px] lg:text-[60px] font-semibold">
                    01
                  </span>

                  {activeCard === 1 && (
                    <div className="flex items-start gap-2">
                      <Link
                        href="/services/livestock"
                        className="flex items-center gap-2"
                      >
                        <span className="px-8 h-[60px] rounded-[12px] bg-white text-[#1F4941] text-lg font-medium shadow-md hover:scale-105 transition flex items-center">
                          Learn More
                        </span>

                        <span className="w-[60px] h-[60px] rounded-[12px] bg-white flex items-center justify-center shadow-md hover:scale-105 transition">
                          <Image
                            src="/img/arrow-right.svg"
                            alt="arrow-right"
                            width={24}
                            height={24}
                          />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                {activeCard === 1 && (
                  <>
                    <div className="mt-6 h-[1px] bg-white/30 w-full" />
                    <p className="mt-8 text-[16px]  lg:text-[18px] text-white/80 leading-relaxed">
                      A centralized administration platform for managing
                      livestock data digitally.
                    </p>
                  </>
                )}
              </div>

              <span className="text-[22px] lg:text-[30px] font-medium">
                Livestock Administrator
              </span>
            </div>
          </div>

          {/* 02 */}
          <div
            onMouseEnter={() => setActiveCard(2)}
            className={`${baseCardStyle} ${
              activeCard === 2
                ? "lg:flex-[3] flex-none lg:p-10 p-6 text-white"
                : "lg:flex-[1] flex-none lg:p-8 p-6 text-black"
            }`}
          >
            {/* Background Layer */}
            <div className="absolute inset-0">
              {/* Disable BG */}
              <Image
                src="/img/service-bg-card-disable.svg"
                alt=""
                fill
                className="object-cover"
              />

              {/* Active BG */}
              <Image
                src="/img/bg-service-card-2.svg"
                alt=""
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${
                  activeCard === 2 ? "opacity-100" : "opacity-0"
                }`}
                priority
              />

              {/* 🔥 MOBILE OVERLAY ONLY */}
              {activeCard === 2 && (
                <div className="absolute inset-0 bg-black/60 lg:hidden transition-opacity duration-500" />
              )}
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[40px] lg:text-[60px] font-semibold">
                    02
                  </span>

                  {activeCard === 2 && (
                    <div className="flex items-start gap-2">
                      <Link
                        href="/services/employee"
                        className="flex items-center gap-2"
                      >
                        <span className="px-8 h-[60px] rounded-[12px] bg-white text-[#1F4941] text-lg font-medium shadow-md hover:scale-105 transition flex items-center">
                          Learn More
                        </span>

                        <span className="w-[60px] h-[60px] rounded-[12px] bg-white flex items-center justify-center shadow-md hover:scale-105 transition">
                          <Image
                            src="/img/arrow-right.svg"
                            alt="arrow-right"
                            width={24}
                            height={24}
                          />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                {activeCard === 2 && (
                  <>
                    <div className="mt-6 h-[1px] bg-white/30 w-full" />

                    <p className="mt-8 text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
                      Manage employee data, attendance tracking, performance
                      records, and operational roles in a centralized system
                      designed for efficient farm workforce management.
                    </p>
                  </>
                )}
              </div>

              <span className="text-[22px] lg:text-[30px] font-medium">
                Employee
              </span>
            </div>
          </div>

          {/* 03 */}
          <div
            onMouseEnter={() => setActiveCard(3)}
            className={`${baseCardStyle} ${
              activeCard === 3
                ? "lg:flex-[3] flex-none lg:p-10 p-6 text-white"
                : "lg:flex-[1] flex-none lg:p-8 p-6 text-black"
            }`}
          >
            {/* Background Layers */}
            {/* Background Layer */}
            <div className="absolute inset-0">
              {/* Disable BG */}
              <Image
                src="/img/service-bg-card-disable.svg"
                alt=""
                fill
                className="object-cover"
              />

              {/* Active BG */}
              <Image
                src="/img/bg-service-card-3.svg"
                alt=""
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${
                  activeCard === 3 ? "opacity-100" : "opacity-0"
                }`}
                priority
              />

              {/* 🔥 MOBILE OVERLAY ONLY */}
              {activeCard === 3 && (
                <div className="absolute inset-0 bg-black/60 lg:hidden transition-opacity duration-500" />
              )}
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[40px] lg:text-[60px] font-semibold">
                    03
                  </span>

                  {activeCard === 3 && (
                    <div className="flex items-start gap-2">
                      <Link
                        href="/services/abattoir"
                        className="flex items-center gap-2"
                      >
                        <span className="px-8 h-[60px] rounded-[12px] bg-white text-[#1F4941] text-lg font-medium shadow-md hover:scale-105 transition flex items-center">
                          Learn More
                        </span>

                        <span className="w-[60px] h-[60px] rounded-[12px] bg-white flex items-center justify-center shadow-md hover:scale-105 transition">
                          <Image
                            src="/img/arrow-right.svg"
                            alt="arrow-right"
                            width={24}
                            height={24}
                          />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                {activeCard === 3 && (
                  <>
                    <div className="mt-6 h-[1px] bg-white/30 w-full" />

                    <p className="mt-8 text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
                      Streamline slaughterhouse operations with integrated
                      livestock verification, processing records, and
                      traceability systems to ensure compliance, transparency,
                      and efficiency.
                    </p>
                  </>
                )}
              </div>

              <span className="text-[22px] lg:text-[30px] font-medium">
                Abattoir
              </span>
            </div>
          </div>

          {/* TESTIMONIAL (tetap static, tidak ikut animasi) */}
          <div className="lg:flex-[3] flex-none bg-white rounded-[32px] overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-[360px] bg-[#EAEAEA] rounded-[28px] m-4 flex justify-center overflow-hidden">
              <Image
                src="/img/service-enchancing.svg"
                alt="phone"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="px-10 pb-10 pt-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-[40px] font-semibold text-[#1A1A1A] leading-[1.15]">
                  Enhancing Experiences <br />
                  for Our Customers
                </h3>

                <div className="mt-24">
                  <Image src="/img/star.svg" alt="" width={120} height={120} />
                </div>

                <p className="text-[20px] text-[#9A9A9A] leading-[1.6] max-w-[480px]">
                  “Thank you for being part of the innovation that supports and
                  empowers livestock farming in Indonesia.”
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/chris.svg"
                    alt="Chris Hemsworth"
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <span className="text-[16px] lg:text-[18px] font-medium text-[#1A1A1A]">
                    Chris Hemsworth
                  </span>
                </div>

                <span className="text-[16px] text-[#9A9A9A]">900K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

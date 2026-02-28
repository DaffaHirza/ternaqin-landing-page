"use client";

import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Props {
  livestock?: number;
  trade?: number;
  lastUpdated?: string;
}

export default function LivestockCategoryCard({
  livestock = 41,
  trade = 50,
  lastUpdated = "Jan 01, 2027",
}: Props) {
  const total = livestock + trade;
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const startTime = performance.now();

    const animate = (time: number) => {
      const raw = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setAngle(eased * 100);

      if (raw < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="bg-white rounded-[12px] p-5 sm:p-6  w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <h3 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919] truncate">
          Livestock Category
        </h3>

        <p className="text-[clamp(11px,1.5vw,16px)] text-[#9A9A9A] text-right shrink">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="bg-[#FAFAFA] p-4 sm:p-6 md:p-8 rounded-[12px]">
        {/* Donut */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[260px] aspect-square min-w-[160px]">
            <div className="relative w-full h-full -rotate-35">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
                    #83C8AE 0% ${Math.min(angle, 60)}%,
                    #1F4941 ${Math.min(angle, 60)}% ${Math.min(angle, 100)}%,
                    #E9F3EF ${Math.min(angle, 100)}% 100%
                  )`,
                }}
              />

              <div className="absolute inset-[18%] bg-white rounded-full" />
            </div>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center whitespace-nowrap">
              <p className="text-[clamp(22px,3vw,48px)] tracking-[-0.05em] font-semibold text-[#2F4F46] whitespace-nowrap">
                <AnimatedCounter end={total} suffix="M" />
                <span className="text-[#9A9A9A] text-[clamp(14px,2vw,28px)] align-top">
                  +
                </span>
              </p>
              <p className="text-[#4A4A4A] text-[clamp(12px,1.5vw,18px)] mt-1 whitespace-nowrap">
                Livestock
              </p>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="mt-6 space-y-4">
          {/* Livestock */}
          <div className="flex justify-between items-center flex-nowrap gap-4 text-[clamp(12px,1.5vw,18px)]">
            <div className="flex items-center gap-3 whitespace-nowrap min-w-fit">
              <img
                src="img/livestock-indicator.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#191919]">Livestock</span>
            </div>

            <div className="flex items-center gap-4 whitespace-nowrap min-w-fit">
              <span className="text-[#1F4941] font-medium whitespace-nowrap">
                <AnimatedCounter end={livestock} suffix="M" />
              </span>

              <span className="flex items-center gap-2 font-light text-[#FF3A44] whitespace-nowrap">
                <img src="img/trend-up-red.svg" alt="" className="w-4 h-4" />
                <AnimatedCounter end={60} suffix="%" />
              </span>
            </div>
          </div>

          {/* Trade */}
          <div className="flex justify-between items-center flex-nowrap gap-4 text-[clamp(12px,1.5vw,18px)]">
            <div className="flex items-center gap-3 whitespace-nowrap min-w-fit">
              <img
                src="img/ls-trade-indicator.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#191919]">Livestock Trade</span>
            </div>

            <div className="flex items-center gap-4 whitespace-nowrap min-w-fit">
              <span className="text-[#1F4941] font-medium whitespace-nowrap">
                <AnimatedCounter end={trade} suffix="M" />
              </span>

              <span className="flex items-center gap-2 font-light text-[#3FC47C] whitespace-nowrap">
                <img src="img/trend-up.svg" alt="" className="w-4 h-4" />
                <AnimatedCounter end={40} suffix="%" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

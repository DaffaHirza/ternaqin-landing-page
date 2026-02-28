"use client";

import Image from "next/image";
import SalesTransactions from "@/components/SalesTransactions";
import LivestockCategory from "@/components/LivestockCategory";
import LargestLivestock from "@/components/LargestLivestock";

export default function AnalyticsSection() {
  return (
    <section className="w-full bg-[#F5F6F6] p-4 rounded-[28px] space-y-4">
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start my-12 lg:my-20">
        <div className="md:col-span-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-[#1F4941] text-white rounded-full">
            <Image
              src="/img/flash-circle.svg"
              alt="arrow-right"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            Analytics
          </span>
        </div>

        <div className="md:col-span-10">
          <h2 className="text-[clamp(32px,6vw,88px)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A]">
            Optimizing Livestock
          </h2>

          <p className="mt-6 text-[clamp(16px,2.5vw,32px)] text-[#9A9A9A] leading-relaxed max-w-5xl">
            Providing smart, transparent, and scalable digital solutions to
            streamline livestock management through QR-based tracking and farm
            operations for sustainable growth and efficiency.
          </p>
        </div>
      </div>

      {/* ================= TOP: Latest Update ================= */}
      <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-sm">
        <h3 className="text-[#9A9A9A] text-base text-[clamp(18px,2.5vw,32px)] font-medium mb-6">
          Latest Update
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-medium">
          {[
            "TernQin grants trial access to new users, allowing them to experience the platform’s full feature set",
            "TernQin Announces the Adoption of Blockchain and AI to Strengthen Smart Livestock Management",
            "TernQin grants trial access to new users, offering an opportunity to experience advanced features",
          ].map((text, i) => (
            <div key={i} className="space-y-3">
              <p className="text-[#191919] text-[clamp(14px,1.8vw,18px)] leading-relaxed">
                {text}
              </p>
              <p className="text-[#9A9A9A] text-xs sm:text-sm">
                10.30 • Jan 01, 2027
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ================= MIDDLE GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] gap-4 items-stretch">
        <div className="h-full">
          <SalesTransactions />
        </div>

        <div className="h-full">
          <LivestockCategory />
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-sm">
        <h3 className="text-[#9A9A9A] text-base text-[clamp(18px,2.5vw,32px)] font-medium mb-6">
          Farmers of The Year
        </h3>

        <div className="flex justify-between w-full gap-10 overflow-x-auto font-medium pr-0">
          {[
            { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
            { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
            { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
            { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
            { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
            { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
          ].map((item, i) => (
            <div key={i} className="min-w-[200px] space-y-3 flex-shrink-0">
              <p className="text-[#191919] text-[clamp(14px,1.8vw,18px)] leading-relaxed">
                {item.name}
              </p>
              <p className="text-[#9A9A9A] text-xs sm:text-sm">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Largest Livestock */}
        <div className="h-full">
          <LargestLivestock />
        </div>

        {/* Livestock Types */}
        <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#191919]">
                Livestock Types
              </h3>
              <p className="text-xs sm:text-sm text-[#9A9A9A]">
                Last updated: Jan 01, 2027
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-xs sm:text-sm text-[#9A9A9A]">
                6 Types of Livestock
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#1F4941]">
                91M+
              </p>
            </div>
          </div>

          <div className="flex items-end gap-3 sm:gap-4 h-[160px] sm:h-[200px]">
            {[
              { name: "Turkey", val: "11%" },
              { name: "Duck", val: "13%" },
              { name: "Cattle", val: "18%" },
              { name: "Sheep", val: "18%" },
              { name: "Fish", val: "15%" },
              { name: "Chicken", val: "25%" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-[#1F4941] rounded-t-[12px] flex items-end justify-center text-white text-xs sm:text-sm font-medium transition-all duration-500"
                  style={{ height: `${parseInt(item.val) * 4}px` }}
                >
                  {item.val}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#191919] text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

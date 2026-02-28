"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutContent from "./AboutContent";
import { useRouter } from "next/navigation";
import UserContent from "./UserContent";
import MechanismsContent from "./MechanismsContent";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<"about" | "user" | "mechanisms">(
    "about"
  );
  const router = useRouter();

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen py-12 px-5 sm:px-8 lg:px-5 bg-[#F3F3F3]">
        <div className="flex flex-col">
          <div
            onClick={() => router.back()}
            className="flex items-start mb-12 gap-6 cursor-pointer"
          >
            <span className="flex text-[#191919] text-xl font-semibold gap-5 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 5.92999L3.5 12L9.57 18.07"
                  stroke="#191919"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5019 12H3.67188"
                  stroke="#191919"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Details Services</p>
            </span>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-[40px] xl:text-8xl font-medium text-[#191919]">
                Livestock Administrator
              </h2>
            </div>
            <div className="flex flex-col items-center text-[#A5A5A5]">
              <img
                src="/img/livestock.svg"
                alt="Hero Image"
                className="w-full rounded-2xl"
              />
            </div>
            <p className="text-xl text-justify leading-8 indent-8">
              The Administrator Web serves as a centralized digital control
              center that integrates livestock records, daily operational
              activities, and workforce management into a unified system,
              ensuring data accuracy, end-to-end traceability, and operational
              transparency. By digitizing cattle records, health monitoring, and
              treatment histories alongside employee roles, performance
              tracking, and reporting, the platform eliminates manual processes
              and data silos. Supported by real-time analytics and operational
              insights, it enables administrators to make informed, data-driven
              decisions, optimize resources, improve compliance, and enhance
              overall efficiency across modern livestock operations.
            </p>
            <div className="w-full border-b border-[#D9D9D9]">
              <div className="flex items-center gap-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`font-medium px-1 py-3 border-b-2 ${
                    activeTab === "about"
                      ? "text-[#191919] border-[#1F4941]"
                      : "text-[#A5A5A5] border-transparent"
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("user")}
                  className={`font-medium px-1 py-3 border-b-2 ${
                    activeTab === "user"
                      ? "text-[#191919] border-[#1F4941]"
                      : "text-[#A5A5A5] border-transparent"
                  }`}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("mechanisms")}
                  className={`font-medium px-1 py-3 border-b-2 ${
                    activeTab === "mechanisms"
                      ? "text-[#191919] border-[#1F4941]"
                      : "text-[#A5A5A5] border-transparent"
                  }`}
                >
                  Mechanisms
                </button>
              </div>
            </div>
            {activeTab === "about" && <AboutContent />}
            {activeTab === "user" && <UserContent />}
            {activeTab === "mechanisms" && <MechanismsContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

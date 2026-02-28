"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ArchitectureContent from "./ArchitectureContent";
import ImplementationContent from "./ImplementationContent";

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState<"architecture" | "implementation">("architecture");

    return (
        <div className="min-h-screen py-12 px-5 sm:px-8 lg:px-5 bg-[#F3F3F3]">
            <Navbar />
            <div className="flex flex-col">
                <div className="flex items-start mb-12 gap-6">
                    <span className="flex text-[#191919] text-xl font-semibold gap-5 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#191919" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5019 12H3.67188" stroke="#191919" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p>Details Features</p>
                    </span>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-[40px] xl:text-8xl font-medium text-[#191919]">
                            Next-Generation Platform Ecosystem with AI Assistance</h2>
                    </div>
                    <div className="flex flex-col items-center text-[#A5A5A5]">
                        <img src="/img/bgdetailfeatures.svg" alt="Hero Image" className="w-full" />
                        <p>Source : Illustration generated using Gemini AI</p>
                    </div>
                    <p className="text-xl text-justify leading-8 indent-8">
                        Next-Generation Platform Ecosystem with AI Assistance is a fully integrated
                        digital ecosystem that unifies livestock management, abattoir operations,
                        workforce coordination, supply chain tracking, and customer engagement into
                        a single intelligent environment. Powered by real-time data synchronization
                        and AI-driven insights, the platform eliminates data silos, enables faster
                        decision-making, and maintains consistent operational standards across the
                        livestock value chain. By leveraging blockchain-backed records and QR code
                        identification, it ensures end-to-end transparency, traceability, and
                        compliance from farm to consumer, while supporting scalable, efficient, and
                        sustainable growth in a data-driven livestock industry.
                    </p>
                    <div className="w-full border-b border-[#D9D9D9]">
                        <div className="flex items-center gap-8">
                            <button
                                type="button"
                                onClick={() => setActiveTab("architecture")}
                                className={`font-medium px-1 py-3 border-b-2 ${activeTab === "architecture"
                                    ? "text-[#191919] border-[#1F4941]"
                                    : "text-[#A5A5A5] border-transparent"
                                    }`}
                            >
                                Platform Architecture
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("implementation")}
                                className={`font-medium px-1 py-3 border-b-2 ${activeTab === "implementation"
                                    ? "text-[#191919] border-[#1F4941]"
                                    : "text-[#A5A5A5] border-transparent"
                                    }`}
                            >
                                Platform Implementation
                            </button>
                        </div>
                    </div>
                    {activeTab === "architecture" ? <ArchitectureContent /> : <ImplementationContent />}
                </div>
            </div >
        </div>
    );
}
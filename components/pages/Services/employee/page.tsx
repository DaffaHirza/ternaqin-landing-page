"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutContent from "./AboutContent";

import UserContent from "./UserContent";
import MechanismsContent from "./MechanismsContent";

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState<"about" | "user" | "mechanisms">("about");

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

                        <p>Details Services</p>
                    </span>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-[40px] xl:text-8xl font-medium text-[#191919]">
                            Employee</h2>
                    </div>
                    <div className="flex flex-col items-center text-[#A5A5A5]">
                        <img src="/img/bgemployee.svg" alt="Hero Image" className="w-full rounded-2xl" />
                    </div>
                    <p className="text-xl text-justify leading-8 indent-8">
                        The Employee Mobile App digitizes attendance, task reporting, and daily activity tracking into a centralized mobile platform that ensures transparency, accountability, and efficient workforce management. By enabling real-time data capture and seamless synchronization with the Ternaqin ecosystem, the app empowers employees to record activities accurately while providing management with actionable workforce insights to improve productivity, compliance, and operational control across livestock operations.                    </p>
                    <div className="w-full border-b border-[#D9D9D9]">
                        <div className="flex items-center gap-8">
                            <button
                                type="button"
                                onClick={() => setActiveTab("about")}
                                className={`font-medium px-1 py-3 border-b-2 ${activeTab === "about"
                                    ? "text-[#191919] border-[#1F4941]"
                                    : "text-[#A5A5A5] border-transparent"
                                    }`}
                            >
                                About
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("user")}
                                className={`font-medium px-1 py-3 border-b-2 ${activeTab === "user"
                                    ? "text-[#191919] border-[#1F4941]"
                                    : "text-[#A5A5A5] border-transparent"
                                    }`}
                            >
                                User
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("mechanisms")}
                                className={`font-medium px-1 py-3 border-b-2 ${activeTab === "mechanisms"
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
            </div >
        </div>
    );
}
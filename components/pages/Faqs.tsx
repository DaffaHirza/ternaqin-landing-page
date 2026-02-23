"use client";

import { useState, useRef, useEffect } from 'react'
import { Plus, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What Is The Strategic Value Of Implementing QR Codes As Digital?",
        answer: "QR codes function as centralized digital identities, consolidating cattle records. This enables farmers to monitor pedigree, health, feed, and life cycles, driving operational efficiency and data-driven decision making."
    },
    {
        question: "How Does The System Improve Livestock Management Efficiency?",
        answer: "The system streamlines data collection, automates record-keeping, and provides real-time insights into livestock health and performance, significantly reducing manual work and improving decision-making speed."
    },
    {
        question: "Is The Platform Suitable For Large-Scale And Enterprise Operations?",
        answer: "Yes, the platform is designed to scale seamlessly from small farms to large enterprise operations, supporting unlimited livestock records and multiple user management with advanced reporting capabilities."
    },
    {
        question: "How Does The System Ensure Data Accuracy And Transparency?",
        answer: "Our platform uses blockchain-inspired verification methods and audit trails to ensure all data entries are tracked, timestamped, and immutable, providing complete transparency across the supply chain."
    },
    {
        question: "Can The Platform Support Data-Driven Decision Making?",
        answer: "Absolutely. The platform provides advanced analytics, predictive insights, and customizable dashboards that transform raw data into actionable intelligence for optimal livestock management."
    },
    {
        question: "How Easy Is The System To Implement And Onboard?",
        answer: "Implementation is straightforward with our intuitive interface and comprehensive onboarding process. Most farms can be fully operational within 1-2 weeks with our dedicated support team."
    }
]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const [faqHeight, setFaqHeight] = useState<number>(0)
    const faqContainerRef = useRef<HTMLDivElement>(null)
    const [isLoveStates, setLoveStates] = useState<boolean[]>(() =>
        faqs.map((_, index) => index === 0)
    )

    useEffect(() => {
        const updateHeight = () => {
            if (faqContainerRef.current) {
                setFaqHeight(faqContainerRef.current.scrollHeight)
            }
        }

        // Update height on mount and whenever openIndex changes
        updateHeight()

        // Use ResizeObserver to track dynamic height changes
        const resizeObserver = new ResizeObserver(updateHeight)
        if (faqContainerRef.current) {
            resizeObserver.observe(faqContainerRef.current)
        }

        return () => resizeObserver.disconnect()
    }, [openIndex])

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const toggleLove = (index: number) => {
        setLoveStates((prev) =>
            prev.map((value, currentIndex) =>
                currentIndex === index ? !value : value
            )
        )
    }

    return (
        <div className="min-h-screen py-12 px-5 sm:px-8 lg:px-5 bg-[#F3F3F3]">
            <div className="max-w-screen mx-auto">
                <div className="flex items-start mb-12 gap-6">
                    <span className="flex bg-[#1F4941] text-white px-4 py-2 rounded-full gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.97 2C6.44997 2 1.96997 6.48 1.96997 12C1.96997 17.52 6.44997 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM15.72 12.35L12 16.58L11.56 17.08C10.95 17.77 10.45 17.59 10.45 16.66V12.7H8.74997C7.97997 12.7 7.76997 12.23 8.27997 11.65L12 7.42L12.44 6.92C13.05 6.23 13.55 6.41 13.55 7.34V11.3H15.25C16.02 11.3 16.23 11.77 15.72 12.35Z" fill="white" />
                        </svg>
                        <span>Faqs</span>
                    </span>
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-2xl md:text-2xl lg:text-3xl text-gray-400">
                            Intuitive, easy-to-follow guidance that speeds up onboarding and enables teams to build with confidence, clarity, and lasting strategic impact worldwide.
                        </p>

                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                    {/* Left Side - Image Card */}
                    <div
                        className="relative bg-gray-800 rounded-3xl overflow-hidden h-[400px] lg:h-auto lg:sticky lg:top-8 transition-all duration-300"
                        style={{ height: faqHeight > 0 ? `${faqHeight}px` : undefined }}
                    >
                        <Image
                            src="/img/bgfaqs.svg"
                            alt="Customer meeting"
                            fill
                            className="object-cover opacity-80"
                        />

                        {/* Text Content */}
                        <div className="absolute top-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-5xl md:text-5xl font-semibold mb-2">
                                You Still Have Questions?
                            </h3>
                        </div>

                        {/* Chat Button */}
                        <button className="absolute bottom-8 left-8 bg-white rounded-lg p-2 shadow-lg">
                            <div className="relative">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7119 9.98145L30.019 9.98145L30.019 24.2886" stroke="#1F4941" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.98633 30.0205L29.8207 10.1862" stroke="#1F4941" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                        </button>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div ref={faqContainerRef} className="col-span-2 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                {/* Question Header */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-2xl font-semibold text-[#191919] pr-4">
                                        {faq.question}
                                    </span>

                                    {openIndex === index ? (
                                        <X className="w-5 h-5 text-[#1F4941] flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-[#1F4941] flex-shrink-0" />
                                    )}
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 leading-relaxed">

                                        <div className='text-[#A5A5A5] text-lg'>{faq.answer}</div>

                                        <div className="flex items-center gap-3 mt-4 px-4 py-2 bg-[#F3F3F3] rounded-lg w-max">
                                            <span className='text-[#191919]'>Is This Helpful?</span>
                                            <button
                                                onClick={() => toggleLove(index)}
                                            >
                                                <svg width="20" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.37 18.46C11.03 18.58 10.47 18.58 10.13 18.46C7.23 17.47 0.75 13.34 0.75 6.34C0.75 3.25 3.24 0.75 6.31 0.75C8.13 0.75 9.74 1.63 10.75 2.99C11.76 1.63 13.38 0.75 15.19 0.75C18.26 0.75 20.75 3.25 20.75 6.34C20.75 13.34 14.27 17.47 11.37 18.46Z"
                                                        fill={isLoveStates[index] ? "#FF3A44" : "#F3F3F3"}
                                                        stroke={isLoveStates[index] ? "#FF3A44" : "#191919"}
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="transition-colors duration-200"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* "Is this helpful?" */}
                                        {/* {openIndex === index && (
                                            <div className="flex items-center gap-2 mt-4">

                                            </div>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    );
}
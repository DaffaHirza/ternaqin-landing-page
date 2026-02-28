"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

interface TabItem {
  label: string;
}

interface ReferenceItem {
  text: string;
}

interface SectionContent {
  label: string;
  title: string;
  image: string;
  description: string[];
  references: ReferenceItem[];
}

interface InsightTemplateProps {
  categories: TabItem[];
  title: string;
  heroImage: string;
  heroDescription: string;
  sections: SectionContent[];
}

export default function InsightTemplate({
  categories,
  title,
  heroImage,
  heroDescription,
  sections,
}: InsightTemplateProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  const activeSection = sections[activeIndex];

  const router = useRouter();

  /* ===============================
     ULTRA PRECISION INDICATOR
  ================================ */
  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const currentTab = tabRefs.current[activeIndex];

      if (!container || !currentTab) return;

      const containerRect = container.getBoundingClientRect();
      const tabRect = currentTab.getBoundingClientRect();

      setIndicatorStyle({
        width: tabRect.width,
        left: tabRect.left - containerRect.left,
      });
    };

    const resizeObserver = new ResizeObserver(updateIndicator);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    tabRefs.current.forEach((tab) => {
      if (tab) resizeObserver.observe(tab);
    });

    // Wait for font rendering
    document.fonts?.ready.then(updateIndicator);

    requestAnimationFrame(updateIndicator);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex, sections.length]);

  return (
    <div className="">
      {/* navbar */}
      <Navbar />

      <div className="w-full px-4 md:px-4 py-16 text-[22px] leading-relaxed">
        {/* BACK BUTTON */}
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-6 transition-colors duration-200"
          >
            <span className="text-[20px]">
              <Image
                src="/img/arrow-left.svg"
                alt="arrow-left"
                width={24}
                height={24}
              />
            </span>
            <span className="text-[22px] font-semibold">Detail Features</span>
          </button>
        </div>
        {/* TOP CATEGORY */}
        <div className="flex flex-wrap gap-[1px] p-2 mb-8">
          {categories.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-100 rounded-[12px] border border-[#E3E3E3] text-gray-600"
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h1 className="text-[48px] font-semibold mb-10 leading-tight">
          {title}
        </h1>

        {/* HERO IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <Image
            src={heroImage}
            alt="Hero"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* HERO DESCRIPTION */}
        <p className="indent-10 text-gray-700 text-justify mb-16">
          {heroDescription}
        </p>

        {/* ====================== */}
        {/* SECTION TABS */}
        {/* ====================== */}

        <div className="relative mb-16 border-b border-gray-200">
          {/* MOBILE */}
          <div className="md:hidden flex items-center justify-between pb-4">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? sections.length - 1 : prev - 1
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300"
            >
              ←
            </button>

            <span className="font-medium text-center">
              {activeSection.label}
            </span>

            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === sections.length - 1 ? 0 : prev + 1
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300"
            >
              →
            </button>
          </div>

          {/* DESKTOP */}
          <div ref={containerRef} className="hidden md:flex gap-10 relative">
            {sections.map((tab, i) => (
              <button
                key={i}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setActiveIndex(i)}
                className={`pb-4 transition-all duration-300 ${activeIndex === i
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-black"
                  }`}
              >
                {tab.label}
              </button>
            ))}

            {/* PERFECT INDICATOR */}
            <span
              className="hidden md:block absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out"
              style={{
                width: indicatorStyle.width,
                transform: `translateX(${indicatorStyle.left}px)`,
              }}
            />
          </div>
        </div>

        {/* ====================== */}
        {/* CONTENT */}
        {/* ====================== */}

        <div key={activeIndex}>
          <h2 className="text-[38px] font-semibold mb-10 leading-tight">
            {activeSection.title}
          </h2>

          <div className="rounded-2xl overflow-hidden mb-12">
            <Image
              src={activeSection.image}
              alt="Section"
              width={1200}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-10 text-gray-700">
            {activeSection.description.map((paragraph, i) => (
              <p key={i} className="indent-10 text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-semibold mb-6">References</h3>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              {activeSection.references.map((ref, i) => (
                <li key={i}>{ref.text}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row justify-between text-gray-500 mt-24 border-t pt-8 gap-4">
          <span>© 2026 TernaQin Indonesia</span>
          <span>All Right Reserved</span>
        </div>
      </div>
    </div>
  );
}

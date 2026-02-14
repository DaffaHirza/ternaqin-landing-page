"use client";

import { useRef, useEffect, ReactNode } from "react";

type ScrollSceneProps = {
  children: ReactNode;
  background?: ReactNode;
  frame?: number;
};

export default function ScrollScene({
  children,
  background,
  frame = 24,
}: ScrollSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;
    const content = contentRef.current!;

    let start = 0;
    let maxScroll = 0;
    let ticking = false;

    const calculate = () => {
      start = wrapper.offsetTop;
      maxScroll = content.scrollHeight - window.innerHeight + frame * 2;
      wrapper.style.height = maxScroll + window.innerHeight + "px";
    };

    const update = () => {
      const scrollY = window.scrollY - start;
      const clamped = Math.max(0, Math.min(scrollY, maxScroll));
      const progress = maxScroll === 0 ? 0 : clamped / maxScroll;

      // ✅ expose progress ke CSS
      wrapper.style.setProperty(
        "--pinned-progress",
        progress.toString()
      );

      content.style.transform = `translate3d(0, ${-clamped}px, 0)`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    calculate();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculate);
    };
  }, [frame]);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 rounded-[32px] overflow-hidden"
          style={{
            top: frame,
            left: frame,
            right: frame,
            bottom: frame,
          }}
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 -z-10">
            {background}
          </div>

          {/* SCROLL CONTENT */}
          <div
            ref={contentRef}
            className="absolute inset-0 will-change-transform"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

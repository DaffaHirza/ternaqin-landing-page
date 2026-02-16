"use client";

import { useRef, useEffect, ReactNode } from "react";

type Props = {
  hero: ReactNode;
  next?: ReactNode;
  overlay?: ReactNode;
  background?: ReactNode;
  frame?: number;
};

export default function ScrollScene({
  hero,
  next,
  overlay,
  background,
  frame = 24,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current!;
    const content = contentRef.current!;

    let start = 0;
    let length = 0;

    const calc = () => {
      start = track.offsetTop;

      // ⭐ TOTAL tinggi semua isi scene
      length = content.scrollHeight - window.innerHeight;

      track.style.height = length + window.innerHeight + "px";
    };

    const update = () => {
      const y = window.scrollY - start;
      const clamped = Math.max(0, Math.min(y, length));

      const progress = clamped / length;

      document.documentElement.style.setProperty(
        "--pinned-progress",
        progress.toString()
      );

      // ⭐ seluruh isi bergerak
      content.style.transform = `translate3d(0, ${-clamped}px, 0)`;
    };

    calc();
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", calc);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <div ref={trackRef} className="relative">
      <div className="sticky top-0 h-screen">
        {/* NAVBAR mengikuti frame */}
        <div
          className="fixed z-[999] pointer-events-none"
          style={{
            left: frame,
            right: frame,
            top: frame,
          }}
        >
          <div className="pointer-events-auto">{overlay}</div>
        </div>

        {/* FRAME */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            padding: frame, // lebih aman dari top/left/right/bottom
          }}
        >
          <div className="relative w-full h-full rounded-[32px] overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 -z-10">{background}</div>

            {/* CONTENT */}
            <div
              ref={contentRef}
              className="absolute inset-0 will-change-transform z-10"
            >
              <div className="min-h-screen">{hero}</div>
              {next && <div className="min-h-screen">{next}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

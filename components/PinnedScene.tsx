"use client";

import { useRef, useEffect, ReactNode } from "react";

type Props = {
  id?: string;
  hero: ReactNode;
  next?: ReactNode;
  overlay?: ReactNode;
  background?: ReactNode;
  frame?: number;
};

export default function ScrollScene({
  id = "pinned-scene",
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

      const totalHeight = content.scrollHeight;
      const sceneHeight = window.innerHeight;

      const scrollDistance = totalHeight - sceneHeight;

      length = Math.max(scrollDistance, 0);

      track.style.height = totalHeight + "px";
    };

    const update = () => {
      const y = window.scrollY - start;
      const clamped = Math.max(0, Math.min(y, length));

      const progress = clamped / length;
      document.documentElement.style.setProperty(
        "--pinned-progress",
        progress.toString()
      );

      // gerakkan seluruh isi pinned scene
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
    <div ref={trackRef} id={id} className="relative z-0">
      <div className="sticky top-0 h-screen">
        {/* NAVBAR overlay */}
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

        {/* FRAME content */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ padding: frame }}
        >
          <div className="relative w-full h-full rounded-[32px] overflow-hidden">
            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">{background}</div>

            {/* CONTENT HERO + NEXT */}
            <div
              ref={contentRef}
              className="absolute inset-0 will-change-transform z-10"
            >
              <div className="min-h-screen">{hero}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

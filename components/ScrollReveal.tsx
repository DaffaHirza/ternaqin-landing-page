"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  baseOpacity?: number;
  baseRotation?: number;
  enableBlur?: boolean;
  blurStrength?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.5,
  baseRotation = 3,
  enableBlur = true,
  blurStrength = 6,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const lettersRef = useRef<HTMLElement[]>([]);

  /* ===== SPLIT WORD → LETTER (RESPONSIVE SAFE) ===== */
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    let idx = 0;
    const words = text.split(" ");

    return words.map((word, w) => (
      <React.Fragment key={w}>
        <span className="inline-block">
          {word.split("").map((char) => {
            const i = idx++;
            return (
              <span
                key={i}
                ref={(el) => {
                  if (el) lettersRef.current[i] = el;
                }}
                className="inline-block"
                style={{ opacity: baseOpacity }}
              >
                {char}
              </span>
            );
          })}
        </span>
        {w < words.length - 1 && " "}
      </React.Fragment>
    ));
  }, [children, baseOpacity]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    /* ===== ROTATION ===== */
    gsap.fromTo(
      el,
      { rotate: baseRotation, transformOrigin: "0% 50%" },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );

    /* ===== BLUR ===== */
    if (enableBlur) {
      gsap.fromTo(
        lettersRef.current,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          stagger: 0.01,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: "top 20%",
            scrub: true,
          },
        },
      );
    }

    /* ===== TRUE PIXEL SPOTLIGHT (REAL) ===== */
    const radius = 160;
    const inner = radius * 0.35;

    const onMove = (e: MouseEvent) => {
      lettersRef.current.forEach((letter) => {
        if (!letter) return;

        const r = letter.getBoundingClientRect();

        const px = Math.max(r.left, Math.min(e.clientX, r.right));
        const py = Math.max(r.top, Math.min(e.clientY, r.bottom));

        const dx = e.clientX - px;
        const dy = e.clientY - py;
        const d = Math.hypot(dx, dy);

        if (d <= inner) {
          letter.style.opacity = "1";
        } else if (d < radius) {
          const t = (d - inner) / (radius - inner);
          const eased = Math.pow(t, 1.5);
          const o = 1 - (1 - baseOpacity) * eased;
          letter.style.opacity = o.toString();
        } else {
          letter.style.opacity = baseOpacity.toString();
        }
      });
    };

    const onLeave = () => {
      lettersRef.current.forEach((l) => {
        if (l) l.style.opacity = baseOpacity.toString();
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scrollContainerRef, baseOpacity, baseRotation, enableBlur, blurStrength]);

  return (
    <h2 ref={containerRef}>
      <p
        className="
          sfpro
          whitespace-normal
          break-normal
          text-[42px]
          sm:text-[48px]
          md:text-[64px]
          lg:text-[90px]
          leading-[1.35]
          tracking-[-0.02em]
        "
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;

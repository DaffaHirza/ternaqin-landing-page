"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: Props) {
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    // Ultra smooth easing
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = easeOutCubic(progress);

      // Interpolasi halus
      const currentValue = eased * end;

      // Supaya tidak skip angka terlalu jauh
      const smoothValue =
        progress > 0.85
          ? // slow zone (super smooth last numbers)
            end - (end - currentValue) * 0.3
          : currentValue;

      setCount(Math.floor(smoothValue));

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [end, duration]);

  return (
    <span className="tabular-nums inline-block">
      {count}
      {suffix}
    </span>
  );
}

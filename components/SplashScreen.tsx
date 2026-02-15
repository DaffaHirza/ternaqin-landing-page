"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  onFinish?: () => void;
}

export default function SplashScreen({ onFinish }: Props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // 🔒 Lock scroll saat splash muncul
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (hide) {
      // 🔓 Unlock scroll setelah swipe selesai
      document.body.style.overflow = "auto";
      onFinish?.();
    }
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`
        fixed inset-0 z-[9999]
        w-screen
        h-[100dvh]
        bg-[#E5E5E5]
        flex items-center justify-center
        overflow-hidden
        transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="animate-logoFade">
        <Image
          src="/img/Ternaqin-logo.svg"
          alt="TernaQin Logo"
          width={580}
          height={100}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}

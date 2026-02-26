"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { SplashContext } from "./SplashContext";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");

    if (!splashShown) {
      setReady(false);
    } else {
      // 🔥 langsung ready kalau sudah pernah tampil
      setReady(true);
    }

    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <SplashContext.Provider value={ready}>
      {!ready && (
        <SplashScreen
          onFinish={() => {
            sessionStorage.setItem("splashShown", "true");
            setReady(true);
          }}
        />
      )}

      {children}
    </SplashContext.Provider>
  );
}

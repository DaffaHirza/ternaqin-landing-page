"use client";

import { createContext, useContext } from "react";

export const SplashContext = createContext(false);

export const useSplashReady = () => useContext(SplashContext);

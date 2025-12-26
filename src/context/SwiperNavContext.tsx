"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { SwiperNavContextType, SwiperInstance } from "@/types";

const SwiperNavContext = createContext<SwiperNavContextType>({
  swiper: null,
  setSwiper: () => {},
});

export const SwiperNavProvider = ({ children }: { children: ReactNode }) => {
  const [swiper, setSwiper] = useState<SwiperInstance>(null);
  const value = useMemo(() => ({ swiper, setSwiper }), [swiper]);
  return <SwiperNavContext.Provider value={value}>{children}</SwiperNavContext.Provider>;
};

export const useSwiperNav = (): SwiperNavContextType => useContext(SwiperNavContext);

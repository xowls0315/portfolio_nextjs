"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SwiperNavContext = createContext({ swiper: null, setSwiper: () => {} });

export const SwiperNavProvider = ({ children }) => {
  const [swiper, setSwiper] = useState(null);
  const value = useMemo(() => ({ swiper, setSwiper }), [swiper]);
  return (
    <SwiperNavContext.Provider value={value}>
      {children}
    </SwiperNavContext.Provider>
  );
};

export const useSwiperNav = () => useContext(SwiperNavContext);

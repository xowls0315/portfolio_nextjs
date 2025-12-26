"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Introduce from "@/components/Introduce";
import Projects from "@/components/Projects";
import { useSwiperNav } from "@/context/SwiperNavContext";

export default function Home() {
  const [containerHeight, setContainerHeight] = useState<string>("100vh");
  const { setSwiper } = useSwiperNav();

  useEffect(() => {
    const header = document.getElementById("site-header");
    const update = () => {
      const h = header?.offsetHeight ?? 0;
      setContainerHeight(`calc(100vh - ${h}px)`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="w-full">
      <Swiper
        direction="vertical"
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        speed={800}
        slidesPerView={1}
        allowTouchMove={true}
        style={{ height: containerHeight }}
        className="fullpageSwiper"
        onSwiper={(sw) => setSwiper(sw)}
      >
        <SwiperSlide className="!h-full">
          <div className="h-full">
            <Introduce disableSectionHeight />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-full">
          <div className="h-full">
            <Aboutme disableSectionHeight />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-full">
          <div className="h-full">
            <Projects disableSectionHeight />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-full">
          <div className="h-full">
            <Contact disableSectionHeight />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

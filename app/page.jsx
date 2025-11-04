"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import Aboutme from "@/src/Aboutme";
import Contact from "@/src/Contact";
import Introduce from "@/src/Introduce";
import Projects from "@/src/Projects";
import { useSwiperNav } from "@/src/context/SwiperNavContext";

export default function Home() {
  const [containerHeight, setContainerHeight] = useState("100vh");
  const { setSwiper } = useSwiperNav(); // ✅ 컨텍스트 setter

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
        slidesPerView={1} // 한 번에 한 화면
        allowTouchMove={true} // 터치 스와이프 허용(모바일)
        style={{ height: containerHeight }} // ✅ 헤더 높이만큼 제외
        className="fullpageSwiper"
        onSwiper={(sw) => setSwiper(sw)} // ✅ 인스턴스 저장
      >
        <SwiperSlide className="!h-full">
          <div className="h-full">
            <Introduce disableSectionHeight /> {/* 아래 3) 참고 */}
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

"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Introduce = ({ disableSectionHeight = false }) => {
  const [sectionHeight, setSectionHeight] = useState("100vh");

  useEffect(() => {
    if (disableSectionHeight) return; // ✅ Swiper 모드에서는 높이 계산 끔
    const header = document.getElementById("site-header");
    const updateHeight = () => {
      const headerHeight = header?.offsetHeight || 0;
      setSectionHeight(`calc(100vh - ${headerHeight}px)`);
    };

    updateHeight(); // 최초 계산
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const phrases = [
    '"더 나은 사용자 경험을 고민하는 프론트엔드 개발자입니다."',
    '"끊임없이 배우고 성장하는 프론트엔드 개발자입니다."',
    '"꾸준히 성장하는 프론트엔드 개발자입니다."',
  ];

  return (
    <section
      id="introduce"
      style={disableSectionHeight ? undefined : { height: sectionHeight }} // ✅ Swiper일 땐 Swiper가 높이 관리
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      {/* 🔹 동영상 배경 레이어 */}
      <video
        className={"absolute inset-0 w-full h-full object-cover z-0 opacity-20"}
        src="/meeting.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <Container className="relative z-10 h-[100%] flex flex-col justify-center items-center gap-[20px]">
        <h2 className={"font-bold text-5xl text-white"}>황태진</h2>
        <h2 className={"text-4xl text-[#8792b0]"}>
          프론트엔드 개발자 포트폴리오
        </h2>
        <div
          className={
            "h-[200px] flex flex-col justify-center items-center text-xl text-[#A8F00E] gap-[10px]"
          }
        >
          {phrases.map((text, index) => (
            <span
              key={index}
              className="hover:text-[#ccf576] hover:scale-[1.03] transition-all duration-500"
            >
              {text}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Introduce;

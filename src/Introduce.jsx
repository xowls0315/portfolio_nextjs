"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Introduce = () => {
  const [sectionHeight, setSectionHeight] = useState("100vh");

  useEffect(() => {
    const header = document.getElementById("site-header");
    const updateHeight = () => {
      const headerHeight = header?.offsetHeight || 0;
      setSectionHeight(`calc(100vh - ${headerHeight}px)`);
    };

    updateHeight(); // 최초 계산
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      id="introduce"
      style={{ height: sectionHeight }}
      className={"relative bg-[#111a24] overflow-hidden"}
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

      <Container>
        <div
          className={
            "relative z-10 h-[100%] flex flex-col justify-center items-center gap-[20px]"
          }
        >
          <h2 className={"font-bold text-5xl text-white"}>황태진</h2>
          <h2 className={"text-4xl text-[#8792b0]"}>
            프론트엔드 개발자 포트폴리오
          </h2>
          <div
            className={
              "h-[200px] flex flex-col justify-center items-center text-xl text-[#A8F00E] gap-[10px]"
            }
          >
            <span
              className={
                "hover:text-[#ccf576] hover:scale-[1.03] transition-all duration-500"
              }
            >
              "더 나은 사용자 경험을 고민하는 프론트엔드 개발자입니다."
            </span>
            <span
              className={
                "hover:text-[#ccf576] hover:scale-[1.03] transition-all duration-500"
              }
            >
              "끊임없이 배우고 성장하는 프론트엔드 개발자입니다."
            </span>
            <span
              className={
                "hover:text-[#ccf576] hover:scale-[1.03] transition-all duration-500"
              }
            >
              "꾸준히 성장하는 프론트엔드 개발자입니다."
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduce;

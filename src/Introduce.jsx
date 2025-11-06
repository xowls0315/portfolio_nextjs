"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animation, containerVariant } from "./styles/motion";

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
  }, [disableSectionHeight]);

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

      <Container className="relative z-10 h-full flex flex-col justify-center items-center gap-3 xs:gap-4 lg:gap-5">
        <h2 className="font-bold text-white text-3xl xs:text-4xl lg:text-5xl">
          황태진
        </h2>

        <h2 className="text-[#8792b0] text-xl xs:text-2xl lg:text-4xl">
          프론트엔드 개발자 포트폴리오
        </h2>

        <motion.div
          className="h-[120px] xs:h-[160px] lg:h-[200px] flex flex-col justify-center items-center text-base xs:text-lg lg:text-xl text-[#A8F00E] gap-2 xs:gap-2.5 lg:gap-3"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {phrases.map((text, index) => (
            <motion.span
              key={index}
              variants={animation.fadeInSlideUp}
              className="text-center transition-all duration-50 hover:text-[#ccf576] hover:scale-[1.03]"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Introduce;

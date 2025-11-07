"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { IoMdPerson, IoIosSchool } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { animation } from "./styles/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Aboutme = ({ disableSectionHeight = false }) => {
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

  const infoList = [
    {
      icon: <IoMdPerson />,
      text: "황태진 (2001.03.15)",
    },
    {
      icon: <IoIosSchool />,
      text: "한성대학교 컴퓨터공학과 졸업",
    },
    {
      icon: <FaHeart />,
      text: "UI/UX, 웹 개발, 새로운 기술 학습",
    },
  ];

  const techStacks = [
    { name: "HTML5", img: "/HTML5.svg" },
    { name: "CSS3", img: "/CSS3.svg" },
    { name: "Tailwind CSS", img: "/Tailwind CSS.svg" },
    { name: "JavaScript", img: "/JavaScript.svg" },
    { name: "TypeScript", img: "/TypeScript.svg" },
    { name: "Node.js", img: "/Node.js.svg" },
    { name: "React", img: "/React.svg" },
    { name: "Next.js", img: "/Next.js.svg" },
    { name: "Express.js", img: "/Express.js.svg" },
    { name: "VS Code", img: "/VS Code.svg" },
    { name: "Git", img: "/Git.svg" },
    { name: "GitHub", img: "/GitHub.svg" },
  ];

  return (
    <section
      id="aboutme"
      style={disableSectionHeight ? undefined : { height: sectionHeight }} // ✅ Swiper일 땐 Swiper가 높이 관리
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      <Container className="flex flex-col items-center text-white">
        <h2 className="font-neo font-bold text-white text-3xl xs:text-4xl lg:text-6xl py-4 lg:py-6">
          ABOUT ME
        </h2>
        <div className="w-full h-full flex flex-col gap-[20px]">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 lg:gap-10">
            {/* 프로필 이미지 */}
            <div className="flex justify-center">
              <div className="relative w-40 xs:w-52 lg:w-72 aspect-square rounded-full overflow-hidden">
                <Image
                  src="/t.jin_01.jpg"
                  alt="황태진 프로필 사진"
                  fill
                  priority
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* 소개 텍스트 */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl xs:text-3xl lg:text-4xl font-bold">
                안녕하세요!
              </h3>
              <span className="mt-3 text-base xs:text-lg lg:text-xl">
                사용자 중심의 웹 애플리케이션을 만드는 것에 열정을 가진 신입
                프론트엔드 개발자입니다.
              </span>
              <span className="text-base xs:text-lg lg:text-xl">
                깔끔하고 직관적인 UI/UX를 통해 사용자에게 최고의 경험을
                제공하고자 노력합니다.
              </span>

              <div className="mt-6 flex flex-col gap-2 xs:gap-2.5 lg:gap-3">
                {infoList.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-3 text-base xs:text-lg"
                  >
                    <strong className="text-xl xs:text-2xl">{item.icon}</strong>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 바깥: border gradient */}
          <motion.div
            className="w-full p-[4px] xs:p-[5px] rounded-[10px] bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576] flex flex-col items-center bg-[length:200%_200%] animate-gradient-x"
            variants={animation.fadeInSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* 안쪽: 실제 콘텐츠 박스 */}
            <div className="w-full h-full rounded-[10px] bg-gradient-to-tr from-[#444] via-[#6C6C6C] to-[#A8F00E]/40 flex flex-col items-center justify-center px-[10px] xs:px-[20px]">
              <h4
                className="text-2xl xs:text-3xl lg:text-4xl font-bold py-[10px] xs:py-[15px] lg:py-[20px]
      bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576]
      bg-clip-text text-transparent animate-gradient-x"
              >
                Tech Stack
              </h4>

              {/* ✅ <lg 전부: Swiper 슬라이더 + 네비게이터 (모바일~태블릿 공용) */}
              <div className="block lg:hidden relative w-full">
                {/* 외부 네비게이터 버튼 */}
                <button
                  className="tech-prev absolute left-[-10px] top-1/2 -translate-y-1/2 z-10
               bg-transparent border-none cursor-pointer text-[#A8F00E]
               hover:text-[#CCF576] transition-all duration-300"
                  aria-label="이전"
                >
                  <RiArrowLeftWideLine className="w-9 h-9 xs:w-12 xs:h-12" />
                </button>

                <button
                  className="tech-next absolute right-[-10px] top-1/2 -translate-y-1/2 z-10
               bg-transparent border-none cursor-pointer text-[#A8F00E]
               hover:text-[#CCF576] transition-all duration-300"
                  aria-label="다음"
                >
                  <RiArrowRightWideLine className="w-9 h-9 xs:w-12 xs:h-12" />
                </button>

                <Swiper
                  modules={[Navigation, A11y]}
                  // 버튼 DOM 연결 타이밍 이슈 예방
                  onBeforeInit={(sw) => {
                    sw.params.navigation = {
                      ...(sw.params.navigation || {}),
                      prevEl: ".tech-prev",
                      nextEl: ".tech-next",
                    };
                  }}
                  navigation={{ prevEl: ".tech-prev", nextEl: ".tech-next" }}
                  spaceBetween={14}
                  slidesPerView={2} // ⬅ 기본(아주 작은 폰)
                  breakpoints={{
                    360: { slidesPerView: 3, spaceBetween: 14 }, // 작은 폰
                    480: { slidesPerView: 3, spaceBetween: 16 }, // xs 시작
                    640: { slidesPerView: 4, spaceBetween: 18 },
                    768: { slidesPerView: 5, spaceBetween: 20 }, // 태블릿 상향
                  }}
                  className="techSwiper pb-4"
                >
                  {techStacks.map((tech, index) => (
                    <SwiperSlide key={index}>
                      <button
                        className="rounded-[10px] flex flex-col justify-center items-center gap-2 py-3
                     transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_#CCF576]
                     bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3]
                     bg-clip-text text-transparent"
                      >
                        <Image
                          src={tech.img}
                          alt={tech.name}
                          width={48} // 모바일에서 살짝 줄임
                          height={48}
                          className="xs:w-[56px] xs:h-[56px]"
                        />
                        <span className="text-xs xs:text-sm">{tech.name}</span>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ✅ 큰 화면 (lg 이상): 기존 6열 그리드 유지 */}
              <div className="hidden lg:block w-full">
                <div className="grid grid-cols-6 gap-[20px] p-[20px]">
                  {techStacks.map((tech, index) => (
                    <button
                      key={index}
                      className="bg-[#2c2f36] rounded-[10px] flex flex-col justify-center items-center gap-[6px] py-[10px]
              hover:scale-105 hover:shadow-[0_0_15px_#CCF576] transition-all duration-200
              bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3]
              bg-clip-text text-transparent animate-gradient-x"
                    >
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={70}
                        height={70}
                        className="object-cover"
                      />
                      <span className="text-lg">{tech.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Aboutme;

"use client";

import Container from "@/components/ui/Container";
import { IoMdPerson, IoIosSchool } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { animation } from "@/lib/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { useSectionHeight } from "@/utils/sectionHeight";
import type { SectionProps, InfoItem, TechStack } from "@/types";

const Aboutme = ({ disableSectionHeight = false }: SectionProps) => {
  const sectionHeight = useSectionHeight(disableSectionHeight);

  const infoList: InfoItem[] = [
    {
      icon: <IoMdPerson />,
      text: "황태진 (2001.03.15)",
    },
    {
      icon: <IoIosSchool />,
      text: "한성대학교 컴퓨터공학과 졸업 (2020.03 ~ 2026.02)",
    },
    {
      icon: <FaHeart />,
      text: "UI/UX, 웹 개발, 새로운 기술 학습",
    },
  ];

  const techStacks: TechStack[] = [
    { name: "HTML5", img: "/HTML5.svg" },
    { name: "CSS3", img: "/CSS3.svg" },
    { name: "Tailwind CSS", img: "/Tailwind CSS.svg" },
    { name: "JavaScript", img: "/JavaScript.svg" },
    { name: "TypeScript", img: "/TypeScript.svg" },
    { name: "Node.js", img: "/Node.js.svg" },
    { name: "React", img: "/React.svg" },
    { name: "Next.js", img: "/Next.js.svg" },
    { name: "Express.js", img: "/Express.js.svg" },
    { name: "NestJS", img: "/NestJS.png" },
    { name: "Git", img: "/Git.svg" },
    { name: "GitHub", img: "/GitHub.svg" },
  ];

  return (
    <section
      id="aboutme"
      style={disableSectionHeight ? undefined : { height: sectionHeight }}
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      <Container className="flex flex-col items-center text-white h-full overflow-hidden">
        <h2 className="font-neo font-bold text-white text-3xl xs:text-4xl lg:text-6xl py-3 lg:py-4 flex-shrink-0">
          ABOUT ME
        </h2>
        <div className="w-full flex-1 min-h-0 flex flex-col justify-evenly gap-3 lg:gap-4">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-6 flex-shrink-0">
            <div className="flex justify-center">
              <div className="relative w-32 xs:w-44 lg:w-64 aspect-square rounded-full overflow-hidden">
                <Image
                  src="/증명사진.jpg"
                  alt="황태진 프로필 사진"
                  fill
                  priority
                  className="object-cover object-center rounded-full"
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-xl xs:text-2xl lg:text-3xl font-bold">
                안녕하세요!
              </h3>
              <span className="mt-2 text-sm xs:text-base lg:text-lg">
                사용자 중심의 웹 애플리케이션을 만드는 것에 열정을 가진 신입 웹
                프론트엔드 개발자입니다. 깔끔하고 직관적인 UI/UX를 통해
                사용자에게 최고의 경험을 제공하고자 노력합니다.
              </span>

              <div className="mt-4 flex flex-col gap-2 xs:gap-2 lg:gap-2.5">
                {infoList.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-2 text-sm xs:text-base"
                  >
                    <strong className="text-lg xs:text-xl">{item.icon}</strong>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="w-full flex-1 min-h-0 max-h-[20vh] xs:max-h-[30vh] lg:max-h-[fit-content] p-[3px] xs:p-[4px] rounded-[10px] bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576] flex flex-col items-center bg-[length:200%_200%] animate-gradient-x overflow-hidden"
            variants={animation.fadeInSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="w-full h-full rounded-[8px] bg-gradient-to-tr from-[#444] via-[#6C6C6C] to-[#A8F00E]/40 flex flex-col items-center justify-center px-[8px] xs:px-[15px] overflow-y-auto">
              <h4
                className="text-xl xs:text-2xl lg:text-3xl font-bold py-2 xs:py-2.5 lg:py-3 flex-shrink-0
      bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576]
      bg-clip-text text-transparent animate-gradient-x"
              >
                Tech Stack
              </h4>

              <div className="block lg:hidden relative w-full flex-1 min-h-0">
                <button
                  className="tech-prev absolute left-[-8px] top-1/2 -translate-y-1/2 z-10
               bg-transparent border-none cursor-pointer text-[#A8F00E]
               hover:text-[#CCF576] transition-all duration-300"
                  aria-label="이전"
                >
                  <RiArrowLeftWideLine className="w-8 h-8 xs:w-10 xs:h-10" />
                </button>

                <button
                  className="tech-next absolute right-[-8px] top-1/2 -translate-y-1/2 z-10
               bg-transparent border-none cursor-pointer text-[#A8F00E]
               hover:text-[#CCF576] transition-all duration-300"
                  aria-label="다음"
                >
                  <RiArrowRightWideLine className="w-8 h-8 xs:w-10 xs:h-10" />
                </button>

                <Swiper
                  modules={[Navigation, A11y]}
                  onBeforeInit={(sw) => {
                    const navConfig = sw.params.navigation;
                    if (navConfig && typeof navConfig === "object") {
                      Object.assign(navConfig, {
                        prevEl: ".tech-prev",
                        nextEl: ".tech-next",
                      });
                    } else {
                      sw.params.navigation = {
                        prevEl: ".tech-prev",
                        nextEl: ".tech-next",
                      };
                    }
                  }}
                  navigation={{ prevEl: ".tech-prev", nextEl: ".tech-next" }}
                  spaceBetween={12}
                  slidesPerView={2}
                  breakpoints={{
                    360: { slidesPerView: 3, spaceBetween: 12 },
                    480: { slidesPerView: 3, spaceBetween: 14 },
                    640: { slidesPerView: 4, spaceBetween: 16 },
                    768: { slidesPerView: 5, spaceBetween: 18 },
                  }}
                  className="techSwiper pb-3 h-full"
                >
                  {techStacks.map((tech, index) => (
                    <SwiperSlide
                      key={index}
                      className="h-full flex items-center"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <button
                          className="w-fit h-fit rounded-[8px] flex flex-col justify-center items-center gap-2 p-4 xs:p-6
                          transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_#CCF576]
                          bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3]
                          bg-clip-text text-transparent"
                        >
                          <Image
                            src={tech.img}
                            alt={tech.name}
                            width={56}
                            height={56}
                            className="w-[56px] h-[56px] xs:w-[64px] xs:h-[64px]"
                          />
                          <span className="text-xs xs:text-sm">
                            {tech.name}
                          </span>
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="hidden lg:block w-full flex-1 min-h-0 overflow-y-auto">
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4">
                  {techStacks.map((tech, index) => (
                    <button
                      key={index}
                      className="bg-[#2c2f36] rounded-[8px] flex flex-col justify-center items-center gap-1.5 py-2
              hover:scale-105 hover:shadow-[0_0_15px_#CCF576] transition-all duration-200
              bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3]
              bg-clip-text text-transparent animate-gradient-x"
                    >
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                      <span className="text-sm lg:text-base">{tech.name}</span>
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

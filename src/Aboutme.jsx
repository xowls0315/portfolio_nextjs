"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { IoMdPerson, IoIosSchool } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Aboutme = () => {
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
      style={{ height: sectionHeight }}
      className={"relative bg-[#111a24] overflow-hidden"}
    >
      <Container className="flex flex-col items-center text-white">
        <h2 className="font-bold text-white text-6xl py-[30px]">ABOUT ME</h2>
        <div className="w-full h-full flex flex-col gap-[20px]">
          <div className={"w-full flex justify-center"}>
            <div className="w-[60%] h-full flex justify-center items-center">
              <div className="relative w-[55%] aspect-square rounded-full overflow-hidden">
                <Image
                  src="/t.jin_01.jpg"
                  alt="황태진 프로필 사진"
                  fill
                  priority
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className={"w-[100%] h-full flex flex-col justify-center"}>
              <h3 className="text-3xl font-bold">안녕하세요!</h3>
              <span className="text-xl mt-[20px]">
                사용자 중심의 웹 애플리케이션을 만드는 것에 열정을 가진 신입
                프론트엔드 개발자입니다.
              </span>
              <span className="text-xl">
                깔끔하고 직관적인 UI/UX를 통해 사용자에게 최고의 경험을
                제공하고자 노력합니다.
              </span>
              <div className="flex flex-col mt-[50px] gap-[10px]">
                {infoList.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center text-xl gap-[20px] ml-[20px]"
                  >
                    <strong className="text-2xl">{item.icon}</strong>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 바깥: border gradient */}
          <div className="w-full p-[5px] rounded-[10px] bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576] flex flex-col items-center">
            {/* 안쪽: 실제 콘텐츠 박스 */}
            <div className="w-full h-full rounded-[10px] bg-[#111a24] flex flex-col items-center">
              <h4 className="text-4xl font-bold py-[20px] text-[#A8F00E]">
                Tech Stack
              </h4>
              <div className="w-full h-[100%] grid grid-cols-6 gap-[30px] p-[20px]">
                {techStacks.map((tech, index) => (
                  <button
                    key={index}
                    className="bg-[#2c2f36] rounded-[10px] flex flex-col justify-center items-center gap-[10px] p-[10px] hover:scale-105 hover:shadow-[0_0_15px_#A8F00E] transition-all duration-200"
                  >
                    <Image
                      src={tech.img}
                      alt={`${tech.name} 로고`}
                      width={70}
                      height={70}
                      className="object-cover"
                    />
                    {tech.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aboutme;

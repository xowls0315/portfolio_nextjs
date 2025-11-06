"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = ({ disableSectionHeight = false }) => {
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [bgUrl, setBgUrl] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

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

  const cardBase =
    "w-full max-w-[360px] aspect-[4/3] p-[20px] flex flex-col bg-cover bg-center rounded-[10px] text-[18px] hover:scale-[1.05] transition-all cursor-pointer duration-300";

  const projects = [
    {
      title: "Ad Canvas",
      subtitle: "Capstone Design",
      desc: "Team Project",
      color: "#B5C8A8",
      bg: "/AdCanvas.png",
      url: "https://github.com/Capstone-AdCanvas",
    },
    {
      title: "Galaga Game",
      subtitle: "Canvas Shooting Game",
      desc: "Personal Project",
      color: "#B5C8A8",
      bg: "/Galaga.png",
      url: "https://galaga-game.vercel.app/",
    },
    {
      title: "Torriden",
      subtitle: "Clone Coding",
      desc: "Team Project",
      color: "#517307",
      bg: "/Torriden.png",
      url: "https://torriden.vercel.app/",
    },
    {
      title: "Bready",
      subtitle: "Clone Coding",
      desc: "Personal Project",
      color: "#517307",
      bg: "/Bready.png",
      url: "https://react-bready.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      style={disableSectionHeight ? undefined : { height: sectionHeight }} // ✅ Swiper일 땐 Swiper가 높이 관리
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      {/* 🔹 섹션 배경 이미지 레이어 (hover 시 켜짐) */}
      <div
        className={`absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-500 pointer-events-none`}
        style={{
          backgroundImage: bgUrl ? `url('${bgUrl}')` : "none",
          opacity: bgUrl ? 0.3 : 0,
        }}
      />

      {/* 🔹 중앙 오버레이 (hover 시 텍스트 표시) */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none`}
        style={{ opacity: hoverInfo ? 1 : 0 }}
      >
        {hoverInfo && (
          <div className="text-center">
            <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {hoverInfo.title}
            </h3>
            <p className="mt-4 text-2xl bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)">
              {hoverInfo.subtitle}
            </p>
          </div>
        )}
      </div>

      <Container className="relative z-10 flex flex-col items-center text-white">
        <h2 className="font-bold text-white text-3xl xs:text-4xl lg:text-6xl py-4 lg:py-6">
          PROJECTS
        </h2>

        <div className="w-full h-full grid grid-cols-2 place-items-center gap-[30px]">
          {projects.map((p, index) => (
            <Link
              key={index}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardBase}`}
              style={{
                backgroundImage: `url('${p.bg}')`,
                color: p.color,
              }}
              onMouseEnter={() => {
                setBgUrl(p.bg);
                setHoverInfo(p);
              }}
              onMouseLeave={() => {
                setBgUrl(null);
                setHoverInfo(null);
              }}
            >
              <span className="font-bold text-[24px]">{p.title}</span>
              <span>{p.subtitle}</span>
              <span>{p.desc}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

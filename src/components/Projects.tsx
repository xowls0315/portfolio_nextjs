"use client";

import Container from "@/components/ui/Container";
import ProjectModal from "@/components/ui/ProjectModal";
import { useState } from "react";
import { useSectionHeight } from "@/utils/sectionHeight";
import type { SectionProps, Project } from "@/types";

const Projects = ({ disableSectionHeight = false }: SectionProps) => {
  const sectionHeight = useSectionHeight(disableSectionHeight);
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [hoverInfo, setHoverInfo] = useState<Project | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const cardBase =
    "w-full max-w-[360px] aspect-[4/3] p-[20px] flex flex-col bg-cover bg-center rounded-[10px] text-[18px] hover:scale-[1.05] transition-all cursor-pointer duration-300";

  const projects: Project[] = [
    {
      title: "Meet-Middle",
      desc: "Team Project",
      color: "#B5C8A8",
      bg: "https://github.com/user-attachments/assets/3c66c599-9460-4a37-865c-c26fb8ffece3",
      url: "https://github.com/xowls0315/meet-middle",
    },
    {
      title: "Hamburger-Collection",
      desc: "Personal Project",
      color: "#B5C8A8",
      bg: "https://github.com/user-attachments/assets/207df631-c04c-4c42-b5e8-b5121dfbb28d",
      url: "https://github.com/xowls0315/Hamburger-Collection",
    },
  ];

  return (
    <section
      id="projects"
      style={disableSectionHeight ? undefined : { height: sectionHeight }}
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      <div
        className={`absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-500 pointer-events-none`}
        style={{
          backgroundImage: bgUrl ? `url('${bgUrl}')` : "none",
          opacity: bgUrl ? 0.3 : 0,
        }}
      />

      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none`}
        style={{ opacity: hoverInfo ? 1 : 0 }}
      >
        {hoverInfo && (
          <div className="text-center">
            <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {hoverInfo.title}
            </h3>
            <p className="mt-4 text-2xl bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {hoverInfo.desc}
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
            <button
              key={index}
              type="button"
              className={`${cardBase} text-left`}
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
              onClick={() => setModalProject(p)}
            >
              <span className="font-bold text-[24px]">{p.title}</span>
              <span>{p.desc}</span>
            </button>
          ))}
        </div>

        <ProjectModal
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
          project={modalProject}
        />
      </Container>
    </section>
  );
};

export default Projects;

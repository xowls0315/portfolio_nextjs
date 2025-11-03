"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Projects = () => {
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
      id="projects"
      style={{ height: sectionHeight }}
      className={"relative bg-[#111a24] overflow-hidden border border-red-500"}
    >
      <Container className="flex flex-col items-center text-white">
        <h2 className="font-bold text-white text-6xl py-[30px]">PROJECTS</h2>
      </Container>
    </section>
  );
};

export default Projects;

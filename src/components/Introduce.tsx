"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { animation, containerVariant } from "@/lib/motion";
import { useSectionHeight } from "@/utils/sectionHeight";
import type { SectionProps } from "@/types";

const Introduce = ({ disableSectionHeight = false }: SectionProps) => {
  const sectionHeight = useSectionHeight(disableSectionHeight);

  const phrases = [
    '"화면부터 API·데이터까지 설계하는 웹 풀스택 개발자입니다."',
    '"끊임없이 배우고 성장하는 웹 풀스택 개발자입니다."',
    '"꾸준히 성장하는 웹 풀스택 개발자입니다."',
  ];

  return (
    <section
      id="introduce"
      style={disableSectionHeight ? undefined : { height: sectionHeight }}
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
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
          신입 웹 풀스택 개발자
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

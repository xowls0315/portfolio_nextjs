"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact = ({ disableSectionHeight = false }) => {
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

  const contactList = [
    {
      icon: <MdAttachEmail />,
      label: "Email",
      value: "601135@naver.com",
      isLink: false,
    },
    {
      icon: <FaPhoneSquareAlt />,
      label: "Phone",
      value: "010-7578-1878",
      isLink: false,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "https://github.com/xowls0315",
      isLink: true,
    },
  ];

  return (
    <section
      id="contact"
      style={disableSectionHeight ? undefined : { height: sectionHeight }} // ✅ Swiper일 땐 Swiper가 높이 관리
      className="relative bg-[#111a24] overflow-hidden h-full"
    >
      {/* 🔹 동영상 배경 레이어 */}
      <video
        className={"absolute inset-0 w-full h-full object-cover z-0 opacity-20"}
        src="/contact.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Container className="relative z-10 h-[100%] flex flex-col items-center text-[#8792B0]">
        <h2 className="font-bold text-white text-6xl py-[30px]">CONTACT</h2>
        <div className="w-[50%] h-[50%] flex flex-col gap-[30px] justify-center pl-[50px]">
          {contactList.map((item, index) => (
            <span key={index} className="flex text-2xl items-center gap-[15px]">
              <strong className="flex items-center gap-[10px]">
                {item.icon} {item.label}
              </strong>
              {item.isLink ? (
                <Link
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4F8D3] hover:scale-[1.03] transition-all duration-300"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="hover:text-[#D4F8D3] hover:scale-[1.03] transition-all duration-300">
                  {item.value}
                </p>
              )}
            </span>
          ))}
        </div>
        <p className="text-[#545d72]">© 2024 t.jin_01 All rights reserved.</p>
      </Container>
    </section>
  );
};

export default Contact;

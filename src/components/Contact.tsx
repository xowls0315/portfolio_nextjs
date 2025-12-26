"use client";

import Container from "@/components/ui/Container";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useSectionHeight } from "@/utils/sectionHeight";
import { copyToClipboard } from "@/utils/clipboard";
import type { SectionProps, ContactItem } from "@/types";

const Contact = ({ disableSectionHeight = false }: SectionProps) => {
  const sectionHeight = useSectionHeight(disableSectionHeight);

  const contactList: ContactItem[] = [
    {
      icon: <MdAttachEmail />,
      label: "Email",
      value: "601135@naver.com",
      isLink: false,
      copyMessage: "601135@naver.com 클립보드에 복사되었습니다.",
    },
    {
      icon: <FaPhoneSquareAlt />,
      label: "Phone",
      value: "010-7578-1878",
      isLink: false,
      copyMessage: "010-7578-1878 클립보드에 복사되었습니다.",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "https://github.com/xowls0315",
      isLink: true,
    },
  ];

  return (
    <section id="contact" style={disableSectionHeight ? undefined : { height: sectionHeight }} className="relative bg-[#111a24] overflow-hidden h-full">
      <video className={"absolute inset-0 w-full h-full object-cover z-0 opacity-20"} src="/contact.mp4" autoPlay muted loop playsInline />
      <Container className="relative z-10 h-full flex flex-col items-center text-[#8792B0]">
        <h2 className="font-bold text-white text-3xl xs:text-4xl lg:text-6xl py-4 lg:py-6">CONTACT</h2>

        <div className="w-[50%] h-[50%] flex flex-col gap-[30px] justify-center lg:pl-[50px]">
          {contactList.map((item, index) => (
            <span key={index} className="flex text-sm xs:text-lg lg:text-2xl items-center gap-[15px]">
              <strong className="flex items-center gap-[10px]">
                {item.icon} {item.label}
              </strong>
              {item.isLink ? (
                <Link
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300
      hover:scale-[1.05]
      hover:bg-gradient-to-r hover:from-[#A8F00E] hover:via-[#CCF576] hover:to-[#D4F8D3]
      hover:bg-clip-text hover:text-transparent"
                >
                  {item.value}
                </Link>
              ) : (
                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => copyToClipboard(item.value, item.copyMessage || "")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      copyToClipboard(item.value, item.copyMessage || "");
                    }
                  }}
                  className="cursor-pointer select-none transition-all duration-300
                    hover:scale-[1.05]
                    hover:bg-gradient-to-r hover:from-[#A8F00E] hover:via-[#CCF576] hover:to-[#D4F8D3]
                    hover:bg-clip-text hover:text-transparent"
                  aria-label={`${item.label} 복사하기`}
                  title={`${item.label} 복사하기`}
                >
                  {item.value}
                </p>
              )}
            </span>
          ))}
        </div>
        <p className="text-[#545d72] text-xs xs:text-sm lg:text-lg">© 2025 t.jin_01 All rights reserved.</p>
      </Container>
    </section>
  );
};

export default Contact;

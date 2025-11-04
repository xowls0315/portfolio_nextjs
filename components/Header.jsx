"use client";

import { useSwiperNav } from "@/src/context/SwiperNavContext";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { swiper } = useSwiperNav(); // ✅ 컨텍스트에서 인스턴스 사용

  const menus = [
    { label: "About me", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Contact", index: 3 },
  ];

  const goSlide = (index) => {
    // Swiper가 아직 마운트 안됐을 때를 대비한 가드
    if (!swiper) return;
    swiper.slideTo(index); // ✅ 원하는 슬라이드로 이동
  };

  return (
    <header
      id="site-header"
      className="w-full sticky top-0 z-[100] shadow-sm py-8 bg-black transition-colors duration-300"
    >
      <nav className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <button
          type="button"
          onClick={() => goSlide(0)}
          className="flex items-center cursor-pointer group"
          aria-label="Go to Introduce"
        >
          <Image
            src="/logo.png"
            alt="Taejin Logo"
            width={45}
            height={45}
            priority
            className="rounded-[10px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </button>

        {/* 메뉴 클릭 → 해당 섹션 슬라이드로 */}
        <div className="text-2xl text-[#6E9121] flex gap-[30px]">
          {menus.map((m) => (
            <button
              key={m.label}
              type="button"
              onClick={() => goSlide(m.index)}
              className="hover:text-[#CCF576] transition-colors duration-300 cursor-pointer"
            >
              {m.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

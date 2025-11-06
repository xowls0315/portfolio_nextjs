"use client";

import { useEffect, useState, useCallback } from "react";
import { useSwiperNav } from "@/src/context/SwiperNavContext";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { swiper } = useSwiperNav();
  const [open, setOpen] = useState(false); // ⬅ 햄버거 드로어 toggle

  const menus = [
    { label: "About me", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Contact", index: 3 },
  ];

  const goSlide = useCallback(
    (index) => {
      if (!swiper) return;
      swiper.slideTo(index);
    },
    [swiper]
  );

  // ESC 닫기 + 드로어 열릴 때 스크롤 잠금
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        id="site-header"
        className="w-full sticky top-0 z-[100] shadow-sm bg-black transition-colors duration-300 py-4 lg:py-8"
      >
        <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4">
          {/* 로고 */}
          <button
            type="button"
            onClick={() => goSlide(0)}
            aria-label="Go to Introduce"
            className="group flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Taejin Logo"
              width={45}
              height={45}
              priority
              className="object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            />
          </button>

          {/* ≥1024px: 큰 가로 메뉴 */}
          <div className="hidden lg:flex text-2xl text-[#6E9121] gap-8">
            {menus.map((m) => (
              <button
                key={m.label}
                type="button"
                onClick={() => goSlide(m.index)}
                className="cursor-pointer transition-colors duration-300 hover:text-[#CCF576]"
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* 480~1023px: 축소 가로 메뉴 */}
          <div className="hidden xs:flex lg:hidden text-lg text-[#6E9121] gap-5">
            {menus.map((m) => (
              <button
                key={m.label}
                type="button"
                onClick={() => goSlide(m.index)}
                className="cursor-pointer transition-colors duration-300 hover:text-[#CCF576]"
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* <480px: 햄버거 버튼 (toggle) */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="xs:hidden inline-flex items-center justify-center text-3xl text-[#6E9121] transition-colors duration-300 hover:text-[#CCF576] cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>

      {/* 모바일 드로어: 오른쪽 50% + 왼쪽 50% 딤(0.3) */}
      {open && (
        <div className="fixed inset-0 z-[200] flex">
          {/* 왼쪽 50% 딤 ─ 클릭하면 닫힘 */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="w-1/2 h-full bg-black/30"
          />

          {/* 오른쪽 50% 드로어 */}
          <aside
            role="dialog"
            aria-modal="true"
            className="ml-auto h-full w-1/2 bg-black text-[#A8F00E]
                       border-l border-white/10 shadow-2xl
                       flex flex-col transform translate-x-0
                       transition-transform duration-300"
          >
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <span className="text-lg font-semibold">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-3xl text-[#6E9121] hover:text-[#CCF576] transition-colors duration-300 cursor-pointer"
                title="Close"
              >
                ×
              </button>
            </div>

            {/* 메뉴 목록 (col) */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="flex flex-col gap-6 text-xl">
                {menus.map((m) => (
                  <li key={m.label}>
                    <button
                      type="button"
                      onClick={() => {
                        goSlide(m.index);
                        setOpen(false);
                      }}
                      className="w-full text-left px-2 py-2 rounded-lg
                                 transition-colors duration-200
                                 hover:bg-white/5 hover:text-[#CCF576] cursor-pointer"
                    >
                      {m.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;

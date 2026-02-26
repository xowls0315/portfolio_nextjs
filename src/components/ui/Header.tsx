"use client";

import { useEffect, useState, useCallback } from "react";
import { useSwiperNav } from "@/context/SwiperNavContext";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { swiper } = useSwiperNav();
  const [open, setOpen] = useState<boolean>(false);

  const menus = [
    { label: "About me", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Contact", index: 3 },
  ];

  const goSlide = useCallback(
    (index: number) => {
      if (!swiper) return;
      swiper.slideTo(index);
    },
    [swiper]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
      <header id="site-header" className="w-full sticky top-0 z-[100] shadow-sm bg-black transition-colors duration-300 py-4 lg:py-8">
        <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4">
          <button type="button" onClick={() => goSlide(0)} aria-label="Go to Introduce" className="group flex items-center">
            <Image src="/logo.png" alt="Taejin Logo" width={45} height={45} priority className="object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-110 cursor-pointer" />
          </button>

          <div className="hidden lg:flex text-2xl text-[#6E9121] gap-8">
            {menus.map((m) => (
              <button key={m.label} type="button" onClick={() => goSlide(m.index)} className="cursor-pointer transition-colors duration-300 hover:text-[#CCF576]">
                {m.label}
              </button>
            ))}
          </div>

          <div className="hidden xs:flex lg:hidden text-lg text-[#6E9121] gap-5">
            {menus.map((m) => (
              <button key={m.label} type="button" onClick={() => goSlide(m.index)} className="cursor-pointer transition-colors duration-300 hover:text-[#CCF576]">
                {m.label}
              </button>
            ))}
          </div>

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

      {open && (
        <div className="fixed inset-0 z-[200] flex">
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="w-1/2 h-full bg-black/30" />

          <aside
            role="dialog"
            aria-modal="true"
            className="ml-auto h-full w-1/2 bg-black text-[#A8F00E]
                       border-l border-white/10 shadow-2xl
                       flex flex-col transform translate-x-0
                       transition-transform duration-300"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <span className="text-lg font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-3xl text-[#6E9121] hover:text-[#CCF576] transition-colors duration-300 cursor-pointer" title="Close">
                ×
              </button>
            </div>

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

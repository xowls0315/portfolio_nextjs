import { useEffect, useState } from "react";

/**
 * 섹션 높이를 계산하는 커스텀 훅
 * @param disableSectionHeight - 높이 계산 비활성화 여부
 * @returns 계산된 섹션 높이
 */
export const useSectionHeight = (disableSectionHeight?: boolean): string => {
  const [sectionHeight, setSectionHeight] = useState<string>("100vh");

  useEffect(() => {
    if (disableSectionHeight) return;

    const header = document.getElementById("site-header");
    const updateHeight = () => {
      const headerHeight = header?.offsetHeight || 0;
      setSectionHeight(`calc(100vh - ${headerHeight}px)`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [disableSectionHeight]);

  return sectionHeight;
};

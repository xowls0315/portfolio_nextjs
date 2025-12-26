// 공통 스타일 클래스
export const STYLES = {
  gradient: "bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576]",
  gradientText: "bg-gradient-to-r from-[#517307] via-[#A8F00E] to-[#CCF576] bg-clip-text text-transparent",
  hoverScale: "cursor-pointer transition-all duration-500 hover:scale-105",
} as const;

// 색상 상수
export const COLORS = {
  primary: "#A8F00E",
  secondary: "#CCF576",
  tertiary: "#517307",
  background: "#111a24",
  text: "#8792B0",
} as const;

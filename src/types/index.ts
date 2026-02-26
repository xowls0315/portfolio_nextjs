// Swiper 관련 타입
export type SwiperInstance = {
  slideTo: (index: number) => void;
} | null;

// SwiperNavContext 타입
export type SwiperNavContextType = {
  swiper: SwiperInstance;
  setSwiper: (swiper: SwiperInstance) => void;
};

// 컴포넌트 Props 타입
export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export type SectionProps = {
  disableSectionHeight?: boolean;
};

// 프로젝트 타입
export type Project = {
  title: string;
  desc: string;
  color: string;
  bg: string;
  url: string;
};

// 프로젝트 상세 (모달용)
export type ProjectDetail = {
  subtitle: string;
  period: string;
  techStack: string;
  participants: string;
  service: string;
};

// 연락처 타입
export type ContactItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLink: boolean;
  copyMessage?: string;
};

// 기술 스택 타입
export type TechStack = {
  name: string;
  img: string;
};

// 정보 아이템 타입
export type InfoItem = {
  icon: React.ReactNode;
  text: string;
};

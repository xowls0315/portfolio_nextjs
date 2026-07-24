"use client";

import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import type { Project, ProjectDetail } from "@/types";

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "Meet-Middle": {
    subtitle: "약속 장소 중간지점 추천 서비스 개발(Frontend)",
    period: "2025.11 ~ 2025.12",
    techStack:
      "Next.js 16.1.1 (App Router), React 19.2.3, TypeScript 5, Tailwind CSS 4, Zustand 5, TanStack Query 5, Axios 1.13.2, React Icons 5.5.0, Kakao Map JavaScript SDK, Vercel",
    participants: "2인 팀 프로젝트 / Frontend",
    service:
      "친구들과 만날 때 출발지만 입력하면, 중간지점 근처의 최적 랜드마크(지하철역, 문화시설, 공공기관 등)를 자동으로 추천해주는 웹 서비스",
  },
  "Hamburger-Collection": {
    subtitle: "햄버거 메뉴 모음집 서비스 개발(Full-Stack)",
    period: "2025.12 ~ 2026.01",
    techStack:
      "Next.js 16.1.2 (App Router), React 19.2.3, TypeScript 5, Tailwind CSS 4, Zustand 5, TanStack Query 5, React Icons 5.5.0, React Loading Skeleton 3.5.0, Kakao Map JavaScript SDK, Vercel / NestJS 11.0.1, TypeScript 5.7.3, PostgreSQL, TypeORM 0.3.20, Passport(JWT·Kakao OAuth·Local), Swagger 11.2.5, Cheerio·Puppeteer·Tesseract.js, Render, Supabase",
    participants: "개인 프로젝트 / Full-Stack",
    service:
      "햄버거 브랜드별 메뉴/영양정보를 한 곳에서 탐색하고, 내 주변 매장까지 확인하며, 카카오·일반 로그인 기반 게시판/댓글 커뮤니티를 제공하는 웹 서비스",
  },
};

const PROJECT_DEMO_URLS: Record<string, string> = {
  "Meet-Middle": "https://meet-middle-frontend.vercel.app/",
  "Hamburger-Collection": "https://hamburger-collection.vercel.app/",
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const detail = project ? PROJECT_DETAILS[project.title] : null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="모달 닫기"
      />

      {/* Modal panel */}
      <div
        className="relative w-full max-w-[520px] max-h-[85vh] overflow-hidden rounded-[12px] bg-[#111a24] border border-[#2c3642] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto max-h-[85vh] p-6 xs:p-8">
          {project && detail ? (
            <>
              <h2
                id="project-modal-title"
                className="text-xl font-bold bg-gradient-to-r from-[#A8F00E] via-[#CCF576] to-[#D4F8D3] bg-clip-text text-transparent"
              >
                [{project.title}]
              </h2>
              <p className="mt-1 text-base font-semibold text-white">
                {detail.subtitle}
              </p>

              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#CCF576]">일정</dt>
                  <dd className="mt-0.5 text-white/90">{detail.period}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#CCF576]">기술 스택</dt>
                  <dd className="mt-0.5 text-white/90 leading-relaxed">
                    {detail.techStack}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#CCF576]">참여 인원</dt>
                  <dd className="mt-0.5 text-white/90">
                    {detail.participants}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#CCF576]">서비스</dt>
                  <dd className="mt-0.5 text-white/90 leading-relaxed">
                    {detail.service}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px] p-2 text-white/90 hover:text-[#CCF576] hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="GitHub 저장소"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={PROJECT_DEMO_URLS[project.title]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px] p-2 text-white/90 hover:text-[#CCF576] hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="서비스 링크"
                >
                  <FaLink className="w-6 h-6" />
                </a>
              </div>
            </>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

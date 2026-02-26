# Portfolio Website

프론트엔드 개발자 황태진의 포트폴리오 웹사이트입니다. <br />
※ 배포 링크(Vercel): https://tjin01-portfolio-nextjs.vercel.app/

## 🚀 기술 스택

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Slider**: Swiper.js
- **Icons**: React Icons (react-icons)

## ✨ 주요 기능

- **풀페이지 스크롤**: Swiper를 활용한 세로 방향 풀페이지 스크롤
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 환경 지원
- **애니메이션**: Framer Motion을 활용한 부드러운 페이지 전환 효과
- **프로젝트 상세 모달**: Projects 섹션에서 카드 클릭 시 상세 정보 모달 표시 (일정, 기술 스택, 참여 인원, 서비스 소개 및 GitHub·서비스 링크)
- **섹션 구성**:
  - Introduce: 자기소개 및 인사말
  - About Me: 프로필 정보 및 기술 스택
  - Projects: 주요 프로젝트 소개 (호버 시 설명, 클릭 시 상세 모달)
  - Contact: 연락처 정보

## 📁 프로젝트 구조

```
portfolio_nextjs/
├── app/                 # Next.js App Router
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── ui/         # UI 컴포넌트
│   │   ├── Aboutme.tsx
│   │   ├── Contact.tsx
│   │   ├── Introduce.tsx
│   │   └── Projects.tsx
│   ├── lib/             # 라이브러리 설정 (폰트, 애니메이션)
│   ├── types/           # TypeScript 타입 정의
│   └── utils/           # 유틸리티 함수 (sectionHeight 등)
└── public/              # 정적 파일
```

## 🛠️ 설치 및 실행

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 📝 주요 기술 스택

- HTML5, CSS3, JavaScript, TypeScript
- React, Next.js
- Node.js, Express.js, NestJS
- Git, GitHub

## 🎨 특징

- **모던한 UI/UX**: 그라데이션과 애니메이션을 활용한 현대적인 디자인
- **성능 최적화**: Next.js의 최적화 기능 활용
- **타입 안정성**: TypeScript로 타입 안정성 보장
- **코드 구조화**: 컴포넌트, 유틸리티, 타입 등 체계적인 폴더 구조

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

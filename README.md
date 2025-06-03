# 5프로돌려드리는스카이차

스카이차 이용 시 5% 페이백과 매월 100만원 추첨 이벤트를 제공하는 홍보 웹사이트입니다.

## 🚀 기능

- **5% 즉시 페이백**: 스카이차 이용 시 즉시 5% 현금 페이백
- **매월 100만원 추첨**: 스카이차 이용 고객 대상 매월 100만원 추첨
- **친구 초대 혜택**: 친구 추천 시 추가 혜택 제공
- **반응형 디자인**: 모바일과 데스크톱 모두 최적화
- **다크/라이트 네비게이션**: 스크롤에 따른 네비게이션 스타일 변경

## 🚀 개발 환경 설정

```bash
# 프로젝트 클론
git clone https://github.com/QKRXOGNS/5-percent-reward-sky-car.git
cd 5-percent-reward-sky-car

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🌐 협업자를 위한 브랜치별 배포 가이드

### 📋 작업 흐름

1. **새 브랜치 생성 및 작업**
```bash
# 새 브랜치 생성
git checkout -b feature/새기능명

# 작업 후 커밋
git add .
git commit -m "새 기능 추가"

# 브랜치 푸시
git push origin feature/새기능명
```

2. **자동 배포 URL 확인**
푸시 즉시 자동으로 생성되는 URL:
```
https://5-percent-reward-sky-car-git-feature-새기능명-pk6012345.vercel.app
```

### 🔗 배포 URL 목록

- **메인 사이트**: https://5-percent-reward-sky-car.vercel.app
- **개발 브랜치**: https://5-percent-reward-sky-car-git-develop-pk6012345.vercel.app
- **각 기능 브랜치**: 푸시 후 GitHub 또는 Vercel에서 확인

### 📱 실시간 확인 방법

1. **Vercel 대시보드**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **GitHub Actions**: 각 푸시마다 배포 상태 확인
3. **PR 생성시**: 자동으로 Preview URL 생성

### 🎯 권장 브랜치 네이밍

```
feature/로그인페이지     → 새 기능 개발
fix/버튼오류수정       → 버그 수정  
design/메인페이지개선   → 디자인 수정
content/텍스트수정     → 컨텐츠 수정
```

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image
- **Font**: 잘난체 (Jalnan) + 시스템 폰트

## 📁 프로젝트 구조

```
new_Next.js/
├── src/
│   ├── app/
│   │   ├── globals.css          # 글로벌 스타일
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   ├── whyhere/
│   │   │   └── page.tsx        # 여긴뭐야? 페이지
│   │   └── reward/
│   │       └── page.tsx        # 100만원받기 페이지
│   └── components/
│       ├── Navigation.tsx       # 네비게이션 컴포넌트
│       ├── Footer.tsx          # 푸터 컴포넌트
│       └── FloatingDownload.tsx # 플로팅 다운로드 버튼
├── public/
│   ├── images/                 # 이미지 파일들
│   └── fonts/                  # 폰트 파일들
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 서버 실행

```bash
npm start
```

## 📱 페이지 구성

- **홈페이지** (`/`): 메인 홍보 페이지
- **여긴뭐야?** (`/whyhere`): 서비스 소개 및 창업 스토리
- **100만원받기** (`/reward`): 추첨 이벤트 상세 정보

## 🎨 디자인 특징

- **브랜드 컬러**: 오렌지 계열 (#F97316, #EA580C, #C2410C)
- **타이포그래피**: 잘난체 + 시스템 폰트
- **애니메이션**: CSS 트랜지션과 호버 효과
- **반응형**: 모바일 우선 디자인

## 📦 배포

### Vercel 배포

1. Vercel에 프로젝트 연결
2. 자동 배포 설정
3. 도메인 연결

### 기타 플랫폼

- Netlify
- AWS Amplify
- Firebase Hosting

## 🔧 개발 가이드

### 이미지 추가

`public/images/` 폴더에 이미지를 추가하고 Next.js Image 컴포넌트를 사용하세요:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.png"
  alt="설명"
  width={800}
  height={400}
/>
```

### 새 페이지 추가

`src/app/` 폴더에 새 폴더와 `page.tsx` 파일을 생성하세요:

```tsx
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <main>
      <h1>새 페이지</h1>
    </main>
  )
}
```

### 스타일 수정

Tailwind CSS 클래스를 사용하거나 `src/app/globals.css`에서 전역 스타일을 수정하세요.

## 📞 연락처

- **대표번호**: 1877-9001
- **문자수신전용**: 010-2497-2433
- **이메일**: man7866@naver.com

## 📄 라이센스

© 2024 5프로돌려드리는스카이차. All rights reserved. 
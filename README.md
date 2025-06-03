# 5프로돌려드리는스카이차

스카이차 쓰고 5% 돌려받고, 매월 100만원 행운까지!

## 🚀 **즉시 실행 방법 (HTML처럼 바로!)**

### 📱 **원클릭 실행 (가장 쉬움!)**

**Windows 사용자:**
1. `🚀_로컬서버실행.bat` 파일 더블클릭
2. 자동으로 브라우저에서 http://localhost:3000 열림
3. 파일 수정하면 즉시 반영! 🔥

**브라우저 자동 열기:**
1. `🌐_브라우저에서바로열기.bat` 더블클릭
2. 서버 + 브라우저 동시 실행!

**Mac/Linux 사용자:**
```bash
# 실행 권한 부여 (최초 1회)
chmod +x 🚀_로컬서버실행.sh

# 실행
./🚀_로컬서버실행.sh
```

### ⚡ **명령어로 실행**

```bash
# 기본 실행
npm run dev

# 브라우저 자동 열기
npm run 로컬실행

# 터보 모드 (더 빠름)
npm run 즉시확인
```

### 🎯 **HTML보다 빠른 실시간 개발**

- ✅ **파일 저장 → 즉시 반영** (새로고침 없음)
- ✅ **오류 발생 → 즉시 표시** (콘솔 확인)
- ✅ **CSS 변경 → 즉시 적용** (Hot Reload)
- ✅ **모바일 테스트**: http://localhost:3000
- ✅ **오프라인 작업 가능**

---

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

## 🚀 기능

- **5% 즉시 페이백**: 스카이차 이용 시 즉시 5% 현금 페이백
- **매월 100만원 추첨**: 스카이차 이용 고객 대상 매월 100만원 추첨
- **친구 초대 혜택**: 친구 추천 시 추가 혜택 제공
- **반응형 디자인**: 모바일과 데스크톱 모두 최적화
- **다크/라이트 네비게이션**: 스크롤에 따른 네비게이션 스타일 변경

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
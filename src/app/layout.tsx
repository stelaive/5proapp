import type { Metadata, Viewport } from 'next'
import './globals.css'

// ============================================
// 🔧 여기서 사이트 정보를 수정하세요!
// ============================================
const SITE_INFO = {
  // 브랜드명 (OG siteName·앱 이름 등에 사용)
  title: '5프로돌려주는스카이차',

  // 홈 화면 제목 (검색결과에 노출되는 제목)
  // ※ 하위 페이지는 metadata.title.template이 브랜드를 자동으로 붙이므로
  //    각 페이지 layout에서 브랜드명을 다시 적지 말 것 (중복 출력됨)
  homeTitle: '스카이차 대여·고소작업차 임대 | 5프로돌려주는스카이차',
  
  // 사이트 간단 설명 (검색결과에 나오는 설명)
  description: '스카이차·고소작업차 대여. 1톤~19톤 장비로 제주 제외 전국 24시간 배차합니다. 반나절·하루 요금 기준 공개, 이용료 5% 현금 환급. 상담 1877-3924',
  
  // 사이트 주소 (실제 배포 주소로 변경하세요!)
  siteUrl: 'https://www.5prosky.com', // ✅ 실제 도메인 설정 완료!
  
  // 대표 이미지 (SNS 공유시 나타나는 이미지)
  ogImage: '/images/sky-car-logo-icon.png', // ✅ 새로운 로고 이미지로 업데이트!
  
  // 회사/서비스 정보
  businessName: '5프로돌려주는스카이차',
  businessPhone: '1877-3924',
  businessEmail: 'man7866@naver.com',
  
  // 주요 키워드 (핵심어만 유지 — 나열식 확장은 효과 없고 주제를 흐림)
  keywords: '스카이차, 스카이차 대여, 스카이차 임대, 스카이차 가격, 스카이차 요금표, 고소작업차, 고소작업차 대여, 굴절 스카이차, 1톤 스카이차, 3.5톤 스카이차, 5톤 스카이차, 스카이차 견적, 스카이차 5% 페이백', 
}

// ============================================
// 💡 메타데이터 설정 (고급 사용자만 수정)
// ============================================
export const metadata: Metadata = {
  // OG/트위터 이미지 등 상대경로를 절대경로로 해석하기 위한 기준 URL
  metadataBase: new URL(SITE_INFO.siteUrl),
  // 정규 URL (www.5prosky.com 으로 일원화)
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/',
    },
  },
  // 기본 제목과 설명
  title: {
    default: SITE_INFO.homeTitle,
    template: '%s | 5프로돌려주는스카이차' // 페이지별 제목 형식
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  
  // 사이트 아이콘
  icons: {
    icon: '/images/logo_favicon.ico',
    apple: '/images/logo_favicon.ico',
  },
  
  // 검색엔진 최적화 (SEO)
  robots: {
    index: true, // 구글에서 검색되게 하기
    follow: true, // 링크 따라가게 하기
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  
  // 카카오톡, 페이스북 공유 최적화
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_INFO.siteUrl,
    siteName: SITE_INFO.businessName,
    title: SITE_INFO.homeTitle,
    description: SITE_INFO.description,
    images: [
      {
        url: `${SITE_INFO.siteUrl}${SITE_INFO.ogImage}`,
        width: 1200,
        height: 630,
        alt: '5프로돌려주는스카이차 - 스카이차 이용료 5% 현금 페이백',
      }
    ],
  },
  
  // 트위터 공유 최적화
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.homeTitle,
    description: SITE_INFO.description,
    images: [`${SITE_INFO.siteUrl}${SITE_INFO.ogImage}`],
  },
  
  // 추가 메타 태그들
  other: {
    // 네이버 검색 최적화
    'naver-site-verification': '4fc9b9362b72353bc8c2b24b198eaa923c817b92', // ✅ 네이버 웹마스터도구 인증 완료
    
    // 구글 검색 최적화  
    'google-site-verification': 'te3IEkTW_tAwD9_x-F3rFSRd-AmUforuP8PXyyhjvJI', // ✅ 구글 서치 콘솔 인증 완료
    
    // 다음 검색 최적화
    'daum-site-verification': 'df9c78b2b3f9f757715352f6fbe9734b44ad99773f7f4d63e00418a12b8ef11a', // ✅ 다음 웹마스터도구 인증
    
    // 카카오톡 공유 최적화
    'og:locale': 'ko_KR',
    'og:site_name': SITE_INFO.businessName,
    'og:article:author': SITE_INFO.businessName,
    
    // 모바일 앱 연결 (나중에 앱 출시시)
    'al:ios:app_name': '5프로돌려주는스카이차',
    'al:android:app_name': '5프로돌려주는스카이차',
    
    // 전화번호 자동 링크 방지 (원하지 않을 때)
    'format-detection': 'telephone=no',
    
    // 웹사이트 카테고리
    'article:section': '건설업체, 스카이차, 건설장비',
    'article:tag': SITE_INFO.keywords,
  }
}

// ============================================
// 📱 Viewport 설정 (Next.js 16 요구사항)
// ============================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ============================================
  // 🤖 AI와 검색엔진을 위한 구조화된 데이터
  // ============================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_INFO.businessName,
    "description": SITE_INFO.description,
    "url": SITE_INFO.siteUrl,
    "telephone": SITE_INFO.businessPhone,
    "email": SITE_INFO.businessEmail,
    "serviceType": "건설장비 대여 서비스",
    "areaServed": [
      { "@type": "Country", "name": "대한민국 (제주도 제외)" },
      { "@type": "AdministrativeArea", "name": "서울특별시" },
      { "@type": "AdministrativeArea", "name": "경기도" },
      { "@type": "AdministrativeArea", "name": "인천광역시" },
      { "@type": "City", "name": "강남구" },
      { "@type": "City", "name": "안양시" },
      { "@type": "City", "name": "수원시" },
      { "@type": "City", "name": "군포시" }
    ],
    "priceRange": "$$",
    "paymentAccepted": "현금, 계좌이체",
    "currenciesAccepted": "KRW",
    "openingHours": "Mo-Su 00:00-24:00",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    // 동일 엔티티의 외부 채널 (앱스토어) — GEO/로컬 엔티티 신뢰 강화
    "sameAs": [
      "https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp",
      "https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "스카이차 대여 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "스카이차 대여",
            "description": "1톤~19톤 스카이차 대여 서비스, 5% 현금 페이백 제공"
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_INFO.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="ko">
      <head>
        {/* ============================================ */}
        {/* 🤖 AI 에이전트를 위한 구조화된 데이터 */}
        {/* ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* ============================================ */}
        {/* 📱 모바일 최적화 메타 태그들 */}
        {/* ============================================ */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="5프로돌려주는스카이차" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F97316" />
        
        {/* ============================================ */}
        {/* 🔗 사이트 연결 최적화 */}
        {/* canonical/hreflang은 metadata.alternates에서 일원 관리 (www.5prosky.com) */}
        {/* ============================================ */}

        {/* ============================================ */}
        {/* 📞 연락처 자동 감지 설정 */}
        {/* ============================================ */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />
        <meta name="format-detection" content="email=yes" />
        
        {/* ============================================ */}
        {/* 🎨 브라우저 스타일 설정 */}
        {/* ============================================ */}
        {/* 애니메이션 진입 전 상태(opacity:0)로 화면이 비어 보이는 것을 방지.
            JS가 실행되지 않으면 등장 애니메이션이 영영 돌지 않아 본문이 사라진다. */}
        <noscript>
          <style dangerouslySetInnerHTML={{
            __html: `
              [style*="opacity:0"], [style*="opacity: 0"] {
                opacity: 1 !important;
                transform: none !important;
              }
            `
          }} />
        </noscript>

        <style dangerouslySetInnerHTML={{
          __html: `
            /* 모션 최소화 설정 사용자: 등장 애니메이션을 건너뛰고 즉시 표시 */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
              [style*="opacity:0"], [style*="opacity: 0"] {
                opacity: 1 !important;
                transform: none !important;
              }
            }

            /* 터치 및 선택 동작 최적화 */
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            
            /* 입력 필드는 선택 가능하게 */
            input, textarea, [contenteditable] {
              -webkit-user-select: text;
              -khtml-user-select: text;
              -moz-user-select: text;
              -ms-user-select: text;
              user-select: text;
            }
            
            /* 부드러운 스크롤 및 터치 최적화 */
            body {
              -webkit-overflow-scrolling: touch;
              touch-action: manipulation;
              scroll-behavior: smooth;
            }
            
            /* 전화번호 링크 스타일 - 강제 가시성 보장 (.tel-raw 는 제외: 자체 레이아웃 유지) */
            a[href^="tel:"]:not(.tel-raw) {
              color: #ffffff !important;
              background-color: #F97316 !important;
              text-decoration: none !important;
              font-weight: bold !important;
              padding: 8px 16px !important;
              border-radius: 6px !important;
              display: inline-block !important;
              z-index: 999 !important;
              position: relative !important;
              text-shadow: none !important;
              border: none !important;
              outline: none !important;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
            }
            
            /* 전화번호 링크 호버 효과 */
            a[href^="tel:"]:not(.tel-raw):hover {
              background-color: #ea580c !important;
              color: #ffffff !important;
              text-decoration: none !important;
              transform: translateY(-1px) !important;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
            }
            
            /* 전화번호 링크 내부 텍스트 강제 스타일 */
            a[href^="tel:"]:not(.tel-raw) span,
            a[href^="tel:"]:not(.tel-raw) * {
              color: #ffffff !important;
              font-weight: bold !important;
              text-shadow: none !important;
              display: inline !important;
            }
            
            /* 모든 상태에서 전화번호 링크 텍스트 보장 */
            a[href^="tel:"]:not(.tel-raw):visited,
            a[href^="tel:"]:not(.tel-raw):link,
            a[href^="tel:"]:not(.tel-raw):active,
            a[href^="tel:"]:not(.tel-raw):focus {
              color: #ffffff !important;
              text-decoration: none !important;
            }
            
            /* CTA 버튼 전역 스타일 강화 */
            .bg-orange-500,
            button.bg-orange-500,
            a.bg-orange-500 {
              color: #ffffff !important;
              background-color: #f97316 !important;
              text-decoration: none !important;
              z-index: 10 !important;
              position: relative !important;
            }
            
            .bg-orange-500 span,
            button.bg-orange-500 span,
            a.bg-orange-500 span {
              color: #ffffff !important;
              font-weight: bold !important;
              text-shadow: none !important;
              display: inline !important;
            }
            
            /* 오렌지 버튼 호버 상태 */
            .bg-orange-500:hover,
            button.bg-orange-500:hover,
            a.bg-orange-500:hover {
              background-color: #ea580c !important;
              color: #ffffff !important;
            }
            
            .bg-orange-500:hover span,
            button.bg-orange-500:hover span,
            a.bg-orange-500:hover span {
              color: #ffffff !important;
            }
          `
        }} />
      </head>
      <body className="font-sans pb-[calc(64px+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </body>
    </html>
  )
} 
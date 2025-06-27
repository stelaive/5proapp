import type { Metadata } from 'next'
import './globals.css'

// ============================================
// 🔧 여기서 사이트 정보를 수정하세요!
// ============================================
const SITE_INFO = {
  // 사이트 제목 (브라우저 탭에 나오는 제목)
  title: '5프로돌려드리는스카이차 ',
  
  // 사이트 간단 설명 (검색결과에 나오는 설명)
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,수원,용인,화성,평택,성남,시흥,인천,부평,남동구,파주,일산,남양주,경기도광주스카이차',
  
  // 사이트 주소 (실제 배포 주소로 변경하세요!)
  siteUrl: 'https://xn--5-w30fr74e.com', // ✅ 실제 도메인 설정 완료!
  
  // 대표 이미지 (SNS 공유시 나타나는 이미지)
  ogImage: '/images/5프로.png', // ✅ 새로운 대표 이미지로 설정 완료!
  
  // 회사/서비스 정보
  businessName: '5프로돌려드리는스카이차',
  businessPhone: '1877-9001',
  businessEmail: 'man7866@naver.com',
  
  // 주요 키워드 (검색 최적화용)
  keywords: '스카이차, 스카이차가격, 스카이차요금, 스카이차요금표, 고소작업차, 건설, 욕실리모델링, 유품정리, CCTV, 철거, 닥트공사, 전기공사, 외벽청소, 설비, 인테리어, 조경공사, 전등교체, 금속공사, 에어컨, 페인트, 판넬, 지붕공사, 간판, 실리콘코킹, 태양광설치, 타일시공, 방수공사, 창호공사, 페이백, 100만원추첨, 친구초대, 일거리장터, 업종별마케팅노하우, 외벽작업, 고소작업, 장비대여,1톤스카이차, 3.5톤스카이차, 5톤스카이차'
}

// ============================================
// 💡 메타데이터 설정 (고급 사용자만 수정)
// ============================================
export const metadata: Metadata = {
  // 기본 제목과 설명
  title: {
    default: SITE_INFO.title,
    template: '%s | 5프로돌려드리는스카이차' // 페이지별 제목 형식
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  
  // 사이트 아이콘
  icons: {
    icon: '/images/logo_favicon.ico',
    apple: '/images/logo_favicon.ico',
  },
  
  // 모바일 화면 설정
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
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
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: '5프로돌려드리는스카이차 서비스 소개',
      }
    ],
  },
  
  // 트위터 공유 최적화
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
  
  // 추가 메타 태그들
  other: {
    // 네이버 검색 최적화
    'naver-site-verification': '4fc9b9362b72353bc8c2b24b198eaa923c817b92', // ✅ 네이버 웹마스터도구 인증 완료
    
    // 구글 검색 최적화  
    'google-site-verification': '', // 👈 구글 서치 콘솔에서 발급받은 코드 입력
    
    // 카카오톡 공유 최적화
    'og:locale': 'ko_KR',
    'og:site_name': SITE_INFO.businessName,
    'og:article:author': SITE_INFO.businessName,
    
    // 모바일 앱 연결 (나중에 앱 출시시)
    'al:ios:app_name': '5프로돌려드리는스카이차',
    'al:android:app_name': '5프로돌려드리는스카이차',
    
    // 전화번호 자동 링크 방지 (원하지 않을 때)
    'format-detection': 'telephone=no',
    
    // 웹사이트 카테고리
    'article:section': '건설업체, 스카이차, 건설장비',
    'article:tag': SITE_INFO.keywords,
  }
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
    "areaServed": {
      "@type": "Place",
      "name": "대한민국 전국"
    },
    "priceRange": "$$",
    "paymentAccepted": "현금, 계좌이체",
    "currenciesAccepted": "KRW",
    "openingHours": "Mo-Su 00:00-24:00",
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
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "100만원 추첨 이벤트",
            "description": "매월 진행되는 100만원 현금 추첨 이벤트"
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
        <meta name="apple-mobile-web-app-title" content="5프로스카이차" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F97316" />
        
        {/* ============================================ */}
        {/* 🔗 사이트 연결 최적화 */}
        {/* ============================================ */}
        <link rel="canonical" href={SITE_INFO.siteUrl} />
        <link rel="alternate" hrefLang="ko" href={SITE_INFO.siteUrl} />
        
        {/* 한글 도메인 지원 */}
        <link rel="alternate" hrefLang="ko" href="https://5프로.com" />
        
        {/* ============================================ */}
        {/* 📞 연락처 자동 감지 설정 */}
        {/* ============================================ */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />
        <meta name="format-detection" content="email=yes" />
        
        {/* ============================================ */}
        {/* 🎨 브라우저 스타일 설정 */}
        {/* ============================================ */}
        <style dangerouslySetInnerHTML={{
          __html: `
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
            
            /* 전화번호 링크 스타일 */
            a[href^="tel:"] {
              color: #F97316;
              text-decoration: none;
              font-weight: bold;
            }
          `
        }} />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 
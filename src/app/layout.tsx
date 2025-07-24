import type { Metadata } from 'next'
import './globals.css'

// ============================================
// 🔧 여기서 사이트 정보를 수정하세요!
// ============================================
const SITE_INFO = {
  // 사이트 제목 (브라우저 탭에 나오는 제목)
  title: '5프로돌려주는스카이차',
  
  // 사이트 간단 설명 (검색결과에 나오는 설명)
  description: '경기도 스카이차 대여 최저가! 1톤~5톤 스카이차 요금표, 수원·용인·화성·평택 당일 출동, 5% 현금 페이백',
  
  // 사이트 주소 (실제 배포 주소로 변경하세요!)
  siteUrl: 'https://xn--5-w30fr74e.com', // ✅ 실제 도메인 설정 완료!
  
  // 대표 이미지 (SNS 공유시 나타나는 이미지)
  ogImage: '/images/스로고1.png', // ✅ 새로운 로고 이미지로 업데이트!
  
  // 회사/서비스 정보
  businessName: '5프로돌려주는스카이차',
  businessPhone: '1877-9001',
  businessEmail: 'man7866@naver.com',
  
  // 주요 키워드 (검색 최적화용 - 네이버 예티 AI 최적화)
  keywords: '스카이차대여, 스카이차가격, 스카이차요금표, 고소작업차대여, 1톤스카이차, 3.5톤스카이차, 5톤스카이차, 수원스카이차대여, 용인스카이차, 화성스카이차가격, 평택고소작업차, 성남스카이차, 시흥외벽작업, 인천간판설치, 경기도스카이차, 안양스카이차, 부천고소작업차, 의정부스카이차대여, 고양스카이차업체, 파주외벽청소, 김포스카이차, 광명고소작업, 구리스카이차가격, 남양주스카이차, 하남고소작업차, 당일스카이차대여, 긴급스카이차, 24시간스카이차, 주말스카이차대여, 새벽스카이차, 야간고소작업, 창호공사스카이차, 도장작업스카이차, 전기공사고소작업차, 에어컨설치스카이차, 간판교체스카이차, 외벽청소고소작업, 지붕공사스카이차, 방수공사고소작업차, 태양광설치스카이차, 스카이차5%페이백, 스카이차현금돌려받기, 스카이차할인업체, 저렴한스카이차, 스카이차견적, 스카이차추천, 믿을만한스카이차업체, 스카이차후기'
}

// ============================================
// 💡 메타데이터 설정 (고급 사용자만 수정)
// ============================================
export const metadata: Metadata = {
  // 기본 제목과 설명
  title: {
    default: SITE_INFO.title,
    template: '%s | 5프로돌려주는스카이차' // 페이지별 제목 형식
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
        url: `${SITE_INFO.siteUrl}${SITE_INFO.ogImage}`,
        width: 1200,
        height: 630,
        alt: '5프로돌려주는스카이차 - 5% 현금 페이백과 100만원 추첨 이벤트',
      }
    ],
  },
  
  // 트위터 공유 최적화
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.title,
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
        <meta name="apple-mobile-web-app-title" content="5프로돌려주는스카이차" />
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
            
            /* 전화번호 링크 스타일 - 강제 가시성 보장 */
            a[href^="tel:"] {
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
            a[href^="tel:"]:hover {
              background-color: #ea580c !important;
              color: #ffffff !important;
              text-decoration: none !important;
              transform: translateY(-1px) !important;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
            }
            
            /* 전화번호 링크 내부 텍스트 강제 스타일 */
            a[href^="tel:"] span,
            a[href^="tel:"] * {
              color: #ffffff !important;
              font-weight: bold !important;
              text-shadow: none !important;
              display: inline !important;
            }
            
            /* 모든 상태에서 전화번호 링크 텍스트 보장 */
            a[href^="tel:"]:visited,
            a[href^="tel:"]:link,
            a[href^="tel:"]:active,
            a[href^="tel:"]:focus {
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
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 
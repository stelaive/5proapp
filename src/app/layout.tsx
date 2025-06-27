import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    // ✏️ 수정하세요: 회사/서비스 이름을 여기에 넣으세요
    // 이 제목이 구글 검색 결과에 나타납니다
    default: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백 + 매월 100만원 추첨',
    template: '%s | 5프로돌려주는스카이차'  // ✏️ 여기도 회사 이름 수정
  },
  
  // ✏️ 수정하세요: 서비스 설명을 한 줄로 써주세요 (검색 결과에 나타남)
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  
  // ✏️ 수정하세요: 고객들이 검색할 만한 단어들을 추가하거나 바꾸세요
  // 💡 팁: 고객들이 구글에서 검색할 때 쓸 만한 단어들을 넣으세요
  keywords: [
    '스카이차', '크레인', '고소작업차', '렌탈', '캐시백', '5%', '100만원',
    '추첨', '이벤트', '친구초대', '보너스', '고소작업', '외벽작업', '창호',
    '도장', '전기', '방수', '용접', '금속', '건설장비'
    // 여기에 더 추가하세요: '새로운키워드', '다른키워드' 이런 식으로
  ],
  // ✏️ 수정하세요: 회사/서비스 이름
  authors: [{ name: '5프로돌려주는스카이차' }],
  creator: '5프로돌려주는스카이차',
  publisher: '5프로돌려주는스카이차',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸세요
    url: 'https://xn--5-w30fr74e.com',
    // ✏️ 수정하세요: 사이트 이름
    siteName: '5프로돌려주는스카이차',
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 제목
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백 + 매월 100만원 추첨',
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 설명
    description: '스카이차/크레인 렌탈 후 5% 현금 캐시백! 매월 100만원 추첨 이벤트, 친구 초대시 5만원 보너스까지. 전국 24시간 배차 서비스.',
    images: [
      {
        // ✏️ 수정하세요: 대표 이미지 경로 (1200x630 크기 권장)
        url: '/images/스로고1.png',
        width: 1200,
        height: 630,
        // ✏️ 수정하세요: 이미지 설명
        alt: '5프로돌려주는스카이차 로고',
      },
      {
        // ✏️ 수정하세요: 추가 이미지 경로
        url: '/images/스카이차수정3.png',
        width: 800,
        height: 600,
        // ✏️ 수정하세요: 이미지 설명
        alt: '스카이차 작업 현장',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 제목
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백',
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 설명
    description: '스카이차/크레인 렌탈 후 5% 현금 캐시백! 매월 100만원 추첨 이벤트',
    // ✏️ 수정하세요: 트위터용 이미지
    images: ['/images/스로고1.png'],
  },
  
  verification: {
    // 🚨 중요! 나중에 꼭 수정하세요: 구글 서치 콘솔에서 받은 실제 인증 코드로 바꾸기
    // 📝 방법: 구글 서치 콘솔 > 속성 추가 > HTML 태그 방법 선택 > content="" 안의 코드 복사해서 붙여넣기
    google: 'google-site-verification-code',
    other: {
      // ✅ 네이버 웹마스터도구 인증 코드 (완료!)
      // 📝 방법: 네이버 웹마스터도구 > 사이트 등록 > HTML 태그 > content="" 안의 코드 복사해서 붙여넣기
      'naver-site-verification': 'f6d6cda31d6f0928b998109a893c1428462e92bc',
      // 선택사항: 페이스북 도메인 인증 코드 (필요한 경우만)
      'facebook-domain-verification': 'facebook-verification-code',
    },
  },
  
  icons: {
    icon: '/images/logo_favicon.ico',
    shortcut: '/images/logo_favicon.ico',
    apple: '/images/logo_favicon.ico',
  },
  
  manifest: '/manifest.json',
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  
  category: 'business',
  classification: '건설장비 렌탈 서비스',
  
  other: {
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

// 구조화된 데이터 - 구글이 사이트를 더 잘 이해할 수 있게 해줌
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '5프로돌려주는스카이차',
  url: 'https://xn--5-w30fr74e.com',
  description: '스카이차/크레인 렌탈 후 5% 현금 캐시백! 매월 100만원 추첨 이벤트, 친구 초대시 5만원 보너스까지. 전국 24시간 배차 서비스.',
  
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://xn--5-w30fr74e.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  
  publisher: {
    '@type': 'Organization',
    name: '5프로돌려주는스카이차',
    logo: {
      '@type': 'ImageObject',
      url: 'https://xn--5-w30fr74e.com/images/스로고1.png'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+82-1877-9001',
        contactType: 'customer service',
        availableLanguage: 'Korean'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+82-10-2497-2433',
        contactType: 'SMS service',
        availableLanguage: 'Korean'
      }
    ],
    email: 'man7866@naver.com'
  },
  
  offers: {
    '@type': 'Offer',
    description: '스카이차 렌탈 5% 캐시백 서비스',
    category: '건설장비 렌탈'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 태그 매니저 - HEAD 섹션 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XK8BG8P');
            `,
          }}
        />
        
        {/* 구글이 내 사이트를 더 잘 이해할 수 있게 해주는 코드 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* 네이버 웹마스터도구 인증 ✅ 완료! */}
        <meta name="naver-site-verification" content="f6d6cda31d6f0928b998109a893c1428462e92bc" />
        
        {/* 모바일 최적화 설정들 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* 지역 및 언어 정보 */}
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="Korea" />
        <meta name="language" content="Korean" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* 터치 최적화 설정 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            input, textarea {
              -webkit-user-select: text;
              -khtml-user-select: text;
              -moz-user-select: text;
              -ms-user-select: text;
              user-select: text;
            }
            body {
              -webkit-overflow-scrolling: touch;
              touch-action: manipulation;
            }
          `
        }} />
      </head>
      <body className="font-sans">
        {/* 구글 태그 매니저 - BODY 상단 (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XK8BG8P"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
} 
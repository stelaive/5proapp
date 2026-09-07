// ============================================
// 📄 페이지별 메타데이터 생성 도구
// ============================================
// 각 페이지에서 이 함수를 사용하여 SEO 최적화된 메타데이터를 생성할 수 있습니다.

import type { Metadata } from 'next'

// 기본 사이트 정보 (layout.tsx와 동일하게 유지)
const SITE_INFO = {
  title: '5프로돌려주는스카이차 ',
  description: '스카이차(고소작업차) 대여 이용료의 5%를 작업 완료 후 현금으로 돌려드립니다. 1톤~19톤 투명한 요금, 24시간 출동. 전화·앱으로 바로 예약하세요.',
  siteUrl: 'https://www.5prosky.com', // ✅ 실제 도메인 설정 완료!
  ogImage: '/images/5pro-logo-main.png',
  businessName: '5프로돌려주는스카이차',
  businessPhone: '1877-3924',
  businessEmail: 'man7866@naver.com',
  keywords: '스카이차, 스카이차가격, 스카이차요금, 스카이차요금표, 고소작업차, 건설, 욕실리모델링, 유품정리, CCTV, 철거, 닥트공사, 전기공사, 외벽청소, 설비, 인테리어, 조경공사, 전등교체, 금속공사, 에어컨, 페인트, 판넬, 지붕공사, 간판, 실리콘코킹, 태양광설치, 타일시공, 방수공사, 창호공사, 페이백, 5%페이백, 친구초대, 일거리장터, 외벽작업, 고소작업, 장비대여,1톤스카이차, 3.5톤스카이차, 5톤스카이차'
}

// ============================================
// 🛠️ 페이지별 메타데이터 생성 함수
// ============================================
interface PageMetadataOptions {
  title: string           // 페이지 제목 (예: "가격표", "친구초대")
  description: string     // 페이지 설명
  keywords?: string       // 추가 키워드
  image?: string         // 페이지 대표 이미지
  path: string           // 페이지 경로 (예: "/pricing", "/reward")
}

export function generatePageMetadata({
  title,
  description,
  keywords = '',
  image = SITE_INFO.ogImage,
  path
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_INFO.businessName}`
  const fullUrl = `${SITE_INFO.siteUrl}${path}`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords ? `${keywords}, ${SITE_INFO.keywords}` : SITE_INFO.keywords,

    // 페이지별 정규 URL (metadataBase 상속 → 상대경로)
    alternates: {
      canonical: path,
    },

    // Open Graph (카카오톡, 페이스북 등)
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_INFO.businessName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_INFO.businessName}`,
        }
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    
    // Twitter 공유
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    
    // 추가 메타 태그
    other: {
      'og:url': fullUrl,
      'og:type': 'website',
      'og:locale': 'ko_KR',
      'article:author': SITE_INFO.businessName,
    }
  }
}

// ============================================
// 📋 미리 정의된 페이지별 메타데이터
// ============================================
// 각 페이지에서 바로 사용할 수 있는 메타데이터들

export const PAGE_METADATA = {
  // 홈페이지
  home: generatePageMetadata({
    title: '홈',
    description: '스카이차 쓰면 이용료의 5%를 현금으로 돌려드립니다. 24시간 콜센터, 투명한 가격의 믿을 수 있는 스카이차 서비스입니다.',
    keywords: '스카이차, 페이백, 5%페이백, 건설장비, 고소작업',
    path: '/'
  }),
  
  // 가격표 페이지
  pricing: generatePageMetadata({
    title: '스카이차 가격표',
    description: '1톤부터 19톤까지 투명한 스카이차 가격표. 반나절, 하루, 월단위 이용료와 5% 페이백 혜택까지! 지금 확인하세요.',
    keywords: '스카이차 가격, 대여료, 비용, 요금표, 1톤, 5톤, 8톤, 17톤, 19톤',
    path: '/pricing'
  }),
  
  // 친구초대 페이지
  reward: generatePageMetadata({
    title: '친구초대 보너스',
    description: '친구 5명 초대하고 현금 5만원 받으세요! 무한 반복 가능한 친구초대 보너스. 지금 바로 시작하세요!',
    keywords: '친구초대, 추천보너스, 5만원, 현금지급, 무한반복',
    path: '/reward'
  }),
  
  // 일거리 장터 페이지
  marketplace: generatePageMetadata({
    title: '일거리 장터',
    description: '스카이차 사장님들의 일감 정보 공유 플랫폼. 일거리 찾기, 일감 나누기, 업체간 상생 협력의 장입니다.',
    keywords: '일거리장터, 일감정보, 사장님커뮤니티, 일감공유, 업체협력',
    path: '/marketplace'
  }),

  // 여긴뭐야 페이지
  whyhere: generatePageMetadata({
    title: '여긴뭐야? 5% 페이백 서비스 소개',
    description: '5프로돌려주는스카이차가 무엇인지 궁금하세요? 5% 페이백 시스템부터 특별 혜택까지 모든 것을 알려드립니다.',
    keywords: '5%페이백, 서비스소개, 스카이차혜택, 현금환급시스템',
    path: '/whyhere'
  }),
  
  // 고객센터 페이지
  support: generatePageMetadata({
    title: '고객센터 FAQ',
    description: '스카이차 이용 관련 자주 묻는 질문과 답변. 궁금한 점이 있으시면 1877-3924로 언제든 연락주세요.',
    keywords: 'FAQ, 고객센터, 문의사항, 이용방법, 1877-3924',
    path: '/support'
  })
}

// ============================================
// 🔍 사용 예시 (각 페이지에서 이렇게 사용하세요!)
// ============================================
/*
// 예시 1: 미리 정의된 메타데이터 사용
export const metadata = PAGE_METADATA.pricing

// 예시 2: 커스텀 메타데이터 생성
export const metadata = generatePageMetadata({
  title: '새로운 페이지',
  description: '새로운 페이지 설명',
  keywords: '새로운, 키워드',
  path: '/new-page'
})
*/ 
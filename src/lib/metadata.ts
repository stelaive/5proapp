// ============================================
// 📄 페이지별 메타데이터 생성 도구
// ============================================
// 각 페이지에서 이 함수를 사용하여 SEO 최적화된 메타데이터를 생성할 수 있습니다.

import type { Metadata } from 'next'

// 기본 사이트 정보 (layout.tsx와 동일하게 유지)
const SITE_INFO = {
  title: '5프로돌려드리는스카이차 ',
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,수원,용인,화성,평택,성남,시흥,인천,부평,남동구,파주,일산,남양주,경기도광주스카이차',
  siteUrl: 'https://xn--5-w30fr74e.com', // ✅ 실제 도메인 설정 완료!
  ogImage: '/images/5프로.png',
  businessName: '5프로돌려드리는스카이차',
  businessPhone: '1877-9001',
  businessEmail: 'man7866@naver.com',
  keywords: '스카이차, 스카이차가격, 스카이차요금, 스카이차요금표, 고소작업차, 건설, 욕실리모델링, 유품정리, CCTV, 철거, 닥트공사, 전기공사, 외벽청소, 설비, 인테리어, 조경공사, 전등교체, 금속공사, 에어컨, 페인트, 판넬, 지붕공사, 간판, 실리콘코킹, 태양광설치, 타일시공, 방수공사, 창호공사, 페이백, 100만원추첨, 친구초대, 일거리장터, 업종별마케팅노하우, 외벽작업, 고소작업, 장비대여,1톤스카이차, 3.5톤스카이차, 5톤스카이차'
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
    description: '스카이차 쓰고 5% 돌려받고 매월 100만원 행운까지! 24시간 콜센터, 투명한 가격의 믿을 수 있는 스카이차 서비스입니다.',
    keywords: '스카이차, 페이백, 100만원추첨, 건설장비, 고소작업',
    path: '/'
  }),
  
  // 가격표 페이지
  pricing: generatePageMetadata({
    title: '스카이차 가격표',
    description: '1톤부터 19톤까지 투명한 스카이차 가격표. 반나절, 하루, 월단위 이용료와 5% 페이백 혜택까지! 지금 확인하세요.',
    keywords: '스카이차 가격, 대여료, 비용, 요금표, 1톤, 5톤, 8톤, 17톤, 19톤',
    path: '/pricing'
  }),
  
  // 100만원 추첨 페이지
  million: generatePageMetadata({
    title: '매월 100만원 추첨 이벤트',
    description: '스카이차 이용 고객 대상 매월 100만원 현금 추첨! 오더 1건만으로 자동 응모. 500분의 1 확률로 행운의 주인공이 되세요!',
    keywords: '100만원추첨, 현금이벤트, 로또, 당첨, 행운추첨',
    path: '/million'
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
  
  // 업종별 마케팅 페이지
  marketing: generatePageMetadata({
    title: '업종별 마케팅 노하우',
    description: '스카이차 사업 성공을 위한 업종별 마케팅 전략과 노하우. 네이버, 구글, 카카오 활용법까지 모든 비법을 공개합니다.',
    keywords: '마케팅노하우, 네이버마케팅, 구글SEO, 카카오맵, 사업성공, 고객유치',
    path: '/marketing'
  }),
  
  // 여긴뭐야 페이지  
  whyhere: generatePageMetadata({
    title: '여긴뭐야? 5% 페이백 서비스 소개',
    description: '5프로돌려드리는스카이차가 무엇인지 궁금하세요? 5% 페이백 시스템부터 특별 혜택까지 모든 것을 알려드립니다.',
    keywords: '5%페이백, 서비스소개, 스카이차혜택, 현금환급시스템',
    path: '/whyhere'
  }),
  
  // 고객센터 페이지
  support: generatePageMetadata({
    title: '고객센터 FAQ',
    description: '스카이차 이용 관련 자주 묻는 질문과 답변. 궁금한 점이 있으시면 1877-9001로 언제든 연락주세요.',
    keywords: 'FAQ, 고객센터, 문의사항, 이용방법, 1877-9001',
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
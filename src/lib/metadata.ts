// ============================================
// 📄 페이지별 메타데이터 생성 도구
// ============================================
// 각 페이지에서 이 함수를 사용하여 SEO 최적화된 메타데이터를 생성할 수 있습니다.

import type { Metadata } from 'next'

// ⚠️ 이 모듈은 현재 어느 페이지에서도 import 하지 않습니다(미사용).
//    각 페이지는 자기 layout.tsx에 metadata를 직접 선언하고 있습니다.
//    되살려 쓸 경우 generatePageMetadata의 title에는 브랜드명을 넣지 마세요 —
//    루트 layout의 title.template이 자동으로 붙여 중복 출력됩니다.

// 기본 사이트 정보 (layout.tsx와 동일하게 유지)
const SITE_INFO = {
  title: '5프로돌려주는스카이차 ',
  description: '스카이차·고소작업차 대여. 1톤~19톤 장비로 제주 제외 전국 24시간 배차합니다. 반나절·하루 요금 기준 공개, 이용료 5% 현금 환급. 상담 1877-3924',
  siteUrl: 'https://www.5prosky.com', // ✅ 실제 도메인 설정 완료!
  ogImage: '/images/5pro-logo-main.png',
  businessName: '5프로돌려주는스카이차',
  businessPhone: '1877-3924',
  businessEmail: 'man7866@naver.com',
  keywords: '스카이차, 스카이차 대여, 스카이차 임대, 스카이차 가격, 스카이차 요금표, 고소작업차, 고소작업차 대여, 굴절 스카이차, 1톤 스카이차, 3.5톤 스카이차, 5톤 스카이차, 스카이차 견적, 스카이차 5% 페이백'
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
  const fullTitle = title // 브랜드명은 루트 layout의 title.template이 붙임
  const fullUrl = `${SITE_INFO.siteUrl}${path}`
  
  const socialTitle = `${title} | ${SITE_INFO.businessName}`

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
      title: socialTitle,
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
      title: socialTitle,
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
    description: '스카이차 이용료의 5%를 현금으로 돌려드립니다. 1톤~19톤 장비, 반나절·하루 요금 기준 공개. 상담 1877-3924',
    keywords: '스카이차, 페이백, 5%페이백, 건설장비, 고소작업',
    path: '/'
  }),
  
  // 가격표 페이지
  pricing: generatePageMetadata({
    title: '스카이차 가격표',
    description: '스카이차 1톤~19톤 요금 기준과 추가 비용 조건을 안내합니다. 반나절 4시간·하루 8시간 기준. 이용료 5% 현금 환급.',
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
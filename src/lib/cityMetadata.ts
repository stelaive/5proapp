import type { Metadata } from 'next'
import type { RegionData } from '@/lib/regionData'

const SITE_URL = 'https://www.5prosky.com'

/**
 * 도시(자치구) 페이지 공통 메타데이터 빌더.
 * 타이틀 키워드는 붙여쓰기 형태(`${nameShort}스카이차`)로 통일.
 */
export function buildCityMetadata(data: RegionData): Metadata {
  const areas = data.subAreas.slice(0, 6)
  const url = `${SITE_URL}/locations/${data.slug}`

  // localIntro가 있으면 구별 고유 문장으로 description 차별화 (중복 신호 해소)
  const description = data.localIntro
    ? `${data.localIntro} 작업 완료 시 5% 현금 페이백! ${data.phone}`
    : `${data.nameKo}(${areas.join('·')}) 스카이차 빠른 배차. 1톤·3.5톤·5톤 고소작업차 당일 출동, 작업 완료 시 5% 현금 페이백! ${data.phone}`

  return {
    title: `${data.nameShort}스카이차 | ${data.phone} | 5% 페이백해주는 스카이차`,
    description,
    keywords: [
      `${data.nameShort}스카이차`,
      ...areas.map((area) => `${area}스카이차`),
      `${data.nameKo}스카이차`,
      `${data.nameShort}고소작업차`,
      '1톤스카이차',
      '3.5톤스카이차',
      '5톤스카이차',
      '스카이차가격',
      '스카이차비용',
      '굴절스카이차',
    ],
    openGraph: {
      title: `${data.nameShort}스카이차 | ${data.phone} | 5% 페이백`,
      description: `${data.nameKo} 전지역 30분 내 배차. 쓰고 돌려받는 5% 캐시백 혜택을 지금 확인하세요.`,
      url,
      siteName: '5프로스카이차',
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/5pro-logo-main.png`,
          width: 1200,
          height: 630,
          alt: `${data.nameShort} 스카이차 5% 페이백`,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

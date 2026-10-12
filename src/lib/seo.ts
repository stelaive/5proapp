import type { Metadata } from 'next'
import type { RegionData } from './regionData'

export const SITE_URL = 'https://www.5prosky.com'
export const BRAND_NAME = '5프로돌려주는스카이차'
export const SEO_UPDATED_AT = '2026-10-12'

export function pageMetadata(title: string, description: string, path: string, keywords: string[]): Metadata {
  const sharedTitle = `${title} | ${BRAND_NAME}`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', locale: 'ko_KR', siteName: BRAND_NAME,
      title: sharedTitle, description, url: `${SITE_URL}${path}`,
      images: [{ url: '/images/5pro-logo-main.png', alt: BRAND_NAME }],
    },
    twitter: {
      card: 'summary_large_image', title: sharedTitle, description,
      images: ['/images/5pro-logo-main.png'],
    },
  }
}

export function cityMetadata(data: RegionData): Metadata {
  const label = data.slug === 'junggu' ? '서울 중구' : data.nameShort
  const context = data.localIntro?.split('. ')[0] || `${data.subAreas.slice(0, 3).join('·')} 등 ${data.nameKo} 작업 현장을 상담합니다`
  return pageMetadata(
    `${label}스카이차 대여 | 비용·간판작업 견적`,
    `${context}. ${data.nameKo} 스카이차 비용과 1시간·반나절·하루 요금, 간판 교체·외벽 작업에 필요한 장비와 배차 일정을 확인하세요. 상담 ${data.phone}.`,
    `/locations/${data.slug}`,
    [`${label}스카이차`, `${data.nameKo} 스카이차 비용`, `${data.nameKo} 스카이차 대여`, `${data.nameKo} 간판작업 스카이차`, '고소작업차 임대'],
  )
}

export const HUB_CONTENT: Record<string, { label: string; description: string; advice: string }> = {
  seoul: {
    label: '서울',
    description: '서울 스카이차 대여 지역과 비용 안내. 25개 자치구의 간판작업·외벽 보수에 필요한 장비, 시간별 가격표와 견적 준비사항을 확인하세요.',
    advice: '상가 간판 교체나 주택 외벽 작업은 차량을 세울 위치와 보행자 통행 공간을 함께 확인해야 합니다. 작업할 구·동, 건물 높이, 도로 쪽 현장 사진을 준비해 주세요.',
  },
  gyeonggi: {
    label: '경기',
    description: '경기도 스카이차 대여·비용 상담. 수원·안양·군포 상세 안내와 경기 남부·북부의 배차 문의 지역, 간판작업 및 고소작업 견적 조건을 확인하세요.',
    advice: '경기 남부·북부는 현장 간 이동 거리와 장비 일정이 다를 수 있습니다. 공장·창고·상가의 정확한 주소와 차량 진입로, 작업 시간을 알려주시면 배차 가능 여부를 상담합니다.',
  },
  incheon: {
    label: '인천',
    description: '인천 스카이차 대여·비용 상담 안내. 간판 교체·외벽 작업의 높이, 진입 조건과 이용 시간에 맞는 장비 및 지역별 배차 가능 여부를 확인하세요.',
    advice: '인천은 현장 주소에 따라 이동 경로와 출입 조건을 확인해야 합니다. 섬 지역이나 출입이 제한된 시설은 이동·반입 가능 여부를 먼저 상담하고 일정을 정해 주세요.',
  },
}

// 세금 정책을 새로 정하지 않고 최종 견적에서 확인할 항목을 일관되게 안내한다.
export const PRICE_NOTICE = '표시 요금은 장비·이용 시간별 기준입니다. 작업 높이, 진입·주차 조건, 야간·주말 및 시간 초과에 따라 견적이 달라질 수 있습니다. 예약 전 부가세 포함 여부와 추가 비용을 구분한 최종 결제금액을 확인해 주세요.'

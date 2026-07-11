import { MetadataRoute } from 'next'
import { LOCATIONS_DATA } from '@/lib/regionData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://5프로.com' // 가독성을 위해 한글 도메인 사용
  
  // lastModified를 실제 페이지 업데이트 날짜로 고정
  // 검색엔진에게 정확한 정보를 제공하여 크롤링 효율성 향상
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2025-08-01', // 메인 페이지 주요 업데이트 날짜
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: '2025-07-25', // 가격표 최종 업데이트
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reward`,
      lastModified: '2025-07-30', // 리워드 시스템 업데이트
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketing`,
      lastModified: '2025-07-20', // 마케팅 페이지 업데이트
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified: '2025-07-22', // 마켓플레이스 업데이트
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: '2025-06-15', // 고객지원 FAQ 업데이트
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/whyhere`,
      lastModified: '2025-06-10', // 소개 페이지 업데이트
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rss.xml`,
      lastModified: '2025-07-01', // RSS 피드 설정 날짜
      changeFrequency: 'daily',
      priority: 0.3,
    },
  ]

  // 2) 지역별 동적 페이지 생성 (/locations/{slug})
  // 실제로 서비스 중인(콘텐츠가 준비된) 도시 슬러그 목록만 포함
  const LIVE_CITY_SLUGS = new Set(['anyang', 'gunpo', 'suwon'])

  const locationPages: MetadataRoute.Sitemap = []

  // 지역별 페이지의 실제 업데이트 날짜 매핑
  const locationUpdateDates: Record<string, string> = {
    'anyang': '2025-07-24', // 안양 페이지 최종 업데이트
    'gunpo': '2025-07-26',  // 군포 페이지 최종 업데이트 (schema.tsx 포함)
    'suwon': '2025-07-18'   // 수원 페이지 최종 업데이트
  }

  LOCATIONS_DATA.forEach((loc) => {
    const processCity = (city: { slug: string }) => {
      if (LIVE_CITY_SLUGS.has(city.slug)) {
        locationPages.push({
          url: `${baseUrl}/locations/${city.slug}`,
          lastModified: locationUpdateDates[city.slug] || '2025-07-01', // 실제 업데이트 날짜 사용
          changeFrequency: 'monthly',
          priority: 0.8,
        })
      }
    }

    if (loc.isGrouped && loc.groups) {
      loc.groups.forEach((group) => group.cities.forEach(processCity))
    } else if (loc.cities) {
      loc.cities.forEach(processCity)
    }
  })

  return [...staticPages, ...locationPages]
} 
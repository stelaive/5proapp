import { MetadataRoute } from 'next'
import { LOCATIONS_DATA, LIVE_CITY_SLUGS } from '@/lib/regionData'

export default function sitemap(): MetadataRoute.Sitemap {
  // 정규 도메인: punycode로 일원화 (canonical·robots와 일치)
  const baseUrl = 'https://xn--5-w30fr74e.com'

  // lastModified를 실제 페이지 업데이트 날짜로 고정
  // 검색엔진에게 정확한 정보를 제공하여 크롤링 효율성 향상
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-07-11', // 메인 페이지 전면 리디자인
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

  // 2) 광역 지역 허브 페이지 (/locations/{region}) — generateStaticParams로 생성됨
  const REGION_HUB_SLUGS = ['seoul', 'gyeonggi', 'incheon']
  const regionHubPages: MetadataRoute.Sitemap = REGION_HUB_SLUGS.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: '2026-07-11',
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // 3) 도시별 페이지 (/locations/{slug})
  // 전용 페이지가 존재하는 도시만 포함 (regionData.LIVE_CITY_SLUGS = 단일 소스)
  const liveSet = new Set(LIVE_CITY_SLUGS)

  // 지역별 페이지의 실제 업데이트 날짜 매핑 (없으면 기본값)
  const locationUpdateDates: Record<string, string> = {
    'gangnam': '2026-07-11',
    'seocho': '2026-07-12',
    'anyang': '2026-07-11',
    'gunpo': '2026-07-11',
    'suwon': '2026-07-11',
  }
  const DEFAULT_DATE = '2026-07-12' // 서울 자치구 일괄 생성일

  const locationPages: MetadataRoute.Sitemap = []
  const seen = new Set<string>() // slug 중복 방지 (예: 서울·인천 '중구'가 동일 slug 'junggu')

  LOCATIONS_DATA.forEach((loc) => {
    const processCity = (city: { slug: string }) => {
      if (liveSet.has(city.slug) && !seen.has(city.slug)) {
        seen.add(city.slug)
        locationPages.push({
          url: `${baseUrl}/locations/${city.slug}`,
          lastModified: locationUpdateDates[city.slug] || DEFAULT_DATE,
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

  return [...staticPages, ...regionHubPages, ...locationPages]
} 
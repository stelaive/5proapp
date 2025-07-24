import { MetadataRoute } from 'next'
import { LOCATIONS_DATA } from '@/lib/locationsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xn--5-w30fr74e.com' // 5프로.com Punycode
  const currentDate = new Date().toISOString()

  // 1) 고정 페이지 목록
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/marketing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/million`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reward`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/whyhere`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // 2) 지역별 동적 페이지 생성 (/locations/{slug})
  // 실제로 퍼블리시된(콘텐츠가 준비된) 도시 슬러그 목록만 포함
  const LIVE_CITY_SLUGS = new Set(['anyang', 'gunpo'])

  const locationPages: MetadataRoute.Sitemap = []

  LOCATIONS_DATA.forEach((loc) => {
    if (loc.isGrouped && loc.groups) {
      loc.groups.forEach((group) => {
        group.cities.forEach((city) => {
          if (LIVE_CITY_SLUGS.has(city.slug)) {
            locationPages.push({
              url: `${baseUrl}/locations/${city.slug}`,
              lastModified: currentDate,
              changeFrequency: 'monthly',
              priority: 0.8,
            })
          }
        })
      })
    } else if (loc.cities) {
      loc.cities.forEach((city) => {
        if (LIVE_CITY_SLUGS.has(city.slug)) {
          locationPages.push({
            url: `${baseUrl}/locations/${city.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      })
    }
  })

  return [...staticPages, ...locationPages]
} 
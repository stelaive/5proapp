import React from 'react'
import { LOCATIONS_DATA, type RegionData } from '@/lib/regionData'

const SITE_URL = 'https://www.5prosky.com'

// 슬러그로 상위 광역 지역(서울/경기/인천) 찾기 — 브레드크럼용
function findParentRegion(citySlug: string): { name: string; slug: string } | null {
  for (const loc of LOCATIONS_DATA) {
    if (loc.isGrouped && loc.groups) {
      for (const g of loc.groups) {
        if (g.cities.some((c) => c.slug === citySlug)) {
          return { name: loc.name, slug: loc.slug }
        }
      }
    } else if (loc.cities?.some((c) => c.slug === citySlug)) {
      return { name: loc.name, slug: loc.slug }
    }
  }
  return null
}

/**
 * 지역(도시) 페이지용 구조화 데이터.
 * - BreadcrumbList: 홈 > 광역 > 도시
 * - Service + OfferCatalog: 실제 요금(regionData.pricing) 기반
 * 순수 데이터 렌더(서버/클라이언트 공용).
 */
export default function LocationJsonLd({ data }: { data: RegionData }) {
  const cityUrl = `${SITE_URL}/locations/${data.slug}`
  const parent = findParentRegion(data.slug)

  const breadcrumbItems: { '@type': 'ListItem'; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  ]
  if (parent) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: parent.name,
      item: `${SITE_URL}/locations/${parent.slug}`,
    })
  }
  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: `${data.nameKo} 스카이차`,
    item: cityUrl,
  })

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.nameKo} 스카이차 대여`,
    serviceType: '스카이차(고소작업차) 대여',
    description: `${data.nameKo} 전 지역 스카이차 대여. 작업 완료 후 이용료의 5%를 현금으로 페이백.`,
    url: cityUrl,
    provider: {
      '@type': 'LocalBusiness',
      name: '5프로돌려주는스카이차',
      telephone: data.phone,
      areaServed: { '@type': 'Place', name: `${data.nameKo} 전지역` },
    },
    areaServed: { '@type': 'Place', name: data.nameKo },
    offers: {
      '@type': 'OfferCatalog',
      name: `${data.nameKo} 스카이차 톤수별 요금`,
      itemListElement: data.pricing.items.map((item) => ({
        '@type': 'Offer',
        name: `${item.tonnage} 스카이차`,
        priceCurrency: 'KRW',
        price: String(item.oneHour),
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(item.oneHour),
          priceCurrency: 'KRW',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: '시간' },
        },
        availability: 'https://schema.org/InStock',
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  )
}

import Script from 'next/script'
import type { RegionData } from '@/lib/regionData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

const SITE_URL = 'https://xn--5-w30fr74e.com'

/**
 * 도시(자치구) 페이지 공통 레이아웃.
 * Navigation/Footer/FloatingDownload + LocalBusiness JSON-LD를 data 기반으로 렌더.
 * 현재는 서울 자치구 전용(addressRegion 고정). 타 광역 확장 시 regionData에 지역명 필드 추가 필요.
 */
export default function CityLayout({
  data,
  children,
}: {
  data: RegionData
  children: React.ReactNode
}) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${data.nameKo} 스카이차 (5프로스카이차)`,
    areaServed: { '@type': 'AdministrativeArea', name: data.nameKo },
    priceRange: '₩250,000–₩650,000',
    telephone: data.phone,
    url: `${SITE_URL}/locations/${data.slug}`,
    image: `${SITE_URL}/images/5pro-logo-main.png`,
    description: `서울 ${data.nameKo}(${data.subAreas.slice(0, 6).join('·')}) 고소작업 스카이차 임대. 작업 완료 후 5% 즉시 캐시백. 1톤·3.5톤·5톤 스카이차 당일 배차.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.nameKo,
      addressRegion: '서울특별시',
      addressCountry: 'KR',
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 07:00-18:00',
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="locations" />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingDownload />
      <Script
        id={`ld-lb-${data.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </div>
  )
}

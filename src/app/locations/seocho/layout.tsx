import type { Metadata } from 'next'
import Script from 'next/script'
import { SEOCHO_DATA } from '@/lib/regionData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

const data = SEOCHO_DATA
// 대표 동네만 추려 메타 설명·키워드에 사용 (전체 동 리스트는 본문 LocalAreaList에서 노출)
const KEY_AREAS = ['서초동', '잠원동', '반포동', '방배동', '양재동', '내곡동']

export const metadata: Metadata = {
  // 핵심 키워드 '서초스카이차'(붙여쓰기)를 맨 앞에 배치
  title: `${data.nameShort}스카이차 | ${data.phone}`,
  description: `${data.localIntro} 작업 완료 시 5% 현금 페이백! ${data.phone}`,
  keywords: [
    `${data.nameShort}스카이차`,
    ...KEY_AREAS.map((area) => `${area}스카이차`),
    '서초구스카이차',
    '서초고소작업차',
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
    url: 'https://www.5prosky.com/locations/seocho',
    siteName: '5프로스카이차',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://www.5prosky.com/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '서초 스카이차 5% 페이백',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.5prosky.com/locations/seocho',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SeochoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '서초 스카이차 (5프로스카이차)',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: '서초구',
    },
    priceRange: '₩250,000–₩650,000',
    telephone: data.phone,
    url: 'https://www.5prosky.com/locations/seocho',
    image: 'https://www.5prosky.com/images/5pro-logo-main.png',
    description:
      '서울 서초구(서초·잠원·반포·방배·양재·내곡동) 고소작업 스카이차 임대. 작업 완료 후 5% 즉시 캐시백. 1톤·3.5톤·5톤 스카이차 당일 배차.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '서초구',
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
      {/* LocalBusiness 스키마 마크업 (FAQPage·Offer는 CityPageTemplate에서 렌더) */}
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </div>
  )
}

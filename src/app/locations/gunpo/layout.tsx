// file: src/app/locations/gunpo/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import Layout from '@/components/common/Layout'

// SEO 메타데이터 확장
export const metadata: Metadata = {
  title: '군포스카이차 | 5프로돌려주는스카이차 (고소작업차)',
  description:
    '경기 군포 전지역(산본·대야미·금정동) 고소작업 스카이차 임대 25만원! 현장 완료 후 5% 즉시 캐시백. 1톤·3.5톤·5톤 스카이차 당일 배차·1877-3924 상담, 카톡 링크로 간편 예약 가능, 지금 바로 문의하세요',
  keywords: [
    '군포스카이차',
    '1톤스카이차',
    '3.5톤스카이차',
    '5톤스카이차',
    '스카이차가격',
    '스카이차비용',
    '고소작업차',
    '산본스카이차',
    '대야미스카이차',
    '금정동스카이차',
  ],
  openGraph: {
    title: '군포스카이차 | 5프로돌려주는스카이차 (고소작업차)',
    description:
      '경기 군포 전지역(산본·대야미·금정동) 고소작업 스카이차 임대 25만원! 현장 완료 후 5% 즉시 캐시백. 1톤·3.5톤·5톤 스카이차 당일 배차·1877-3924 상담, 카톡 링크로 간편 예약 가능, 지금 바로 문의하세요',
    url: 'https://www.5prosky.com/locations/gunpo',
    siteName: '5프로스카이차',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://www.5prosky.com/images/gunpo/gunpo-sky-35t.jpg',
        width: 1200,
        height: 630,
        alt: '군포 3.5톤 스카이차 외부간판 설치',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.5prosky.com/locations/gunpo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GunpoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '군포 스카이차',
    areaServed: '군포, 경기도',
    priceRange: '₩250,000–₩350,000',
    telephone: '1877-3924',
    url: 'https://www.5prosky.com/locations/gunpo',
    image: 'https://www.5prosky.com/images/gunpo/gunpo-sky-35t.jpg',
    description:
      '경기 군포 전지역(산본·대야미·금정동) 고소작업 스카이차 임대 25만원! 작업 완료 후 5% 즉시 캐시백. 1톤·3.5톤·5톤 스카이차 당일 배차.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '군포시',
      addressRegion: '경기도',
      addressCountry: 'KR',
    },
  }

  return (
    <Layout currentPage="locations">
      {/* LocalBusiness 스키마 마크업 (FAQPage·Offer는 CityPageTemplate에서 렌더) */}
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />

      {children}
    </Layout>
  )
} 
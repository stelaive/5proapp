import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'

// SEO 메타데이터 확장
export const metadata: Metadata = {
  // [수정] 가장 중요한 키워드 '수원스카이차'를 맨 앞에 배치했습니다.
  title: '수원스카이차 | 5% 캐시백 고소작업차 임대 (5프로돌려주는스카이차)',
  description:
    '수원 스카이차 임대 당일 배차, 25만원부터. 영통·팔달·장안·권선 등 수원 전지역 고소작업차, 1톤·3.5톤·5톤 보유. 작업 후 5% 즉시 캐시백, 매달 100만원 추첨. 지금 바로 상담하세요.',
  keywords: [
    '수원스카이차',
    '수원고소작업차', // '고소작업차'와 '수원'을 조합한 키워드 추가
    '영통스카이차',
    '팔달스카이차',
    '장안스카이차', // 키워드 추가
    '권선스카이차', // 키워드 추가
    '1톤스카이차',
    '3.5톤스카이차',
    '5톤스카이차',
    '스카이차비용',
    '스카이차가격',
  ],
  openGraph: {
    // [수정] title과 일관성을 맞춥니다.
    title: '수원스카이차 | 5% 캐시백 고소작업차 임대',
    description:
      '수원 전지역 스카이차 임대, 5% 캐시백! 1톤, 3.5톤, 5톤 고소작업차 당일 배차. 1877-3924',
    url: 'https://5프로.com/locations/suwon',
    siteName: '5프로스카이차',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://5프로.com/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '수원 스카이차 5% 페이백',
      },
    ],
  },
  alternates: {
    canonical: 'https://5프로.com/locations/suwon',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SuwonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '수원 스카이차 (5프로스카이차)', // [수정] 브랜드명 추가
    areaServed: { // [수정] areaServed를 객체 형태로 명확하게 표현
        '@type': 'AdministrativeArea',
        'name': '수원'
    },
    priceRange: '₩250,000–₩1,200,000', // [수정] 실제 가격 범위를 더 명확하게
    telephone: '1877-3924',
    url: 'https://5프로.com/locations/suwon',
    image: 'https://5프로.com/images/5pro-logo-main.png',
    description:
      '경기 수원 전지역(영통·팔달·장안·권선) 고소작업 스카이차 임대. 작업 완료 후 5% 즉시 캐시백, 매달 100만원 추첨 자동응모. 1톤·3.5톤·5톤 스카이차 당일 배차 가능.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '수원시',
      addressRegion: '경기도',
      addressCountry: 'KR',
    },
    // [추가] 영업시간 정보는 지역 비즈니스에 매우 중요합니다.
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 07:00-18:00', 
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="locations" isDarkMode={true} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingDownload />
      {/* LocalBusiness 스키마 마크업 */}
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
} 
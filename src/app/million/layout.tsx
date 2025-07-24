import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '100만원 현금 추첨 이벤트 | 5프로돌려주는스카이차',
  description: '가장 저렴한 스카이차 찾았다! 1건 작업시 100만원 현금 추첨 자동 참여 + 5% 페이백까지! 에어컨·건설·전기 전문가들이 선택한 혜택',
  keywords: '스카이차, 스카이차가격, 스카이차요금표, 스카이차대여비용, 1톤스카이차, 1톤스카이차가격, 3.5톤스카이차, 3.5톤스카이차가격, 5톤스카이차, 5톤스카이차가격, 굴절스카이차, 스카이차량, 바가지차, 스카이장비, 스카이임대료, 스카이사다리차, 2.5톤스카이, 스카이가격, 3.5톤스카이, 고소차, 스카이일대, 스카이대여, 1톤스카이비용, 고소작업, 에어컨실외기교체, 고소작업차가격, 스카이차반나절가격, 스카이차하루가격, 스카이차월단위대여, 스카이차추가요금, 수원스카이차가격, 용인스카이차가격, 화성스카이차가격, 평택스카이차가격, 성남스카이차가격, 시흥스카이차가격, 스카이차5%페이백, 스카이차할인, 저렴한스카이차, 스카이차견적, 투명한스카이차가격, 합리적스카이차요금, 코킹작업, 강남스카이차, 용인스카이, 이천스카이차, 외벽페인트, 안산스카이차, 성남스카이, 경기광주스카이, 양주스카이차, 의정부스카이차, 김포스카이차, 송파스카이차, 평택스카이, 건물외벽청소',
  openGraph: {
    title: '100만원 현금 추첨 이벤트 | 5프로돌려주는스카이차',
    description: '가장 저렴한 스카이차 찾았다! 1건 작업시 100만원 현금 추첨 자동 참여 + 5% 페이백까지!',
    url: 'https://xn--5-w30fr74e.com/million',
    images: [
      {
        url: '/images/5프로.png',
        width: 1200,
        height: 630,
        alt: '100만원 현금 추첨 이벤트 - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100만원 현금 추첨 이벤트 | 5프로돌려주는스카이차',
    description: '가장 저렴한 스카이차 찾았다! 1건 작업시 100만원 현금 추첨 자동 참여 + 5% 페이백까지!',
    images: ['/images/5프로.png'],
  },
  alternates: {
    canonical: 'https://5프로.com/million',
  },
}

export default function MillionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: '100만원 현금 추첨 이벤트',
    startDate: '2025-08-31T20:00:00+09:00',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: 'https://5프로.com/million',
    },
    description: '스카이차 작업 1건 완료 시 자동 응모! 5% 페이백과 함께 매달 100만원 당첨의 행운을 잡아보세요.',
    organizer: {
      '@type': 'Organization',
      name: '5프로돌려주는스카이차',
      url: 'https://5프로.com',
    },
  };
  return (
    <>
      {/* Event 구조화 데이터 */}
      <Script
        id="ld-json-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {children}
    </>
  )
} 
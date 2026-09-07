import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata: Metadata = {
  title: '스카이차 가격표·요금 기준',
  description: '스카이차 1톤~19톤 요금 기준과 추가 비용 조건을 안내합니다. 반나절 4시간·하루 8시간 기준. 이용료 5% 현금 환급. 견적 상담 1877-3924',
  keywords: '스카이차 가격, 스카이차 요금표, 스카이차 대여 비용, 반나절 요금, 하루 요금, 1톤 스카이차 가격, 3.5톤 스카이차 가격, 5톤 스카이차 가격, 고소작업차 요금, 스카이차 추가 요금, 스카이차 견적',
  openGraph: {
    title: '스카이차 가격표·요금 기준 | 5프로돌려주는스카이차',
    description: '경기도 어디든 당일 출동! 바가지 없는 투명한 스카이차 가격표 + 5% 현금 즉시 돌려받기!',
    url: 'https://www.5prosky.com/pricing',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '스카이차 가격표 - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '스카이차 가격표·요금 기준 | 5프로돌려주는스카이차',
    description: '경기도 어디든 당일 출동! 바가지 없는 투명한 스카이차 가격표 + 5% 현금 즉시 돌려받기!',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="pricing" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

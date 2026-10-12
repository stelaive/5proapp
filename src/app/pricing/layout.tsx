import { pageMetadata } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata = pageMetadata(
  '스카이차 가격표 · 스카이차비용·대여 견적',
  '스카이차비용을 1톤~19톤 장비와 30분·1시간·반나절·하루 기준으로 확인하세요. 간판작업·외벽 보수의 대여 가격, 추가 비용과 견적 준비사항을 안내합니다. 상담 1877-3924.',
  '/pricing',
  ['스카이차가격', '스카이차비용', '스카이차 대여 비용', '스카이차 가격표', '간판작업 스카이차 비용', '스카이차 견적'],
)

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

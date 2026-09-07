import type { Metadata } from 'next'
import { GANGNAM_DATA } from '@/lib/regionData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

const data = GANGNAM_DATA;

export const metadata: Metadata = {
  title: `${data.nameShort}스카이차 | ${data.phone}`,
  description: `${data.localIntro} 작업 완료 시 5% 현금 페이백! ${data.phone}`,
  keywords: `${data.nameShort}스카이차, ${data.subAreas.map(area => `${area}스카이차`).join(', ')}, 강남스카이차가격, 스카이차비용, 1톤스카이차, 2.5톤스카이차, 3.5톤스카이차, 5톤스카이차, 굴절스카이차`,
  openGraph: {
    title: `${data.nameShort}스카이차 | ${data.phone} | 5% 페이백`,
    description: `${data.nameKo} 전지역 30분 내 배차. 쓰고 돌려받는 5% 캐시백 혜택을 지금 확인하세요.`,
    images: ['/images/5pro-logo-main.png'],
    url: `https://www.5prosky.com/locations/gangnam`,
  },
  alternates: {
    canonical: `https://www.5prosky.com/locations/gangnam`,
  },
}

export default function GangnamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="locations" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

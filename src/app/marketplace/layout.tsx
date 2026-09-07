import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata: Metadata = {
  title: '일거리 장터 · 스카이차 일감',
  description: '스카이차 사장님들이 일감 정보를 나누는 공간입니다. 일거리를 찾고 함께 나누세요. 스카이차 이용 시 이용료 5% 현금 환급.',
  keywords: '일거리 장터, 스카이차 일감, 고소작업 일감, 업체 협력, 일감 공유',
  // 페이지 고유 정규 URL — 없으면 루트 layout의 canonical('/')을 상속해
  // 이 페이지가 홈의 중복으로 취급된다.
  alternates: {
    canonical: '/marketplace',
  },
  openGraph: {
    title: '일거리 장터 · 스카이차 일감 | 5프로돌려주는스카이차',
    description: '일거리 찾기 어려워? 일거리장터에서 든든한 일감 확보하고 스카이차 이용하면 5% 현금 페이백까지!',
    url: 'https://www.5prosky.com/marketplace',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '일거리장터 - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '일거리 장터 · 스카이차 일감 | 5프로돌려주는스카이차',
    description: '일거리 찾기 어려워? 일거리장터에서 든든한 일감 확보하고 스카이차 이용하면 5% 현금 페이백까지!',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="marketplace" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

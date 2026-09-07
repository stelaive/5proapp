import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata: Metadata = {
  title: '5% 현금 환급 서비스 안내',
  description: '5프로돌려주는스카이차가 어떤 서비스인지 안내합니다. 이용료 5% 현금 환급의 대상과 지급 방식, 친구 초대 보상까지 확인하세요.',
  keywords: '5% 페이백, 현금 환급, 스카이차 페이백, 서비스 소개, 이용료 환급',
  // 페이지 고유 정규 URL — 없으면 루트 layout의 canonical('/')을 상속해
  // 이 페이지가 홈의 중복으로 취급된다.
  alternates: {
    canonical: '/whyhere',
  },
  openGraph: {
    title: '5% 현금 환급 서비스 안내 | 5프로돌려주는스카이차',
    description: '기존 스카이차 업체와 차별화된 혜택! 5% 페이백 + 친구 초대 혜택까지 한번에!',
    url: 'https://www.5prosky.com/whyhere',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '왜 5프로돌려주는스카이차인가? - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5% 현금 환급 서비스 안내 | 5프로돌려주는스카이차',
    description: '기존 스카이차 업체와 차별화된 혜택! 5% 페이백 + 친구 초대 혜택까지 한번에!',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function WhyhereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="whyhere" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

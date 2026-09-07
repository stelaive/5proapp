import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata: Metadata = {
  title: '친구 초대 보상 안내',
  description: '친구 5명을 초대하면 현금 5만원을 드립니다. 반복 참여 가능한 친구 초대 보상의 조건과 지급 방법을 확인하세요.',
  keywords: '친구 초대, 추천 보상, 스카이차 친구초대, 초대 보상금, 5% 페이백',
  openGraph: {
    title: '친구 초대 보상 안내 | 5프로돌려주는스카이차',
    description: '친구 5명 초대하면 5만원 현금 지급! 무한 반복 가능한 특별 혜택으로 통장에 돈이 계속 쌓인다',
    url: 'https://www.5prosky.com/reward',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '친구 초대 이벤트 - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '친구 초대 보상 안내 | 5프로돌려주는스카이차',
    description: '친구 5명 초대하면 5만원 현금 지급! 무한 반복 가능한 특별 혜택으로 통장에 돈이 계속 쌓인다',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function RewardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="reward" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

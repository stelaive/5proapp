import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata: Metadata = {
  title: '고객센터 FAQ',
  description: '스카이차 이용 관련 자주 묻는 질문과 답변. 요금 기준, 배차, 페이백 신청 방법을 정리했습니다. 고객센터 1877-3924.',
  keywords: '고객센터, 스카이차 문의, 자주 묻는 질문, 페이백 신청, 배차 문의, 1877-3924',
  // 페이지 고유 정규 URL — 없으면 루트 layout의 canonical('/')을 상속해
  // 이 페이지가 홈의 중복으로 취급된다.
  alternates: {
    canonical: '/support',
  },
  openGraph: {
    title: '고객센터 FAQ | 5프로돌려주는스카이차',
    description: '24시간 고객센터 1877-3924 운영! 스카이차 문의부터 페이백 신청까지 친절한 상담 서비스',
    url: 'https://www.5prosky.com/support',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '고객지원 - 5프로돌려주는스카이차',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '고객센터 FAQ | 5프로돌려주는스카이차',
    description: '24시간 고객센터 1877-3924 운영! 스카이차 문의부터 페이백 신청까지 친절한 상담 서비스',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="support" isDarkMode={true} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

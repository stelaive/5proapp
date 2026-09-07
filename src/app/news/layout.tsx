import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

// ※ 브랜드명은 루트 layout의 title.template이 자동으로 붙입니다. 여기서 다시 적지 마세요.
export const metadata: Metadata = {
  title: '소식 · 공지사항',
  description:
    '5프로돌려주는스카이차의 공지사항과 서비스 소식입니다. 요금·정책 변경, 서비스 점검, 배차 지역 안내를 확인하세요.',
  keywords: '공지사항, 스카이차 소식, 서비스 안내, 요금 변경 안내, 점검 안내',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: '소식 · 공지사항 | 5프로돌려주는스카이차',
    description:
      '5프로돌려주는스카이차의 공지사항과 서비스 소식입니다. 요금·정책 변경, 서비스 점검, 배차 지역 안내를 확인하세요.',
    url: 'https://www.5prosky.com/news',
    images: [
      {
        url: '/images/5pro-logo-main.png',
        width: 1200,
        height: 630,
        alt: '소식 · 공지사항 - 5프로돌려주는스카이차',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '소식 · 공지사항 | 5프로돌려주는스카이차',
    description: '5프로돌려주는스카이차의 공지사항과 서비스 소식입니다.',
    images: ['/images/5pro-logo-main.png'],
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="news" />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

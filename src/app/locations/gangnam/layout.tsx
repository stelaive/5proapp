import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '강남구 스카이차 | 1877-9001 | 5% 페이백해주는 스카이차',
  description: '서울 강남구, 논현동, 역삼동, 청담동 스카이차 빠른 배차. 작업 완료 시 5% 현금 페이백 + 매달 100만원 추첨 기회까지! 1877-9001',
  keywords: '강남구스카이차, 강남스카이차, 역삼동스카이차, 논현동스카이차, 청담동스카이차, 신사동스카이차, 압구정스카이차, 삼성동스카이차, 대치동스카이차, 강남스카이차가격',
  openGraph: {
    title: '강남구 스카이차 | 1877-9001 | 5% 페이백',
    description: '강남 전지역 30분 내 배차. 쓰고 돌려받는 5% 캐시백 혜택을 지금 확인하세요.',
    images: ['/images/5프로.png'],
  },
}

export default function GangnamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


import React from 'react'
import { BRAND_NAME, SITE_URL } from '@/lib/seo'
import { pageMetadata } from '@/lib/seo'
import AnswerSummary from '@/components/seo/AnswerSummary'
import WorkGuide from '@/components/seo/WorkGuide'
import RegionLinks from '@/components/seo/RegionLinks'

export const metadata = pageMetadata(
  '스카이차 대여·고소작업차 임대 | 간판작업 견적',
  '간판 설치·교체·철거, 외벽 보수에 필요한 스카이차 대여를 상담하세요. 작업 높이와 현장 조건에 맞는 장비, 스카이차비용·가격표와 지역별 배차 안내를 확인할 수 있습니다. 1877-3924.',
  '/',
  ['스카이차 대여', '고소작업차 임대', '간판작업 스카이차', '간판 교체 스카이차', '스카이차비용'],
)

import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/sections/ProblemSection'
import ServiceSection from '@/components/home/sections/ServiceSection'
import FaqSection from '@/components/home/sections/FaqSection'
import CtaSection from '@/components/home/sections/CtaSection'

// 메인 페이지는 Server Component. 각 섹션은 애니메이션/인터랙션을 위한 클라이언트 컴포넌트.
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`,
        name: BRAND_NAME, alternateName: '5프로스카이차', url: SITE_URL,
        inLanguage: 'ko-KR', publisher: { '@id': `${SITE_URL}/#organization` },
      }) }} />
      <Navigation currentPage="home" />

      <main className="flex-grow">
        {/* 1. 히어로 */}
        <HeroSection />
        <AnswerSummary kind="home" />
        {/* 2. 문제 제기 */}
        <ProblemSection />
        {/* 3. 서비스(해결) */}
        <ServiceSection />
        <WorkGuide />
        <RegionLinks />
        {/* 4. FAQ */}
        <FaqSection />
        {/* 5. CTA */}
        <CtaSection />
      </main>

      {/* 6. 푸터 */}
      <Footer />
      <FloatingDownload />
    </div>
  )
}

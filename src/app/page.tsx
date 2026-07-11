import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/sections/ProblemSection'
import ServiceSection from '@/components/home/sections/ServiceSection'
import AreaSection from '@/components/home/sections/AreaSection'
import FaqSection from '@/components/home/sections/FaqSection'
import CtaSection from '@/components/home/sections/CtaSection'

// 메인 페이지는 Server Component. 각 섹션은 애니메이션/인터랙션을 위한 클라이언트 컴포넌트.
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage="home" />

      <main className="flex-grow">
        {/* 1. 히어로 */}
        <HeroSection />
        {/* 2. 문제 제기 */}
        <ProblemSection />
        {/* 3. 서비스(해결) */}
        <ServiceSection />
        {/* 3-1. 출동 가능 지역 (로컬 SEO) */}
        <AreaSection />
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

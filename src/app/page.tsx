import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import HeroSection from '@/components/home/HeroSection'
import HomeSections from '@/components/home/HomeSections'

// 메인 페이지는 이제 Server Component입니다.
// 메타데이터 등 서버 사이드 로직을 여기서 처리할 수 있습니다.

export default function Home() {
  return (
    <main>
      <Navigation currentPage="home" />
      
      {/* 히어로 섹션 (클라이언트 컴포넌트: 애니메이션/인터랙션) */}
      <HeroSection />

      {/* 나머지 섹션들 (클라이언트 컴포넌트: 애니메이션/인터랙션) */}
      <HomeSections />

      <FloatingDownload />
      <Footer />
    </main>
  )
}

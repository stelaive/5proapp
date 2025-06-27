import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // ✏️ 수정하세요: 메인 페이지 제목 (구글 검색 결과에 나타남)
  title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백 + 매월 100만원 추첨',
  // ✏️ 수정하세요: 메인 페이지 설명 (구글 검색 결과 제목 아래 나타남)
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  // ✏️ 수정하세요: 메인 페이지 검색 키워드들
  keywords: ['스카이차', '크레인', '고소작업차', '렌탈', '캐시백', '5%', '100만원', '추첨', '이벤트', '친구초대', '건설장비', '외벽작업'],
  
  openGraph: {
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백',
    description: '스카이차 렌탈하고 5% 돌려받고, 매월 100만원 추첨까지! 지금 바로 시작하세요.',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com',
    images: [
      {
        url: '/images/스로고1.png',
        width: 1200,
        height: 630,
        alt: '5프로돌려주는스카이차 메인 화면',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백',
    description: '스카이차 렌탈하고 5% 돌려받고, 매월 100만원 추첨까지!',
    images: ['/images/스로고1.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com',
  },
  
  other: {
    'application-name': '5프로스카이차',
    'msapplication-TileColor': '#f97316',
    'theme-color': '#f97316',
  }
}

export default function Home() {
  return (
    <main>
      <Navigation currentPage="home" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 bg-black text-white overflow-hidden hero-section">
        <div className="absolute inset-0 z-0" style={{ zIndex: 1 }}>
          <Image
            src="/images/스동8.gif"
            alt="스카이차 작업 현장"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 pr-6">
          <div className="max-w-5xl relative z-10" style={{ zIndex: 10 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white font-jalnan" style={{ lineHeight: '1.8' }}>
              스카이차 쓰고 <span className="text-red-500">5%</span> 돌려받고,<br />
              매월 <span className="text-red-500">100만원</span> 행운까지!
            </h1>
            <p className="text-base md:text-xl mb-8 text-white leading-relaxed">
              작업 완료 즉시 자동 페이백!<br />
              회원이라면 누구나 매월 100만원 추첨 대상이 됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#core-features" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center">
                자세히 알아보기
              </Link>
              <a href="tel:18779001" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                앱 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 소개 섹션 */}
      <section id="core-features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 font-jalnan">
              사장님, 아직도 여러 곳에 전화 돌리세요?
            </h2>
            <p className="text-xl text-gray-600 mb-16">
              이제 <span className="text-red-500 font-bold">한 번의 클릭</span>으로 모든 것이 해결됩니다!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-red-500 text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">5% 캐시백</h3>
                <p className="text-gray-600">작업 완료 즉시 5% 현금 돌려받기</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-red-500 text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">100만원 추첨</h3>
                <p className="text-gray-600">매월 1일 생방송 추첨 이벤트</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-red-500 text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">친구 초대</h3>
                <p className="text-gray-600">친구 5명 초대하고 5만원 받기</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDownload />
    </main>
  )
} 
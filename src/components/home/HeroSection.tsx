'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// 애니메이션 variants 정의
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const heroTextVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank');
    } else if (userAgent.includes('android')) {
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    }
  };

  return (
    <section className="relative pt-40 pb-20 bg-black text-white overflow-hidden hero-section">
      <div className="absolute inset-0 z-0" style={{ zIndex: 1 }}>
        {/* 
          TODO: [성능 최적화] 추후 mp4/webm 영상 파일이 준비되면 아래 주석을 해제하고 GIF를 대체하세요.
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="/images/sky-car-animation-8.gif" // 영상 로딩 전 보여줄 이미지
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        */}
        <Image
          src="/images/sky-car-animation-8.gif"
          alt="스카이차 작업 현장"
          fill
          className="object-cover"
          unoptimized
          priority // LCP 개선을 위해 우선 순위 높임
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" style={{ zIndex: 10 }}>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <motion.div 
            className="flex-1 max-w-2xl relative z-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-white font-jalnan"
              style={{ lineHeight: '1.8' }}
              variants={heroTextVariants}
              transition={{ duration: 0.8 }}
            >
              스카이차 쓰고 <span className="text-red-500">5%</span> 돌려받고,<br />
              매월 <span className="text-red-500">100만원</span> 행운까지!
            </motion.h1>
            <motion.p 
              className="text-base md:text-xl mb-8 text-white leading-relaxed"
              variants={heroTextVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              작업 완료 즉시 자동 페이백!<br />
              회원이라면 누구나 매월 100만원 추첨 대상이 됩니다.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={heroTextVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => scrollToSection('core-features')}
                className="text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: '#42d9de',
                  color: '#ffffff !important',
                  zIndex: 10,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3bc4c9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#42d9de';
                }}
              >
                <span style={{ color: '#ffffff !important', fontWeight: 'bold !important' }}>
                  자세히 알아보기
                </span>
              </button>
            </motion.div>

            {/* 앱 다운로드 섹션 */}
            <motion.div
              className="mt-8"
              variants={heroTextVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* 앱 로고 및 설명 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/sky-car-logo-v2.png"
                    alt="5프로돌려주는스카이차 앱 로고"
                    width={80}
                    height={80}
                    className="rounded-2xl"
                    unoptimized
                  />
                </div>
                <div className="text-left">
                  <p className="text-white text-lg font-medium mb-1">
                    앱으로 편하게 예약하세요
                  </p>
                  <p className="text-gray-300 text-sm">
                    다운로드로 연결됩니다.
                  </p>
                </div>
              </div>

              {/* 스토어 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Google Play Store 버튼 */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{ 
                    zIndex: 10,
                    position: 'relative',
                    minHeight: '60px'
                  }}
                >
                  {/* Google Play 아이콘 */}
                  <div className="w-10 h-10 flex-shrink-0 relative">
                    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.81,14.54L15.46,12.2L17.81,9.85L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#4285F4"/>
                      <path d="M17.81,8.88L6.05,2.66L14.54,11.15L17.81,8.88Z" fill="#EA4335"/>
                      <path d="M17.81,15.12L14.54,12.85L6.05,21.34L17.81,15.12Z" fill="#34A853"/>
                      <path d="M3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15Z" fill="#FBBC04"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900 whitespace-nowrap">Google Play에서 다운로드</span>
                </a>

                {/* Apple App Store 버튼 */}
                <a
                  href="https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{ 
                    zIndex: 10,
                    position: 'relative',
                    minHeight: '60px'
                  }}
                >
                  {/* Apple 로고 */}
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000000">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.54 5.39 9.26 5.39c1.15 0 2.08.37 3.08.37 1.15 0 2.04-.37 3.24-.37 2.54 0 4.36 1.67 5.18 3.96-4.42 2.04-3.71 6.12.72 7.56zm-3.05-16.9c.58-.67 1.04-1.6.92-2.53-.88.05-1.95.6-2.58 1.35-.57.66-1.07 1.6-.93 2.54.98.08 1.98-.52 2.59-1.36z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900 whitespace-nowrap">App Store에서 다운로드</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* 오른쪽: 핸드폰 앱 웹뷰 팝업 */}
          <motion.div
            className="hidden lg:block flex-shrink-0 relative z-10 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-[320px] h-[640px]">
              {/* 핸드폰 프레임 */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* 노치 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                  
                  {/* 앱 콘텐츠 - 내 지갑 페이지 */}
                  <div className="w-full h-full overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {/* 헤더 */}
                    <header className="flex items-center justify-between bg-white px-5 py-4 sticky top-0 z-10 border-b border-gray-200 pt-12">
                      <button className="flex w-12 h-12 items-center justify-start text-gray-900">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h1 className="text-xl font-extrabold text-gray-900">내 지갑</h1>
                      <button className="flex w-12 h-12 items-center justify-end text-gray-900">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </header>

                    {/* 메인 콘텐츠 */}
                    <main className="flex-1 overflow-y-auto pb-20">
                      {/* 포인트 카드 섹션 */}
                      <section className="px-5 pt-2 pb-6">
                        {/* 포인트 카드 */}
                        <div className="relative w-full overflow-hidden rounded-2xl bg-slate-800 shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                          <div className="absolute right-[-20px] top-[-20px] h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"></div>
                          <div className="relative z-10 p-6 flex flex-col items-center text-center">
                            <p className="text-gray-300 text-lg font-medium mb-1">보유 포인트</p>
                            <h2 className="text-white text-[32px] font-black tracking-tight mb-6">150,000 P</h2>
                            <button className="w-full max-w-[280px] rounded-xl bg-cyan-400 py-3.5 text-gray-900 text-lg font-bold shadow-md hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                              <span>지금 출금하기</span>
                            </button>
                          </div>
                        </div>

                        {/* 포인트 내역 리스트 */}
                        <div className="mt-6 flex flex-col gap-3">
                          <p className="text-lg font-bold text-gray-900 px-1">최근 입출금 내역</p>
                          
                          {/* 내역 아이템 1 */}
                          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm gap-2">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                                <span className="text-xl">%</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-sm font-bold text-gray-900 leading-tight truncate">장비 사용 페이백 (5%)</span>
                                <span className="text-xs text-gray-500 mt-0.5">12.24 14:30</span>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-cyan-400 shrink-0 whitespace-nowrap">+17,500 P</span>
                          </div>

                          {/* 내역 아이템 2 */}
                          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm gap-2">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                                <span className="text-xl">🎉</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-sm font-bold text-gray-900 leading-tight truncate">이벤트 당첨금</span>
                                <span className="text-xs text-gray-500 mt-0.5">12.20 09:00</span>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-cyan-400 shrink-0 whitespace-nowrap">+500 P</span>
                          </div>
                        </div>
                      </section>

                      {/* 구분선 */}
                      <div className="h-3 bg-gray-100"></div>

                      {/* 작업 기록 섹션 */}
                      <section className="px-5 py-6">
                        <div className="flex items-end justify-between mb-5">
                          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">이번 달 작업 기록</h2>
                        </div>

                        {/* 요약 위젯 */}
                        <div className="mb-6 flex items-center justify-between rounded-2xl bg-gray-100 p-5 border border-gray-100">
                          <div>
                            <p className="text-lg text-gray-600 font-medium mb-1">이번 달 완료</p>
                            <p className="text-[28px] font-black text-gray-900 leading-none">총 <span className="text-cyan-400">5</span>건</p>
                          </div>
                          <button className="group flex items-center gap-1 rounded-lg bg-white px-4 py-3 text-base font-bold text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                            달력 보기
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* 작업 리스트 */}
                        <div className="space-y-4">
                          {/* 작업 아이템 1 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.25 (수)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">강남역 외벽 청소</h3>
                            <p className="mt-2 text-base text-gray-500 truncate">메모: 3층 창틀 집중 케어 요청</p>
                          </div>

                          {/* 작업 아이템 2 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.22 (일)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">서초동 빌라 입주 청소</h3>
                            <p className="mt-2 text-base text-gray-500 truncate">특이사항 없음</p>
                          </div>

                          {/* 작업 아이템 3 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.18 (수)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">논현동 사무실 정기 청소</h3>
                          </div>
                        </div>
                      </section>
                    </main>

                    {/* 하단 네비게이션 */}
                    <nav className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-white">
                      <div className="flex h-[72px] items-center justify-around px-2">
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="text-xs font-medium">홈</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-cyan-400">
                          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-xs font-bold">수익</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs font-medium">채팅</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <span className="text-xs font-medium">등록</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-xs font-medium">프로필</span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


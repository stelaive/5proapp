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
            poster="/images/스동8.gif" // 영상 로딩 전 보여줄 이미지
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        */}
        <Image
          src="/images/스동8.gif"
          alt="스카이차 작업 현장"
          fill
          className="object-cover"
          unoptimized
          priority // LCP 개선을 위해 우선 순위 높임
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      <div className="container mx-auto px-4 pr-6">
        <motion.div 
          className="max-w-5xl relative z-10"
          style={{ zIndex: 10 }}
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
            className="flex flex-col sm:flex-row gap-4"
            variants={heroTextVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('core-features')}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{ 
                color: '#ffffff !important',
                zIndex: 10,
                position: 'relative'
              }}
            >
              <span style={{ color: '#ffffff !important', fontWeight: 'bold !important' }}>
                자세히 알아보기
              </span>
            </button>
            <button 
              onClick={handleAppDownload}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ 
                color: '#ffffff !important',
                zIndex: 10,
                position: 'relative'
              }}
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#ffffff !important' }}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              <span style={{ color: '#ffffff !important', fontWeight: 'bold !important' }}>
                앱 다운로드
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


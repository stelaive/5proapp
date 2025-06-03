'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Swiper 관련 import를 클라이언트 사이드에서만 로드
const PlatformSwiper = dynamic(() => import('@/components/PlatformSwiper'), {
  ssr: false
})

// 플랫폼 데이터
export const platforms = [
  {
    name: '네이버 지도',
    icon: '/images/location-marker-green.svg',
    color: '#2DB400',
    description: '국내 최대 검색 포털, 지역 기반 마케팅의 핵심',
    features: ['플레이스 등록', '예약 시스템', '블로그 마케팅']
  },
  {
    name: '구글 맵',
    icon: '/images/location-marker-blue.svg',
    color: '#4285F4',
    description: '글로벌 검색 엔진, SEO 최적화로 장기적 효과',
    features: ['구글 비즈니스', '리뷰 관리', '키워드 광고']
  },
  {
    name: '카카오맵',
    icon: '/images/location-marker-yellow.svg',
    color: '#FEE500',
    description: '모바일 기반 플랫폼, 즉각적인 고객 소통',
    features: ['카카오맵', '채널 관리', '톡비즈 활용']
  }
];

// 전문가 팁 데이터
const expertTips = [
  {
    title: '키워드 선정',
    description: '경쟁이 적은 롱테일 키워드부터 시작하세요',
    icon: '🎯'
  },
  {
    title: '콘텐츠 전략',
    description: '전/후 사진으로 신뢰도를 높이세요',
    icon: '📸'
  },
  {
    title: '리뷰 관리',
    description: '부정적 리뷰에도 친절하게 응대하세요',
    icon: '💬'
  }
];

// FAQ 데이터
const faqs = [
  {
    question: '마케팅 효과는 얼마나 걸리나요?',
    answer: '플랫폼별로 다르지만, 보통 3-6개월 정도의 꾸준한 관리가 필요합니다.'
  },
  {
    question: '비용은 얼마나 들까요?',
    answer: '무료로 시작 가능하며, 성과에 따라 단계적으로 투자를 늘릴 수 있습니다.'
  },
  {
    question: '직접 관리가 어려우면 어떡하나요?',
    answer: '스카이차에서 제공하는 전문 마케팅 대행 서비스를 이용하실 수 있습니다.'
  }
];

export default function Marketing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main>
      <Navigation currentPage="marketing" />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/마케팅섹션.png"
            alt="마케팅 노하우 배경"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-jalnan leading-tight">
              업종별 마케팅 노하우<br />
              <span className="text-3xl md:text-4xl">
                매출 상승의 비밀이 여기 있습니다
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              네이버·구글·카카오 마케팅 완벽 가이드
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg">
              지금 바로 배우기
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            3대 플랫폼 완벽 가이드
          </h2>
          {isMobile ? (
            <PlatformSwiper platforms={platforms} />
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: platform.color }}>
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <ul className="space-y-2 text-left">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2" style={{ color: platform.color }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Expert Tips Section */}
      <section id="tips" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            전문가 팁
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {expertTips.map((tip, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup-cta" className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-jalnan">
            무료 마케팅 가이드 받기
          </h2>
          <p className="text-xl mb-8">
            지금 다운로드하면 5% 캐시백 쿠폰 증정!
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="이메일 주소 입력"
                className="flex-1 px-6 py-3 rounded-full text-black"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                받기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            자주 묻는 질문
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-2">Q. {faq.question}</h3>
                <p className="text-gray-600">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  );
} 
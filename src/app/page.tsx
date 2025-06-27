'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

// 애니메이션 variants 정의
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-100px" }
};

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

const slideInFromRight = {
  initial: { 
    x: 100,
    opacity: 0 
  },
  whileInView: { 
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3
    }
  },
  viewport: { once: true }
};

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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/app/your-app-id', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    }
  };

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
              >
                자세히 알아보기
              </button>
              <button 
                onClick={handleAppDownload}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                앱 다운로드
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 핵심 기능 소개 섹션 */}
      <section id="core-features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-800 font-jalnan">
              사장님, 아직도 여러 곳에 전화 돌리세요?
            </h2>
            <p className="text-xl text-gray-600 mb-16">
              이제 <span className="text-red-500 font-bold">한 번의 클릭</span>으로 모든 것이 해결됩니다!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6">📲</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">앱으로 간편하게</h3>
                <p className="text-lg text-gray-600 mb-4 font-bold">오더 접수</p>
                <p className="text-gray-600">
                  복잡한 전화 통화 없이<br />
                  앱에서 원터치로 신청
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6">🙋‍♂️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">전문가가</h3>
                <p className="text-lg text-red-500 mb-4 font-bold">책임 배차</p>
                <p className="text-gray-600">
                  24시간 콜센터에서<br />
                  최적의 장비를 즉시 배정
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">작업 후</h3>
                <p className="text-lg text-red-500 mb-4 font-bold">자동 리워드</p>
                <p className="text-gray-600">
                  복잡한 절차 없이<br />
                  페이백이 바로 지급
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5% 페이백 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-jalnan">
                  일 다 하면<br />
                  묻고 따불...아니,<br />
                  묻지도 않고 <span className="text-red-500">5%</span> 현금!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  땀 흘려 일하신 소중한 하루,<br />
                  저희가 그 노고에 작은 힘이라도 보태드릴게요.<br />
                  스카이차 작업 끝나면, 이용료의 <span className="text-red-500 font-bold">5%</span>는<br />
                  묻지도 따지지도 않고 사장님 손에 바로 현금으로!
                </p>
                <Link 
                  href="/whyhere"
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all"
                >
                  5% 페이백 자세히 보기
                </Link>
              </motion.div>
              <motion.div
                variants={slideInFromRight}
                initial="initial"
                whileInView="whileInView"
                className="relative w-full h-[400px]"
              >
                <Image
                  src="/images/포인트 확인하기.png"
                  alt="5% 페이백 시스템"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 100만원 추첨 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInFromRight}
                initial="initial"
                whileInView="whileInView"
                className="relative w-full h-[400px] order-2 md:order-1"
              >
                <Image
                  src="/images/100만원추첨기.png"
                  alt="100만원 추첨 이벤트"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-jalnan">
                  매달 터지는<br />
                  <span className="text-red-500">100만원</span>! 이번엔<br />
                  사장님이 주인공?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  스카이/크레인 오더 <span className="text-red-500 font-bold">1건</span>이면 자동 응모!<br />
                  매달 터지는 <span className="text-red-500 font-bold">100만원</span>, 주인공은 바로 당신?
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  참여자가 늘수록 당첨자도 UP! 행운의 확률은 그대로!<br />
                  <span className="text-red-500 font-bold">(500분의 1 약속!🤙)</span>
                </p>
                <p className="text-xl text-gray-800 font-bold mb-8">
                  공정한 기회, 짜릿한 행운! 매달 1일, 기대해도 좋아요!
                </p>
                <Link 
                  href="/million"
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all"
                >
                  100만원 추첨 자세히 보기
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 친구 초대 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-jalnan">
                  좋은 동료에게<br />
                  추천만 했을 뿐인데<br />
                  통장에 <span className="text-red-500">5만원</span> 착!
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  아는 동료분께 저희 스카이차 살짝 추천하고,<br />
                  그 친구 <span className="text-red-500 font-bold">5명</span>이 딱! 한 번씩만 이용하면?<br />
                  사장님 통장엔 현금 <span className="text-red-500 font-bold">5만원</span>이 바로 꽂혀요!<br />
                  <span className="text-red-500 font-bold">(무한반복 가능!💰)</span>
                </p>
                <p className="text-xl text-gray-800 font-bold mb-8">
                  좋은 건 나누고, 현금은 쌓이고!<br />
                  이게 바로 인싸 사장님의 길!
                </p>
                <Link 
                  href="/reward"
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all"
                >
                  친구 초대 자세히 보기
                </Link>
              </motion.div>
              <motion.div
                variants={slideInFromRight}
                initial="initial"
                whileInView="whileInView"
                className="relative w-full h-[400px]"
              >
                <Image
                  src="/images/친구초대이벤트.png"
                  alt="친구 초대 이벤트"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 첫 번째 후기 이벤트 섹션 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <div className="text-6xl mb-8">🎁</div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 font-jalnan">
              사장님, <span className="text-red-500">첫 번째 후기</span>의 주인공이 되어주세요!
            </h2>
            
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-8">
              <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <span className="text-red-500 font-bold">"5프로스카이"</span>가 드디어 6월, 사장님들을 찾아갑니다!<br />
                첫 출시와 함께, 가장 먼저 리뷰를 남겨주실 특별한 사장님을 찾고 있어요.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                솔직한 후기 하나가 다른 동료 사장님들에게는<br />
                <span className="text-red-500 font-bold">소중한 나침반</span>이 되어줄 거예요!
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-xl font-bold text-red-500 mb-2">명예의 전당 👑</p>
                <p className="text-gray-700">
                  첫 후기를 남겨주신 사장님은 저희 서비스의 역사에<br />
                  <span className="text-red-500 font-bold">'최초의 개척자'</span>로 기록되며,<br />
                  커뮤니티의 <span className="text-red-500 font-bold">'명예의 전당'</span>에<br />
                  가장 먼저 이름을 올리게 됩니다.
                </p>
              </div>
            </div>
            
            <button 
              onClick={handleAppDownload}
              className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all"
            >
              첫 번째 후기 주인공 되기
            </button>
          </motion.div>
        </div>
      </section>

      {/* 다운로드 가이드 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 font-jalnan">
              ✨ 여러분, 주목! 더 쉬운 방법을 가져왔어요! ✨
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              혹시 아직도 다운로드가 살짝~ 어렵게 느껴지시나요? 🤔<br />
              걱정 마세요! 그런 여러분을 위해 저희가 특별히 준비한 선물이 있답니다! 🎁
            </p>
            <p className="text-xl text-red-500 font-bold mb-8">
              🎬 짜잔! 유튜브에 다운로드 가이드 영상을 올렸어요!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              이제 글 대신 영상으로! 🤩 화면을 보면서 천천히 따라 하면 누구나 쉽게 성공!<br />
              마치 게임 튜토리얼처럼 재미있게 만들었으니, 지금 바로 확인해보세요! 😉
            </p>
            <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto mb-8">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/5dUt8JcFXF8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 font-jalnan">
              어? 영상을 봐도 모르겠다구요? 갸우뚱❓
            </h2>
            <p className="text-xl font-bold text-red-500 mb-4">
              괜찮아요! 그럴 땐 주저 말고 <span className="text-3xl">1877-9001</span>로 바로 전화 주세요! 📞
            </p>
            <p className="text-lg mb-8">
              친절한 저희가 처음부터 끝까지! 시원~하게 도와드릴게요. 🤗<br />
              여러분의 즐거운 앱 생활, 저희가 책임지고 응원합니다! 파이팅! 💪
            </p>
            <a 
              href="tel:18779001"
              className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all"
            >
              지금 바로 전화하기
            </a>
          </motion.div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
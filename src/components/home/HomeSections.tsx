'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/icon'

// 애니메이션 variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-100px" }
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

export default function HomeSections() {
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
    <>
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
            
            {/* 모바일: 가로 스와이프 슬라이더 / 데스크톱(md+): 3열 그리드 */}
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
              <motion.div 
                className="snap-center shrink-0 w-[78%] sm:w-[45%] md:w-auto bg-white rounded-xl p-6 md:p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6"><Icon name="Smartphone" size={56} /></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">앱으로 간편하게</h3>
                <p className="text-lg text-gray-600 mb-4 font-bold">오더 접수</p>
                <p className="text-gray-600">
                  복잡한 전화 통화 없이<br />
                  앱에서 원터치로 신청
                </p>
              </motion.div>

              <motion.div 
                className="snap-center shrink-0 w-[78%] sm:w-[45%] md:w-auto bg-white rounded-xl p-6 md:p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6"><Icon name="Hand" size={56} /></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">전문가가</h3>
                <p className="text-lg text-red-500 mb-4 font-bold">책임 배차</p>
                <p className="text-gray-600">
                  24시간 콜센터에서<br />
                  최적의 장비를 즉시 배정
                </p>
              </motion.div>

              <motion.div 
                className="snap-center shrink-0 w-[78%] sm:w-[45%] md:w-auto bg-white rounded-xl p-6 md:p-8 shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-6"><Icon name="Wallet" size={56} /></div>
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
                  className="inline-block text-white px-8 py-4 rounded-full font-bold transition-all"
                  style={{ backgroundColor: '#F97316' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#EA580C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F97316';
                  }}
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
                  src="/images/app-check-points.png"
                  alt="5% 페이백 시스템"
                  fill
                  className="object-contain"
                />
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
                  className="inline-block text-white px-8 py-4 rounded-full font-bold transition-all"
                  style={{ backgroundColor: '#F97316' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#EA580C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F97316';
                  }}
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
                  src="/images/friend-invite-event-banner.png"
                  alt="친구 초대 이벤트"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 다운로드 가이드 섹션 */}
      <section className="py-20 bg-white" data-hide-floating>
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
                src="https://www.youtube.com/embed/qf1nEUhWFbc"
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
            <h2 className="text-3xl font-bold mb-8 font-jalnan text-white">
              어? 영상을 봐도 모르겠다구요? 갸우뚱❓
            </h2>
            <p className="text-xl font-bold text-red-500 mb-4">
              괜찮아요! 그럴 땐 주저 말고 <span className="text-3xl text-yellow-400">1877-3924</span>로 바로 전화 주세요! 📞
            </p>
            <p className="text-lg mb-8 text-white">
              친절한 저희가 처음부터 끝까지! 시원~하게 도와드릴게요. 🤗<br />
              여러분의 즐거운 앱 생활, 저희가 책임지고 응원합니다! 파이팅! 💪
            </p>
            <a 
              href="tel:18773924"
              className="inline-block text-white px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all"
              style={{ 
                backgroundColor: '#F97316',
                color: '#ffffff !important',
                textDecoration: 'none !important',
                display: 'inline-block !important',
                zIndex: 10,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EA580C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F97316';
              }}
            >
              <span style={{ color: '#ffffff !important', fontWeight: 'bold !important' }}>
                지금 바로 전화하기
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}


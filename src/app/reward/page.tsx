'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// Swiper 커스텀 스타일
const swiperStyles = `
  .step-swiper .swiper-pagination {
    position: static !important;
    margin-top: 2rem;
  }
  .step-swiper .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    margin: 0 6px !important;
  }
  .reward-carousel .swiper-pagination {
    position: static !important;
    margin-top: 1.5rem;
  }
  .reward-carousel .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    margin: 0 4px !important;
    opacity: 0.5 !important;
  }
  .reward-carousel .swiper-pagination-bullet-active {
    opacity: 1 !important;
  }
`

// 애니메이션 variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6 }
}

const bounceIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8
    }
  }
}

const slideInLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
}

const slideInRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
}

export default function FriendInvitePage() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showStoreModal, setShowStoreModal] = useState(false)
  const [currentInviteCount, setCurrentInviteCount] = useState(0) // 현재 초대 수

  // 5명 단위로 무제한 보상 계층 생성 (50명까지 표시)
  const rewardTiers = Array.from({ length: 10 }, (_, i) => {
    const friendCount = 5 * (i + 1)
    const reward = friendCount * 10000 // 5명 = 5만원, 10명 = 10만원...
    return {
      friendCount,
      reward,
      isActive: currentInviteCount >= friendCount
    }
  })

  // 보너스 애니메이션 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // FAQ 토글 함수
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // FAQ 데이터
  const faqData = [
    {
      question: "친구 초대는 몇 명까지 가능한가요?",
      answer: "제한이 없습니다! 5명 달성 시마다 5만원이 지급되며, 무한 반복으로 계속 보너스를 받을 수 있어요."
    },
    {
      question: "친구가 앱을 설치만 하면 되나요?",
      answer: "아닙니다. 친구가 앱을 설치하고 첫 번째 작업을 완료해야 인정됩니다. 이는 실제 사용자만 인정하기 위함입니다."
    },
    {
      question: "보너스는 언제 지급되나요?",
      answer: "친구 5명이 모두 작업을 완료하는 즉시 자동으로 지급됩니다. 별도 신청 없이 등록된 계좌로 입금됩니다."
    },
    {
      question: "이미 스카이차를 사용하는 친구도 초대할 수 있나요?",
      answer: "기존 사용자는 초대 대상이 아닙니다. 새로 가입하는 친구만 초대 인정됩니다."
    },
    {
      question: "초대 코드는 어디서 확인하나요?",
      answer: "앱 설치 후 '친구 초대' 메뉴에서 내 전용 초대 코드를 확인할 수 있으며, 카카오톡으로 바로 공유 가능합니다."
    },
    {
      question: "혹시 초대 이벤트가 중단될 수 있나요?",
      answer: "현재 진행 중인 이벤트이며, 사전 공지 없이 중단되지 않습니다. 지금이 참여하기 가장 좋은 기회입니다!"
    }
  ]

  const downloadApp = () => {
    setShowStoreModal(true)
  }

  const openPlayStore = () => {
    window.open('https://play.google.com/store', '_blank')
    setShowStoreModal(false)
  }

  const openAppStore = () => {
    window.open('https://apps.apple.com', '_blank')
    setShowStoreModal(false)
  }

  const shareMessage = () => {
    const message = `💥 친구 부르면 현금 5만원! 💥

사장님! 5%돌려드리는스카이차 써보세요!
친구 5명이 각각 1건씩만 작업하면 
사장님 통장에 현금 5만원 입금! 💰

지금 바로 앱 다운로드하고 시작하세요! 👇
https://play.google.com/store`
    
    if (navigator.share) {
      navigator.share({
        title: '💥 친구 부르면 현금 5만원!',
        text: message
      })
    } else {
      navigator.clipboard.writeText(message)
      alert('초대 메시지가 복사되었습니다!')
    }
  }

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: swiperStyles }} />
      <Navigation currentPage="reward" />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/친구초대히어로섹션.gif"
            alt="친구초대 히어로 배경"
            fill
            className="object-cover"
            priority
          />
          {/* 가독성을 위한 강화된 오버레이 */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* 메인 헤드라인 - 크기 축소 */}
            <motion.h1 
              className="text-2xl md:text-5xl font-bold mb-8 leading-tight text-white font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              💥 친구 5명초대 = 현금 5만원! 💥
            </motion.h1>
            
            {/* 서브카피 1 */}
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-lg md:text-2xl font-bold text-yellow-200 leading-relaxed"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                사장님을 위한 역대급 보너스 찬스!
              </motion.p>
            </motion.div>
            
            {/* 설명 문구 */}
            <motion.p 
              className="text-base md:text-xl mb-8 text-white leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              사장님! 주변에 일 잘~하는 동료분들 많으시죠?<br />
              이제 그 좋은 인맥으로 <span className="text-yellow-300 font-bold">대박 보너스</span>까지 챙겨가세요!
            </motion.p>

            {/* 앱 다운로드 유도 박스 */}
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-lg md:text-xl font-bold mb-4"
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 지금 바로 시작하세요!
              </motion.h3>
              <div className="text-center space-y-3">
                <motion.div 
                  className="text-base md:text-lg font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  앱 설치 후
                </motion.div>
                <motion.div 
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  친구 초대 메뉴에서 <span className="text-yellow-300 font-bold">내 초대 코드</span> 확인!
                </motion.div>
                <motion.p 
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  친구 5명 초대 완료 시 <span className="text-yellow-300 font-bold">현금 5만원 보장!</span>
                </motion.p>
              </div>
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                onClick={downloadApp}
                className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 앱 다운로드하고 시작하기
              </motion.button>
              <motion.button 
                onClick={shareMessage}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📤 친구에게 공유하기
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 업종 예시 스트립 섹션 */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-center text-xl md:text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🏗️ 창호·도장·전기·금속·용접·방수… 외부 고소작업 사장님 누구나 환영!
          </motion.h3>
          
          {/* 업종 아이콘 슬라이더 */}
          <motion.div 
            className="flex items-center justify-center space-x-8 md:space-x-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">🏠</div>
              <p className="text-sm font-medium">창호</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">🎨</div>
              <p className="text-sm font-medium">도장</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">⚡</div>
              <p className="text-sm font-medium">전기</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">🔧</div>
              <p className="text-sm font-medium">금속</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">🔥</div>
              <p className="text-sm font-medium">용접</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl md:text-5xl mb-2">💧</div>
              <p className="text-sm font-medium">방수</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 30초 사용 방법 영상 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              🎬 30초로 보는 사용법
            </motion.h2>
            <motion.div 
              className="aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* 실제 mp4 영상이 들어갈 자리 */}
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-xl font-bold">30초 사용법 영상</p>
                  <p className="text-sm opacity-80 mt-2">설치 → 코드 공유 → 보상 수령</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Step 슬라이더 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-600 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              🚀 3단계로 완성!
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-center mb-12 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              누구나 쉽게 따라할 수 있는 간단한 3단계
            </motion.p>

            {/* 진행률 바 */}
            <motion.div 
              className="max-w-md mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 font-bold">
                <span>앱 설치</span>
                <span>친구 초대</span>
                <span>보상 수령</span>
              </div>
              <div className="text-center mt-2">
                <span className="text-red-600 font-bold">친구 0 / 5명 완료</span>
              </div>
            </motion.div>
            
            {/* 3-Step 슬라이더 */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-red-500',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600'
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="step-swiper"
              >
                {/* 1단계: 앱 설치 */}
                <SwiperSlide>
                  <motion.div 
                    className="bg-gradient-to-r from-red-50 to-orange-50 p-8 md:p-12 rounded-2xl border-2 border-red-200 text-center"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      1
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-600 leading-tight">앱 설치하고 회원가입!</h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      5%돌려드리는스카이차 앱을 설치하고 회원가입을 완료하세요. 앱 내 '친구 초대' 메뉴에서 내 전용 초대 코드를 확인할 수 있어요!
                    </p>
                  </motion.div>
                </SwiperSlide>

                {/* 2단계: 초대 코드 공유 */}
                <SwiperSlide>
                  <motion.div 
                    className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 md:p-12 rounded-2xl border-2 border-orange-200 text-center"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      2
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600 leading-tight">초대 코드로 친구들 초대!</h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      아직 저희 서비스를 이용 안 해본 동료 사장님들께 내 초대 코드를 공유하세요. 친구가 앱 설치 후 일감 1건만 완료하면 OK!
                    </p>
                  </motion.div>
                </SwiperSlide>

                {/* 3단계: 친구 5명 달성 시 현금 5만원 */}
                <SwiperSlide>
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-50 to-green-50 p-8 md:p-12 rounded-2xl border-2 border-yellow-200 text-center"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      3
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-600 leading-tight">친구 5명 달성 시 현금 5만원!</h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      친구 5명이 각각 1건씩 작업을 완료하면 사장님 통장으로 현금 5만원이 바로 입금됩니다!
                    </p>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기능 하이라이트 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              📱 앱에서 이런 기능들을 확인하세요!
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-center mb-16 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              실제 앱 화면을 미리 확인해보세요
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 카카오톡 링크 공유 화면 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                    {/* 실제 GIF가 들어갈 자리 */}
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">💬</div>
                      <p className="text-sm font-bold">카카오톡 공유 GIF</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">카카오톡으로 쉽게 공유</h3>
                  <p className="text-gray-600 leading-relaxed">
                    내 초대 코드를 카카오톡으로 친구들에게 간편하게 공유할 수 있어요
                  </p>
                </div>
              </motion.div>

              {/* 내 초대 현황 대시보드 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                    {/* 실제 GIF가 들어갈 자리 */}
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-sm font-bold">대시보드 GIF</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">실시간 초대 현황 확인</h3>
                  <p className="text-gray-600 leading-relaxed">
                    몇 명이 초대되었는지, 몇 명이 작업을 완료했는지 실시간으로 확인
                  </p>
                </div>
              </motion.div>

              {/* 출금 신청 & 입금 확인 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                    {/* 실제 GIF가 들어갈 자리 */}
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">💳</div>
                      <p className="text-sm font-bold">출금 신청 GIF</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">간편한 출금 신청</h3>
                  <p className="text-gray-600 leading-relaxed">
                    조건 달성 시 클릭 한 번으로 출금 신청하고 빠른 입금 확인
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 2 - 무한 반복 지급 */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-red-600 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              💰 5명마다 5만원, 계속 반복! 💰
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              인맥이 수익이 되는 놀라운 시스템
            </motion.p>

            {/* 핵심 포인트 3개 카드 */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👥
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-red-600">친구 5명 초대</h3>
                <motion.p 
                  className="text-3xl font-bold text-green-500 mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ₩50,000
                </motion.p>
                <p className="text-sm text-gray-600">첫 번째 보너스 달성!</p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-200"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🔄
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">5명씩 계속</h3>
                <motion.p 
                  className="text-3xl font-bold text-blue-500 mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  +₩50,000
                </motion.p>
                <p className="text-sm text-gray-600">매번 5명마다 지급!</p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🤝
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-600">친구도 WIN!</h3>
                <motion.p 
                  className="text-lg font-bold text-blue-600 mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  평생 5% 돌려받기
                </motion.p>
                <p className="text-sm text-gray-600">#좋은건_함께 #이건못참지</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-10 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📊 내 수익 시뮬레이션
              </motion.h3>
              
              <motion.p 
                className="text-lg text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                친구 수에 따른 예상 수익을 확인해보세요!
              </motion.p>
              
              {/* 현재 초대 수 표시 */}
              <motion.div 
                className="text-center mb-8 bg-white/10 p-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm text-white/80 mb-1">현재 나의 초대 현황</p>
                <p className="text-2xl font-bold text-yellow-300">
                  {currentInviteCount}명 초대 완료
                </p>
              </motion.div>

              {/* 보상 캐러셀 */}
              <motion.div 
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-white/50',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={false}
                  className="reward-carousel pb-12"
                >
                  {rewardTiers.map((tier, index) => {
                    const isCurrentTarget = currentInviteCount < tier.friendCount && 
                                          (index === 0 || currentInviteCount >= rewardTiers[index - 1].friendCount)
                    
                    return (
                      <SwiperSlide key={tier.friendCount}>
                        <motion.div
                          role="listitem"
                          aria-label={`${tier.friendCount}명 달성 시 ${(tier.reward / 10000).toLocaleString()}만 원`}
                          className={`
                            w-full p-6 rounded-xl text-center transition-all duration-300 h-32 flex flex-col justify-center
                            ${tier.isActive 
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg' 
                              : isCurrentTarget
                              ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg border-2 border-white'
                              : 'bg-white/20 text-white hover:bg-white/30'
                            }
                          `}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {tier.isActive && (
                            <div className="text-xl mb-1">✅</div>
                          )}
                          {isCurrentTarget && (
                            <div className="text-xl mb-1">🎯</div>
                          )}
                          <p className="text-xl font-bold mb-1">{tier.friendCount}명</p>
                          <p className="text-sm font-medium">
                            ₩{(tier.reward / 10000).toLocaleString()}만원
                          </p>
                          {tier.isActive && (
                            <p className="text-xs mt-1 opacity-80">달성!</p>
                          )}
                          {isCurrentTarget && (
                            <p className="text-xs mt-1 opacity-90">목표</p>
                          )}
                        </motion.div>
                      </SwiperSlide>
                    )
                  })}
                  
                  {/* 무한 표시 카드 */}
                  <SwiperSlide>
                    <motion.div
                      className="w-full p-6 rounded-xl text-center bg-gradient-to-br from-purple-500 to-pink-500 text-white h-32 flex flex-col justify-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 }}
                    >
                      <div className="text-3xl mb-2">∞</div>
                      <p className="text-sm font-bold">무제한</p>
                      <p className="text-xs mt-1">계속 증가!</p>
                    </motion.div>
                  </SwiperSlide>
                </Swiper>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 3 - 앱에서 확인 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 font-jalnan">
              📱 앱에서 모든 기능을 확인하세요!
            </h2>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 shadow-lg">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">앱 설치 후 이용 가능한 기능들</h3>
                <div className="bg-white rounded-xl p-8 border-2 border-red-200">
                  <div className="grid md:grid-cols-2 gap-10 text-left">
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl mb-6 text-red-600">✅ 친구 초대 기능</h4>
                      <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                        <li>• 내 전용 초대 코드 발급</li>
                        <li>• 실시간 초대 현황 확인</li>
                        <li>• 카카오톡, SNS 간편 공유</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl mb-6 text-orange-600">💰 보너스 관리</h4>
                      <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                        <li>• 친구별 참여 상태 확인</li>
                        <li>• 보너스 지급 내역 조회</li>
                        <li>• 누적 수익 실시간 확인</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">💬</div>
                  <h4 className="font-bold mb-4 text-xl">카카오톡 공유</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">앱에서 바로 카카오톡으로 초대</p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">📊</div>
                  <h4 className="font-bold mb-4 text-xl">실시간 현황</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">초대 진행상황 실시간 확인</p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">💳</div>
                  <h4 className="font-bold mb-4 text-xl">즉시 지급</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">조건 달성 시 자동 입금</p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={downloadApp}
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  📱 지금 바로 앱 설치하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 4 - 성공 포인트 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 font-jalnan">
              ✨ 성공 포인트
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-600">😄 동료들에게는</h3>
                <ul className="space-y-6 text-lg md:text-xl">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">믿음직한 5%돌려드리는스카이차 소개</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">매달 100만원 추첨 기회</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">"고맙다"는 말까지</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-600">💰 사장님께는</h3>
                <ul className="space-y-6 text-lg md:text-xl">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">짭짤한 현금 보너스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">무한 반복 지급</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">인맥을 현금으로 변환</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ❓ 자주 묻는 질문
            </motion.h2>
            <motion.p 
              className="text-lg text-center mb-12 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              궁금한 점들을 미리 확인해보세요
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-6 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-bold text-lg text-gray-800">{faq.question}</span>
                    <motion.span 
                      className="text-2xl text-red-500"
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 최종 CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 font-jalnan leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            지금 설치하고 바로 시작하세요!
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            친구들과 함께 돈 벌기, 지금이 가장 좋은 기회입니다!
          </motion.p>
          <motion.button 
            onClick={downloadApp}
            className="bg-white text-red-600 px-16 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📱 앱 다운로드하기
          </motion.button>
        </div>
      </section>

      {/* 스토어 선택 모달 */}
      {showStoreModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">앱 다운로드</h3>
            <p className="text-center mb-8 text-gray-600">사용하시는 기기에 맞는 스토어를 선택해주세요</p>
            
            <div className="space-y-4">
              <button
                onClick={openPlayStore}
                className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-3"
              >
                <span>🤖</span>
                <span>Google Play 스토어</span>
              </button>
              
              <button
                onClick={openAppStore}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3"
              >
                <span>🍎</span>
                <span>App Store</span>
              </button>
            </div>
            
            <button
              onClick={() => setShowStoreModal(false)}
              className="w-full mt-6 text-gray-500 py-3 font-medium hover:text-gray-700 transition-colors duration-200"
            >
              닫기
            </button>
          </motion.div>
        </div>
      )}

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
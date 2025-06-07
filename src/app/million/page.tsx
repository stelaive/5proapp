'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'

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

export default function MillionPage() {
  const [currentParticipants, setCurrentParticipants] = useState(1247)
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 34,
    seconds: 22
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/images/어플화면_390x844.png",
      title: "1. 앱 홈",
      description: "앱을 설치하고 회원가입",
      alt: "앱 홈 화면"
    },
    {
      image: "/images/직통전화표시.PNG",
      title: "2. 오더 넘기기", 
      description: "스카이차 작업 1건 완료",
      alt: "오더 넘기기"
    },
    {
      image: "/images/오더접수확인하기.PNG",
      title: "3. 추첨표 확인",
      description: "자동으로 추첨 대상자 등록",
      alt: "추첨표"
    },
    {
      image: "/images/당첨 확인.PNG",
      title: "4. 당첨 알림",
      description: "매월 1일 당첨자 발표",
      alt: "당첨 알림"
    }
  ]

  // 실시간 참여자 수 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParticipants(prev => prev + Math.floor(Math.random() * 3))
    }, 30000) // 30초마다 증가

    return () => clearInterval(interval)
  }, [])

  // 카운트다운 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 슬라이더 기능들
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    snapToSlide()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    snapToSlide()
  }

  const snapToSlide = () => {
    if (!sliderRef.current) return
    const slideWidth = 320 + 24 // w-80 (320px) + gap (24px)
    const scrollPosition = sliderRef.current.scrollLeft
    const newSlide = Math.round(scrollPosition / slideWidth)
    setCurrentSlide(Math.max(0, Math.min(newSlide, slides.length - 1)))
    sliderRef.current.scrollTo({
      left: newSlide * slideWidth,
      behavior: 'smooth'
    })
  }

  const goToSlide = (index: number) => {
    if (!sliderRef.current) return
    const slideWidth = 320 + 24
    setCurrentSlide(index)
    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    })
  }

  const nextSlide = () => {
    const next = Math.min(currentSlide + 1, slides.length - 1)
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = Math.max(currentSlide - 1, 0)
    goToSlide(prev)
  }

  const getWinnerCount = (participants: number) => {
    if (participants >= 300 && participants <= 500) return 1
    if (participants >= 501 && participants <= 1000) return 2
    if (participants >= 1001 && participants <= 1500) return 3
    if (participants >= 1501 && participants <= 2000) return 4
    return Math.max(1, Math.floor(participants / 500))
  }

  const currentWinners = getWinnerCount(currentParticipants)

  return (
    <main>
      <Navigation currentPage="million" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/달력에서_D_Day_타이머로.gif"
            alt="배경 이미지"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white font-jalnan"
                variants={fadeInUp}
              >
                1일마다 100만원,<br />
                5%는 기본! 🎰
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-200"
                variants={fadeInUp}
              >
                오더 1건만 넘기면 500명 중 1명 확률 그대로<br />
                매달 1일, 행운의 주인공이 되어보세요!
              </motion.p>
              
              {/* D-Day 카운트다운 */}
              <motion.div 
                className="bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-xl mb-8"
                variants={bounceIn}
              >
                <h3 className="text-white text-xl font-bold mb-4">다음 추첨까지</h3>
                <motion.div 
                  className="grid grid-cols-4 gap-4 text-center"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm">일</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm">시간</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm">분</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm">초</div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.button 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎰 지금 바로 참여하기
              </motion.button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 text-center">
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📱
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">스마트폰 목업</h3>
                <p className="text-gray-300">
                  앱 설치 후 바로 시작!<br />
                  간단한 작업 1건으로 100만원 도전
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 1 - 3가지 혜택 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-orange-600">
              앱으로 받을 수 있는 3가지 혜택
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 카드 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white">💰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    오더 완료 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">5%</span> 캐시백
                  </h3>
                  <p className="text-gray-600">
                    작업 완료 즉시<br />
                    자동으로 5% 페이백
                  </p>
                </div>
              </div>

              {/* 카드 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-sky-orange-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white">🎰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    매달 1일 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">100만원</span> 추첨
                  </h3>
                  <p className="text-gray-600">
                    500명 중 1명 확률<br />
                    매월 행운의 기회
                  </p>
                </div>
              </div>

              {/* 카드 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white">👥</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    친구 5명 초대 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">5만원</span> 보너스
                  </h3>
                  <p className="text-gray-600">
                    좋은 건 나누고<br />
                    현금은 쌓이고
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 2 - 100만원 이벤트 규칙 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              🎰 이벤트 규칙
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-16 text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              참여자가 늘수록 당첨자도 늘어나요! 하지만 당첨 확률은 언제나 동일합니다.
            </motion.p>

            {/* 계단형 인포그래픽 */}
            <motion.div 
              className="bg-white rounded-2xl p-10 shadow-lg mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`p-8 rounded-xl text-center transition-all duration-500 ${
                    currentParticipants >= 300 ? 'bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse' : 'bg-gray-100'
                  }`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg mb-3 font-semibold">300~500명</div>
                  <div className="text-3xl font-bold mb-2">1명</div>
                  {currentParticipants >= 300 && currentParticipants <= 500 && (
                    <motion.div 
                      className="text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      현재 단계 ✨
                    </motion.div>
                  )}
                </motion.div>
                <motion.div 
                  className={`p-8 rounded-xl text-center transition-all duration-500 ${
                    currentParticipants >= 501 && currentParticipants <= 1000 ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white animate-pulse' : 
                    currentParticipants > 1000 ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-gray-100'
                  }`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg mb-3 font-semibold">501~1000명</div>
                  <div className="text-3xl font-bold mb-2">2명</div>
                  {currentParticipants >= 501 && currentParticipants <= 1000 && (
                    <motion.div 
                      className="text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      현재 단계 ✨
                    </motion.div>
                  )}
                </motion.div>
                <motion.div 
                  className={`p-8 rounded-xl text-center transition-all duration-500 ${
                    currentParticipants >= 1001 && currentParticipants <= 1500 ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white animate-pulse' :
                    currentParticipants > 1500 ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-gray-100'
                  }`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg mb-3 font-semibold">1001~1500명</div>
                  <div className="text-3xl font-bold mb-2">3명</div>
                  {currentParticipants >= 1001 && currentParticipants <= 1500 && (
                    <motion.div 
                      className="text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      현재 단계 ✨
                    </motion.div>
                  )}
                </motion.div>
                <motion.div 
                  className={`p-8 rounded-xl text-center transition-all duration-500 ${
                    currentParticipants >= 1501 ? 'bg-gradient-to-r from-orange-400 to-red-600 text-white animate-pulse' : 'bg-gray-100'
                  }`}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg mb-3 font-semibold">1501명+</div>
                  <div className="text-3xl font-bold mb-2">4명+</div>
                  {currentParticipants >= 1501 && (
                    <motion.div 
                      className="text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      현재 단계 ✨
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* 현재 참여자 수 */}
            <motion.div 
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                현재 참여자 현황
              </motion.h3>
              <motion.div 
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.4
                }}
              >
                {currentParticipants.toLocaleString()}명
              </motion.div>
              <motion.div 
                className="text-2xl mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                이번 달 당첨자: {currentWinners}명
              </motion.div>
              <motion.div 
                className="w-full bg-white bg-opacity-30 rounded-full h-6 mb-4"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div 
                  className="bg-white h-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min((currentParticipants / 2000) * 100, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                ></motion.div>
              </motion.div>
              <motion.p 
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                참여자가 늘수록 당첨자도 증가!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 3 - 앱 스크린샷 & 사용 흐름 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              📱 앱 사용 흐름
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-16 text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              간단한 4단계로 100만원 추첨에 참여하세요
            </motion.p>

            {/* 스와이프 슬라이더 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* 슬라이더 컨테이너 */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  ref={sliderRef}
                  className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    scrollSnapType: 'x mandatory'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {slides.map((slide, index) => (
                    <motion.div 
                      key={index}
                      className="flex-shrink-0 w-80 text-center"
                      style={{ scrollSnapAlign: 'start' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <motion.div 
                        className="bg-gray-100 rounded-2xl p-8 h-[450px] flex items-center justify-center mb-4 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                          <Image
                            src={slide.image}
                            alt={slide.alt}
                          width={280}
                          height={400}
                          className="rounded-xl shadow-lg object-contain"
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{slide.title}</h3>
                      <p className="text-gray-600">{slide.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 화살표 네비게이션 */}
              <motion.button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                  currentSlide === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:scale-110'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: currentSlide === 0 ? 0.5 : 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
                whileTap={{ scale: currentSlide === 0 ? 1 : 0.9 }}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                  currentSlide === slides.length - 1 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:scale-110'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: currentSlide === slides.length - 1 ? 0.5 : 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: currentSlide === slides.length - 1 ? 1 : 1.1 }}
                whileTap={{ scale: currentSlide === slides.length - 1 ? 1 : 0.9 }}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* 인디케이터 도트 */}
              <motion.div 
                className="flex justify-center space-x-2 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 4 - FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-orange-600">
              자주 묻는 질문
            </h2>

            <div className="space-y-4">
              <FAQItem 
                question="100만원 당첨 시 세금은 어떻게 되나요?"
                answer="당첨금액에서 소득세 22%가 자동으로 원천징수되어 실수령액은 약 78만원입니다. 연말정산 시 추가 정산이 가능합니다."
              />
              <FAQItem 
                question="당첨금은 언제 지급되나요?"
                answer="매월 1일 추첨 후 당첨자에게 개별 연락드리며, 본인 확인 절차 완료 후 3-5영업일 내에 등록된 계좌로 입금됩니다."
              />
              <FAQItem 
                question="한 달에 여러 번 오더해도 추첨 기회는 1번인가요?"
                answer="네, 맞습니다. 한 달에 몇 번을 이용하셔도 추첨 기회는 1번입니다. 대신 친구 추천으로 추가 기회를 얻을 수 있어요!"
              />
              <FAQItem 
                question="친구 추천은 어떻게 하나요?"
                answer="앱 내 '친구 초대' 메뉴에서 추천 코드를 공유하시면 됩니다. 친구가 앱 설치 후 첫 오더 완료 시 둘 다 혜택을 받아요!"
              />
              <FAQItem 
                question="5% 캐시백은 언제 받을 수 있나요?"
                answer="작업 완료 즉시 앱 내 포인트로 적립되며, 포인트는 현금으로 출금하거나 다음 이용료에서 차감 가능합니다."
              />
              <FAQItem 
                question="추첨은 정말 공정하게 이루어지나요?"
                answer="네, 매달 1일 오후 2시에 공개적으로 진행되며, 추첨 과정은 앱과 공식 SNS를 통해 실시간으로 공개됩니다."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 콜아웃 배너 */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 5% + 100만원 도전!
          </h2>
          <p className="text-xl mb-8">
            매일 미루면 기회도 미뤄져요. 오늘 시작하세요!
          </p>
          <button className="bg-white text-red-500 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            앱 다운로드
          </button>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
}

// FAQ 아이템 컴포넌트
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
} 
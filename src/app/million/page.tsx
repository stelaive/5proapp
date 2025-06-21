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
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // 타이머 계산 함수
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-08-01T20:00:00+09:00'); // 한국 시간 2025년 8월 1일 오후 8시
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      setIsEventStarted(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds)
    };
  };
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
    // 컴포넌트가 마운트되자마자 초기 시간 설정
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
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
    if (!sliderRef.current) return;
    // 첫 번째 슬라이드 요소의 실제 너비를 가져옵니다
    const slideWidth = sliderRef.current.children[0]?.clientWidth || 320;
    const gap = 24; // Tailwind CSS space-x-6 -> 1.5rem -> 24px
    const totalSlideWidth = slideWidth + gap;

    const scrollPosition = sliderRef.current.scrollLeft;
    // 가장 가까운 슬라이드 인덱스를 계산합니다
    const newSlideIndex = Math.round(scrollPosition / totalSlideWidth);
    
    // 계산된 인덱스로 슬라이드를 이동시킵니다
    goToSlide(newSlideIndex);
  }

  const goToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.children[0]?.clientWidth || 320;
    const gap = 24;
    const totalSlideWidth = slideWidth + gap;
    
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: index * totalSlideWidth,
      behavior: 'smooth'
    });
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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white font-jalnan"
                variants={fadeInUp}
              >
                1일마다 100만원,<br />
                5%는 기본! 🎰
              </motion.h1>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6"
                variants={fadeInUp}
              >
                <p className="text-xl md:text-2xl text-yellow-300 font-bold">
                  ✨ 업계 No.1 스카이차 플랫폼이 사장님들께 드리는 역대급 혜택!
                </p>
              </motion.div>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 leading-relaxed"
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
                <h3 className="text-white text-xl font-bold mb-4">8월 1일 첫 추첨까지</h3>
                              {!isEventStarted ? (
                <motion.div 
                  className="grid grid-cols-4 gap-4 text-center"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-sm">일</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm">시간</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm">분</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white bg-opacity-20 rounded-lg p-3"
                    variants={bounceIn}
                  >
                    <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm">초</div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-6">D-DAY!</h3>
                  <motion.a
                    href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🎥 지금 바로 추첨생방송 보러가기
                  </motion.a>
                </motion.div>
              )}
              </motion.div>

              <div className="flex justify-center">
                <motion.button 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎰 지금 바로 참여하기
                </motion.button>
              </div>
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

      {/* 기대감 섹션 */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                🌟 첫 주인공의 기회, 바로 당신일 수 있습니다!
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-4">💫</div>
                  <h3 className="text-xl font-bold mb-2">매달 찾아오는 새로운 기회</h3>
                  <p>하루하루가 당신의 행운의 순간이 될 수 있습니다</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">단 1건의 오더로</h3>
                  <p>복잡한 조건 없이, 오더 한 건이면 바로 참여 완료!</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-4">🎊</div>
                  <h3 className="text-xl font-bold mb-2">100만원의 행운</h3>
                  <p>당첨되는 순간, 당신의 일상이 특별해집니다</p>
                </div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎰 지금 바로 참여하기
              </motion.button>
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

      {/* 공정성 약속 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">
                  🔒 공정한 추첨을 약속합니다
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  매달 1일 오후 8시, 유튜브 생방송을 통해<br />
                  모든 추첨 과정을 실시간으로 공개합니다.
                </p>
                <div className="mt-8">
                  <a
                    href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    <span>유튜브 채널 바로가기</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
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
                question="'100만원 이벤트'에는 어떻게 참여할 수 있나요?"
                answer="저희 스카이차 앱을 통해 작업을 완료하시면, 약속된 5% 캐시백이 즉시 지급됩니다. 동시에 '100만원 이벤트' 추첨에 자동으로 1회 응모됩니다. 별도의 신청 절차는 필요 없습니다."
              />
              <FAQItem 
                question="한 달에 여러 건의 작업을 완료하면 추첨 기회가 여러 번 생기나요?"
                answer="아니요, 한 달에 몇 건의 작업을 완료하시든 추첨 기회는 계정당 1회만 부여됩니다. 매달 꾸준히 참여해주시는 모든 사장님들께 공평한 기회를 드리기 위함입니다."
              />
              <FAQItem 
                question="이벤트가 매달 열리는 건가요? 혹시 이벤트가 열리지 않을 수도 있나요?"
                answer="네, 매달 진행되는 이벤트입니다. 다만, 이벤트의 신뢰도와 공정성을 위해 최소 참여 인원 300명 이상이 모였을 때 추첨이 시작됩니다. 참여 현황은 앱 내에서 투명하게 확인하실 수 있습니다."
              />
              <FAQItem 
                question="추첨은 언제, 어떤 방식으로 진행되나요?"
                answer="추첨은 매달 1일 저녁 8시에 유튜브 채널 생방송으로 진행됩니다. 실제 로또 추첨기를 사용하여 모든 분들이 보시는 앞에서 사장님의 회원번호를 공정하게 추첨합니다."
              />
              <FAQItem 
                question="당첨자 수는 왜 매번 달라지나요?"
                answer="더 많은 사장님들께 혜택을 드리기 위함입니다. 참여 인원이 많아질수록 당첨자 수도 함께 늘어나는 방식을 채택했습니다. 300명 ~ 500명 참여 시: 1명 추첨, 501명 ~ 1000명 참여 시: 2명 추첨, 1001명 ~ 1500명 참여 시: 3명 추첨 이렇게 참여자가 늘어도 당첨 확률은 약 1/500 수준으로 최대한 유지됩니다."
              />
              <FAQItem 
                question="100만원에 당첨되면 세금 처리는 어떻게 하나요?"
                answer="저희는 당첨금 100만원 전액을 그대로 지급해 드립니다. 다만, 해당 당첨금은 세법상 '기타소득'으로 분류되므로, 세금 신고 및 납부 의무는 당첨되신 사장님 본인에게 있습니다. 다음 해 5월, 종합소득세 신고 기간에 다른 소득과 합산하여 직접 신고하셔야 합니다. (기타소득세 22%)"
              />
              <FAQItem 
                question="당첨금은 언제, 어떻게 지급되나요?"
                answer="매월 1일 추첨 생방송 직후, 당첨되신 사장님께 개별적으로 연락을 드립니다. 간단한 본인 확인 절차를 거친 후 3~5 영업일 이내에 등록된 계좌로 당첨금 100만원을 입금해 드립니다."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 콜아웃 배너 */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">지금 바로 5% + 100만원 도전!</h2>
          <div className="flex flex-col items-center text-xl mb-8">
            <p>매일 미루면 기회도 미뤄져요.</p>
            <p>오늘 시작하세요!</p>
          </div>
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
'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Swiper 관련 import를 클라이언트 사이드에서만 로드
const PlatformSwiper = dynamic(() => import('@/components/PlatformSwiper'), {
  ssr: false
})

// 플랫폼 데이터
const platforms = [
  {
    name: '네이버 지도',
    icon: '/images/location-marker-green.svg',
    color: '#2DB400',
    description: '국내 최대 검색 포털, 지역 기반 마케팅의 핵심',
    features: [
      '경쟁사를 이기는 \'상위 노출\' 키워드 선정 비법',
      '고객의 전화를 유도하는 \'스마트콜\' 활용 전략',
      '별점 5개를 부르는 \'리뷰 관리\' 노하우 (악성 리뷰 대처법 포함)',
      '딱 한 장으로 시선을 끄는 \'대표 사진\' 등록 노하우'
    ]
  },
  {
    name: '구글 맵',
    icon: '/images/location-marker-blue.svg',
    color: '#4285F4',
    description: '글로벌 검색 엔진, SEO 최적화로 장기적 효과',
    features: [
      '구글 검색 첫 페이지에 내 비즈니스 노출시키기',
      '\'로컬 가이드\'가 추천하는 업체가 되는 방법',
      '외국인 고객까지 사로잡는 \'비즈니스 프로필\' 완성 가이드',
      '광고 없이도 문의가 오는 \'콘텐츠\' 게시 전략'
    ]
  },
  {
    name: '카카오맵',
    icon: '/images/location-marker-yellow.svg',
    color: '#FEE500',
    description: '모바일 기반 플랫폼, 즉각적인 고객 소통',
    features: [
      '\'내 주변\' 검색 시 가장 먼저 눈에 띄는 방법',
      '카카오톡으로 바로 공유되는 \'가게 정보\' 만들기',
      '방문 고객을 단골로 만드는 \'즐겨찾기\' 유도 전략',
      '내비게이션 목적지 설정 1순위가 되는 비결'
    ]
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

// 애니메이션 variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const heroTextVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function Marketing() {
  const [isMobile, setIsMobile] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToBottom = () => {
    const footerCTA = document.getElementById('footer-cta');
    if (footerCTA) {
      footerCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main style={{ color: '#374151' }}>
      <Navigation currentPage="marketing" />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/업종별마케팅노하우섹션.png"
            alt="현장 작업자가 스마트폰을 사용하는 모습"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 font-jalnan leading-tight text-white"
              variants={heroTextVariants}
              transition={{ duration: 0.8 }}
            >
              일감을 부르는 지도 마케팅,<br />
              <motion.span 
                className="text-3xl md:text-4xl text-white"
                variants={heroTextVariants}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                사장님도 할 수 있습니다!
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white"
              variants={heroTextVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              더 이상 비싼 광고비 태우지 마세요. 지도 앱 하나로 신규 고객이 찾아옵니다.
            </motion.p>
            <motion.button 
              onClick={scrollToBottom}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg"
              variants={heroTextVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              무료로 비법 확인하기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 공감대 형성 섹션 */}
      <section id="empathy" className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 font-jalnan text-gray-800"
              {...fadeInUp}
              transition={{ duration: 0.8 }}
            >
              사장님, 혹시 아직도...
            </motion.h2>
                         <motion.div 
               className="space-y-4 mb-12"
               variants={staggerContainer}
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
             >
               {[
                 "광고 업체에 돈만 쓰고 효과는 못 보셨나요?",
                 "지도에 등록은 했는데 전화 문의가 없나요?",
                 "마케팅, 어디서부터 시작할지 막막하신가요?"
               ].map((text, index) => (
                 <motion.div 
                   key={index}
                   className="flex items-center justify-start md:justify-center text-left md:text-center"
                   variants={{
                     initial: { opacity: 0, x: -30 },
                     animate: { opacity: 1, x: 0 }
                   }}
                   transition={{ duration: 0.6 }}
                 >
                   <span className="text-red-500 text-xl md:text-2xl mr-3 flex-shrink-0">✅</span>
                   <p className="text-sm md:text-xl text-gray-700 leading-tight">{text}</p>
                 </motion.div>
               ))}
             </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              style={{ color: '#374151' }}
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl font-bold text-blue-600 font-jalnan">
                이제 그 고민, 저희가 끝내드립니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-jalnan text-gray-800"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            3대 플랫폼 완벽 가이드
          </motion.h2>
          {isMobile ? (
            <PlatformSwiper platforms={platforms} />
          ) : (
            <motion.div 
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
                  style={{ color: '#374151' }}
                  variants={{
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: platform.color }}>
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">{platform.description}</p>
                  <ul className="space-y-3 text-left">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 text-sm">
                        <span className="mr-2 mt-1 flex-shrink-0" style={{ color: platform.color }}>✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 비포 & 애프터 섹션 */}
      <section id="before-after" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-jalnan text-gray-800"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            사장님의 가게 정보, 이렇게 바뀝니다
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before */}
              <motion.div 
                className="text-center"
                {...fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-100 rounded-xl p-8 mb-4 shadow-lg" style={{ color: '#374151' }}>
                  <div className="text-6xl mb-4">😞</div>
                  <div className="space-y-2 text-left">
                    <div className="text-gray-400">⭐ 별점 없음</div>
                    <div className="text-gray-400">📷 사진 없음</div>
                    <div className="text-gray-400">📝 정보 부족</div>
                    <div className="text-gray-400">📞 문의 0건</div>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-600">
                  방치된 가게 정보
                </p>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                className="text-center md:block hidden"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl text-blue-600">→</div>
              </motion.div>
              <motion.div 
                className="text-center md:hidden block"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl text-blue-600">↓</div>
              </motion.div>

              {/* After */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ 
                  opacity: 1, 
                  clipPath: "inset(0% 0 0 0)" 
                }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 mb-4 shadow-lg" style={{ color: '#374151' }}>
                  <div className="text-6xl mb-4">🤩</div>
                  <div className="space-y-2 text-left">
                    <div className="text-green-600">⭐ 별점 4.8</div>
                    <div className="text-blue-600">📷 고품질 사진</div>
                    <div className="text-purple-600">📝 상세 정보</div>
                    <div className="text-orange-600">📞 문의 급증</div>
                  </div>
                </div>
                <p className="text-lg font-bold text-blue-600">
                  우리 앱 노하우 적용 후 ✨
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰도 구축 섹션 */}
      <motion.section 
        id="trust" 
        className="py-20 bg-gray-50"
        {...fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-12 font-jalnan text-gray-800"
              {...fadeInUp}
              transition={{ duration: 0.8 }}
            >
              저희가 누구길래, 이런 정보를 무료로 드릴까요?
            </motion.h2>
            <motion.div 
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg"
              style={{ color: '#374151' }}
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  저희는 <span className="font-bold text-blue-600">10년 이상 현장을 누빈 전문가</span>와 
                  <span className="font-bold text-green-600"> 온라인 마케팅 전문가</span>가 모인 팀입니다.
                </p>
                <p>
                  수많은 사장님들의 어려움을 곁에서 지켜보며, 
                  <span className="font-bold text-orange-600"> 비싼 돈 없이도 스스로 가게를 알릴 수 있는 방법</span>을 고민했습니다.
                </p>
                <p className="text-xl font-bold text-gray-800">
                  이 앱은 그 고민의 결과물입니다.
                </p>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  만약 이 노하우를 직접 실행하기 어렵거나 더 전문적인 관리가 필요하시다면, 
                  저희의 <span className="font-bold text-blue-600">전문 대행 서비스</span>를 이용하실 수도 있습니다.
                  <span className="text-sm text-gray-500"> (FAQ 참고)</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-jalnan text-gray-800"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            자주 묻는 질문
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
                style={{ color: '#374151' }}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.button
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgb(243 244 246)" }}
                >
                  <h3 className="text-lg font-bold text-gray-800">Q. {faq.question}</h3>
                </motion.button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">A. {faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section 
        id="footer-cta" 
        className="py-20 bg-gray-900 text-white"
        {...fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 font-jalnan text-white"
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            경쟁업체는 이미 앱에서 정보를 얻고 있습니다.
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            지금 바로 앱을 다운로드하고, 전문가의 마케팅 노하우를 무료로 확인하세요!
          </motion.p>
          <motion.div 
            className="flex justify-center"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              앱 다운로드
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
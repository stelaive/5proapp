import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '여긴뭐야? - 5프로돌려주는스카이차 소개',
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  keywords: ['스카이차', '크레인', '고소작업차', '렌탈', '캐시백', '5%', '회사소개', '스카이차업체', '건설장비'],
  
  openGraph: {
    title: '여긴뭐야? - 5프로돌려주는스카이차 소개',
    description: '5% 캐시백이 가능한 이유와 저희 서비스 철학을 소개합니다',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/whyhere',
    images: [
      {
        url: '/images/sky4.png',
        width: 1200,
        height: 630,
        alt: '스카이차 작업 현장',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '여긴뭐야? - 5프로돌려주는스카이차 소개',
    description: '5% 캐시백이 가능한 이유와 저희 서비스 철학',
    images: ['/images/sky4.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/whyhere',
  },
}

'use client'
export default function WhyHere() {
  return (
    <main style={{ color: '#374151' }}>
      <Navigation currentPage="whyhere" />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <Image
            src="/images/sky4.png"
            alt="스카이차 작업 현장"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        </motion.div>
        <div className="container mx-auto px-2 sm:px-4 h-screen flex flex-col justify-center relative">
          <div className="max-w-7xl mx-auto text-left relative z-10 px-2 sm:px-4">
            <motion.h3 
              className="text-lg md:text-xl mb-6 text-white/90 font-jalnan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              여긴뭐야?
            </motion.h3>
            <div className="text-[24px] sm:text-[28px] md:text-[48px] font-black mb-6 leading-[1.6] md:leading-[1.8] text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="block"
              >
                "아니, 스카이차 쓰는데<br className="md:hidden" /> 5%를 바로 돌려준다고?
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="block"
              >
                매달 100만원 이벤트까지?
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="block"
              >
                도대체 어떻게 이게 가능한 겁니까?"
              </motion.span>
            </div>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mt-8 text-white/90 font-jalnan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              이런 질문을 듣고 있습니다.
            </motion.p>
          </div>
          <motion.div 
            className="absolute bottom-[15%] sm:bottom-12 left-0 right-0 sm:left-4 sm:right-auto z-20 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <p className="text-sm text-white/80 inline-flex items-center justify-center font-jalnan">
              비결이 궁금하다면?
              <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 페이지 제목 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              5프로스카이의 약속
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-sky-orange-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              현장에서 직접 겪은 불편함을 해결하고자 시작된<br className="hidden sm:block" />
              진심어린 서비스의 이야기입니다
            </motion.p>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 스토리 섹션 1: 도입부 */}
            <div className="text-center mb-16">
              <motion.p 
                className="text-2xl sm:text-3xl text-sky-orange-600 font-bold mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                저는 이렇게 답합니다.
              </motion.p>
              <motion.p 
                className="text-xl sm:text-2xl text-gray-700 mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ lineHeight: '1.8' }}
              >
                "고소작업 현장에서 스카이차를 찾는 작업반장님, 사장님들의 마음을<br className="hidden sm:block" />
                너무 잘 압니다. 저도 한때는 현장에서 직접 장비를 부르고,<br className="hidden sm:block" />
                또 운영했던 사람이기 때문입니다."
              </motion.p>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/sky4.png"
                  alt="스카이차 이미지"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg shadow-xl max-w-2xl w-full"
                />
              </motion.div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gray-200 my-16"></div>

            {/* 스토리 섹션 2: 경험 이야기 */}
            <div className="mb-24">
              <motion.h2 
                className="text-3xl sm:text-4xl font-black mb-12 text-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                잠시 제 옛날이야기를 해볼까 합니다.
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ lineHeight: '1.7' }}
              >
                저도 건설 현장에서 팀을 이끌기도 했고, 때로는 직접 스카이차를 불러 작업을 지휘하기도 했습니다. 
                직접 스카이차 사업에 뛰어들어 장비를 운용하며 현장의 어려움을 온몸으로 느꼈던 시절도 있었습니다. 
                그때마다 늘 가슴 한구석에 아쉬움과 답답함이 있었습니다.
              </motion.p>

              {/* 현장의 어려움 */}
              <motion.div 
                className="bg-gray-50 p-8 rounded-2xl mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-6 text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  현장에서 느꼈던 불편함
                </motion.h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "오늘 하루 장비 쓰는데, 왜 이렇게 비싸게 느껴질까?",
                    "분명 몇 시간 안 썼는데, 하루 요금을 다 내야 한다니...",
                    "급하게 장비가 필요한데, 예약은 꽉 찼다고 하고, 겨우 구한 장비는 오래돼서 왠지 불안하고...",
                    "왜 작업 시간보다 장비 기다리는 시간이 더 길어야 하고, 약속된 시간에 오지 않아 애태우는 일이 반복될까?"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                      viewport={{ once: true }}
                      style={{ lineHeight: '1.7' }}
                    >
                      <span className="text-red-500 mr-3 text-lg">✓</span>
                      <span className="text-gray-700">"{item}"</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-600 mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ lineHeight: '1.7' }}
              >
                스카이차 한 대가 현장에 미치는 영향은 생각보다 큽니다. 작업의 효율성은 물론이고, 
                현장 작업자분들의 안전과도 직결되니까요. 그런데 정작 현장의 목소리는 제대로 반영되지 
                않는 것 같아 안타까웠습니다.
              </motion.p>

              {/* 깨달음 */}
              <motion.div 
                className="bg-gradient-to-r from-sky-orange-50 to-orange-50 p-8 rounded-2xl mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-sky-orange-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  어느 순간 깨달았습니다.
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  '내가 현장에서 느꼈던 이 불편함, 다른 사장님들은 겪지 않게 할 수는 없을까?'<br />
                  '내가 만약 스카이차를 다시 부르는 입장이라면, 어떤 회사를 가장 믿고 선택할까?'
                </motion.p>
                <motion.div 
                  className="border-l-4 border-sky-orange-500 pl-6 py-4 bg-gradient-to-r from-sky-orange-50 to-transparent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    scale: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-xl font-bold text-sky-orange-600 italic">
                    "현장에서 땀 흘리는 분들이 정말 만족할 수 있는 스카이차 회사를 만들자!"
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    이렇게 다짐했습니다.
                  </p>
                </motion.div>
              </motion.div>

              {/* 구분선 */}
              <div className="w-full h-px bg-gray-200 my-20"></div>

              <motion.p 
                className="text-lg text-gray-600 mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ lineHeight: '1.7' }}
              >
                그저 그런 스카이차 회사 하나 더 만드는 것이 목표가 아니었습니다.
                현장의 고충을 누구보다 잘 알기에, '어떻게 하면 사장님들께 실질적인 도움을 드릴 수 있을까?' 를 
                최우선으로 생각했습니다.
              </motion.p>

              {/* 우리의 약속 */}
              <div className="relative mb-12">
                <motion.div 
                  className="absolute inset-0 border-2 border-sky-orange-500 rounded-2xl"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #f97316 50%, transparent 100%)',
                    backgroundSize: '200% 2px',
                    backgroundPosition: '-100% 0%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <motion.div 
                  className="bg-white p-8 rounded-2xl relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-sky-orange-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    "사장님, 이 혜택 그냥 드리는 게 아닙니다!"
                  </motion.h3>
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      ✔️ <span className="text-red-500 font-black">5%</span> 즉시 페이백<br />
                      ✔️ 매달 <span className="text-red-500 font-black">100만원</span> 이벤트
                    </p>
                    <p className="text-lg text-gray-700">
                      이거, 단순 미끼 아니에요.
                    </p>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-bold text-sky-orange-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    "어떻게 가능하냐고요?"
                  </motion.h4>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg text-gray-700 mb-4">
                      저희는 딱 두 가지에 집중했습니다.
                    </p>
                    <motion.p 
                      className="text-lg text-gray-700 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                      viewport={{ once: true }}
                    >
                      1. 불필요한 중간 마진 제거!
                    </motion.p>
                    <motion.p 
                      className="text-lg text-gray-700 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                      viewport={{ once: true }}
                    >
                      2. 배차 시스템 효율 극대화!
                    </motion.p>
                  </motion.div>

                  <motion.h4 
                    className="text-xl font-bold text-sky-orange-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    "그래서 결론은요?"
                  </motion.h4>
                  
                  <motion.p 
                    className="text-lg text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                    viewport={{ once: true }}
                  >
                    이렇게 아낀 비용,<br />
                    사장님들께 전부 돌려드립니다.<br />
                    이게 바로 저희의 진짜 철학입니다.
                  </motion.p>
                </motion.div>
              </div>
            </div>



            {/* 구분선 */}
            <div className="w-full h-px bg-gray-200 my-20"></div>

            {/* 마무리 섹션 */}
            <div className="text-center">
              <motion.p 
                className="text-lg text-gray-600 mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ lineHeight: '1.8' }}
              >
                이 모든 시스템은 거창하거나 복잡한 약속이 아닙니다.<br />
                과거 제가 현장에서 '아, 이런 서비스가 있었으면 얼마나 좋을까...'<br className="hidden sm:block" />
                하고 간절히 바랐던 것들을 하나씩 현실로 만든,<br className="hidden sm:block" />
                오직 현장 사장님들을 위한 진심의 결과물입니다.
              </motion.p>

              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-12 rounded-2xl mb-16 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-8xl sm:text-9xl font-black text-red-500 mb-4 leading-none">
                    5
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-800 mb-6">
                    프로돌려드리는스카이차에<br className="sm:hidden" />오신 것을 환영합니다.
                  </p>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium" style={{ lineHeight: '1.7' }}>
                    오늘도 안전한 작업을 진심으로 응원합니다!
                  </p>
                </div>
              </motion.div>

              {/* 감성적 행동 유도 문구 */}
              <motion.div 
                className="mb-8 bg-white border-l-4 border-orange-500 p-6 rounded-r-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center">
                  <div className="text-3xl mr-4">💝</div>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium italic">
                    "저의 진심이 사장님의 현장에 닿기를 바랍니다."
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: [
                      "0 10px 30px rgba(249, 115, 22, 0.4)",
                      "0 15px 40px rgba(249, 115, 22, 0.5)",
                      "0 10px 30px rgba(249, 115, 22, 0.4)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  🚀 지금 바로 시작하기
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
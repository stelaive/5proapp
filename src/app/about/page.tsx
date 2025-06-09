'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main>
      <Navigation currentPage="about" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-white font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              5프로스카이 소개
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              현장에서 직접 겪은 불편함을 해결하고자 시작된<br />
              진심어린 스카이차 서비스입니다
            </motion.p>
          </div>
        </div>
      </section>

      {/* 준비 중 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="text-8xl mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              🚧
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              페이지 준비 중입니다
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              더 나은 서비스를 위해 열심히 준비하고 있습니다.<br />
              곧 만나뵐 수 있도록 하겠습니다!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/"
                className="bg-sky-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-orange-600 transition-all duration-300"
              >
                홈으로 돌아가기
              </a>
              <a
                href="/whyhere"
                className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
              >
                5프로스카이 이야기 보기
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
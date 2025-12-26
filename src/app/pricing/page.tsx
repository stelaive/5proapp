'use client'
import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'
import PriceTable from '@/components/common/PriceTable'
import { defaultPriceData } from '@/lib/priceData'

// 애니메이션 variants 정의
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-100px" }
};

export default function PricingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="pricing" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan">
              스카이차 가격표
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              투명하고 합리적인 가격으로 최고의 서비스를 제공합니다
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-bold text-yellow-300 mb-2">🎉 특별 혜택!</p>
              <p className="text-blue-100">
                모든 이용료에서 <span className="text-yellow-300 font-bold text-xl">5% 캐시백</span> 자동 지급!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 공통 가격표 컴포넌트 사용 */}
      <motion.div {...fadeInUp}>
        <PriceTable
          title="장비별 이용요금"
          subtitle="투명하고 합리적인 가격으로 최고의 서비스를 제공합니다"
          priceData={defaultPriceData}
          region="전국"
          className="bg-white"
        />
      </motion.div>

      {/* 전화 연결 섹션 */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #42d9de, #3bc4c9)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 font-jalnan">
              궁금한 점이 있으신가요?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              24시간 상담 가능! 지금 바로 전화주세요.
                </p>
                <a 
                  href="tel:18773924"
              className="inline-block bg-white px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
              style={{ color: '#42d9de' }}
            >
              <span>1877-3924 전화걸기</span>
                </a>
          </motion.div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BRAND = '#F97316'
const BRAND_HOVER = '#EA580C'

export default function CtaSection() {
  const handleAppDownload = () => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank')
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank')
    }
  }

  return (
    <section aria-labelledby="cta-heading" className="bg-[#0B0B0C] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-3 py-1.5 text-sm font-semibold text-orange-300">
            24시간 언제든 · 전국 출동
          </span>
          <h2
            id="cta-heading"
            className="mt-5 font-jalnan text-2xl font-bold leading-snug text-white md:text-4xl"
          >
            지금 전화 한 통이면,
            <br />
            <span style={{ color: BRAND }}>5%</span>는 사장님 겁니다
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            복잡한 절차 없이, 전화 또는 앱으로 바로 예약하세요.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:18773924"
              aria-label="전화로 바로 예약하기"
              className="tel-raw inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/70 active:scale-[0.98]"
              style={{ backgroundColor: BRAND, textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_HOVER }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              전화로 바로 예약
            </a>
            <button
              onClick={handleAppDownload}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              앱 다운로드
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            대표번호 <span className="font-bold text-gray-300">1877-3924</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

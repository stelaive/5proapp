'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

// 브랜드 토큰
const BRAND = '#F97316'
const BRAND_HOVER = '#EA580C'

export default function HeroSection() {
  const reduce = useReducedMotion()

  const handleAppDownload = () => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank')
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank')
    }
  }

  // 진입 애니메이션 (reduced-motion 시 이동 제거)
  const container = {
    animate: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#0B0B0C] text-white"
    >
      {/* 배경: 실제 스카이차 현장 사진 + 하단→상단 어두운 그라데이션 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sky-car-visual-4.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* 좌: 카피 & CTA */}
          <motion.div
            className="max-w-xl"
            variants={container}
            initial="initial"
            animate="animate"
          >
            {/* 신뢰 칩 */}
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-3 py-1.5 text-sm font-semibold text-orange-300"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 motion-safe:animate-pulse" />
              24시간 출동 · 경기 전역
            </motion.span>

            {/* 헤드라인 — 단일 메시지, 5% 강조 */}
            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-5 font-jalnan text-[2rem] font-bold leading-[1.25] md:text-5xl md:leading-[1.2]"
            >
              스카이차 이용료{' '}
              <span className="whitespace-nowrap">
                <span
                  className="align-baseline text-[2.75rem] leading-none md:text-6xl"
                  style={{ color: BRAND }}
                >
                  5%
                </span>
                ,
              </span>
              <br />
              현금으로 바로 돌려드려요
            </motion.h1>

            {/* 서브카피 — 확실성 강조 */}
            <motion.p
              variants={item}
              className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              작업 끝나면 묻지도 따지지도 않고,
              <br className="hidden sm:block" /> 이용료의 5%를 바로 현금으로 드려요.
            </motion.p>

            {/* CTA — 단일 강조 + 보조 링크 */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
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
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-4 text-base font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                앱으로 예약하기 <span aria-hidden="true">→</span>
              </button>
            </motion.div>

            {/* 신뢰 요소 — 비수치(조작 없는) */}
            <motion.ul
              variants={item}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400"
            >
              {['정식 등록 업체', '작업 완료 즉시 현금 지급', '전화·앱 예약 모두 5%'].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <svg className="h-4 w-4 shrink-0" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* 우: 경량 지갑 목업 (모바일에도 노출) */}
          <motion.div
            className="mx-auto w-full max-w-[280px] sm:max-w-[300px]"
            initial={{ opacity: 0, y: reduce ? 0 : 30, rotate: reduce ? 0 : -2 }}
            animate={{ opacity: 1, y: 0, rotate: reduce ? 0 : -2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="rounded-[2.25rem] border border-white/10 bg-gray-900 p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]">
              <div className="overflow-hidden rounded-[1.85rem] bg-gray-50">
                {/* 앱 헤더 */}
                <div className="flex items-center justify-between bg-white px-5 pt-5 pb-3">
                  <span className="text-base font-extrabold text-gray-900">내 지갑</span>
                  <span className="text-xs font-bold" style={{ color: BRAND }}>5% 페이백</span>
                </div>
                {/* 현금 카드 */}
                <div className="px-4 pb-4">
                  <div
                    className="rounded-2xl p-5 text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_HOVER})` }}
                  >
                    <p className="text-sm font-medium text-white/90">이번 달 받은 현금</p>
                    <p className="mt-1 text-3xl font-black tracking-tight">173,500<span className="ml-1 text-xl font-bold">원</span></p>
                    <div className="mt-4 rounded-xl bg-white/95 py-2.5 text-center text-sm font-bold text-gray-900">
                      바로 출금하기
                    </div>
                  </div>
                  {/* 최근 내역 */}
                  <p className="mt-5 mb-2 px-1 text-sm font-bold text-gray-900">최근 페이백</p>
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-base font-black text-white"
                        style={{ backgroundColor: BRAND }}
                      >%</span>
                      <div className="leading-tight">
                        <p className="text-sm font-bold text-gray-900">장비 사용 5% 페이백</p>
                        <p className="text-xs text-gray-400">작업 완료 즉시 지급</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold" style={{ color: BRAND }}>+17,500원</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

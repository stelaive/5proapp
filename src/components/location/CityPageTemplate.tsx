'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { RegionData } from '@/lib/regionData'
import PriceCalculator from '@/components/common/PriceCalculator'
import LocationJsonLd from '@/components/seo/LocationJsonLd'

const HERO_BADGES = ['24시간 긴급출동', '당일 배차 가능', '무사고 10년+', '특수장비 검사완료']

const BRAND = '#F97316'
const BRAND_HOVER = '#EA580C'

const won = (n: number) => `${n.toLocaleString('ko-KR')}원`

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

// 도시별 커스텀 FAQ가 없으면 표준 FAQ 자동 생성 (도시명·요금·동네 반영 → 중복 방지)
function buildCityFaq(data: RegionData): { q: string; a: string }[] {
  const first = data.pricing.items[0]
  const areas = data.subAreas.slice(0, 5).join('·')
  return [
    {
      q: `${data.nameKo}에서도 스카이차를 부를 수 있나요?`,
      a: `네, ${data.nameKo} 전 지역으로 24시간 출동합니다. ${areas} 등 어디든 가장 가까운 차량을 신속하게 배차해 드려요.`,
    },
    {
      q: `${data.nameKo} 스카이차 요금은 얼마인가요?`,
      a: `${first.tonnage}은 ${first.thirtyMin ? `30분 ${won(first.thirtyMin)}, ` : ''}1시간 ${won(first.oneHour)}, 반나절 ${won(first.halfDay)}, 하루 ${won(first.fullDay)}입니다. 톤수·시간 기준으로 요금이 사전에 정해져 있어 부르는 대로 달라지지 않아요. (부가세 별도)`,
    },
    {
      q: '5% 페이백은 어떻게 받나요?',
      a: '작업이 완료되면 이용료의 5%가 앱에 포인트로 적립됩니다. 앱에서 출금 신청하시면 등록하신 계좌로 현금으로 보내드려요.',
    },
    {
      q: '예약 취소나 변경은 어떻게 하나요?',
      a: `예약 취소·변경은 전화로만 가능합니다. 대표번호 ${data.phone}으로 연락 주시면 바로 처리해 드려요.`,
    },
    {
      q: '꼭 앱을 써야 하나요?',
      a: '아니요. 전화 예약도 앱과 동일하게 5% 페이백을 받으실 수 있습니다.',
    },
  ]
}

export default function CityPageTemplate({ data }: { data: RegionData }) {
  const telHref = `tel:${data.phone.replace(/-/g, '')}`
  const standardFaq = data.faq && data.faq.length > 0 ? data.faq : buildCityFaq(data)
  // 구별 특화 FAQ가 있으면 표준 FAQ 앞에 병합 (FAQPage 스키마·화면 모두 반영)
  const faq = data.localFaq && data.localFaq.length > 0 ? [...data.localFaq, ...standardFaq] : standardFaq

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <div className="bg-white">
      {/* 구조화 데이터: Breadcrumb + Service/Offer */}
      <LocationJsonLd data={data} />
      {/* 구조화 데이터: FAQPage (AEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. 히어로 */}
      <section aria-labelledby="city-hero" className="relative overflow-hidden bg-[#0B0B0C] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sky-car-visual-4.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-3 py-1.5 text-sm font-semibold text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-400 motion-safe:animate-pulse" />
              {data.nameKo} 24시간 출동
            </span>
            <h1 id="city-hero" className="mt-5 font-jalnan text-[2rem] font-bold leading-[1.25] md:text-5xl md:leading-[1.2]">
              {data.nameShort}스카이차,
              <br />
              <span style={{ color: BRAND }}>5%</span> 돌려받고 부르세요
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
              {data.hero.subCopy}
              <br className="hidden sm:block" /> 작업 끝나면 이용료의 5%를 현금으로 돌려드려요.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={telHref}
                aria-label={`${data.nameKo} 스카이차 전화 예약`}
                className="tel-raw inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/70 active:scale-[0.98]"
                style={{ backgroundColor: BRAND, textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_HOVER }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {data.phone} 전화 예약
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
              {HERO_BADGES.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <svg className="h-4 w-4 shrink-0" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 섹션 2. 요금 (계산기 + 요금표) — 하나의 회색존으로 통합 */}
      <PriceCalculator />
      <section aria-labelledby="city-price" className="bg-gray-50 pt-0 pb-16">
        <div className="container mx-auto px-4">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeInUp}>
            <p className="mb-3 text-sm font-bold" style={{ color: BRAND }}>투명한 요금</p>
            <h2 id="city-price" className="font-jalnan text-2xl font-bold text-gray-900 md:text-3xl">
              {data.nameShort}스카이차 요금표
            </h2>
          </motion.div>
          <div className="mx-auto mt-8 max-w-2xl overflow-x-auto">
            <table className="w-full overflow-hidden rounded-2xl border border-gray-100 text-center text-sm shadow-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-3 py-4 font-bold">차종</th>
                  <th className="px-3 py-4 font-bold">30분</th>
                  <th className="px-3 py-4 font-bold">1시간</th>
                  <th className="px-3 py-4 font-bold">반나절</th>
                  <th className="px-3 py-4 font-bold">하루</th>
                </tr>
              </thead>
              <tbody>
                {data.pricing.items.map((item, i) => (
                  <tr key={item.tonnage} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-4 font-bold text-gray-900">{item.tonnage}</td>
                    <td className="px-3 py-4 text-gray-600">{item.thirtyMin ? won(item.thirtyMin) : '—'}</td>
                    <td className="px-3 py-4 text-gray-600">{won(item.oneHour)}</td>
                    <td className="px-3 py-4 text-gray-600">{won(item.halfDay)}</td>
                    <td className="px-3 py-4 font-bold" style={{ color: BRAND }}>{won(item.fullDay)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-gray-400">{data.pricing.notice}</p>
        </div>
      </section>

      {/* 섹션 3. 이용 방법 + 5% 페이백 강조 카드 */}
      <section aria-labelledby="city-steps" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeInUp}>
            <h2 id="city-steps" className="font-jalnan text-2xl font-bold text-gray-900 md:text-3xl">이용 방법</h2>
          </motion.div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
            {data.bookingSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-black text-white" style={{ backgroundColor: BRAND }}>
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 5% 페이백 — 전체폭 밴드 → 강조 카드로 축소 */}
          <motion.div
            className="mx-auto mt-8 max-w-4xl rounded-3xl px-6 py-8 text-center text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_HOVER})` }}
            {...fadeInUp}
          >
            <h3 className="font-jalnan text-xl font-bold md:text-2xl">
              {data.nameKo}에서도 이용료의 5%, 현금으로!
            </h3>
            <p className="mt-2 text-sm text-white/90 md:text-base">
              작업이 끝나면 이용료의 5%가 앱에 포인트로 적립돼요. 앱에서 출금하면 계좌로 현금 지급.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 섹션 4. 우리 동네 커버리지 (지역소개 + 동네 리스트 + 작업 사례) */}
      <section aria-labelledby="city-coverage" className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeInUp}>
            <h2 id="city-coverage" className="font-jalnan text-2xl font-bold text-gray-900 md:text-3xl">
              {data.nameKo} 전 지역 신속 배차
            </h2>
            {data.localIntro && (
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">{data.localIntro}</p>
            )}
          </motion.div>

          {/* 동네 칩 */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {data.subAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-[#F97316] hover:text-[#F97316]"
              >
                {area} 스카이차
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            * {data.subAreas[0]} 외 {data.nameKo} 전 지역 30분 이내 도착을 목표로 하고 있습니다.
          </p>

          {/* 작업 사례 (이미지 있을 때만) */}
          {data.gallery && data.gallery.length > 0 && (
            <div className="mx-auto mt-12 max-w-5xl">
              <h3 className="mb-6 text-center text-lg font-bold text-gray-900">{data.nameKo} 실제 현장 작업 사례</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="bg-white p-4">
                      <p className="font-bold text-gray-900">{image.alt}</p>
                      {(image.location || image.date) && (
                        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                          {image.location && <span>{image.location}</span>}
                          {image.date && <span>{image.date}</span>}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 섹션 5. FAQ */}
      <section aria-labelledby="city-faq" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeInUp}>
            <h2 id="city-faq" className="font-jalnan text-2xl font-bold text-gray-900 md:text-3xl">자주 묻는 질문</h2>
          </motion.div>
          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-gray-100 bg-gray-50 px-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-gray-900 outline-none focus-visible:rounded-lg focus-visible:ring-4 focus-visible:ring-orange-300/60">
                  <span>{item.q}</span>
                  <svg className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-gray-600 md:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 마무리 CTA (다크 북엔드) */}
      <section aria-labelledby="city-cta" className="bg-[#0B0B0C] py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="mx-auto max-w-2xl" {...fadeInUp}>
            <h2 id="city-cta" className="font-jalnan text-2xl font-bold text-white md:text-3xl">
              {data.nameShort}스카이차, 지금 전화 한 통이면 끝
            </h2>
            <p className="mt-4 text-base text-gray-400">전화 또는 앱으로 바로 예약하세요. 이용료의 5%는 사장님 겁니다.</p>
            <div className="mt-8">
              <a
                href={telHref}
                aria-label={`${data.nameKo} 스카이차 전화 예약`}
                className="tel-raw inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/70 active:scale-[0.98]"
                style={{ backgroundColor: BRAND, textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_HOVER }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {data.phone} 전화 예약
              </a>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-gray-500">※ {data.footerNotice.exclusion}</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

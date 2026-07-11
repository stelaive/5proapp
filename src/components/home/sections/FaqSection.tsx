'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BRAND = '#F97316'

// ⚠️ 문구는 실제 운영 정책 기준으로 검수 필요 (특히 지급 방식·요금 고정 여부)
const FAQS = [
  {
    q: '5% 페이백은 언제, 어떻게 받나요?',
    a: '작업이 완료되면 이용료의 5%가 앱에 포인트로 적립됩니다. 앱에서 출금 신청하시면 등록하신 계좌로 현금으로 보내드려요.',
  },
  {
    q: '요금이 부르는 대로 바뀌진 않나요?',
    a: '톤수와 이용 시간 기준으로 요금이 사전에 정해져 있어, 그때그때 달라지지 않습니다. 예약 전 앱에서 예상 금액을 확인하실 수 있어요.',
  },
  {
    q: '어느 지역까지 출동하나요?',
    a: '제주도를 제외한 전국 어디든 24시간 출동합니다. 지역과 상황에 따라 배차 시간이 달라질 수 있으니, 급하실 때는 전화로 문의해 주세요.',
  },
  {
    q: '예약 취소나 변경은 어떻게 하나요?',
    a: '예약 취소·변경은 전화로만 가능합니다. 대표번호로 연락 주시면 바로 처리해 드려요. 자세한 취소 규정은 예약 시 안내해 드립니다.',
  },
  {
    q: '꼭 앱을 써야 하나요?',
    a: '아니요. 전화 예약도 앱 예약과 동일하게 5% 현금 페이백을 받으실 수 있습니다. 편하신 방법으로 이용하세요.',
  },
]

export default function FaqSection() {
  // AEO: 검색 답변박스·리치결과용 FAQPage 구조화 데이터
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section aria-labelledby="faq-heading" className="bg-gray-50 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="mb-3 text-sm font-bold tracking-wide" style={{ color: BRAND }}>
            궁금한 점이 있으신가요?
          </p>
          <h2
            id="faq-heading"
            className="font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-4xl"
          >
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-100 bg-white px-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-gray-900 outline-none focus-visible:rounded-lg focus-visible:ring-4 focus-visible:ring-orange-300/60">
                <span>{item.q}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                  style={{ color: BRAND }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-gray-600 md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/icon'
import type { IconName } from '@/components/ui/icon'

const BRAND = '#F97316'
const BRAND_HOVER = '#EA580C'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

// 문제 3가지에 1:1로 대응하는 해결 단계
const STEPS: { icon: IconName; step: string; title: string; desc: string }[] = [
  {
    icon: 'Smartphone',
    step: 'STEP 1',
    title: '앱으로 원터치 접수',
    desc: '전화 뺑뺑이 끝. 앱에서 몇 번만 누르면 접수 완료.',
  },
  {
    icon: 'Truck',
    step: 'STEP 2',
    title: '24시간 책임 배차',
    desc: '고정된 요금으로, 전국 어디든 바로 배차해요.',
  },
  {
    icon: 'Wallet',
    step: 'STEP 3',
    title: '작업 후 5% 자동 현금',
    desc: '작업 끝나면 이용료의 5%가 바로 현금으로 지급.',
  },
]

export default function ServiceSection() {
  return (
    <section aria-labelledby="service-heading" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeInUp}>
          <p className="mb-3 text-sm font-bold tracking-wide" style={{ color: BRAND }}>
            복잡한 건 앱이, 남는 건 사장님이
          </p>
          <h2
            id="service-heading"
            className="font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-4xl"
          >
            전화 한 번, 앱 한 번이면
            <br />
            <span style={{ color: BRAND }}>5% 현금</span>까지 끝나요
          </h2>
        </motion.div>

        {/* 3단계 작동 방식 */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                style={{ backgroundColor: BRAND }}
              >
                <Icon name={s.icon} size={28} />
              </div>
              <p className="mb-1 text-xs font-bold tracking-wider" style={{ color: BRAND }}>
                {s.step}
              </p>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 5% 페이백 상세 */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <motion.div {...fadeInUp}>
              <h3 className="mb-5 font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                이용료의 <span style={{ color: BRAND }}>5%</span>,
                <br />
                무조건 현금으로 돌려드려요
              </h3>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                땀 흘려 일하신 소중한 하루, 저희가 작은 힘이라도 보태드릴게요.
                작업이 끝나면 묻지도 따지지도 않고 이용료의{' '}
                <span className="font-bold" style={{ color: BRAND }}>5%</span>를
                사장님 손에 바로 현금으로 드립니다.
              </p>
              <Link
                href="/whyhere"
                className="inline-flex items-center gap-1.5 rounded-full px-8 py-4 font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/70"
                style={{ backgroundColor: BRAND }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_HOVER }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND }}
              >
                5% 페이백 자세히 보기 <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
            <motion.div className="relative mx-auto h-[280px] w-full max-w-[320px] md:h-[360px]" {...fadeInUp}>
              <Image
                src="/images/app-check-points.png"
                alt="작업 완료 후 5% 현금이 적립되는 모습"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* 친구 초대 혜택 */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <motion.div className="order-2 md:order-1 relative mx-auto h-[280px] w-full max-w-[320px] md:h-[360px]" {...fadeInUp}>
              <Image
                src="/images/friend-invite-event-banner.png"
                alt="친구 초대 시 현금 5만원 지급 이벤트"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div className="order-1 md:order-2" {...fadeInUp}>
              <h3 className="mb-5 font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                동료에게 추천만 해도
                <br />
                통장에 <span style={{ color: BRAND }}>5만원</span> 착!
              </h3>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                아는 동료분께 살짝 추천하고, 그 친구{' '}
                <span className="font-bold" style={{ color: BRAND }}>5명</span>이
                한 번씩만 이용하면 사장님 통장엔 현금{' '}
                <span className="font-bold" style={{ color: BRAND }}>5만원</span>이
                바로 꽂혀요. (무한 반복 가능!)
              </p>
              <Link
                href="/reward"
                className="inline-flex items-center gap-1.5 rounded-full px-8 py-4 font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/70"
                style={{ backgroundColor: BRAND }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND_HOVER }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND }}
              >
                친구 초대 자세히 보기 <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

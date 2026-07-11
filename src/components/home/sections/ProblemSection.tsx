'use client'

import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-80px' },
}

const PROBLEMS = [
  {
    title: '전화 뺑뺑이',
    desc: '여기저기 번호 찾아 전화 돌리고, 배차될 때까지 마냥 기다리기.',
  },
  {
    title: '부르는 게 값',
    desc: '업체마다 요금이 제각각. 그때그때 달라지니 믿기가 어렵죠.',
  },
  {
    title: '남는 것 없이 끝',
    desc: '비싼 이용료 다 내고 나면, 사장님께 돌아오는 건 하나도 없어요.',
  },
]

export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeInUp}>
          <p className="mb-3 text-sm font-bold tracking-wide text-orange-500">
            사장님, 혹시
          </p>
          <h2
            id="problem-heading"
            className="font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-4xl"
          >
            스카이차 부를 때마다
            <br />
            이런 적, 없으세요?
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-base font-medium text-gray-500 md:text-lg"
          {...fadeInUp}
        >
          그래서 <span className="font-bold text-gray-900">저희가 싹 다 바꿨습니다.</span>
        </motion.p>
      </div>
    </section>
  )
}

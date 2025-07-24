'use client'

import Link from 'next/link'
import { Percent, Gift, Tag, ArrowRight } from 'lucide-react'

export default function BenefitSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* 혜택 카드 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
            <Tag className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">즉시 할인</h3>
            <p className="text-4xl font-bold text-red-500 mb-4">-50,000원</p>
            <p className="text-gray-600">타사 대비 즉시 할인, 별도 조건 없이 바로 적용</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
            <Percent className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">현금 페이백</h3>
            <p className="text-4xl font-bold text-green-500 mb-4">+5%</p>
            <p className="text-gray-600">작업 완료 후 현금으로 5% 페이백 지급</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
            <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">추첨 이벤트</h3>
            <p className="text-2xl font-bold text-purple-500 mb-4">매달 100만원의 행운</p>
            <p className="text-gray-600">이용 완료 시 자동 응모, 매달 1일 유튜브 생방송 추첨!</p>
            <Link href="/million" className="text-purple-600 font-semibold mt-4 inline-flex items-center hover:text-purple-800 transition-colors">
              자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* 요약 계산 박스 */}
        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6">예시: 1-3.5톤 반나절 선택 시 총 절약 금액</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div>
              <p className="text-lg opacity-80">즉시 할인</p>
              <p className="text-3xl font-bold">50,000원</p>
            </div>
            <div className="text-2xl font-bold">+</div>
            <div>
              <p className="text-lg opacity-80">5% 페이백</p>
              <p className="text-3xl font-bold">17,500원</p>
            </div>
            <div className="text-2xl font-bold">=</div>
            <div className="bg-yellow-400 text-blue-800 p-4 rounded-lg">
              <p className="text-lg font-semibold">총 절약</p>
              <p className="text-4xl font-bold">67,500원</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
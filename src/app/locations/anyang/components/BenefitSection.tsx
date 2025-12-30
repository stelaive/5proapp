'use client'

import Link from 'next/link'
import { Percent, Gift, Tag, ArrowRight } from 'lucide-react'
import type { RegionData } from '@/lib/regionData'

interface BenefitSectionProps {
  data: RegionData;
}

export default function BenefitSection({ data }: BenefitSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-jalnan">
          {data.nameKo} 사장님들이 5프로를 찾는 이유
        </h2>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">5% 페이백</h3>
            <p className="text-4xl font-bold text-[#42d9de] mb-4">+5%</p>
            <p className="text-gray-600">결제금액의 5% 포인트/현금 페이백<br />작업 완료 후 즉시 적립</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
            <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">추첨 이벤트</h3>
            <p className="text-2xl font-bold text-purple-500 mb-4">매달 100만원의 행운</p>
            <p className="text-gray-600">월 1건 이상 작업 완료 시 자동 참여<br />매달 말일 오후 7시 유튜브 생방송 추첨</p>
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
              <p className="text-lg opacity-80">5% 페이백 (포인트/현금)</p>
              <p className="text-3xl font-bold">17,500원</p>
            </div>
            <div className="text-2xl font-bold">=</div>
            <div className="bg-yellow-400 text-blue-800 p-4 rounded-lg">
              <p className="text-lg font-semibold">총 절약</p>
              <p className="text-4xl font-bold">67,500원</p>
            </div>
          </div>
        </div>

        {/* 하단 고정 문구 - PRD 6-2 */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 참여 조건:</span> 월 1건 이상 작업 완료 시 자동 참여
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 추첨 일시:</span> 매달 말일 오후 7시
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 발표 방식:</span> 유튜브 생방송 + 공지
                </p>
              </div>
              <a
                href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#42d9de] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3bc4c9] transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] text-sm md:text-base"
              >
                <span>🎥 추첨 영상 보기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
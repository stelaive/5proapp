'use client'

import type { RegionData } from '@/lib/regionData'

interface HeroSectionProps {
  data: RegionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const handleCallNow = () => {
    window.location.href = `tel:${data.phone}`
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* 신속함 강조 헤드라인 */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          {data.nameKo} 전지역 스카이차<br />
          <span className="text-[#42d9de]">30분내 긴급 배차!</span><br />
          <span className="text-2xl md:text-3xl text-gray-600">지금 바로 전화하세요</span>
        </h1>

        {/* 대표 전화번호 표시 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto border-4 border-[#42d9de]">
          <div className="text-center">
            <p className="text-lg text-[#42d9de] mb-4 font-bold">▶ {data.nameKo} 현장 기사 직통 연결</p>
            <div className="text-6xl md:text-8xl font-bold text-[#42d9de] mb-4">
              {data.phone}
            </div>
            <p className="text-lg text-gray-600 mb-6 font-semibold">
              365일 24시간 상담 가능, {data.nameKo} 전지역 30분내 도착
            </p>
            <button
              onClick={handleCallNow}
              className="w-full text-white font-bold py-6 px-8 rounded-xl text-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              style={{ backgroundColor: '#42d9de' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3bc4c9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#42d9de';
              }}
            >
              ▶ 전화로 즉시 예약
            </button>
          </div>
        </div>

        {/* 지역 리스트 - SEO 최적화 */}
        <div className="mb-8 p-4 bg-gray-50 rounded-xl max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            {data.subAreas.join(' · ')} 등 {data.nameKo} 전역 어디든 신속하게 달려갑니다.
          </p>
        </div>

        {/* 가격 비교 (기존 내용보다 간소화) */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-2">타사 평균가</p>
              <p className="text-xl text-gray-400 line-through">300,000원</p>
            </div>
            <div className="text-2xl font-bold text-red-500 mx-4">VS</div>
            <div className="text-right">
              <p className="text-sm text-blue-600 mb-2 font-semibold">안양스카이차</p>
              <p className="text-2xl font-bold text-blue-600">250,000원</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <p className="text-red-600 font-bold">
              💰 즉시 50,000원 절약!
            </p>
          </div>
        </div>

        {/* 추가 혜택 미리보기 */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-600"> 
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✔</span>
            결제금액의 5% 포인트/현금 페이백
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✔</span>
            안양 전지역 30분내 배차
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✔</span>
            6년 경력 전문가
          </div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import { Smartphone, Phone, Clock, Award, Gift, AlertTriangle } from 'lucide-react'

export default function ConversionSection() {
  const handleCallNow = () => {
    window.location.href = 'tel:1877-9001'
  }

  const handleAppDownload = () => {
    window.open(
      'https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589',
      '_blank',
    )
  }

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">지금 바로 예약하세요!</h2>
        <p className="text-xl opacity-90 mb-10">
          모든 혜택을 받을 수 있는 마지막 기회입니다
        </p>

        {/* 혜택 요약 */}
        <div className="bg-blue-700/80 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-yellow-300">🎁 받을 수 있는 혜택</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-6 h-6 text-yellow-300" />
              <span>즉시 50,000원 할인</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span>5% 현금 페이백</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span>30분내 배차</span>
            </div>
            <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-1">
              <Award className="w-6 h-6 text-yellow-300" />
              <span>12년 경력 전문가</span>
            </div>
            <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-2">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span>매달 100만 원 추첨</span>
            </div>
          </div>
        </div>

        {/* CTA 버튼 그룹 */}
        <div className="space-y-6 mb-12">
          <button
            onClick={handleAppDownload}
            className="w-full max-w-lg mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-5 px-8 rounded-xl text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center">
              <Smartphone className="w-7 h-7 mr-3" />
              <span>[앱으로 예약] 하고 5% 페이백 + 100만원 행운까지!</span>
            </div>
          </button>
          <button
            onClick={handleCallNow}
            className="w-full max-w-lg mx-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl text-lg border-2 border-blue-400 transition-all duration-200 transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <span>[전화로 빠른 예약] 하셔도 모든 혜택 챙겨드려요!</span>
            </div>
          </button>
          <p className="text-yellow-200 text-lg mt-2">☎️ 1877-9001 (24시간 상담 가능)</p>
        </div>
        
        {/* 긴급 연락 */}
        <div className="mt-16 p-8 bg-blue-900/70 rounded-2xl border border-red-500/50">
          <h4 className="text-2xl font-bold mb-3 text-red-400">🔥 긴급 상황이신가요?</h4>
          <p className="mb-6 opacity-90">24시간 긴급 출동 서비스로 신속하게 해결해 드립니다.</p>
          <button
            onClick={handleCallNow}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
          >
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              <span>긴급 출동 요청</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
} 
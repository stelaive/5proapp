'use client'

import Image from 'next/image'
import { Phone, MapPin, Award, UserCheck, CheckCircle, Smile, ThumbsUp } from 'lucide-react'

export default function ManagerProfileSection() {
  const handleCallNow = () => {
    window.location.href = 'tel:1877-9001'
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          안양 지역담당자 인사말
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* 담당자 프로필 이미지 */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/anyang/ChatGPT Image 2025년 7월 20일 오후 05_44_09.png"
                  alt="정민현 기사 프로필 사진"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* 담당자 소개 */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  안녕하세요! 5프로돌려주는스카이차 안양지역 담당자 <span className="text-blue-600">정민현</span>입니다.
                </h3>
                <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2">
                  <span className="text-blue-800 font-semibold">👷 6년 경력 전문가</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "안양지역의 모든 고소작업은 <span className="font-bold text-blue-600">6년 경력의 저</span>가 가장 안전하고 확실하게 책임지겠습니다.
                  사소한 작업이라도 편하게 연락 주시면 <span className="font-bold text-green-600">친절하게 상담</span>해 드리겠습니다!"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="text-blue-600 mr-2" />
                  <span className="text-gray-700">안양 평촌 거주 (현지인)</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Award className="text-blue-600 mr-2" />
                  <span className="text-gray-700">고소작업 전문 자격증</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="text-blue-600 mr-2" />
                  <span className="text-gray-700">24시간 상담 가능</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <UserCheck className="text-blue-600 mr-2" />
                  <span className="text-gray-700">30분내 현장 도착</span>
                </div>
              </div>

              <button
                onClick={handleCallNow}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="inline-block mr-2" /> 정민현 기사에게 직접 상담받기
              </button>
            </div>
          </div>
        </div>

        {/* 고객 약속 */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">🤝 고객과의 약속</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">안전 최우선</h4>
              <p className="text-sm opacity-90">모든 작업에서 안전을 최우선으로 하며, 철저한 안전점검을 실시합니다.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">친절한 상담</h4>
              <p className="text-sm opacity-90">궁금한 점이 있으시면 언제든 편하게 연락 주세요. 친절하게 답변해드리겠습니다.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">확실한 마무리</h4>
              <p className="text-sm opacity-90">시작한 일은 끝까지 책임지며, 고객님이 만족할 때까지 최선을 다합니다.</p>
            </div>
          </div>
        </div>

        {/* 연락처 강조 - 삭제 또는 간소화 가능 */}
      </div>
    </section>
  )
} 
'use client';

export default function BenefitCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-orange-600">
            앱으로 받을 수 있는 3가지 혜택
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 카드 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  오더 완료 <span className="text-[#42d9de]">5%</span> 페이백
                </h3>
                <p className="text-gray-600">
                  결제금액의 5% 포인트/현금 페이백<br />
                  작업 완료 후 즉시 적립
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-sky-orange-200">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to right, #42d9de, #3bc4c9)' }}>
                  <span className="text-3xl text-white">🎰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  매달 말일 <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, #42d9de, #3bc4c9)' }}>100만원</span> 추첨
                </h3>
                <p className="text-gray-600">
                  500명 중 1명 확률<br />
                  매월 행운의 기회
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">👥</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  친구 5명 초대 <span className="text-[#42d9de]">5만원</span> 보너스
                </h3>
                <p className="text-gray-600">
                  좋은 건 나누고<br />
                  현금은 쌓이고
                </p>
              </div>
            </div>
          </div>

          {/* 하단 고정 문구 - PRD 6-2 */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold">
                    <span className="text-[#42d9de] font-bold">• 참여 조건:</span> 월 1건 이상 작업 완료 시 자동 참여
                  </p>
                  <p className="text-gray-700 font-semibold">
                    <span className="text-[#42d9de] font-bold">• 추첨 일시:</span> 매달 말일 오후 7시
                  </p>
                  <p className="text-gray-700 font-semibold">
                    <span className="text-[#42d9de] font-bold">• 발표 방식:</span> 유튜브 생방송 + 공지
                  </p>
                </div>
                <a
                  href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#42d9de] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3bc4c9] transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px]"
                >
                  <span>🎥 추첨 영상 보기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


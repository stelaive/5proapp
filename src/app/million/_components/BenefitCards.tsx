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
                  오더 완료 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">5%</span> 캐시백
                </h3>
                <p className="text-gray-600">
                  작업 완료 즉시<br />
                  자동으로 5% 페이백
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-sky-orange-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🎰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  매달 말일 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">100만원</span> 추첨
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
                  친구 5명 초대 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">5만원</span> 보너스
                </h3>
                <p className="text-gray-600">
                  좋은 건 나누고<br />
                  현금은 쌓이고
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


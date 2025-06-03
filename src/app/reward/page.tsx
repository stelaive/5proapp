import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Reward() {
  return (
    <main>
      <Navigation currentPage="reward" />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/100만원 이모티콘.png"
            alt="100만원 이모티콘"
            fill
            className="object-contain opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/80 to-orange-500/80"></div>
        </div>
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-white font-jalnan">
              💰 매달 100만원 💰<br />
              받을 수 있는 방법!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              스카이차 한 번만 이용하시면<br />
              자동으로 추첨 대상이 됩니다!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-2xl font-bold text-white mb-4">
                🎯 당첨 확률: 500분의 1
              </p>
              <p className="text-lg text-white">
                매달 1일 추첨, 공정하고 투명하게!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 이벤트 규칙 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              🎲 이벤트 참여 방법
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-4 text-sky-orange-600">STEP 1</h3>
                <p className="text-gray-700">
                  5프로돌려드리는스카이차<br />
                  앱 다운로드
                </p>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🚛</div>
                <h3 className="text-xl font-bold mb-4 text-sky-orange-600">STEP 2</h3>
                <p className="text-gray-700">
                  스카이차 주문<br />
                  (단 1회라도 OK!)
                </p>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-4 text-sky-orange-600">STEP 3</h3>
                <p className="text-gray-700">
                  자동 추첨 등록!<br />
                  매달 1일 결과 발표
                </p>
              </div>
            </div>

            {/* 이벤트 세부 규칙 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
                📋 이벤트 세부 규칙
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-blue-700">✅ 참여 조건</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 당월 내 스카이차 이용 고객</li>
                    <li>• 1회 이용 시 1회 응모</li>
                    <li>• 추가 이용 시 당첨 확률 UP!</li>
                    <li>• 별도 신청 절차 불필요</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4 text-blue-700">🎯 추첨 방식</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 매달 1일 오후 3시 진행</li>
                    <li>• 컴퓨터 난수 생성으로 공정 추첨</li>
                    <li>• 당첨자 개별 연락</li>
                    <li>• 당첨 내역 홈페이지 공개</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 당첨 혜택 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-100 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-700">
                🏆 당첨 혜택
              </h3>
              
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-3xl font-bold text-orange-600 mb-4">
                  현금 100만원
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  세금 별도, 순수 현금 100만원을<br />
                  당첨자 계좌로 직접 입금해드립니다!
                </p>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-800">💡 추가 혜택</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">🎁</span>
                      <span>특별 기념품 증정</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="mr-2">📱</span>
                      <span>SNS 축하 이벤트</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="mr-2">⭐</span>
                      <span>VIP 고객 등급</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 지난 당첨자 */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                🎊 지난 당첨자 발표
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-800">2024년 5월</p>
                    <p className="text-gray-600">김○○님 (서울시 강남구)</p>
                  </div>
                  <div className="text-2xl">🎉</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-800">2024년 4월</p>
                    <p className="text-gray-600">박○○님 (경기도 성남시)</p>
                  </div>
                  <div className="text-2xl">🎉</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-800">2024년 3월</p>
                    <p className="text-gray-600">이○○님 (부산시 해운대구)</p>
                  </div>
                  <div className="text-2xl">🎉</div>
                </div>
              </div>
            </div>

            {/* 자주 묻는 질문 */}
            <div className="bg-white rounded-2xl border-2 border-sky-orange-200 p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-sky-orange-600">
                ❓ 자주 묻는 질문
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">
                    Q. 정말 아무 조건 없이 스카이차 1회 이용만 하면 되나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 네! 당월 내 스카이차를 단 1회라도 이용하시면 자동으로 추첨 대상이 됩니다. 
                    별도의 신청이나 응모 절차는 필요 없습니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">
                    Q. 여러 번 이용하면 당첨 확률이 높아지나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 네! 이용 횟수만큼 응모 기회가 증가합니다. 
                    예를 들어 한 달에 3번 이용하시면 3번의 추첨 기회를 얻으실 수 있습니다.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-bold mb-2 text-gray-800">
                    Q. 당첨되면 어떻게 연락을 받나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 당첨자분께는 등록된 휴대폰 번호로 개별 연락드립니다. 
                    또한 홈페이지와 앱을 통해서도 당첨 결과를 확인하실 수 있습니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">
                    Q. 현금 지급 시 세금은 어떻게 되나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 100만원은 세금 별도 금액입니다. 
                    관련 세금(제세공과금)은 저희가 별도로 처리해드리니 걱정하지 마세요!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 섹션 */}
            <div className="text-center bg-gradient-to-r from-sky-orange-500 to-orange-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                🚀 지금 바로 시작하세요!
              </h3>
              <p className="text-xl mb-8">
                오늘 스카이차 주문하고<br />
                이번 달 100만원의 주인공이 되어보세요!
              </p>
              
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <button className="bg-white text-sky-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 w-full md:w-auto">
                  📱 앱 다운로드
                </button>
                <button className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 w-full md:w-auto">
                  📞 전화 주문: 1877-9001
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
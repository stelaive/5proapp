'use client'

export default function AppSection() {
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight px-2">
            앱, 왜 꼭 설치해야<br className="sm:hidden" /> 할까요?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed px-2">
            일 한번 하시고,<br className="sm:hidden" /> 100만원 부수입의<br className="sm:hidden" /> 주인공이 되세요.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
          {/* 혜택 1 - 100만원 추첨 */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl" style={{ background: 'linear-gradient(to right, rgba(66, 217, 222, 0.1), rgba(59, 196, 201, 0.1))' }}>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#42d9de' }}>
              <span className="text-3xl sm:text-4xl">💰</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                압도적 혜택 ①:<br className="sm:hidden" /> 100만원 추첨 이벤트
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                수원스카이차를 이용해주신<br className="sm:hidden" /> 감사함에 보답하고자,<br />
                앱 설치 후 첫 작업을 완료하신<br className="sm:hidden" /> 모든 사장님께<br className="sm:hidden" /> 100만원의 행운을 드립니다.<br />
                사장님께 이 기회를 드리기 위해<br className="sm:hidden" /> 앱을 만들었습니다.
              </p>
            </div>
          </div>

          {/* 혜택 2 - 내역 확인 */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-50 rounded-2xl">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-3xl sm:text-4xl text-white">💼</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                부가 혜택 ②:<br className="sm:hidden" /> 내 돈, 내역 확인
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                물론, 작업마다 쌓이는<br className="sm:hidden" /> 결제금액의 5% 포인트/현금 페이백과<br className="sm:hidden" /> 과거 작업 내역도<br />
                앱에서 언제든<br className="sm:hidden" /> 투명하게 확인하실 수 있습니다.
              </p>
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

        {/* 최종 CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button
            onClick={handleAppDownload}
            className="w-full max-w-sm sm:max-w-md bg-black hover:bg-gray-800 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-2xl text-lg sm:text-xl md:text-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl leading-tight"
          >
            100만원 행운 잡으러 가기<br className="sm:hidden" />
            <span className="text-sm sm:text-base">(앱 다운로드)</span>
          </button>
        </div>
      </div>
    </section>
  )
} 
'use client'

import type { RegionData } from '@/lib/regionData'

interface HeroSectionProps {
  data: RegionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const handleCallNow = () => {
    window.location.href = `tel:${data.phone}`
  }

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
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* 메인 헤드라인 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight px-2">
          이 가격에,<br className="sm:hidden" />
          <span className="text-[#42d9de]"> 5% 페이백</span><br className="sm:hidden" />까지.
        </h1>

        {/* 서브 헤드라인 */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 leading-relaxed px-4">
          일단 오셨으면,<br className="sm:hidden" /> 사장님은 무조건<br className="sm:hidden" /> 이득입니다.
        </h2>

        {/* 본문 텍스트 */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto px-4 leading-relaxed">
          {data.nameKo} 스카이차는 전화든 앱이든,<br className="sm:hidden" /> 시세보다 5만원 낮은 가격과<br className="sm:hidden" /> 결제금액의 5% 포인트/현금 페이백을 약속합니다.
        </p>
        
        {/* 지역 리스트 - SEO 최적화 */}
        <p className="text-sm md:text-base text-gray-500 mb-12 px-4 max-w-2xl mx-auto">
          {data.subAreas.join(' · ')} 등 {data.nameKo} 전 지역 어디든 30분 이내 신속하게 배차해 드립니다.
        </p>

        {/* 메인 CTA - 전화 예약 */}
        <div className="mb-8 px-4">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 leading-relaxed">
            예약은 전화 한 통이면<br className="sm:hidden" /> 끝납니다.
          </p>
          <button
            onClick={handleCallNow}
            className="w-full max-w-sm sm:max-w-md text-white font-bold py-4 sm:py-6 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl md:text-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-4 leading-tight"
            style={{ backgroundColor: '#42d9de' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3bc4c9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#42d9de';
            }}
          >
            📞 1877-3924<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>지금 바로 예약하기
          </button>
        </div>

        {/* 2차 행동 유도 */}
        <div className="mb-8 px-4">
          <p className="text-sm sm:text-base md:text-lg italic text-gray-600 mb-6 leading-relaxed">
            단, 100만원의 주인공은<br className="sm:hidden" /> 앱 사용자 중에서만<br className="sm:hidden" /> 나옵니다.
          </p>
          <button
            onClick={handleAppDownload}
            className="w-full max-w-sm sm:max-w-md bg-black hover:bg-gray-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg md:text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl leading-tight"
          >
            100만원 행운 잡으러 가기<br className="sm:hidden" />
            <span className="text-sm sm:text-base">(앱 다운로드)</span>
          </button>
        </div>
      </div>
    </section>
  )
} 
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'

// ✏️ 수정하세요: 친구 초대 이벤트 페이지 SEO 설정
export const metadata: Metadata = {
  // ✏️ 수정하세요: 친구초대 페이지 제목 (구글 검색 결과에 나타남)
  title: '친구 5명 초대하고 5만원 받기 - 친구초대 이벤트',
  // ✏️ 수정하세요: 친구초대 페이지 설명 (구글 검색 결과 제목 아래 나타남)
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  // ✏️ 수정하세요: 친구초대 관련 검색 키워드들
  keywords: ['친구초대', '5만원', '이벤트', '추천', '보너스', '스카이차', '현금', '혜택', '바이럴', '공유'],
  
  openGraph: {
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 제목
    title: '친구 5명 초대하고 5만원 받기!',
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 설명
    description: '좋은 건 나누고 현금은 쌓이고! 친구초대 이벤트 참여하세요',
    type: 'website',
    // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸기
    url: 'https://xn--5-w30fr74e.com/reward',
    images: [
      {
        // ✏️ 수정하세요: 친구초대 이벤트 대표 이미지 경로
        url: '/images/친구초대이벤트.png',
        width: 1200,
        height: 630,
        // ✏️ 수정하세요: 이미지 설명
        alt: '친구 초대 이벤트',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 제목
    title: '친구 5명 초대하고 5만원 받기!',
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 설명
    description: '좋은 건 나누고 현금은 쌓이고! 친구초대 이벤트',
    // ✏️ 수정하세요: 트위터용 이미지
    images: ['/images/친구초대이벤트.png'],
  },
  
  alternates: {
    // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸기
    canonical: 'https://xn--5-w30fr74e.com/reward',
  },
  
  other: {
    // 이벤트 관련 메타 정보
    'referral-bonus': '50000 KRW',
    'referral-count': '5',
    'event-type': 'referral',
  }
}

export default function FriendInvitePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="reward" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan">
              친구 <span className="text-yellow-300">5명</span> 초대하고<br />
              <span className="text-yellow-300">5만원</span> 받기!
            </h1>
            <p className="text-xl text-green-100 mb-8">
              좋은 건 나누고 현금은 쌓이고! 무한 반복 가능한 이벤트
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-bold text-yellow-300 mb-2">🎁 특별 혜택!</p>
              <p className="text-green-100">
                친구 5명이 작업 완료하면 <span className="text-yellow-300 font-bold text-xl">5만원 현금 지급!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 참여 방법 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 font-jalnan">
              이렇게 간단하게 5만원을!
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">앱 설치</h3>
                <p className="text-gray-600">5프로스카이차 앱 다운로드</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">초대 코드 공유</h3>
                <p className="text-gray-600">친구들에게 내 초대 코드 전달</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">친구들 작업 완료</h3>
                <p className="text-gray-600">친구 5명이 각각 1건씩 작업</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">5만원 지급</h3>
                <p className="text-gray-600">조건 달성 즉시 현금 지급</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDownload />
    </main>
  )
} 
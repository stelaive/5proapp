import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'

// 메타데이터 추가 (이 페이지가 검색에서 잘 나오게!)
export const metadata: Metadata = {
  // ✏️ 수정하세요: 100만원 이벤트 페이지 제목
  title: '매월 100만원 추첨 이벤트 - 스카이차 1건으로 100만원 도전!',
  // ✏️ 수정하세요: 100만원 이벤트 페이지 설명
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  // ✏️ 수정하세요: 100만원 이벤트 관련 검색 키워드들
  keywords: ['100만원', '추첨', '이벤트', '스카이차', '렌탈', '당첨', '생방송', '현금', '매월', '500명'],
  
  openGraph: {
    title: '매월 100만원 추첨 이벤트 - 500명 중 1명!',
    description: '스카이차 1건으로 100만원 도전! 매월 1일 유튜브 생방송 추첨',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/million',
    images: [
      {
        url: '/images/100만원추첨기.png',
        width: 1200,
        height: 630,
        alt: '100만원 추첨 이벤트',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '매월 100만원 추첨 이벤트 - 스카이차 1건으로 도전!',
    description: '500명 중 1명 확률로 매월 100만원! 지금 바로 참여하세요.',
    images: ['/images/100만원추첨기.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/million',
  },
  
  other: {
    'event-date': '2025-08-01',
    'event-type': 'lottery',
    'prize-amount': '1000000 KRW',
  }
}

export default function MillionPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="million" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan">
              매월 <span className="text-yellow-300">100만원</span> 추첨!
            </h1>
            <p className="text-xl text-red-100 mb-8">
              스카이차 1건으로 100만원 도전! 500명 중 1명의 행운
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-bold text-yellow-300 mb-2">🎉 현재 참여자: 1,247명</p>
              <p className="text-red-100">
                다음 추첨일: <span className="text-yellow-300 font-bold text-xl">2025년 8월 1일</span>
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
              참여 방법이 이렇게 간단해도 되나요?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">앱 설치</h3>
                <p className="text-gray-600">5프로스카이차 앱 다운로드</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">회원가입</h3>
                <p className="text-gray-600">간단한 정보 입력으로 가입</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">스카이차 이용</h3>
                <p className="text-gray-600">월 1건 이상 작업 완료</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">자동 응모</h3>
                <p className="text-gray-600">매월 1일 추첨 대상자 등록</p>
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
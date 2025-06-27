import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'

// 메타데이터 추가 (이 페이지가 검색에서 잘 나오게!)
export const metadata: Metadata = {
  // ✏️ 수정하세요: 100만원 이벤트 페이지 제목
  title: '매월 100만원 추첨 이벤트 - 5프로돌려주는스카이차',
  // ✏️ 수정하세요: 100만원 이벤트 페이지 설명
  description: '스카이차 렌탈 후 매월 100만원 추첨 이벤트에 참여하세요! 월 1건 이상 이용 시 자동 참여, 현재 참여자 1,247명',
  // ✏️ 수정하세요: 100만원 이벤트 관련 검색 키워드들
  keywords: ['100만원추첨', '스카이차이벤트', '매월추첨', '현금상금', '스카이차혜택'],
  
  openGraph: {
    title: '매월 100만원 추첨 이벤트 - 5프로돌려주는스카이차',
    description: '스카이차 렌탈 후 매월 100만원 추첨 이벤트에 참여하세요! 월 1건 이상 이용 시 자동 참여, 현재 참여자 1,247명',
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

export default function Million() {
  return (
    <main>
      <Navigation currentPage="million" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' 
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* 배경 파티클 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white opacity-40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-300 opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-jalnan">
              매월 <span className="text-yellow-300">100만원</span> 추첨!
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              스카이차 1건으로 <span className="font-bold text-yellow-300">100만원</span> 도전! 500명 중 1명의 행운
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-md mx-auto mb-8">
              <div className="text-4xl mb-4">🏆</div>
              <p className="text-yellow-300 font-bold text-lg mb-2">현재 참여자: 1,247명</p>
              <p className="text-white/80">다음 추첨일: <span className="font-bold">2025년 8월 1일</span></p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 참여 방법 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              참여 방법이 이렇게 간단해도 되나요?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "앱 설치", desc: "5프로스카이차 앱 다운로드", icon: "📱" },
              { step: "2", title: "회원가입", desc: "간단한 정보 입력으로 가입", icon: "👤" },
              { step: "3", title: "스카이차 이용", desc: "월 1건 이상 작업 완료", icon: "🚧" },
              { step: "4", title: "자동 응모", desc: "매월 1일 추첨 대상자 등록", icon: "🎯" }
            ].map((item, index) => (
              <AnimatedCard 
                key={index}
                className="text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-jalnan text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* 당첨 확률 섹션 */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-jalnan text-gray-800">
              당첨 확률 높이는 꿀팁! 🍯
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6 text-center">⭐</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">특별 혜택</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구 5명 초대하면 현금 지급!<br />
                <span className="font-bold text-orange-500">5만원 현금 지급</span>
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-6 text-center">🔥</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">월 다음 추첨 최대한 참여</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구 5명의 작업 완료하면 작업 추첨 지급<br />
                <span className="font-bold text-orange-500">친구당 1건씩 최대화</span>
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-6 text-center">🎁</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">최신 대상 혜택</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                매월 작업 5건 이상시 현금지급 추가<br />
                <span className="font-bold text-orange-500">1만원 즉시 지급</span>
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-jalnan">
              지금 바로 참여하세요!
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              매월 100만원의 기회를 놓치지 마세요.<br />
              지금 시작하면 다음 추첨부터 참여 가능합니다!
            </p>
          </AnimatedSection>

          <AnimatedButton 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            📱 지금 앱 다운로드하고 참여하기
          </AnimatedButton>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
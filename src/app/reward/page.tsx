import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'

// ✏️ 수정하세요: 친구 초대 이벤트 페이지 SEO 설정
export const metadata: Metadata = {
  // ✏️ 수정하세요: 친구초대 페이지 제목 (구글 검색 결과에 나타남)
  title: '친구 초대 5명하고 5만원 받기 - 5프로돌려주는스카이차',
  // ✏️ 수정하세요: 친구초대 페이지 설명 (구글 검색 결과 제목 아래 나타남)
  description: '좋은 건 나누고 현금은 챙기자! 친구 5명 초대시 5만원 현금 지급. 쉽고 간단한 친구 초대 이벤트에 참여하세요.',
  // ✏️ 수정하세요: 친구초대 관련 검색 키워드들
  keywords: ['친구초대', '5만원현금', '추천이벤트', '현금지급', '스카이차친구초대'],
  
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

export default function Reward() {
  return (
    <main>
      <Navigation currentPage="reward" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #059669 0%, #065f46 100%)' 
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
              친구 <span className="text-yellow-300">5명</span> 초대하고<br />
              <span className="text-yellow-300">5만원</span> 받기!
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              좋은 건 나누고 현금은 챙기자! 무한 반복 가능한 이벤트
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 max-w-md mx-auto mb-8">
              <div className="text-4xl mb-4">🎁</div>
              <p className="text-yellow-300 font-bold text-lg mb-2">특별 혜택!</p>
              <p className="text-white">친구 5명의 작업 완료하면 <span className="font-bold text-yellow-300">5만원 현금 지급</span></p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4단계 프로세스 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              이렇게 간단하게 5만원을!
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "앱 설치", desc: "5프로스카이차 앱 다운로드", icon: "📱" },
              { step: "2", title: "초대 코드 공유", desc: "친구들에게 내 초대 코드 전달", icon: "💌" },
              { step: "3", title: "친구들 작업 완료", desc: "친구 5명이 각각 1건씩 작업 완료", icon: "✅" },
              { step: "4", title: "5만원 지급", desc: "조건 달성 즉시 현금 지급", icon: "💰" }
            ].map((item, index) => (
              <AnimatedCard 
                key={index}
                className="text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
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

      {/* 혜택 상세 섹션 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-jalnan text-gray-800">
              더 많은 혜택이 기다려요! 💎
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6 text-center">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">무한 반복</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구 초대는 무한 반복 가능!<br />
                <span className="font-bold text-green-500">매번 5만원씩 지급</span>
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-6 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">즉시 지급</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                조건 달성 즉시 현금 지급<br />
                <span className="font-bold text-green-500">최대 24시간 이내</span>
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-6 text-center">🎁</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">추가 혜택</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구도 5% 캐시백 혜택<br />
                <span className="font-bold text-green-500">Win-Win 이벤트</span>
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-jalnan">
              지금 시작하세요!
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              친구들과 함께 혜택을 나누고<br />
              현금도 챙기는 똑똑한 선택을 하세요!
            </p>
          </AnimatedSection>

          <AnimatedButton 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            📱 앱 다운로드하고 친구 초대하기
          </AnimatedButton>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
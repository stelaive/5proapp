import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'

export const metadata: Metadata = {
  // ✏️ 수정하세요: 메인 페이지 제목 (구글 검색 결과에 나타남)
  title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백 + 매월 100만원 추첨',
  // ✏️ 수정하세요: 메인 페이지 설명 (구글 검색 결과 제목 아래 나타남)
  description: '스카이차/크레인 렌탈 후 5% 현금 캐시백! 매월 100만원 추첨 이벤트, 친구 초대시 5만원 보너스까지. 전국 24시간 배차 서비스.',
  // ✏️ 수정하세요: 메인 페이지 검색 키워드들
  keywords: ['스카이차', '크레인', '고소작업차', '렌탈', '캐시백', '5%', '100만원', '추첨', '이벤트'],
  
  openGraph: {
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백',
    description: '스카이차/크레인 렌탈 후 5% 현금 캐시백! 매월 100만원 추첨 이벤트',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com',
    images: [
      {
        url: '/images/스로고1.png',
        width: 1200,
        height: 630,
        alt: '5프로돌려주는스카이차 메인 화면',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '5프로돌려주는스카이차 - 스카이차 렌탈 5% 캐시백',
    description: '스카이차 렌탈하고 5% 돌려받고, 매월 100만원 추첨까지!',
    images: ['/images/스로고1.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com',
  },
  
  other: {
    'application-name': '5프로스카이차',
    'msapplication-TileColor': '#f97316',
    'theme-color': '#f97316',
  }
}

export default function Home() {
  return (
    <main>
      <Navigation currentPage="home" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 bg-black text-white overflow-hidden hero-section">
        <div className="absolute inset-0 z-0" style={{ zIndex: 1 }}>
          <Image
            src="/images/스동8.gif"
            alt="스카이차 작업 현장"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 pr-6">
          <div className="max-w-5xl relative z-10" style={{ zIndex: 10 }}>
            <AnimatedSection 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white font-jalnan" style={{ lineHeight: '1.8' }}>
                스카이차 쓰고 <span className="text-red-500">5%</span> 돌려받고,<br />
                매월 <span className="text-red-500">100만원</span> 행운까지!
              </h1>
            </AnimatedSection>
            
            <AnimatedSection 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-base md:text-xl mb-8 text-white leading-relaxed">
                작업 완료 즉시 자동 페이백!<br />
                회원이라면 누구나 매월 100만원 추첨 대상이 됩니다.
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="download-container"
            >
              <AnimatedButton 
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl download-btn"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                📱 앱 다운로드
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              사장님, 아직도 여러 곳에 전화 돌리세요?
            </h2>
            <p className="text-xl text-red-500 mb-16 font-medium">
              이제 <span className="font-bold">한 번의 클릭</span>으로 모든 것이 해결됩니다!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan">5% 캐시백</h3>
              <p className="text-gray-600 leading-relaxed">
                작업 완료 즉시 5% 현금 출러<br />받기
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan">100만원 추첨</h3>
              <p className="text-gray-600 leading-relaxed">
                매월 1회 성실송 추첨 이벤트
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan">친구 초대</h3>
              <p className="text-gray-600 leading-relaxed">
                친구 5명 초대하고 5만원 받<br />기
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 100만원 추첨 섹션 */}
      <section 
        className="py-20 relative overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg mb-8">
              🎊 특별 이벤트
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white font-jalnan">
              매월 <span className="text-yellow-300">100만원</span> 추첨!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              스카이차 1건으로 <span className="font-bold text-yellow-300">100만원</span> 도전! 500명 중 1명의 행운
            </p>
          </AnimatedSection>

          <AnimatedSection 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-md mx-auto mb-12">
              <div className="text-4xl mb-4">🏆</div>
              <p className="text-yellow-300 font-bold text-lg mb-2">현재 참여자: 1,247명</p>
              <p className="text-white/80">다음 추첨일: <span className="font-bold">2025년 8월 1일</span></p>
            </div>
          </AnimatedSection>

          <AnimatedButton 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            지금 참여하기 🚀
          </AnimatedButton>
        </div>
      </section>

      {/* 4단계 프로세스 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              참여 방법이 이렇게 간단해도 되나요?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "앱 설치", desc: "5프로스카이차 앱 다운로드" },
              { step: "2", title: "회원가입", desc: "간단한 정보 입력으로 가입" },
              { step: "3", title: "스카이차 이용", desc: "월 1건 이상 작업 완료" },
              { step: "4", title: "자동 응모", desc: "매월 1일 추첨 대상자 등록" }
            ].map((item, index) => (
              <AnimatedCard 
                key={index}
                className="text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 font-jalnan text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-jalnan">
              지금 시작하세요!
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              스카이차 렌탈 5% 캐시백과 매월 100만원 추첨의 기회를<br />
              놓치지 마세요. 지금 바로 시작하실 수 있습니다.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <AnimatedButton 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              📱 앱 다운로드
            </AnimatedButton>
            
            <AnimatedButton 
              className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              📞 전화 상담받기
            </AnimatedButton>
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
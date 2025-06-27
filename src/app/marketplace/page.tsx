import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '일거리장터 - 전국 건설현장 네트워킹 플랫폼',
  description: '전국 건설현장의 동료들과 소통하고 일거리를 주고받는 네트워킹 플랫폼. 어려운 현장 문제도 함께 해결하고, 새로운 기회도 만나보세요.',
  keywords: ['일거리장터', '건설현장네트워킹', '동료찾기', '현장문제해결', '건설업정보'],
  
  openGraph: {
    title: '일거리장터 - 현장 전문가들의 소통 공간',
    description: '일은 나누고 기술은 더하는 No.1 현장 전문가 커뮤니티',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/marketplace',
    images: [
      {
        url: '/images/일거리장터히어로섹션.gif',
        width: 1200,
        height: 630,
        alt: '일거리장터 - 현장 전문가 커뮤니티',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '일거리장터 - 현장 전문가들의 소통 공간',
    description: '일은 나누고 기술은 더하는 현장 커뮤니티',
    images: ['/images/일거리장터히어로섹션.gif'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/marketplace',
  },
}

// 스크롤바 숨기기 스타일 추가
const scrollbarHideStyle = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
} as React.CSSProperties

// 업종 데이터
const industries = [
  { name: '에어컨', icon: '❄️', posts: 12345, todayPosts: 56 },
  { name: '욕실리모델링', icon: '🚿', posts: 9876, todayPosts: 43 },
  { name: '유품정리', icon: '📦', posts: 7654, todayPosts: 32 },
  { name: 'CCTV', icon: '📹', posts: 6543, todayPosts: 28 },
  { name: '건설', icon: '🏗️', posts: 8765, todayPosts: 38 },
  { name: '철거', icon: '🏚️', posts: 5432, todayPosts: 25 },
  { name: '닥트공사', icon: '🔧', posts: 4321, todayPosts: 22 },
  { name: '전기공사', icon: '⚡', posts: 3456, todayPosts: 18 },
  { name: '외벽청소', icon: '🧹', posts: 2345, todayPosts: 15 },
  { name: '설비', icon: '🔨', posts: 3456, todayPosts: 20 },
  { name: '인테리어', icon: '🏠', posts: 7890, todayPosts: 35 },
  { name: '조경공사', icon: '🌳', posts: 6789, todayPosts: 30 },
  { name: '전등교체', icon: '💡', posts: 4567, todayPosts: 24 },
  { name: '금속공사', icon: '⚒️', posts: 5678, todayPosts: 27 },
  { name: '페인트', icon: '🎨', posts: 3456, todayPosts: 19 },
  { name: '판넬', icon: '🏢', posts: 2345, todayPosts: 16 },
  { name: '지붕공사', icon: '🏡', posts: 4321, todayPosts: 23 },
  { name: '간판', icon: '🚧', posts: 3456, todayPosts: 21 },
  { name: '실리콘코킹', icon: '🔨', posts: 3456, todayPosts: 21 },
  { name: '태양광설치', icon: '☀️', posts: 3456, todayPosts: 21 },
  { name: '타일시공', icon: '🔲', posts: 3456, todayPosts: 21 },
  { name: '방수공사', icon: '💧', posts: 3456, todayPosts: 21 },
  { name: '창호공사', icon: '🪟', posts: 3456, todayPosts: 21 }
];

// 게시판 탭 데이터
const boardTabs = [
  {
    name: '자유수다',
    posts: [
      { title: '오늘 현장에서 있었던 일...', comments: 23, likes: 45 },
      { title: '장비 추천좀 해주세요', comments: 15, likes: 32 },
      { title: '신입 기술자분들 필독!', comments: 18, likes: 28 }
    ]
  },
  {
    name: '질문답변',
    posts: [
      { title: '이런 상황일 때는 어떻게...?', comments: 34, likes: 56 },
      { title: '자격증 준비 꿀팁', comments: 28, likes: 42 },
      { title: '공구 사용법 질문', comments: 19, likes: 35 }
    ]
  }
];

// 긴급 일거리 데이터
const urgentJobs = [
  {
    location: '서울 강남구',
    date: '2024-03-20',
    pay: '450,000원',
    type: '전기 공사',
    deadline: 1
  },
  {
    location: '경기 성남시',
    date: '2024-03-21',
    pay: '380,000원',
    type: '설비 공사',
    deadline: 2
  }
];

export default function Marketplace() {
  return (
    <main>
      <Navigation currentPage="marketplace" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* 배경 파티클 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 opacity-30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300 opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-300 opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-jalnan">
              전국 건설현장이<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                하나로 연결됩니다
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
              혼자 해결하기 어려운 현장 문제, 부족한 장비나 인력...<br />
              이제 전국의 동료들과 함께 해결하세요
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 max-w-md mx-auto mb-8">
              <p className="text-yellow-300 font-bold text-lg mb-2">✨ 현재 가입자</p>
              <p className="text-white text-3xl font-bold">2,847명</p>
              <p className="text-white/80 text-sm">매일 증가하는 현장 동료들</p>
            </div>
          </AnimatedSection>

          <AnimatedButton
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            지금 동료들 만나러 가기 🚀
          </AnimatedButton>
        </div>
      </section>

      {/* 히어로 이미지 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/일거리장터히어로섹션.gif"
              alt="일거리장터 히어로"
              width={1000}
              height={600}
              className="mx-auto rounded-2xl shadow-2xl"
              unoptimized
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 핵심 기능 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              현장 동료들과 함께하는 새로운 방식
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전국의 건설현장 전문가들이 모여 정보를 공유하고 서로 도움을 주고받습니다
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan text-center">동료 네트워킹</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                전국의 건설현장 전문가들과<br />
                연결되어 정보를 공유하세요
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-6xl mb-6 text-center">💼</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan text-center">일거리 공유</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                남는 일거리는 공유하고<br />
                필요한 일거리는 요청하세요
              </p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-6xl mb-6 text-center">❓</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-jalnan text-center">현장 Q&A</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                어려운 현장 문제를<br />
                동료들과 함께 해결하세요
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 첫 번째 이미지 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/일거리장터첫번째.PNG"
              alt="일거리장터 첫번째 기능"
              width={800}
              height={600}
              className="mx-auto rounded-2xl shadow-2xl"
              unoptimized
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 실제 후기 섹션 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              실제 동료들의 후기
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              일거리장터를 통해 새로운 기회를 만난 동료들의 진솔한 이야기
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  김○○
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">김○○ 사장님</h3>
                  <p className="text-gray-600">서울 강서구 / 3.5톤 스카이차</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "혼자 감당하기 어려운 대형 현장이 있었는데, 일거리장터에서 만난 동료 덕분에 무사히 완료했습니다. 
                이제는 서로 도움을 주고받는 든든한 파트너가 되었어요!"
              </p>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0/5.0</span>
              </div>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  박○○
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">박○○ 사장님</h3>
                  <p className="text-gray-600">인천 부평구 / 25톤 크레인</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "일이 없는 날이 많아 고민이었는데, 일거리장터 덕분에 일감을 꾸준히 받을 수 있게 되었습니다. 
                매출이 30% 이상 늘었어요!"
              </p>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0/5.0</span>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 두 번째 이미지 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/일거리장터두번째.PNG"
              alt="일거리장터 두번째 기능"
              width={800}
              height={600}
              className="mx-auto rounded-2xl shadow-2xl"
              unoptimized
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 가입 혜택 섹션 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              가입하면 이런 혜택이!
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🎁", title: "가입 즉시", desc: "환영 포인트 1만원" },
              { icon: "🏆", title: "첫 거래", desc: "성공 보너스 2만원" },
              { icon: "👥", title: "친구 추천", desc: "건당 5천원 적립" },
              { icon: "⭐", title: "우수 회원", desc: "매월 특별 혜택" }
            ].map((benefit, index) => (
              <AnimatedCard 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* 세 번째 이미지 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/일거리장터세번째.PNG"
              alt="일거리장터 세번째 기능"
              width={800}
              height={600}
              className="mx-auto rounded-2xl shadow-2xl"
              unoptimized
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 마지막 CTA 섹션 */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1C2A39' }}>
        {/* 파티클 효과를 위한 배경 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white opacity-20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-white">
              든든한 동료 한 명이,<br />열 개의 장비보다 낫습니다.
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              지금 바로 '일거리장터'에 가입하고, 필요할 때 일을 맡아줄 동료, 막혔을 때 답을 줄 동료를 만나보세요.<br />
              혼자 모든 것을 해결해야 했던 현장은 이제 끝입니다.
            </p>
          </AnimatedSection>
          
          <AnimatedButton 
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-600 transition-all inline-flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span>내 현장 동료 만나러 가입하기</span>
            <span className="text-2xl">→</span>
          </AnimatedButton>
          
          <div className="mt-16 pt-8 border-t border-gray-700 text-gray-500 text-sm">
            <p>© 2024 일거리장터. All rights reserved.</p>
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  );
} 
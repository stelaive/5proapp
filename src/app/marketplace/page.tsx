import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'

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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/marketplace-hero.jpg"
            alt="일거리 장터 배경"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-orange-500 bg-opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-jalnan leading-tight">
              일거리장터<br />
              <span className="text-3xl md:text-4xl">18개 업종이 모이는<br />현장형 커뮤니티</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              정보·기술·일거리, 필요한 건 여기서 해결!
            </p>
          </div>
        </div>
      </section>

      {/* 업종별 커뮤니티 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            업종별 전문가를 만나보세요!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-2">{industry.icon}</div>
                <h3 className="font-bold mb-2">{industry.name}</h3>
                <div className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  게시글 {industry.posts.toLocaleString()}<br />
                  오늘 새 글 {industry.todayPosts}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 정보/기술/후기 허브 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            지식은 나눌수록 커집니다
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex mb-8 border-b">
              {boardTabs.map((tab, index) => (
                <button
                  key={index}
                  className="px-6 py-3 font-bold text-lg hover:text-orange-500 transition-colors"
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {boardTabs[0].posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-bold mb-2">{post.title}</h3>
                  <div className="text-sm text-gray-600">
                    댓글 {post.comments} · 추천 {post.likes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 일거리 매칭 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            못 가는 현장, 동료에게 넘기세요
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {urgentJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      급구
                    </span>
                    <h3 className="text-xl font-bold mt-2">{job.type}</h3>
                  </div>
                  <div className="text-orange-500 font-bold">
                    마감 D-{job.deadline}
                  </div>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>📍 {job.location}</p>
                  <p>📅 {job.date}</p>
                  <p>💰 {job.pay}</p>
                </div>
                <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                  지원하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-jalnan">
            가입·글쓰기 3분이면 끝!
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: '가입은 어떻게 하나요?', a: '앱 설치 후 휴대폰 번호로 간단히 가입할 수 있습니다.' },
              { q: '글은 누구나 쓸 수 있나요?', a: '네, 가입만 하시면 바로 글을 쓰실 수 있습니다.' },
              { q: '반장/팀장은 어떻게 되나요?', a: '활동 점수와 평판에 따라 자동으로 선정됩니다.' }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="font-bold mb-2">Q. {faq.q}</h3>
                <p className="text-gray-600">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-jalnan">
            현장의 모든 이야기,<br />일거리장터에서!
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
              앱 설치하기
            </button>
            <button className="bg-transparent text-white px-6 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-black transition-all">
              문의하기
            </button>
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  );
} 
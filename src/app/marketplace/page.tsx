'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'

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

// 애니메이션 variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function Marketplace() {
  // 앱 다운로드 함수
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    }
  };

  return (
    <main>
      <Navigation currentPage="marketplace" />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/일거리장터히어로섹션.gif"
            alt="일거리 장터 배경"
            fill
            className="object-cover opacity-60"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        </div>
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-4xl text-left md:text-left">
            <motion.h1 
              className="text-6xl md:text-8xl font-extrabold mb-6 font-jalnan leading-tight text-white text-center md:text-left"
              variants={fadeInUp}
            >
              일은 나누고<br />
              기술은 더하는
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl mb-8 font-medium leading-relaxed text-center md:text-left"
              style={{ color: '#E0E0E0' }}
              variants={fadeInUp}
            >
              <span className="block md:hidden">
                No.1 현장 전문가 커뮤니티,<br />일거리장터
              </span>
              <span className="hidden md:block">
                대한민국 현장 전문가들의 필수 커뮤니티,<br />일거리장터
              </span>
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 메인 섹션 1: 핵심 기능 허브 */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-jalnan text-gray-800"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            사장님의 일감은 늘고, 고민은 줄어드는 공간
          </motion.h2>
          {/* 데스크톱: 2열 그리드 */}
          <motion.div 
            className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* 일거리 나누기 카드 */}
            <motion.div
              className="bg-white rounded-xl p-8 text-center cursor-pointer group"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}
              variants={scaleIn}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-6xl mb-6 text-orange-500 transform group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-500 transition-colors">
                일거리 나누기 (품앗이)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                갑자기 못 가게 된 현장, 믿을 수 있는 동료에게 맡기세요. 내가 하기 힘든 일도 전문가 동료와 함께 해결해보세요.
              </p>
            </motion.div>

            {/* 기술/정보 공유 카드 */}
            <motion.div
              className="bg-white rounded-xl p-8 text-center cursor-pointer group"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}
              variants={scaleIn}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-6xl mb-6 text-orange-500 transform group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-500 transition-colors">
                기술/정보 공유
              </h3>
              <p className="text-gray-600 leading-relaxed">
                현장에서 막혔던 기술 문제, 궁금했던 정보들을 각 분야 전문가 동료들에게 바로 물어보고 명쾌한 답을 얻으세요.
              </p>
            </motion.div>
          </motion.div>

          {/* 모바일: 가로 스와이프 */}
          <div className="md:hidden max-w-sm mx-auto">
            <motion.div
              className="flex overflow-x-auto space-x-4 pb-4 px-4"
              style={{ 
                scrollSnapType: 'x mandatory',
                ...scrollbarHideStyle
              }}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
            >
              {/* 일거리 나누기 카드 */}
              <motion.div
                className="bg-white rounded-xl p-6 text-center flex-shrink-0 w-80"
                style={{ 
                  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                  scrollSnapAlign: 'start'
                }}
                variants={scaleIn}
              >
                <div className="text-5xl mb-4 text-orange-500">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  일거리 나누기 (품앗이)
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  갑자기 못 가게 된 현장, 믿을 수 있는 동료에게 맡기세요. 내가 하기 힘든 일도 전문가 동료와 함께 해결해보세요.
                </p>
              </motion.div>

              {/* 기술/정보 공유 카드 */}
              <motion.div
                className="bg-white rounded-xl p-6 text-center flex-shrink-0 w-80"
                style={{ 
                  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                  scrollSnapAlign: 'start'
                }}
                variants={scaleIn}
              >
                <div className="text-5xl mb-4 text-orange-500">💡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  기술/정보 공유
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  현장에서 막혔던 기술 문제, 궁금했던 정보들을 각 분야 전문가 동료들에게 바로 물어보고 명쾌한 답을 얻으세요.
                </p>
              </motion.div>
            </motion.div>
            
            {/* 스와이프 힌트 */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">← 옆으로 넘겨보세요 →</p>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 2: 실시간 커뮤니티 피드 */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-jalnan text-gray-800"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            오늘, 현장 동료들은 이런 이야기를 나눕니다
          </motion.h2>
          
          {/* 뉴스 티커 스타일 게시글 피드 */}
          <motion.div 
            className="bg-gray-50 rounded-xl p-6 max-w-4xl mx-auto overflow-hidden"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            {/* 자동 스크롤 애니메이션 컨테이너 */}
            <div className="h-80 overflow-hidden relative">
              <motion.div
                className="space-y-3"
                animate={{ y: [0, -400] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                {/* 첫 번째 세트 */}
                {[
                  { tag: '스카이 후기', color: 'bg-green-500', text: '군포시 OOO스카이 기사님, 시간 약속 칼이시네요!', time: '방금 전' },
                  { tag: '긴급 품앗이', color: 'bg-orange-500', text: '내일 오전 안양에서 1톤 스카이 필요하신 분! (마감 임박)', time: '2분 전' },
                  { tag: '질문답변', color: 'bg-blue-500', text: '이 모델 CCTV 부품 어디서 구하죠? (답변 3개)', time: '5분 전' },
                  { tag: '정보공유', color: 'bg-purple-500', text: '욕실 리모델링 신소재 정보 공유드려요', time: '8분 전' },
                  { tag: '기술문의', color: 'bg-red-500', text: '전기 배선 이상 증상, 어떻게 해결하셨나요?', time: '12분 전' },
                  { tag: '현장후기', color: 'bg-teal-500', text: '성남 아파트 외벽청소 완료! 깨끗하게 잘 됐네요', time: '15분 전' },
                  { tag: '품앗이', color: 'bg-orange-500', text: '수원 지역 철거 작업 도움 필요합니다', time: '18분 전' },
                  { tag: '기술공유', color: 'bg-indigo-500', text: '방수공사 신기법 영상 공유합니다', time: '22분 전' }
                ].map((post, index) => (
                  <motion.div
                    key={`first-${index}`}
                    className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => alert('로그인 후 확인하실 수 있습니다')}
                  >
                    <span className={`${post.color} text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap`}>
                      {post.tag}
                    </span>
                    <span className="text-gray-700 group-hover:text-orange-500 transition-colors flex-1 truncate">
                      {post.text}
                    </span>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{post.time}</span>
                  </motion.div>
                ))}
                
                {/* 두 번째 세트 (무한 루프를 위한 복사본) */}
                {[
                  { tag: '스카이 후기', color: 'bg-green-500', text: '군포시 OOO스카이 기사님, 시간 약속 칼이시네요!', time: '방금 전' },
                  { tag: '긴급 품앗이', color: 'bg-orange-500', text: '내일 오전 안양에서 1톤 스카이 필요하신 분! (마감 임박)', time: '2분 전' },
                  { tag: '질문답변', color: 'bg-blue-500', text: '이 모델 CCTV 부품 어디서 구하죠? (답변 3개)', time: '5분 전' },
                  { tag: '정보공유', color: 'bg-purple-500', text: '욕실 리모델링 신소재 정보 공유드려요', time: '8분 전' },
                  { tag: '기술문의', color: 'bg-red-500', text: '전기 배선 이상 증상, 어떻게 해결하셨나요?', time: '12분 전' },
                  { tag: '현장후기', color: 'bg-teal-500', text: '성남 아파트 외벽청소 완료! 깨끗하게 잘 됐네요', time: '15분 전' },
                  { tag: '품앗이', color: 'bg-orange-500', text: '수원 지역 철거 작업 도움 필요합니다', time: '18분 전' },
                  { tag: '기술공유', color: 'bg-indigo-500', text: '방수공사 신기법 영상 공유합니다', time: '22분 전' }
                ].map((post, index) => (
                  <motion.div
                    key={`second-${index}`}
                    className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => alert('로그인 후 확인하실 수 있습니다')}
                  >
                    <span className={`${post.color} text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap`}>
                      {post.tag}
                    </span>
                    <span className="text-gray-700 group-hover:text-orange-500 transition-colors flex-1 truncate">
                      {post.text}
                    </span>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{post.time}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* 그라데이션 페이드 효과 */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center mt-6 text-gray-500 text-sm">
              ※ 위 게시글은 예시입니다. 실제 커뮤니티는 앱 출시 후 이용 가능합니다.
            </div>
          </motion.div>
        </div>
      </section>

      {/* 메인 섹션 3: 업종별 동료 찾기 */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-6 font-jalnan text-gray-800"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            물론, 사장님의 업종 동료도 여기에!
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 text-lg"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            사장님의 업종을 선택하고 진짜 동료들의 이야기를 들어보세요.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 text-center cursor-pointer group"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                variants={scaleIn}
                whileHover={{ 
                  y: -2, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => alert(`현재 ${industry.name} 전문가 ${Math.floor(Math.random() * 200 + 50)}명이 활동 중입니다`)}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition-colors">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 푸터 영역 및 최종 CTA */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1C2A39' }}>
        {/* 파티클 효과를 위한 배경 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white opacity-20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-white"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            든든한 동료 한 명이,<br />열 개의 장비보다 낫습니다.
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            지금 바로 '일거리장터'에 가입하고, 필요할 때 일을 맡아줄 동료, 막혔을 때 답을 줄 동료를 만나보세요.<br />
            혼자 모든 것을 해결해야 했던 현장은 이제 끝입니다.
          </motion.p>
          
          <motion.button 
            onClick={handleAppDownload}
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-600 transition-all inline-flex items-center gap-3"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            <span>내 현장 동료 만나러 가입하기</span>
            <span className="text-2xl">→</span>
          </motion.button>
          
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
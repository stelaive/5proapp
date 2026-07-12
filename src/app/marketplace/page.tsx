'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon, type IconName } from '@/components/ui/icon'

// 스크롤바 숨기기 스타일 추가
const scrollbarHideStyle = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
} as React.CSSProperties

// 일거리장터 앱 스토어 URL
const JOBHUB_ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.jobhubapp&pcampaignid=web_share';
const JOBHUB_IOS_URL = 'https://apps.apple.com/kr/app/%EC%9D%BC%EA%B1%B0%EB%A6%AC%EC%9E%A5%ED%84%B0/id6759076369';

// 업종 데이터
const industries = [
  { name: '에어컨', icon: 'Snowflake', posts: 12345, todayPosts: 56 },
  { name: '욕실리모델링', icon: 'ShowerHead', posts: 9876, todayPosts: 43 },
  { name: '유품정리', icon: 'Package', posts: 7654, todayPosts: 32 },
  { name: 'CCTV', icon: 'Cctv', posts: 6543, todayPosts: 28 },
  { name: '건설', icon: 'HardHat', posts: 8765, todayPosts: 38 },
  { name: '철거', icon: 'Hammer', posts: 5432, todayPosts: 25 },
  { name: '닥트공사', icon: 'Wrench', posts: 4321, todayPosts: 22 },
  { name: '전기공사', icon: 'Zap', posts: 3456, todayPosts: 18 },
  { name: '외벽청소', icon: 'Brush', posts: 2345, todayPosts: 15 },
  { name: '설비', icon: 'Hammer', posts: 3456, todayPosts: 20 },
  { name: '인테리어', icon: 'Home', posts: 7890, todayPosts: 35 },
  { name: '조경공사', icon: 'TreePine', posts: 6789, todayPosts: 30 },
  { name: '전등교체', icon: 'Lightbulb', posts: 4567, todayPosts: 24 },
  { name: '금속공사', icon: 'Hammer', posts: 5678, todayPosts: 27 },
  { name: '페인트', icon: 'Palette', posts: 3456, todayPosts: 19 },
  { name: '판넬', icon: 'Building2', posts: 2345, todayPosts: 16 },
  { name: '지붕공사', icon: 'House', posts: 4321, todayPosts: 23 },
  { name: '간판', icon: 'TrafficCone', posts: 3456, todayPosts: 21 },
  { name: '실리콘코킹', icon: 'Hammer', posts: 3456, todayPosts: 21 },
  { name: '태양광설치', icon: 'Sun', posts: 3456, todayPosts: 21 },
  { name: '타일시공', icon: 'Grid3x3', posts: 3456, todayPosts: 21 },
  { name: '방수공사', icon: 'Droplet', posts: 3456, todayPosts: 21 },
  { name: '창호공사', icon: 'AppWindow', posts: 3456, todayPosts: 21 }
];

// 중고장터 매물 예시 데이터
const usedItems = [
  { name: '진공펌프 (냉동공조용)', price: '85,000원', location: '경기 수원', tag: '거의 새것', icon: 'Wrench' },
  { name: '고소작업 안전벨트 세트', price: '45,000원', location: '서울 강서', tag: '판매중', icon: 'HardHat' },
  { name: '타일 절단기', price: '120,000원', location: '인천 부평', tag: '판매중', icon: 'Grid3x3' },
  { name: '전동 드릴 세트', price: '65,000원', location: '경기 성남', tag: '예약중', icon: 'Drill' }
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
  // 일거리장터 앱 다운로드 함수 (플랫폼 자동 감지)
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open(JOBHUB_IOS_URL, '_blank');
    } else {
      // Android 및 데스크톱/기타 기기 - 플레이스토어로 기본 이동
      window.open(JOBHUB_ANDROID_URL, '_blank');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/app-marketplace-hero.gif"
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

            {/* 앱 다운로드 버튼 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
              variants={fadeInUp}
            >
              <a
                href={JOBHUB_ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play에서 일거리장터 다운로드"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#F97316' }}
              >
                <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"/>
                </svg>
                <span>Google Play 다운로드</span>
              </a>
              <a
                href={JOBHUB_IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store에서 일거리장터 다운로드"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-lg font-bold text-white border-2 border-white/70 bg-white/10 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
              >
                <svg width="22" height="22" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>App Store 다운로드</span>
              </a>
            </motion.div>
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
              <div className="text-6xl mb-6 text-orange-500 transform group-hover:scale-110 transition-transform duration-300"><Icon name="Handshake" size={56} /></div>
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
              <div className="text-6xl mb-6 text-orange-500 transform group-hover:scale-110 transition-transform duration-300"><Icon name="Lightbulb" size={56} /></div>
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
                <div className="text-5xl mb-4 text-orange-500"><Icon name="Handshake" size={48} /></div>
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
                <div className="text-5xl mb-4 text-orange-500"><Icon name="Lightbulb" size={48} /></div>
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
                  <Icon name={industry.icon as IconName} size={40} />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition-colors">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 메인 섹션 4: 중고장터 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 font-jalnan text-gray-800"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            폐업 장비도, 특수 장비도<br className="md:hidden" /> 여기서 사고팔아요
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 text-lg leading-relaxed"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            동네 중고앱엔 수요가 없던 진공펌프·특수 공구도,<br className="hidden md:block" />
            기술자들이 모인 <span className="font-bold text-orange-500">중고장터</span>에선 제값 받고 팔고 합리적으로 삽니다.
          </motion.p>

          {/* 데스크톱: 4열 그리드 / 모바일: 가로 스와이프 */}
          <motion.div
            className="hidden md:grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {usedItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.15)', transition: { duration: 0.3 } }}
                onClick={() => alert('로그인 후 확인하실 수 있습니다')}
              >
                <div className="h-32 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:text-orange-500 transition-colors">
                  <Icon name={item.icon as IconName} size={48} />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-50 text-orange-500">{item.tag}</span>
                    <span className="text-xs text-gray-400">{item.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1 truncate">{item.name}</h3>
                  <p className="text-lg font-extrabold text-gray-900">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="md:hidden max-w-sm mx-auto">
            <motion.div
              className="flex overflow-x-auto space-x-4 pb-4 px-1"
              style={{ scrollSnapType: 'x mandatory', ...scrollbarHideStyle }}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
            >
              {usedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-44"
                  style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', scrollSnapAlign: 'start' }}
                  onClick={() => alert('로그인 후 확인하실 수 있습니다')}
                >
                  <div className="h-28 flex items-center justify-center bg-gray-100 text-gray-400">
                    <Icon name={item.icon as IconName} size={42} />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-orange-500">{item.tag}</span>
                      <span className="text-[10px] text-gray-400">{item.location}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1 truncate">{item.name}</h3>
                    <p className="text-base font-extrabold text-gray-900">{item.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">← 옆으로 넘겨보세요 →</p>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            ※ 위 매물은 예시입니다. 실제 거래는 앱 출시 후 이용 가능합니다.
          </div>
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
            className="text-white px-8 py-4 rounded-full text-xl font-bold transition-all inline-flex items-center gap-3"
            style={{ backgroundColor: '#F97316' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EA580C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F97316';
            }}
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
            <span className="text-2xl"><Icon name="ArrowRight" size={28} /></span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

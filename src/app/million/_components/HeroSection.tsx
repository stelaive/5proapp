'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { WINNER_HISTORY } from '../_constants/data';
import { useCountdown } from '../_hooks/useCountdown';
import { handleAppDownload } from '../_utils/download';
import { fadeInUp, staggerContainer, bounceIn, scaleIn } from '../_constants/animations';

export default function HeroSection() {
  const { timeLeft, isEventStarted, targetDate, formatKoreanDate } = useCountdown();

  return (
    <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden hero-section">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/달력에서_D_Day_타이머로.gif"
          alt="배경 이미지"
          fill
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* 역대 당첨자 명단 - 히어로 섹션 상단 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-6 border-2 border-yellow-400/30"
              variants={fadeInUp}
            >
              <h4 className="text-center text-yellow-300 font-black text-xl mb-4 flex items-center justify-center">
                <span className="mr-2">🏆</span>
                실제 당첨자 명단
                <span className="ml-2">🏆</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {WINNER_HISTORY.map((winner) => (
                  <motion.div 
                    key={winner.round}
                    className={`bg-gradient-to-br ${winner.style.gradient} rounded-lg p-4 text-center border-2 ${winner.style.border} relative overflow-hidden`}
                    whileHover={{ scale: 1.03, borderColor: winner.style.hoverBorder }}
                    transition={{ duration: 0.2 }}
                  >
                    {winner.isNew && (
                       <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                       NEW
                     </div>
                    )}
                    <div className="text-yellow-300 font-bold text-base mb-1">{winner.style.badge} 제{winner.round}회</div>
                    <div className="text-white font-black text-lg mb-2">{winner.winner}</div>
                    {winner.job && (
                        <div className="text-white/80 text-sm mb-2">{winner.job}</div>
                    )}
                    <motion.a
                      href={winner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full font-bold text-xs transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🎬 추첨 영상 보기
                    </motion.a>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-yellow-200 text-sm mt-4 font-semibold">
                ✨ 유튜브 생방송으로 투명하게 공개된 추첨 과정!
              </p>
            </motion.div>

            <motion.div
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{ background: 'linear-gradient(to right, #42d9de, #3bc4c9)' }}
              variants={fadeInUp}
            >
              <span className="text-black font-black text-sm md:text-base">
                🔥 제5회 진행 중 | 역대 4명 당첨!
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white font-jalnan"
              variants={fadeInUp}
            >
              말일마다 100만원,<br />
              5%는 기본! 🎰
            </motion.h1>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6"
              variants={fadeInUp}
            >
              <p className="text-xl md:text-2xl text-yellow-300 font-bold">
                ✨ 업계 No.1 스카이차 플랫폼이 사장님들께 드리는 역대급 혜택!
              </p>
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200"
              variants={fadeInUp}
            >
              오더 1건만 넘기면 500명 중 1명 확률 그대로<br />
              매달 말일, 행운의 주인공이 되어보세요!
            </motion.p>
            
            {/* D-Day 카운트다운 */}
            <motion.div 
              className="p-6 rounded-xl mb-8"
              style={{ background: 'linear-gradient(to right, #42d9de, #3bc4c9)' }}
              variants={bounceIn}
            >
              <h3 className="text-white text-xl font-bold mb-4">{formatKoreanDate(targetDate)} 추첨까지</h3>
              {!isEventStarted ? (
                <motion.div 
                  className="grid grid-cols-4 gap-4 text-center"
                  variants={staggerContainer}
                >
                  {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                    <motion.div 
                      key={unit}
                      className="bg-white bg-opacity-20 rounded-lg p-3"
                      variants={bounceIn}
                    >
                      <div className="text-2xl font-bold">
                        {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                      </div>
                      <div className="text-sm">
                        {unit === 'days' ? '일' : unit === 'hours' ? '시간' : unit === 'minutes' ? '분' : '초'}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-6">D-DAY!</h3>
                  <motion.a
                    href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🎥 지금 바로 추첨생방송 보러가기
                  </motion.a>
                </motion.div>
              )}
            </motion.div>

            {/* 제5회 진행 중 배너 */}
            <motion.div 
              className="rounded-xl p-6 mb-6 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(to right, #42d9de, #3bc4c9, #42d9de)' }}
              variants={fadeInUp}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 40px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.5)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-3">
                  <span className="text-white font-bold text-sm">🔥 현재 진행 중</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  ⭐ 제5회 100만원 추첨 이벤트 ⭐
                </h3>
                <p className="text-white/90 text-base md:text-lg font-semibold mb-3">
                  지금 참여하면 당신이 다음 주인공!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                    💰 역대 당첨자 4명 배출!
                  </span>
                  <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                    🎯 다음은 당신 차례!
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <motion.button 
                onClick={handleAppDownload}
                className="text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#42d9de' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3bc4c9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#42d9de';
                }}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎰 지금 바로 참여하기
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center items-center mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[320px] h-[640px]">
              {/* 핸드폰 프레임 */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* 노치 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                  
                  {/* 앱 콘텐츠 - 내 지갑 페이지 */}
                  <div className="w-full h-full overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {/* 헤더 */}
                    <header className="flex items-center justify-between bg-white px-5 py-4 sticky top-0 z-10 border-b border-gray-200 pt-12">
                      <button className="flex w-12 h-12 items-center justify-start text-gray-900">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h1 className="text-xl font-extrabold text-gray-900">내 지갑</h1>
                      <button className="flex w-12 h-12 items-center justify-end text-gray-900">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </header>

                    {/* 메인 콘텐츠 */}
                    <main className="flex-1 overflow-y-auto pb-20">
                      {/* 포인트 카드 섹션 */}
                      <section className="px-5 pt-2 pb-6">
                        {/* 포인트 카드 */}
                        <div className="relative w-full overflow-hidden rounded-2xl bg-slate-800 shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                          <div className="absolute right-[-20px] top-[-20px] h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"></div>
                          <div className="relative z-10 p-6 flex flex-col items-center text-center">
                            <p className="text-gray-300 text-lg font-medium mb-1">보유 포인트</p>
                            <h2 className="text-white text-[32px] font-black tracking-tight mb-6">150,000 P</h2>
                            <button className="w-full max-w-[280px] rounded-xl bg-cyan-400 py-3.5 text-gray-900 text-lg font-bold shadow-md hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                              <span>지금 출금하기</span>
                            </button>
                          </div>
                        </div>

                        {/* 포인트 내역 리스트 */}
                        <div className="mt-6 flex flex-col gap-3">
                          <p className="text-lg font-bold text-gray-900 px-1">최근 입출금 내역</p>
                          
                          {/* 내역 아이템 1 */}
                          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-4">
                              <div className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                                <span className="text-2xl">%</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900 leading-tight">장비 사용 페이백 (5%)</span>
                                <span className="text-sm text-gray-500 mt-0.5">12.24 14:30</span>
                              </div>
                            </div>
                            <span className="text-lg font-bold text-cyan-400">+17,500 P</span>
                          </div>

                          {/* 내역 아이템 2 */}
                          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-4">
                              <div className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                                <span className="text-2xl">🎉</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900 leading-tight">이벤트 당첨금</span>
                                <span className="text-sm text-gray-500 mt-0.5">12.20 09:00</span>
                              </div>
                            </div>
                            <span className="text-lg font-bold text-cyan-400">+500 P</span>
                          </div>
                        </div>
                      </section>

                      {/* 구분선 */}
                      <div className="h-3 bg-gray-100"></div>

                      {/* 작업 기록 섹션 */}
                      <section className="px-5 py-6">
                        <div className="flex items-end justify-between mb-5">
                          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">이번 달 작업 기록</h2>
                        </div>

                        {/* 요약 위젯 */}
                        <div className="mb-6 flex items-center justify-between rounded-2xl bg-gray-100 p-5 border border-gray-100">
                          <div>
                            <p className="text-lg text-gray-600 font-medium mb-1">이번 달 완료</p>
                            <p className="text-[28px] font-black text-gray-900 leading-none">총 <span className="text-cyan-400">5</span>건</p>
                          </div>
                          <button className="group flex items-center gap-1 rounded-lg bg-white px-4 py-3 text-base font-bold text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                            달력 보기
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* 작업 리스트 */}
                        <div className="space-y-4">
                          {/* 작업 아이템 1 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.25 (수)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">강남역 외벽 청소</h3>
                            <p className="mt-2 text-base text-gray-500 truncate">메모: 3층 창틀 집중 케어 요청</p>
                          </div>

                          {/* 작업 아이템 2 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.22 (일)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">서초동 빌라 입주 청소</h3>
                            <p className="mt-2 text-base text-gray-500 truncate">특이사항 없음</p>
                          </div>

                          {/* 작업 아이템 3 */}
                          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-base font-medium text-gray-600">12.18 (수)</span>
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">완료</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">논현동 사무실 정기 청소</h3>
                          </div>
                        </div>
                      </section>
                    </main>

                    {/* 하단 네비게이션 */}
                    <nav className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-white">
                      <div className="flex h-[72px] items-center justify-around px-2">
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="text-xs font-medium">홈</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-cyan-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-xs font-bold">출금하기</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs font-medium">채팅</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-xs font-medium">고객모드</span>
                        </button>
                        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-xs font-medium">내프로필</span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


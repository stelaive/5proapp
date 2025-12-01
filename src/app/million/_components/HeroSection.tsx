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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full mb-4"
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
              className="bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-xl mb-8"
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
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-6 mb-6 text-center relative overflow-hidden"
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
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎰 지금 바로 참여하기
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📱
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">스마트폰 목업</h3>
              <p className="text-gray-300">
                앱 설치 후 바로 시작!<br />
                간단한 작업 1건으로 100만원 도전
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


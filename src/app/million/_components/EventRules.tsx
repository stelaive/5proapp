'use client';

import { motion } from 'framer-motion';
import { useParticipants } from '../_hooks/useParticipants';
import { staggerContainer, scaleIn } from '../_constants/animations';

export default function EventRules() {
  const { currentParticipants, currentWinners } = useParticipants();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 font-jalnan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🎰 이벤트 규칙
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-16 text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            참여자가 늘수록 당첨자도 늘어나요! 하지만 당첨 확률은 언제나 동일합니다.
          </motion.p>

          {/* 계단형 인포그래픽 */}
          <motion.div 
            className="bg-white rounded-2xl p-10 shadow-lg mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* 300~500명 */}
              <motion.div 
                className={`p-8 rounded-xl text-center transition-all duration-500 ${
                  currentParticipants >= 300 && currentParticipants <= 500 
                    ? 'bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse shadow-xl' 
                    : currentParticipants > 500
                    ? 'bg-gradient-to-r from-green-300 to-green-500 text-white opacity-80'
                    : 'bg-white border-3 border-gray-300 text-gray-600'
                }`}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                style={currentParticipants < 300 ? { 
                  borderWidth: '3px',
                  borderStyle: 'solid'
                } : {}}
              >
                <div className={`text-lg mb-3 font-bold ${currentParticipants >= 300 ? 'text-white' : 'text-gray-600'}`}>
                  300~500명
                </div>
                <div className={`text-3xl font-black mb-2 ${currentParticipants >= 300 ? 'text-white' : 'text-gray-800'}`}>
                  1명
                </div>
                {currentParticipants >= 300 && currentParticipants <= 500 && (
                  <motion.div 
                    className="text-sm mt-2 text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    현재 단계 ✨
                  </motion.div>
                )}
                {currentParticipants > 500 && (
                  <div className="text-xs mt-2 text-white font-medium">
                    완료 ✓
                  </div>
                )}
              </motion.div>

              {/* 501~1000명 */}
              <motion.div 
                className={`p-8 rounded-xl text-center transition-all duration-500 ${
                  currentParticipants >= 501 && currentParticipants <= 1000 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white animate-pulse shadow-xl' 
                    : currentParticipants > 1000 
                    ? 'bg-gradient-to-r from-blue-300 to-blue-500 text-white opacity-80' 
                    : 'bg-white border-3 border-gray-300 text-gray-600'
                }`}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                style={currentParticipants < 501 ? { 
                  borderWidth: '3px',
                  borderStyle: 'solid'
                } : {}}
              >
                <div className={`text-lg mb-3 font-bold ${currentParticipants >= 501 ? 'text-white' : 'text-gray-600'}`}>
                  501~1000명
                </div>
                <div className={`text-3xl font-black mb-2 ${currentParticipants >= 501 ? 'text-white' : 'text-gray-800'}`}>
                  2명
                </div>
                {currentParticipants >= 501 && currentParticipants <= 1000 && (
                  <motion.div 
                    className="text-sm mt-2 text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    현재 단계 ✨
                  </motion.div>
                )}
                {currentParticipants > 1000 && (
                  <div className="text-xs mt-2 text-white font-medium">
                    완료 ✓
                  </div>
                )}
                {currentParticipants < 501 && (
                  <div className="text-xs mt-2 text-gray-500 font-medium">
                    다음 단계
                  </div>
                )}
              </motion.div>

              {/* 1001~1500명 */}
              <motion.div 
                className={`p-8 rounded-xl text-center transition-all duration-500 ${
                  currentParticipants >= 1001 && currentParticipants <= 1500 
                    ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white animate-pulse shadow-xl' 
                    : currentParticipants > 1500 
                    ? 'bg-gradient-to-r from-purple-300 to-purple-500 text-white opacity-80' 
                    : 'bg-white border-3 border-gray-300 text-gray-600'
                }`}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                style={currentParticipants < 1001 ? { 
                  borderWidth: '3px',
                  borderStyle: 'solid'
                } : {}}
              >
                <div className={`text-lg mb-3 font-bold ${currentParticipants >= 1001 ? 'text-white' : 'text-gray-600'}`}>
                  1001~1500명
                </div>
                <div className={`text-3xl font-black mb-2 ${currentParticipants >= 1001 ? 'text-white' : 'text-gray-800'}`}>
                  3명
                </div>
                {currentParticipants >= 1001 && currentParticipants <= 1500 && (
                  <motion.div 
                    className="text-sm mt-2 text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    현재 단계 ✨
                  </motion.div>
                )}
                {currentParticipants > 1500 && (
                  <div className="text-xs mt-2 text-white font-medium">
                    완료 ✓
                  </div>
                )}
                {currentParticipants < 1001 && (
                  <div className="text-xs mt-2 text-gray-500 font-medium">
                    다음 단계
                  </div>
                )}
              </motion.div>

              {/* 1501명+ */}
              <motion.div 
                className={`p-8 rounded-xl text-center transition-all duration-500 ${
                  currentParticipants >= 1501 
                    ? 'bg-gradient-to-r from-orange-400 to-red-600 text-white animate-pulse border-2 border-orange-500' 
                    : 'bg-white border-3 border-dashed border-gray-400 text-gray-700'
                }`}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                style={currentParticipants < 1501 ? { 
                  borderWidth: '3px',
                  borderStyle: 'dashed'
                } : {}}
              >
                <div className={`text-lg mb-3 font-bold ${currentParticipants >= 1501 ? 'text-white' : 'text-gray-600'}`}>
                  1501명+
                </div>
                <div className={`text-3xl font-black mb-2 ${currentParticipants >= 1501 ? 'text-white' : 'text-gray-800'}`}>
                  4명+
                </div>
                {currentParticipants >= 1501 && (
                  <motion.div 
                    className="text-sm mt-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    현재 단계 ✨
                  </motion.div>
                )}
                {currentParticipants < 1501 && (
                  <div className="text-xs mt-2 text-gray-500 font-medium">
                    다음 단계
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 현재 참여자 수 */}
          <motion.div 
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="text-white font-bold text-sm">🎯 제5회 이벤트</span>
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              현재 참여자 현황
            </motion.h3>
            <motion.div 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                bounce: 0.4
              }}
            >
              {currentParticipants.toLocaleString()}명
            </motion.div>
            <motion.div 
              className="text-2xl mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              이번 달 당첨자: {currentWinners}명
            </motion.div>
            <motion.div 
              className="w-full bg-white bg-opacity-30 rounded-full h-6 mb-4"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div 
                className="bg-white h-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min((currentParticipants / 2000) * 100, 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              ></motion.div>
            </motion.div>
            <motion.p 
              className="text-lg opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              참여자가 늘수록 당첨자도 증가!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


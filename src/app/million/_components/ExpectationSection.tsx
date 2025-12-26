'use client';

import { motion } from 'framer-motion';
import { handleAppDownload } from '../_utils/download';

export default function ExpectationSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block bg-yellow-400 text-purple-900 px-5 py-2 rounded-full mb-6 font-black"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡ 제5회 참여자 모집 중!
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              🌟 제5회 주인공, 바로 당신일 수 있습니다!
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-xl font-bold mb-2">매달 새로운 기회</h3>
                <p className="text-white/80">역대 당첨자 배출!<br />제5회는 당신 차례!</p>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/50"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-300">단 1건의 오더로</h3>
                <p className="text-white/80">복잡한 조건 없이<br />오더 1건이면 참여 완료!</p>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">🎊</div>
                <h3 className="text-xl font-bold mb-2">실제 100만원 지급</h3>
                <p className="text-white/80">허위 없음! 영상으로<br />당첨 과정 100% 공개</p>
              </motion.div>
            </div>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎰 지금 바로 참여하기
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


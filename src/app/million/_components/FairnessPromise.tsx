'use client';

import { motion } from 'framer-motion';

export default function FairnessPromise() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                🔒 공정한 추첨을 약속합니다
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                매달 말일 오후 7시, 유튜브 생방송을 통해<br />
                모든 추첨 과정을 실시간으로 공개합니다.
              </p>
              <div className="mt-8">
                <a
                  href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  <span>유튜브 채널 바로가기</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


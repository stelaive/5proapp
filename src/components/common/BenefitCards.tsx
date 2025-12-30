// file: src/components/common/BenefitCards.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

import type { RegionData } from '@/lib/regionData'

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  data?: RegionData;
}

const Benefits: React.FC<BenefitsProps> = ({ benefits, data }) => {
  return (
    <motion.section
      variants={staggerContainer(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={fadeInUp()}
            className="text-center p-6 bg-white rounded-2xl shadow-md h-full flex flex-col"
          >
            <div className="flex justify-center mb-4" style={{ color: '#42d9de' }}>{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 flex-grow">{benefit.description}</p>
          </motion.div>
        ))}
        </div>

        {data && (
          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 shadow-sm">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 참여 조건:</span> 월 1건 이상 작업 완료 시 자동 참여
                  </p>
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 추첨 일시:</span> 매달 말일 오후 7시
                  </p>
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 발표 방식:</span> 유튜브 생방송 + 공지
                  </p>
                </div>
                <a
                  href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#42d9de] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3bc4c9] transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] text-sm md:text-base"
                >
                  <span>🎥 추첨 영상 보기</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Benefits; 
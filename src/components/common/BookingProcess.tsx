// file: src/components/common/BookingProcess.tsx
import React from 'react';
import { Phone, Calendar, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const steps = [
  { icon: <Phone size={32} />, title: "위치 / 층수", description: "작업 위치와 층수를 알려주세요." },
  { icon: <Calendar size={32} />, title: "작업 내용 / 시간", description: "작업 내용과 예상 시간을 안내해주세요." },
  { icon: <Truck size={32} />, title: "전화 상담 후 확정 → 출동", description: "전화 상담으로 최종 확정 후 현장 출동합니다." },
];

const BookingProcess: React.FC = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">간편 예약 3단계</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp(0.2 * (index + 1))} className="flex flex-col items-center">
              <div className="p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(66, 217, 222, 0.1)', color: '#42d9de' }}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 통화 전 준비물 - PRD 6-5 */}
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 rounded-xl p-6 md:p-8 border-2 border-blue-200">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            📋 통화 전 준비물
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-2">
              <span className="text-[#42d9de] font-bold">•</span>
              <span className="text-gray-700">주소</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#42d9de] font-bold">•</span>
              <span className="text-gray-700">층수</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#42d9de] font-bold">•</span>
              <span className="text-gray-700">작업 내용</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#42d9de] font-bold">•</span>
              <span className="text-gray-700">사진 (있으면 빠름)</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BookingProcess; 
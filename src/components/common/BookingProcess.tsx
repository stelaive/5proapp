// file: src/components/common/BookingProcess.tsx
import React from 'react';
import { Phone, Calendar, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const steps = [
  { icon: <Phone size={32} />, title: "전화/카톡 상담", description: "현장 상황에 맞는 최적의 장비와 시간을 상담합니다." },
  { icon: <Calendar size={32} />, title: "예약 확정", description: "원하시는 날짜와 시간에 맞춰 예약을 확정합니다." },
  { icon: <Truck size={32} />, title: "신속 배차", description: "약속된 시간에 정확히 현장으로 출동합니다." },
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
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BookingProcess; 
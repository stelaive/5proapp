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

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
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
            <div className="flex justify-center mb-4" style={{ color: '#F97316' }}>{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 flex-grow">{benefit.description}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits; 
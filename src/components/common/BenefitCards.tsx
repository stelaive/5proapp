// file: src/components/common/BenefitCards.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
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
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={fadeInUp()}
            className="text-center p-6 bg-white rounded-2xl shadow-md h-full flex flex-col"
          >
            <div className="flex justify-center mb-4 text-primary">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 flex-grow">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Benefits; 
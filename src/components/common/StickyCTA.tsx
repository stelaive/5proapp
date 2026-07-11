// file: src/components/common/StickyCTA.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import useScrollVisibility from '@/hooks/useScrollVisibility';

interface StickyCTAProps {
  phone: string;
  chatLink?: string; // 옵셔널로 유지 (기존 코드 호환성)
}

const StickyCTA: React.FC<StickyCTAProps> = ({ phone }) => {
  const isVisible = useScrollVisibility(200); // 200px 스크롤 후 나타남
  const shouldReduceMotion = useReducedMotion();

  const ctaVariants = {
    hidden: { y: '100%' },
    visible: { 
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 30 }
    },
  };

  if (shouldReduceMotion) {
    ctaVariants.hidden.y = '0%';
  }

  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-200 z-40 md:hidden"
      role="complementary"
      aria-label="빠른 상담 연결"
    >
      <div className="flex justify-center items-center">
        <Link
          href={`tel:${phone.replace(/-/g, '')}`}
          className="w-full max-w-md text-center bg-[#F97316] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#EA580C] transition-all duration-300 shadow-lg min-h-[44px] flex items-center justify-center"
        >
          📞 지금 전화하기
        </Link>
      </div>
    </motion.div>
  );
};

export default StickyCTA; 
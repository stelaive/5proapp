// file: src/components/common/StickyCTA.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import useScrollVisibility from '@/hooks/useScrollVisibility';

interface StickyCTAProps {
  phone: string;
  chatLink: string;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ phone, chatLink }) => {
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
      <div className="flex justify-around items-center gap-4">
        <Link
          href={`tel:${phone}`}
          className="flex-1 text-center bg-primary text-white font-bold py-3 px-4 rounded-xl"
        >
          전화 상담
        </Link>
        <Link
          href={chatLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-yellow-400 text-black font-bold py-3 px-4 rounded-xl"
        >
          카톡 상담
        </Link>
      </div>
    </motion.div>
  );
};

export default StickyCTA; 
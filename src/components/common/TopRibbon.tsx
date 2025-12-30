// file: src/components/common/TopRibbon.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface TopRibbonProps {
  text: string;
  linkUrl: string;
  linkLabel: string;
}

const ribbonVariants = {
  initial: { y: '-100%' },
  animate: { 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 1, // 페이지 로드 후 1초 뒤에 나타남
    },
  },
  exit: { y: '-100%' }
};

const TopRibbon: React.FC<TopRibbonProps> = ({ text, linkUrl, linkLabel }) => {
  return (
    <motion.div
      variants={ribbonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-white text-center p-2 text-sm font-semibold motion-safe:animate-slideIn"
      style={{ backgroundColor: '#004CFF' }}
      aria-live="polite"
    >
      <span>{text}</span>
      <Link href={linkUrl} className="font-bold underline ml-4 transition-colors" style={{ color: '#C0D3FF' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E7EEFF'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#C0D3FF'; }} aria-label={linkLabel}>
        {linkLabel} &rarr;
      </Link>
    </motion.div>
  );
};

export default TopRibbon; 
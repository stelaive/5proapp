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
      className="bg-secondary text-white text-center p-2 text-sm font-semibold motion-safe:animate-slideIn"
      aria-live="polite"
    >
      <span>{text}</span>
      <Link href={linkUrl} className="font-bold underline ml-4 hover:text-primary-200 transition-colors" aria-label={linkLabel}>
        {linkLabel} &rarr;
      </Link>
    </motion.div>
  );
};

export default TopRibbon; 
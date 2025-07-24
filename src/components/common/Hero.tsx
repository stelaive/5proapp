// file: src/components/common/Hero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText1: string;
  ctaLink1: string;
  ctaText2: string;
  ctaLink2: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText1, ctaLink1, ctaText2, ctaLink2, imageUrl }) => {
  // 사용자 기기 감지하여 앱스토어 링크 결정
  const getAppStoreLink = () => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        // iOS 기기 - App Store 링크
        return 'https://apps.apple.com/kr/app/스카이차-견적/id6443631999';
      } else if (/Android/.test(userAgent)) {
        // Android 기기 - Google Play Store 링크
        return 'https://play.google.com/store/apps/details?id=com.skycar.app';
      }
    }
    // 기본값 또는 서버사이드 렌더링시 - Play Store
    return 'https://play.google.com/store/apps/details?id=com.skycar.app';
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] text-white">
      <Image
        src={imageUrl}
        alt="군포 스카이차 작업 배경"
        fill
        style={{ objectFit: 'cover' }}
        quality={90}
        priority // LCP(Largest Contentful Paint) 최적화
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center p-4"
      >
        <motion.h1
          variants={fadeInUp()}
          className="text-4xl md:text-5xl font-extrabold mb-4 font-jalnan"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeInUp(0.4)}
          className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200"
        >
          {subtitle}
        </motion.p>
        <motion.div variants={fadeInUp(0.6)} className="flex flex-col sm:flex-row gap-4">
          <Link
            href={ctaLink1}
            aria-label={ctaText1}
            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-2xl text-lg motion-safe:hover:scale-105 transition-transform shadow-lg"
          >
            {ctaText1}
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp(0.8)} className="mt-6">
          <Link
            href={getAppStoreLink()}
            aria-label={ctaText2}
            className="text-gray-200 hover:text-white underline underline-offset-4 text-base transition-colors"
          >
            또는, {ctaText2}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
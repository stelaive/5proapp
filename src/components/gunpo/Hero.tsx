// file: src/components/gunpo/Hero.tsx
import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  return (
    <section className="relative h-[60vh] text-white">
      <Image
        src={imageUrl}
        alt="군포 스카이차 작업 배경"
        fill
        style={{ objectFit: 'cover' }}
        quality={80}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">{subtitle}</p>
        <a
          href={ctaLink}
          aria-label={ctaText}
          className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-transform transform hover:scale-105"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero; 
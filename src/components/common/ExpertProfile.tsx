// file: src/components/common/ExpertProfile.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ExpertProfileProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  experienceYears: number;
}

const ExpertProfile: React.FC<ExpertProfileProps> = ({ name, title, bio, imageUrl, experienceYears }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp()}
      className="py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image
            src={imageUrl}
            alt={`${name} 기사님 프로필 사진`}
            width={400}
            height={400}
            className="rounded-full shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">베테랑 기사님, {name}</h2>
          <p className="text-secondary font-semibold text-lg mb-4">{title} ({experienceYears}년 경력)</p>
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertProfile; 
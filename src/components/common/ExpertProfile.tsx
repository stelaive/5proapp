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
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <Image
                src={imageUrl}
                alt={`${name} 기사님 프로필 사진`}
                width={400}
                height={400}
                className="rounded-full shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">{experienceYears}년</div>
                  <div className="text-xs">경력</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              베테랑 기사님,<br className="hidden lg:block" />
              <span className="text-blue-600">{name}</span>
            </h2>
            <p className="text-blue-700 font-bold text-xl lg:text-2xl mb-6 bg-blue-100 inline-block px-4 py-2 rounded-full">
              {title}
            </p>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6">
              {bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-blue-600 font-bold">✓ 안전 최우선</span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-green-600 font-bold">✓ 완벽한 마무리</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertProfile; 
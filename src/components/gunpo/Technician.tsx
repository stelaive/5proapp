// file: src/components/gunpo/Technician.tsx
import React from 'react';
import Image from 'next/image';

interface TechnicianProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  experienceYears: number;
}

const Technician: React.FC<TechnicianProps> = ({ name, title, bio, imageUrl, experienceYears }) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image 
            src={imageUrl} 
            alt={`${name} 기사님 프로필`} 
            width={400} 
            height={400} 
            className="rounded-full shadow-lg" 
            loading="lazy" 
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-2">베테랑 기사님, {name}</h2>
          <p className="text-secondary font-semibold text-lg mb-4">{title} ({experienceYears}년 경력)</p>
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Technician; 
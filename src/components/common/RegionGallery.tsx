'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  date?: string;
  location?: string;
  category?: string;
}

interface RegionGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
}

const RegionGallery = ({ title, subtitle, images }: RegionGalleryProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-jalnan">
            {title || "현장 작업 갤러리"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle || "실제 현장에서 검증된 5프로의 숙련된 작업 사례입니다."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {image.category && (
                    <span className="inline-block px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full mb-3 self-start">
                      {image.category}
                    </span>
                  )}
                  <p className="text-white font-bold text-lg mb-1">{image.alt}</p>
                  <div className="flex items-center text-gray-300 text-sm gap-3">
                    {image.location && <span>📍 {image.location}</span>}
                    {image.date && <span>📅 {image.date}</span>}
                  </div>
                </div>
              </div>
              
              {/* 모바일 가시성을 위한 하단 텍스트 (호버하지 않아도 보임) */}
              <div className="p-4 md:hidden bg-white">
                <p className="text-gray-900 font-bold">{image.alt}</p>
                <div className="flex items-center text-gray-500 text-xs mt-1 gap-2">
                  {image.location && <span>{image.location}</span>}
                  {image.date && <span>{image.date}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionGallery;

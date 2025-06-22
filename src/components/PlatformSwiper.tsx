'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Platform {
  name: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
}

interface PlatformSwiperProps {
  platforms: Platform[];
}

export default function PlatformSwiper({ platforms }: PlatformSwiperProps) {
  return (
    <div className="max-w-sm mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="platform-swiper"
      >
        {platforms.map((platform, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center mb-8" style={{ color: '#374151' }}>
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: platform.color }}>
                {platform.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {platform.description}
              </p>
              <ul className="space-y-2 text-left text-sm">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="mr-2" style={{ color: platform.color }}>✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 
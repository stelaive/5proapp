'use client'

import Image from 'next/image'
import type { RegionData } from '@/lib/regionData'

interface HeroSectionProps {
  data: RegionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gray-900 text-white overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/anyang/anyang-sky-car-night-work.png"
          alt={`${data.nameKo} ${data.subAreas.slice(0, 3).join(', ')} 스카이차 전문 배차 서비스`}
          fill
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* 배지 */}
        <span 
          className="inline-block text-white px-4 py-2 rounded-full font-bold text-sm mb-4"
          style={{ backgroundColor: '#42d9de' }}
        >
          서울 {data.nameKo} 전지역 배차 가능 🚀
        </span>
        
        {/* H1 - 지역명 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-jalnan">
          {data.nameKo} 스카이차
        </h1>
        
        {/* 서브 카피 */}
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          {data.hero.subCopy}
        </p>
        
        {/* 지역 리스트 - SEO 최적화 */}
        <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {data.subAreas.join(' · ')} 등 {data.nameKo} 전 지역 어디든 30분 이내 신속하게 배차해 드립니다.
        </p>
        
        {/* 메인 전화번호 CTA - 최우선 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-6 inline-block border border-white/20 max-w-md">
          <p className="text-gray-300 mb-3 text-sm md:text-base">365일 24시간 신속 배차 문의</p>
          <a 
            href={`tel:${data.phone.replace(/-/g, '')}`}
            className="block min-h-[60px] md:min-h-[80px] flex items-center justify-center"
          >
            <span className="text-4xl md:text-6xl font-black text-yellow-400 hover:text-yellow-300 transition-colors">
              {data.phone}
            </span>
          </a>
          <p className="text-xs md:text-sm text-gray-400 mt-3">👆 번호를 누르면 바로 연결됩니다</p>
        </div>

        {/* 보조 CTA - 앱 다운로드 */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all min-h-[44px] flex items-center justify-center"
            style={{ backgroundColor: '#42d9de' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3bc4c9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#42d9de';
            }}
          >
            앱 설치하고 5% 할인받기
          </a>
        </div>
      </div>
    </section>
  );
}

// file: src/app/locations/gunpo/page.tsx
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { CheckCircle, Zap, Gift, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

// 컴포넌트 동적 임포트
const Hero = dynamic(() => import('@/components/common/Hero'))
const Benefits = dynamic(() => import('@/components/common/BenefitCards'))
const VehicleSelector = dynamic(() => import('@/components/gunpo/VehicleSelector'))
const ExpertProfile = dynamic(() => import('@/components/common/ExpertProfile'))

const PriceTable = dynamic(() => import('@/components/common/PriceTable'))
const Gallery = dynamic(() => import('@/components/common/Gallery'))
const Testimonials = dynamic(() => import('@/components/common/Testimonials'))
const FAQ = dynamic(() => import('@/components/common/FAQ'))
const CTA = dynamic(() => import('@/components/common/CTA'))
const BookingProcess = dynamic(() => import('@/components/common/BookingProcess'))
const StickyCTA = dynamic(() => import('@/components/common/StickyCTA'))

// 카피 데이터 임포트
import gunpoCopy from '@/content/gunpoCopy.json'
import { gunpoPriceData, gunpoCalculatorOptions } from '@/lib/priceData'

export default function GunpoPage() {
  // 아이콘 목록 정의 (필요에 따라 추가 가능)
  const benefitIcons = [
    <Zap size={48} key="zap" />, 
    <Gift size={48} key="gift" />, 
    <Clock size={48} key="clock" />, 
    <CheckCircle size={48} key="check" />
  ]

  // benefits 배열 길이에 맞춰 아이콘을 매핑
  const benefitsWithIcons = gunpoCopy.benefits.map((benefit, idx) => ({
    icon: benefitIcons[idx % benefitIcons.length],
    title: benefit.title,
    description: benefit.desc,
  }))

  return (
    <>
      <Hero
        title={gunpoCopy.hero.headline}
        subtitle={gunpoCopy.hero.sub}
        ctaText1={gunpoCopy.hero.btnTel}
        ctaLink1="tel:1877-3924"
        ctaText2={gunpoCopy.hero.btnChat}
        ctaLink2="https://open.kakao.com/o/sA763Sbg"
        imageUrl="/images/고기싸롱 간판 설치 작업.png"
      />
      <Benefits benefits={benefitsWithIcons} />
      
      {/* 혜택 카드 하단 고정 문구 - PRD 6-2 */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 참여 조건:</span> 월 1건 이상 작업 완료 시 자동 참여
                  </p>
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 추첨 일시:</span> 매달 말일 오후 7시
                  </p>
                  <p className="text-gray-700 font-semibold text-sm md:text-base">
                    <span className="text-[#42d9de] font-bold">• 발표 방식:</span> 유튜브 생방송 + 공지
                  </p>
                </div>
                <a
                  href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#42d9de] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3bc4c9] transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] text-sm md:text-base"
                >
                  <span>🎥 추첨 영상 보기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleSelector vehicles={gunpoCopy.vehicleSelector.vehicles} />
      <ExpertProfile
        name={gunpoCopy.technician.name}
        title={gunpoCopy.technician.title}
        bio={gunpoCopy.technician.bio}
        imageUrl="/images/김민철.png"
        experienceYears={parseInt(gunpoCopy.technician.experience)}
      />
      <PriceTable
        title="군포 스카이차 가격표"
        subtitle="합리적인 스카이차 가격으로 부담 없이! 추가 비용 없는 투명한 요금제입니다."
        priceData={gunpoPriceData}
        calculatorOptions={gunpoCalculatorOptions}
        region="군포"
        className="bg-gray-50"
      />
      <BookingProcess />
      <Gallery images={gunpoCopy.gallery.images} />
      <Testimonials testimonials={gunpoCopy.testimonials.reviews} />
      <FAQ faqs={gunpoCopy.faq} />
      <CTA
        title={gunpoCopy.cta.title}
        description={gunpoCopy.cta.subtitle}
        buttonText={gunpoCopy.cta.button}
        phone="1877-3924"
      />
      <StickyCTA phone="1877-3924" chatLink="https://open.kakao.com/o/sA763Sbg" />
    </>
  )
} 
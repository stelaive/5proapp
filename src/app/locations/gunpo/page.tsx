// file: src/app/locations/gunpo/page.tsx
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { CheckCircle, Zap, Gift, Clock } from 'lucide-react'

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
        ctaLink1="tel:1877-9001"
        ctaText2={gunpoCopy.hero.btnChat}
        ctaLink2="https://open.kakao.com/o/sA763Sbg"
        imageUrl="/images/고기싸롱 간판 설치 작업.png"
      />
      <Benefits benefits={benefitsWithIcons} />
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
        phone="1877-9001"
      />
      <StickyCTA phone="1877-9001" chatLink="https://open.kakao.com/o/sA763Sbg" />
    </>
  )
} 
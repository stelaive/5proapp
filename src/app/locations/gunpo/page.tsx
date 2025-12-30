// file: src/app/locations/gunpo/page.tsx
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { CheckCircle, Zap, Gift, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { GUNPO_DATA } from '@/lib/regionData'
import LocalAreaList from '@/components/common/LocalAreaList'
import TrustEmblems from '@/components/common/TrustEmblems'
import DispatchStatusBanner from '@/components/common/DispatchStatusBanner'
import PriceCalculator from '@/components/common/PriceCalculator'

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
  const data = GUNPO_DATA;
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
      <DispatchStatusBanner />
      <Hero
        title={gunpoCopy.hero.headline}
        subtitle={gunpoCopy.hero.sub}
        ctaText1={gunpoCopy.hero.btnTel}
        ctaLink1={`tel:${data.phone}`}
        ctaText2={gunpoCopy.hero.btnChat}
        ctaLink2="https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589"
        imageUrl="/images/gunpo-sky-car-signboard-installation.png"
        data={data}
      />
      <Benefits benefits={benefitsWithIcons} data={data} />
      
      {/* 신뢰 엠블럼 추가 */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <TrustEmblems />
        </div>
      </section>

      <PriceCalculator />

      <VehicleSelector vehicles={gunpoCopy.vehicleSelector.vehicles} />
      <ExpertProfile
        name={gunpoCopy.technician.name}
        title={gunpoCopy.technician.title}
        bio={gunpoCopy.technician.bio}
        imageUrl="/images/technician-kim-min-chul.png"
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
      
      {/* 지역 리스트 - SEO 최적화 */}
      <LocalAreaList nameKo={data.nameKo} subAreas={data.subAreas} />
      
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

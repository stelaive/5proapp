'use client'

import HeroSection from './components/HeroSection'
import PricingSection from './components/PricingSection'
import BenefitSection from './components/BenefitSection'
import TrustSection from './components/TrustSection'
import ManagerProfileSection from './components/ManagerProfileSection'

export default function AnyangPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricingSection />
      <TrustSection />
      <BenefitSection />
      <ManagerProfileSection />
    </main>
  )
} 
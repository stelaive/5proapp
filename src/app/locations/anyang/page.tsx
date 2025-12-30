import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ANYANG_DATA } from '@/lib/regionData'
import HeroSection from './components/HeroSection'
import PricingSection from './components/PricingSection'
import BenefitSection from './components/BenefitSection'
import TrustSection from './components/TrustSection'
import ManagerProfileSection from './components/ManagerProfileSection'

export default function AnyangPage() {
  const data = ANYANG_DATA;

  return (
    <main className="min-h-screen">
      <Navigation currentPage="locations" />
      <HeroSection data={data} />
      <PricingSection />
      <TrustSection />
      <BenefitSection data={data} />
      <ManagerProfileSection />
      <Footer />
    </main>
  )
} 
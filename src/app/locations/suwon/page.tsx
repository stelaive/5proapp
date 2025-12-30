import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SUWON_DATA } from '@/lib/regionData'
import HeroSection from './components/HeroSection'
import StepSection from './components/StepSection'
import AppSection from './components/AppSection'
import PricingSection from './components/PricingSection'
import LocalAreaList from '@/components/common/LocalAreaList'
import DispatchStatusBanner from '@/components/common/DispatchStatusBanner'
import PriceCalculator from '@/components/common/PriceCalculator'
import TrustEmblems from '@/components/common/TrustEmblems'

export default function SuwonPage() {
  const data = SUWON_DATA;

  return (
    <main className="min-h-screen">
      <Navigation currentPage="locations" />
      <DispatchStatusBanner />
      <HeroSection data={data} />
      
      {/* 신뢰 엠블럼 추가 */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <TrustEmblems />
        </div>
      </section>

      <PriceCalculator />
      <StepSection />
      <AppSection data={data} />
      <PricingSection />
      <LocalAreaList nameKo={data.nameKo} subAreas={data.subAreas} />
      <Footer />
    </main>
  )
}

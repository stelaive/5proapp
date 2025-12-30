import { ANYANG_DATA } from '@/lib/regionData'
import HeroSection from './components/HeroSection'
import PricingSection from './components/PricingSection'
import BenefitSection from './components/BenefitSection'
import TrustSection from './components/TrustSection'
import ManagerProfileSection from './components/ManagerProfileSection'
import LocalAreaList from '@/components/common/LocalAreaList'
import TrustEmblems from '@/components/common/TrustEmblems'
import DispatchStatusBanner from '@/components/common/DispatchStatusBanner'
import PriceCalculator from '@/components/common/PriceCalculator'

export default function AnyangPage() {
  const data = ANYANG_DATA;

  return (
    <div className="bg-white">
      <DispatchStatusBanner />
      <HeroSection data={data} />
      <PriceCalculator />
      <PricingSection />
      
      {/* 신뢰 엠블럼 추가 */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <TrustEmblems />
        </div>
      </section>

      <TrustSection />
      <BenefitSection data={data} />
      <ManagerProfileSection />
      <LocalAreaList nameKo={data.nameKo} subAreas={data.subAreas} />
    </div>
  )
}

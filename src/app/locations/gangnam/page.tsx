import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GANGNAM_DATA } from '@/lib/regionData'
import HeroSection from './components/HeroSection'
import BenefitCards from './components/BenefitCards'
import PriceTable from './components/PriceTable'
import TonnageGuide from './components/TonnageGuide'
import BookingProcess from './components/BookingProcess'
import TrustSection from './components/TrustSection'
import FooterNotice from './components/FooterNotice'

export default function GangnamPage() {
  const data = GANGNAM_DATA;

  return (
    <main className="bg-white">
      <Navigation currentPage="locations" />
      
      {/* 1. Hero Section - 전화 CTA 최우선 */}
      <HeroSection data={data} />
      
      {/* 2. 혜택 카드 */}
      <BenefitCards data={data} />
      
      {/* 3. 요금표 */}
      <PriceTable data={data} />
      
      {/* 4. 톤수 가이드 */}
      <TonnageGuide data={data} />
      
      {/* 5. 예약 프로세스 */}
      <BookingProcess data={data} />
      
      {/* 6. 신뢰 요소 */}
      <TrustSection data={data} />
      
      {/* 7. 하단 고지 */}
      <FooterNotice data={data} />
      
      <Footer />
    </main>
  );
}

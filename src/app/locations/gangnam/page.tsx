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
import LocalAreaList from '@/components/common/LocalAreaList'
import TrustEmblems from '@/components/common/TrustEmblems'
import RegionGallery from '@/components/common/RegionGallery'
import PriceCalculator from '@/components/common/PriceCalculator'
import DispatchStatusBanner from '@/components/common/DispatchStatusBanner'

export default function GangnamPage() {
  const data = GANGNAM_DATA;

  const galleryImages = [
    {
      src: '/images/sky-car-visual-3.png',
      alt: '강남구 삼성동 빌딩 외벽 보수',
      location: '강남구 삼성동',
      date: '2024.12',
      category: '외벽보수'
    },
    {
      src: '/images/sky-car-visual-4.png',
      alt: '역삼동 테헤란로 상가 간판 교체',
      location: '강남구 역삼동',
      date: '2024.12',
      category: '간판교체'
    },
    {
      src: '/images/anyang/anyang-sky-car-apartment-work.jpg',
      alt: '논현동 빌라 창호 유리 작업',
      location: '강남구 논현동',
      date: '2025.01',
      category: '유리작업'
    }
  ];

  return (
    <main className="bg-white">
      <Navigation currentPage="locations" />
      
      {/* 실시간 배차 현황 배너 (추가) */}
      <DispatchStatusBanner />

      {/* 1. Hero Section - 전화 CTA 최우선 */}
      <HeroSection data={data} />
      
      {/* 2. 혜택 카드 */}
      <BenefitCards data={data} />
      
      {/* 예상 요금 계산기 (추가) */}
      <PriceCalculator />

      {/* 3. 요금표 */}
      <PriceTable data={data} />
      
      {/* 4. 톤수 가이드 */}
      <TonnageGuide data={data} />
      
      {/* 5. 예약 프로세스 */}
      <BookingProcess data={data} />
      
      {/* 6. 신뢰 요소 */}
      <TrustSection data={data} />
      
      {/* 6-1. 신뢰 엠블럼 (추가) */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <TrustEmblems />
      </div>

      {/* 6-2. 실제 작업 사례 (추가) */}
      <RegionGallery 
        title={`${data.nameKo} 실제 현장 작업 사례`}
        images={galleryImages} 
      />
      
      {/* 지역 리스트 - SEO 최적화 */}
      <LocalAreaList nameKo={data.nameKo} subAreas={data.subAreas} />
      
      {/* 7. 하단 고지 */}
      <FooterNotice data={data} />
      
      <Footer />
    </main>
  );
}

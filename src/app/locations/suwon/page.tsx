import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SUWON_DATA } from '@/lib/regionData'
import HeroSection from './components/HeroSection'
import StepSection from './components/StepSection'
import AppSection from './components/AppSection'
import PricingSection from './components/PricingSection'

export default function SuwonPage() {
  const data = SUWON_DATA;

  return (
    <main className="min-h-screen">
      <Navigation currentPage="locations" />
      <HeroSection data={data} />
      <StepSection />
      <AppSection data={data} />
      <PricingSection />
      <Footer />
    </main>
  )
} 
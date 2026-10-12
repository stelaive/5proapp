import { DOBONG_DATA } from '@/lib/regionData'
import { cityMetadata } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export const metadata = cityMetadata(DOBONG_DATA)

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation currentPage="locations" />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

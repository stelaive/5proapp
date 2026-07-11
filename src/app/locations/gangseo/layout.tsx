import { GANGSEO_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(GANGSEO_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={GANGSEO_DATA}>{children}</CityLayout>
}

import { NOWON_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(NOWON_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={NOWON_DATA}>{children}</CityLayout>
}

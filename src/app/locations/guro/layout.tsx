import { GURO_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(GURO_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={GURO_DATA}>{children}</CityLayout>
}

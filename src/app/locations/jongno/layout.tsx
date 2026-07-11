import { JONGNO_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(JONGNO_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={JONGNO_DATA}>{children}</CityLayout>
}

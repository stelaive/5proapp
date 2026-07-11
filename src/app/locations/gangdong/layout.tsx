import { GANGDONG_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(GANGDONG_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={GANGDONG_DATA}>{children}</CityLayout>
}

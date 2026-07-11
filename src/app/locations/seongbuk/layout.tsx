import { SEONGBUK_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(SEONGBUK_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={SEONGBUK_DATA}>{children}</CityLayout>
}

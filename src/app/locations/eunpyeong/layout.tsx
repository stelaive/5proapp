import { EUNPYEONG_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(EUNPYEONG_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={EUNPYEONG_DATA}>{children}</CityLayout>
}

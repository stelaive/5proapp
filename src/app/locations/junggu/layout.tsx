import { JUNGGU_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(JUNGGU_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={JUNGGU_DATA}>{children}</CityLayout>
}

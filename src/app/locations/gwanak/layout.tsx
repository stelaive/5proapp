import { GWANAK_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(GWANAK_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={GWANAK_DATA}>{children}</CityLayout>
}

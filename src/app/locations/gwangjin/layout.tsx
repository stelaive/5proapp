import { GWANGJIN_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(GWANGJIN_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={GWANGJIN_DATA}>{children}</CityLayout>
}

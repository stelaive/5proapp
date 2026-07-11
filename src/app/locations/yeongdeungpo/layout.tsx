import { YEONGDEUNGPO_DATA } from '@/lib/regionData'
import { buildCityMetadata } from '@/lib/cityMetadata'
import CityLayout from '@/components/location/CityLayout'

export const metadata = buildCityMetadata(YEONGDEUNGPO_DATA)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CityLayout data={YEONGDEUNGPO_DATA}>{children}</CityLayout>
}

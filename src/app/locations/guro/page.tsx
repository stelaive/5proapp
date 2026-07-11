import { GURO_DATA } from '@/lib/regionData'
import CityPageTemplate from '@/components/location/CityPageTemplate'

export default function Page() {
  return <CityPageTemplate data={GURO_DATA} />
}

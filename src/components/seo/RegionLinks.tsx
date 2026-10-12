import Link from 'next/link'
import { LOCATIONS_DATA } from '@/lib/regionData'

export default function RegionLinks() {
  return (
    <nav aria-label="지역별 스카이차 대여 안내" className="bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-xl font-bold text-gray-900">작업 지역별 스카이차 대여 안내</h2>
        <p className="mt-3 text-gray-600">현장 지역을 선택해 이용 조건을 확인하고 배차 일정을 상담하세요.</p>
        <ul className="mt-5 flex flex-wrap gap-4">
          {LOCATIONS_DATA.map((location) => (
            <li key={location.slug}><Link className="inline-block rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 hover:text-orange-700" href={`/locations/${location.slug}`}>{location.name} 스카이차</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

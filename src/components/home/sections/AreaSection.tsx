import React from 'react'
import Link from 'next/link'
import {
  LOCATIONS_DATA,
  GANGNAM_DATA,
  ANYANG_DATA,
  SUWON_DATA,
  GUNPO_DATA,
} from '@/lib/regionData'

const BRAND = '#F97316'

// 동네별 전용 페이지가 있는 지역 (내부 링크 + 동 키워드 노출)
const FEATURED = [GANGNAM_DATA, ANYANG_DATA, SUWON_DATA, GUNPO_DATA]

// 실제 커버리지 데이터로 그룹 구성 (조작 없이 regionData 재사용)
const seoul = LOCATIONS_DATA.find((l) => l.id === 'seoul')
const gyeonggi = LOCATIONS_DATA.find((l) => l.id === 'gyeonggi')
const incheon = LOCATIONS_DATA.find((l) => l.id === 'incheon')

const COVERAGE_GROUPS: { title: string; cities: string[] }[] = [
  { title: '서울특별시', cities: seoul?.cities?.map((c) => c.name) ?? [] },
  {
    title: '경기 남부',
    cities: gyeonggi?.groups?.[0]?.cities.map((c) => c.name) ?? [],
  },
  {
    title: '경기 북부',
    cities: gyeonggi?.groups?.[1]?.cities.map((c) => c.name) ?? [],
  },
  { title: '인천광역시', cities: incheon?.cities?.map((c) => c.name) ?? [] },
]

// 순수 서버 컴포넌트: JS 없이 크롤 가능한 텍스트 → 로컬 SEO/AEO/GEO 최적
export default function AreaSection() {
  return (
    <section
      aria-labelledby="area-heading"
      className="border-t border-gray-100 bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold tracking-wide" style={{ color: BRAND }}>
            출동 가능 지역
          </p>
          <h2
            id="area-heading"
            className="font-jalnan text-2xl font-bold leading-snug text-gray-900 md:text-4xl"
          >
            제주도만 빼고,
            <br />
            전국 어디든 달려갑니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            서울·경기·인천은 물론, 제주도를 제외한 전국 어디든 24시간 스카이차를 배차합니다.
            아래 지역은 특히 신속하게 출동해요.
          </p>
        </div>

        {/* 동네별 전용 페이지 (내부 링크 + 동 단위 키워드) */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((r) => (
            <Link
              key={r.slug}
              href={`/locations/${r.slug}`}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-orange-200 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/60"
            >
              <h3 className="flex items-center justify-between text-base font-bold text-gray-900">
                {r.nameKo} 스카이차
                <span className="text-gray-400 transition-transform group-hover:translate-x-0.5" style={{ color: BRAND }} aria-hidden="true">→</span>
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {r.subAreas.slice(0, 6).join(' · ')} 등
              </p>
            </Link>
          ))}
        </div>

        {/* 전체 커버리지: 실제 지역명 텍스트 (크롤 가능) */}
        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {COVERAGE_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="mb-3 text-sm font-bold text-gray-700">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.cities.map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {city} 스카이차
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-400">
          그 외 강원·충청·전라·경상 등 제주도를 제외한 전국 어디든 문의 주시면 배차해 드립니다.
        </p>
      </div>
    </section>
  )
}

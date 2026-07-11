import { permanentRedirect, notFound } from 'next/navigation';
import { LOCATIONS_DATA, LIVE_CITY_SLUGS } from '@/lib/regionData';

type Props = {
  params: Promise<{ region: string; city: string }>;
};

// 광역 지역 허브 슬러그 (seoul / gyeonggi / incheon)
const REGION_SLUGS = LOCATIONS_DATA.map((l) => l.slug);
const LIVE_CITY_SET = new Set(LIVE_CITY_SLUGS);

// 중첩 경로(/locations/{region}/{city})를 미리 정적 생성하여
// 검색엔진이 요청하더라도 404 없이 canonical(flat) 경로로 연결한다.
export async function generateStaticParams() {
  const params: { region: string; city: string }[] = [];

  LOCATIONS_DATA.forEach((loc) => {
    const collect = (city: { slug: string }) => {
      if (LIVE_CITY_SET.has(city.slug)) {
        params.push({ region: loc.slug, city: city.slug });
      }
    };
    if (loc.isGrouped && loc.groups) {
      loc.groups.forEach((g) => g.cities.forEach(collect));
    } else if (loc.cities) {
      loc.cities.forEach(collect);
    }
  });

  return params;
}

// 중첩 경로는 canonical 평면 경로(/locations/{city})로 301 리다이렉트한다.
// 모든 도시 전용 페이지는 flat 경로에 존재하므로 중복 콘텐츠 없이 URL만 열어준다.
export default async function NestedRegionCityPage({ params }: Props) {
  const { region, city } = await params;

  if (!REGION_SLUGS.includes(region) || !LIVE_CITY_SET.has(city)) {
    notFound();
  }

  permanentRedirect(`/locations/${city}`);
}

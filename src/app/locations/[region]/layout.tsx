import { getRegionData } from '@/lib/regionData';
import type { Metadata } from 'next';
import Footer from '@/components/common/Footer';

// 광역 허브 슬러그 → 표기명
const REGION_LABELS: Record<string, string> = {
  seoul: '서울',
  gyeonggi: '경기',
  incheon: '인천',
};

type Props = {
  params: Promise<{ region: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const data = getRegionData(regionSlug);

  // 광역 허브(seoul/gyeonggi/incheon)는 도시 데이터가 없어 이 분기를 탄다.
  // 라벨을 붙이지 않으면 3개 허브가 완전히 동일한 title/description을 갖게 되어
  // 서로 중복 콘텐츠로 취급된다.
  if (!data) {
    const label = REGION_LABELS[regionSlug];
    return {
      title: label ? `${label} 스카이차 배차 지역 안내` : '지역별 스카이차 찾기',
      description: label
        ? `${label} 지역 스카이차·고소작업차 배차 안내입니다. 시·구별 페이지에서 요금 기준과 이용 방법을 확인하세요. 이용료 5% 현금 환급.`
        : '지역별 스카이차·고소작업차 배차 안내입니다. 요금 기준과 이용 방법을 확인하세요.',
      alternates: { canonical: `/locations/${regionSlug}` },
    };
  }

  const subAreaKeywords = data.subAreas.join(', ');
  const title = `${data.nameKo} 스카이차 - ${data.subAreas[0]} 등 전지역 신속 배차`;
  const description = `${data.nameKo}(${subAreaKeywords}) 지역 스카이차 전문. 결제금액의 5% 포인트/현금 페이백 혜택! 지금 바로 전화하세요.`;
  const keywords = `${data.nameKo} 스카이차, ${subAreaKeywords} 스카이차, 스카이차 비용, 스카이차 요금표, 5% 페이백`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/locations/${regionSlug}` },
    openGraph: {
      title,
      description,
      url: `https://www.5prosky.com/locations/${regionSlug}`,
      images: [
        {
          url: '/images/5pro-logo-main.png',
          width: 1200,
          height: 630,
          alt: `${data.nameKo} 스카이차 서비스 안내`,
        },
      ],
    },
  };
}

export default function RegionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

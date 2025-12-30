import { getRegionData } from '@/lib/regionData';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ region: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const data = getRegionData(regionSlug);

  if (!data) {
    return {
      title: '지역별 스카이차 찾기 | 5프로돌려주는스카이차',
      description: '원하는 지역의 스카이차를 쉽고 빠르게 찾아보세요. 5% 페이백은 기본, 매월 100만원 추첨 기회까지!',
    };
  }

  const subAreaKeywords = data.subAreas.join(', ');
  const title = `${data.nameKo} 스카이차 - ${data.subAreas[0]} 등 전지역 신속 배차 | 5프로`;
  const description = `${data.nameKo}(${subAreaKeywords}) 지역 스카이차 전문. 결제금액의 5% 포인트/현금 페이백 혜택과 100만원 추첨 이벤트! 지금 바로 전화하세요.`;
  const keywords = `${data.nameKo} 스카이차, ${subAreaKeywords} 스카이차, 스카이차 비용, 스카이차 요금표, 5% 페이백`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://xn--5-w30fr74e.com/locations/${regionSlug}`,
      images: [
        {
          url: '/images/5프로.png',
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
  return <>{children}</>;
} 
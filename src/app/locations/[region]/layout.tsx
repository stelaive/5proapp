import { LOCATIONS_DATA } from '@/lib/locationsData';
import type { Metadata } from 'next';

type Props = {
  params: { region: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const regionSlug = params.region;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === regionSlug);

  const title = location 
    ? `${location.name} 스카이차 찾기 | 5프로돌려주는스카이차` 
    : '지역별 스카이차 찾기 | 5프로돌려주는스카이차';
  
  const description = location
    ? `${location.name} 지역의 모든 스카이차 정보를 확인하고, 5% 페이백과 100만원 추첨 혜택을 받으세요.`
    : '원하는 지역의 스카이차를 쉽고 빠르게 찾아보세요. 5% 페이백은 기본, 매월 100만원 추첨 기회까지!';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-domain.com/locations/${regionSlug}`,
      images: [
        {
          url: '/images/5프로.png', // 권역별 대표 이미지로 교체 가능
          width: 1200,
          height: 630,
          alt: `${location?.name ?? '지역'} 스카이차 대표 이미지`,
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
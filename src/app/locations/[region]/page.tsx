import { LOCATIONS_DATA } from '@/lib/regionData';
import { notFound } from 'next/navigation';
import RegionClientPage from '@/components/RegionClientPage';

type Props = {
  params: Promise<{ region: string }>;
};

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    region: location.slug,
  }));
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === region);

  if (!location) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <RegionClientPage location={location} />
    </div>
  );
} 
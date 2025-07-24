import { LOCATIONS_DATA } from '@/lib/locationsData';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RegionClientPage from '@/components/RegionClientPage';

type Props = {
  params: { region: string };
};

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    region: location.slug,
  }));
}

export default function RegionPage({ params }: Props) {
  const { region } = params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === region);

  if (!location) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation currentPage="locations" isDarkMode={true} />
      <RegionClientPage location={location} />
      <Footer />
    </div>
  );
} 
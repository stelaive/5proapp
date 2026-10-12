import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { HUB_CONTENT, pageMetadata } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/common/Footer'
import FloatingDownload from '@/components/FloatingDownload'

type Props = { params: Promise<{ region: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params
  const content = HUB_CONTENT[region]
  if (!content) notFound()
  return pageMetadata(
    `${content.label} 스카이차 대여 | 지역별 비용·견적 안내`,
    content.description,
    `/locations/${region}`,
    [`${content.label} 스카이차`, `${content.label} 스카이차 비용`, `${content.label} 간판작업 스카이차`],
  )
}

export default function RegionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation currentPage="locations" isDarkMode />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingDownload />
    </div>
  )
}

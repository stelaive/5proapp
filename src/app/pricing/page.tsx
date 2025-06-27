import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import type { Metadata } from 'next'

// 가격 데이터
const pricingData = [
  { equipment: '1톤 ~ 3.5톤', halfDay: 350000, fullDay: 550000, additional: 150000, monthly: 12000000 },
  { equipment: '5톤 (45m)', halfDay: 450000, fullDay: 650000, additional: 200000, monthly: 14000000 },
  { equipment: '8톤 (54m)', halfDay: 600000, fullDay: 900000, additional: '협의', monthly: '협의' },
  { equipment: '17톤 (58~65m)', halfDay: 900000, fullDay: 1200000, additional: '협의', monthly: '협의' },
  { equipment: '19톤 (75m)', halfDay: 1300000, fullDay: 1800000, additional: '협의', monthly: '협의' },
  { equipment: '3톤 굴절', halfDay: 600000, fullDay: 800000, additional: '협의', monthly: '협의' },
  { equipment: '5톤 굴절', halfDay: 800000, fullDay: 1000000, additional: '협의', monthly: '협의' },
]

export const metadata: Metadata = {
  title: '스카이차 렌탈 가격표 - 전국 최저가 + 5% 캐시백 보장',
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  keywords: ['스카이차', '가격표', '렌탈료', '크레인', '고소작업차', '최저가', '캐시백', '배차', '24시간', '전국'],
  
  openGraph: {
    title: '스카이차 렌탈 가격표 - 전국 최저가 + 5% 캐시백',
    description: '투명한 가격 공개! 스카이차 렌탈 후 5% 현금 돌려받기',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/pricing',
    images: [
      {
        url: '/images/스카이차수정3.png',
        width: 1200,
        height: 630,
        alt: '스카이차 렌탈 가격표',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '스카이차 렌탈 가격표 - 전국 최저가 + 5% 캐시백',
    description: '투명한 가격 공개! 렌탈 후 5% 현금 돌려받기',
    images: ['/images/스카이차수정3.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/pricing',
  },
  
  other: {
    'service-area': '전국',
    'service-hours': '24시간',
    'cashback-rate': '5%',
  }
}

export default function PricingPage() {
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price
    return price.toLocaleString() + '원'
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="pricing" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan">
              스카이차 가격표
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              투명하고 합리적인 가격으로 최고의 서비스를 제공합니다
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-bold text-yellow-300 mb-2">🎉 특별 혜택!</p>
              <p className="text-blue-100">
                모든 이용료에서 <span className="text-yellow-300 font-bold text-xl">5% 캐시백</span> 자동 지급!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 가격표 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-jalnan">
              장비별 이용요금
            </h2>
            
            {/* 가격표 */}
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>장비 구분</th>
                    <th>반나절<br />(오전/오후)</th>
                    <th>하루<br />(8시간)</th>
                    <th>추가<br />(시간당)</th>
                    <th>월 단위<br />(월대)</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td className="font-bold">{item.equipment}</td>
                      <td>{formatPrice(item.halfDay)}</td>
                      <td>{formatPrice(item.fullDay)}</td>
                      <td>{formatPrice(item.additional)}</td>
                      <td>{formatPrice(item.monthly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDownload />
    </main>
  )
} 
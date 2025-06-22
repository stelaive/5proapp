'use client'
import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { motion } from 'framer-motion'

// 애니메이션 variants 정의
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-100px" }
};

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

export default function PricingPage() {
  const [selectedPrice, setSelectedPrice] = useState<{ price: number; type: string } | null>(null)

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price
    return price.toLocaleString() + '원'
  }

  const calculateCashback = (price: number) => {
    return Math.floor(price * 0.05)
  }

  const handlePriceSelect = (price: number, type: string) => {
    setSelectedPrice({ price, type })
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="pricing" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
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
          </motion.div>
        </div>
      </section>

      {/* 가격표 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-jalnan">
              장비별 이용요금
            </h2>
            
            {/* 가격표 */}
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th style={{ 
                      color: '#ffffff', 
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      장비 구분
                    </th>
                    <th style={{ 
                      color: '#ffffff', 
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      반나절<br />(오전/오후)
                    </th>
                    <th style={{ 
                      color: '#ffffff', 
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      하루<br />(8시간)
                    </th>
                    <th style={{ 
                      color: '#ffffff', 
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      추가<br />(시간당)
                    </th>
                    <th style={{ 
                      color: '#ffffff', 
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: '14px'
                    }}>
                      월 단위<br />(월대)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td className="font-bold" style={{ color: '#000 !important' }}>{item.equipment}</td>
                      <td style={{ color: '#000 !important' }}>{formatPrice(item.halfDay)}</td>
                      <td style={{ color: '#000 !important' }}>{formatPrice(item.fullDay)}</td>
                      <td style={{ color: '#000 !important' }}>{formatPrice(item.additional)}</td>
                      <td style={{ color: '#000 !important' }}>{formatPrice(item.monthly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 캐시백 계산기 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-jalnan">
                그래서, 5% 돌려받으면 얼마일까요?
              </h2>
              <p className="text-xl text-gray-600">
                궁금한 가격을 클릭해보세요! 🎯
              </p>
            </div>

            {/* 인기 옵션 버튼들 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => handlePriceSelect(350000, '1-3.5톤 반나절')}
                className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="font-bold text-lg">1-3.5톤 반나절</div>
                <div className="text-sm opacity-90">350,000원</div>
              </button>
              <button
                onClick={() => handlePriceSelect(550000, '1-3.5톤 하루')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="font-bold text-lg">1-3.5톤 하루</div>
                <div className="text-sm opacity-90">550,000원</div>
              </button>
              <button
                onClick={() => handlePriceSelect(450000, '5톤 반나절')}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="font-bold text-lg">5톤 반나절</div>
                <div className="text-sm opacity-90">450,000원</div>
              </button>
              <button
                onClick={() => handlePriceSelect(650000, '5톤 하루')}
                className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="font-bold text-lg">5톤 하루</div>
                <div className="text-sm opacity-90">650,000원</div>
              </button>
            </div>

            {/* 계산 결과 */}
            {selectedPrice && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-8 text-center"
              >
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedPrice.type} 선택
                </h3>
                <div className="text-lg text-gray-700 mb-4">
                  이용료: <span className="font-bold">{selectedPrice.price.toLocaleString()}원</span>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-4">
                  👉 사장님 통장으로 입금될 캐시백: {calculateCashback(selectedPrice.price).toLocaleString()}원!
                </div>
                <div className="text-lg text-gray-600">
                  실제 부담액: <span className="font-bold text-green-600">
                    {(selectedPrice.price - calculateCashback(selectedPrice.price)).toLocaleString()}원
                  </span>
                </div>
              </motion.div>
            )}

            {!selectedPrice && (
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <p className="text-xl text-gray-600">
                  위의 버튼을 클릭하여 캐시백을 확인해보세요!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-6">📋</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">이용 안내</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 모든 가격은 부가세 포함입니다</li>
                  <li>• 출장비는 별도 협의됩니다</li>
                  <li>• 캐시백은 작업 완료 후 자동 지급됩니다</li>
                  <li>• 월 단위 이용시 할인 혜택이 있습니다</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-6">📞</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">상담 문의</h3>
                <p className="text-gray-600 mb-4">
                  정확한 견적이나 특수 작업에 대한<br />
                  문의는 언제든 연락주세요!
                </p>
                <a 
                  href="tel:18779001"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all"
                >
                  1877-9001
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />

      <style jsx>{`
        /* ======= 색상 변수 : 이 부분만 바꾸면 브랜드 색상에 맞게 쉽게 변경 가능 ======= */
        :root {
          --primary-500: #1f3c88;   /* 메인(딥 네이비) */
          --primary-400: #3054c4;   /* 헤더 그래디언트 보조 */
          --secondary-50: #f5f8fc;  /* 밝은 배경 */
          --text-dark: #1c1c1e;     /* 본문 텍스트 */
        }

        /* ======= 테이블 기본 ======= */
        .pricing-table-wrapper {
          max-width: 100%;
          overflow-x: auto;         /* 모바일 가로 스크롤 */
          margin: 32px auto;
          padding: 0 12px;
        }
        .pricing-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(20, 41, 82, 0.08);
          font-family: "Pretendard","Noto Sans KR",sans-serif;
          text-align: center;
          color: var(--text-dark);
          overflow: hidden;
        }
        
        /* 모든 표 텍스트 강제 색상 지정 */
        .pricing-table tbody td {
          color: #000000 !important;
          font-weight: 500;
        }
        
        .pricing-table tbody td.font-bold {
          color: #000000 !important;
          font-weight: 700;
        }
        
        .pricing-table thead th {
          color: #ffffff !important;
          font-weight: 600;
        }
        
                .pricing-table thead th * {
           color: #ffffff !important;
         }
         
         .pricing-table tbody td * {
           color: #000000 !important;
         }
         
         /* 최종 강제 적용 - 모든 가능한 선택자 */
         table.pricing-table thead th {
           color: #ffffff !important;
           background: #1f3c88 !important;
           font-weight: 700 !important;
           font-size: 14px !important;
           text-align: center !important;
         }
         
         .pricing-table-wrapper table thead th {
           color: #ffffff !important;
           background: #1f3c88 !important;
           font-weight: 700 !important;
         }

        /* ======= 헤더 ======= */
        .pricing-table thead th {
          padding: 18px 12px !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
          color: #ffffff !important;
          background: linear-gradient(90deg, var(--primary-500) 0%, var(--primary-400) 100%) !important;
          border-right: 1px solid rgba(255,255,255,0.25) !important;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
          text-align: center !important;
        }
        
        .pricing-table thead th,
        .pricing-table thead th *,
        .pricing-table thead th br {
          color: #ffffff !important;
          font-weight: 700 !important;
        }
        .pricing-table thead th:first-child {
          border-top-left-radius: 12px;
          color: #ffffff !important;
          background: #1f3c88 !important;
        }
        .pricing-table thead th:last-child {
          border-top-right-radius: 12px;
          border-right: none;
          color: #ffffff !important;
          background: #3054c4 !important;
        }
        
        /* 전체 헤더에 강제 스타일 적용 */
        .pricing-table thead {
          background: linear-gradient(90deg, #1f3c88 0%, #3054c4 100%) !important;
        }
        
        .pricing-table thead tr {
          background: linear-gradient(90deg, #1f3c88 0%, #3054c4 100%) !important;
        }

        /* ======= 바디 ======= */
        .pricing-table tbody td {
          padding: 16px 12px;
          font-size: 0.93rem;
          color: #000000 !important;
          border-right: 1px solid #e6eaf3;
          border-bottom: 1px solid #e6eaf3;
          background-color: #fff;
        }
        .pricing-table tbody tr:nth-child(even) td {
          background-color: var(--secondary-50);
          color: #000000 !important;
        }
        .pricing-table tbody td:last-child {border-right: none;}

        /* ======= 호버 & 인터랙션 ======= */
        .pricing-table tbody tr:hover td {
          background-color: rgba(48, 84, 196, 0.08);
          color: #000000 !important;
          transition: background-color 0.25s ease;
        }

        /* ======= 반응형 텍스트 조정 ======= */
        @media (max-width: 480px) {
          .pricing-table thead th,
          .pricing-table tbody td {padding: 12px 8px; font-size: 0.85rem;}
        }
      `}</style>
    </main>
  )
} 
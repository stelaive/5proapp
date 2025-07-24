// file: src/components/common/PriceTable.tsx
'use client'

import React, { useState } from 'react'

// 가격 데이터 타입 정의
export interface PriceItem {
  equipment: string
  halfDay: number | string
  fullDay: number | string
  additional: number | string
  monthly: number | string
}

interface PriceTableProps {
  title?: string
  subtitle?: string
  priceData: PriceItem[]
  showCalculator?: boolean
  calculatorOptions?: Array<{
    label: string
    price: number
    color: string
  }>
  className?: string
  region?: string
}

export default function PriceTable({
  title = "장비별 이용요금",
  subtitle = "투명하고 합리적인 가격을 확인하세요",
  priceData,
  showCalculator = true,
  calculatorOptions,
  className = "",
  region = ""
}: PriceTableProps) {
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

  // 기본 계산기 옵션
  const defaultCalculatorOptions = [
    { label: '1-3.5톤 반나절', price: 350000, color: 'bg-orange-500 hover:bg-orange-600' },
    { label: '1-3.5톤 하루', price: 550000, color: 'bg-blue-500 hover:bg-blue-600' },
    { label: '5톤 반나절', price: 450000, color: 'bg-green-500 hover:bg-green-600' },
    { label: '5톤 하루', price: 650000, color: 'bg-purple-500 hover:bg-purple-600' },
  ]

  const options = calculatorOptions || defaultCalculatorOptions

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* 가격표 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="p-4 font-bold">장비 구분</th>
                  <th className="p-4 font-bold">반나절<span className="block text-xs font-normal">(오전/오후)</span></th>
                  <th className="p-4 font-bold">하루<span className="block text-xs font-normal">(8시간)</span></th>
                  <th className="p-4 font-bold">추가<span className="block text-xs font-normal">(시간당)</span></th>
                  <th className="p-4 font-bold">월 단위<span className="block text-xs font-normal">(월대)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {priceData.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-800">{item.equipment}</td>
                    <td className="p-4 text-blue-600 font-bold">{formatPrice(item.halfDay)}</td>
                    <td className="p-4 text-blue-600 font-bold">{formatPrice(item.fullDay)}</td>
                    <td className="p-4 text-gray-700 font-semibold">{formatPrice(item.additional)}</td>
                    <td className="p-4 text-gray-700 font-semibold">{formatPrice(item.monthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 캐시백 계산기 섹션 */}
        {showCalculator && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">그래서, 5% 돌려받으면 얼마일까요?</h3>
              <p className="text-lg text-gray-600">궁금한 가격을 클릭해보세요! 🎯</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handlePriceSelect(option.price, option.label)}
                  className={`${option.color} text-white p-4 rounded-lg transition-all transform hover:scale-105 shadow-lg`}
                >
                  <div className="font-bold">{option.label}</div>
                  <div>{option.price.toLocaleString()}원</div>
                </button>
              ))}
            </div>
            {selectedPrice && (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{selectedPrice.type} 선택</h4>
                <p className="text-lg text-gray-700">이용료: <span className="font-bold">{selectedPrice.price.toLocaleString()}원</span></p>
                <div className="text-2xl font-bold text-red-600 my-3">
                  👉 {region}사장님 통장으로 입금될 캐시백: {calculateCashback(selectedPrice.price).toLocaleString()}원!
                </div>
                <p className="text-lg text-gray-600">실제 사용액: <span className="font-bold text-green-600">{(selectedPrice.price - calculateCashback(selectedPrice.price)).toLocaleString()}원</span></p>
                <p className="text-xs text-gray-500 mt-4">* 페이백은 작업 완료 후 3일 이내 지급됩니다</p>
              </div>
            )}
          </div>
        )}

        {/* 이용 안내 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">이용 안내</h3>
            <ul className="space-y-3 text-blue-800">
              <li>• 모든 요금은 부가세가 포함된 금액입니다.</li>
              <li>• 작업 난이도 및 현장 여건에 따라 요금은 조정될 수 있습니다.</li>
              <li>• 현장 확인 후 정확한 최종 견적을 제공합니다.</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-900 mb-4">특별 혜택</h3>
            <ul className="space-y-3 text-green-800">
              <li>• 모든 요금제에 <strong>5% 현금 페이백</strong> 자동 적용!</li>
              <li>• {region} 전 지역 <strong>30분 내 배차</strong>를 목표로 합니다.</li>
              <li>• 24시간 긴급 출동 서비스가 항상 준비되어 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 
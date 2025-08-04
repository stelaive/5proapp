'use client'

import PriceTable from '@/components/common/PriceTable'
import { suwonPriceData, suwonCalculatorOptions } from '@/lib/priceData'

export default function PricingSection() {
  return (
    <PriceTable
      title="수원 스카이차 가격표"
      subtitle="투명하고 합리적인 가격을 확인하세요"
      priceData={suwonPriceData}
      calculatorOptions={suwonCalculatorOptions}
      region="수원"
      className="bg-gray-50"
    />
  )
} 
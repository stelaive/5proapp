'use client'

import PriceTable from '@/components/common/PriceTable'
import { anyangPriceData, anyangCalculatorOptions } from '@/lib/priceData'

export default function PricingSection() {
  return (
    <PriceTable
      title="안양 스카이차 가격표"
      subtitle="투명하고 합리적인 가격을 확인하세요"
      priceData={anyangPriceData}
      calculatorOptions={anyangCalculatorOptions}
      region="안양"
      className="bg-gray-50"
    />
  )
} 
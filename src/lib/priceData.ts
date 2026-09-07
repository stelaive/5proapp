// file: src/lib/priceData.ts
import { PriceItem } from '@/components/common/PriceTable'

// 기본 가격 데이터 (전국 공통)
export const defaultPriceData: PriceItem[] = [
  { equipment: '1톤 ~ 3.5톤', shortTime: 200000, oneHour: 250000, halfDay: 350000, fullDay: 550000, additional: 150000, monthly: 12000000 },
  { equipment: '5톤 (45m)', shortTime: 300000, oneHour: 300000, halfDay: 450000, fullDay: 650000, additional: 200000, monthly: 14000000 },
  { equipment: '8톤 (54m)', halfDay: 700000, fullDay: 900000, additional: '협의', monthly: '협의' },
  { equipment: '17톤 (58~65m)', halfDay: 1000000, fullDay: 1200000, additional: '협의', monthly: '협의' },
  { equipment: '19톤 (75m)', halfDay: 1300000, fullDay: 1800000, additional: '협의', monthly: '협의' },
  { equipment: '3톤 굴절', halfDay: 700000, fullDay: 900000, additional: '협의', monthly: '협의' },
  { equipment: '5톤 굴절', halfDay: 1000000, fullDay: 1200000, additional: '협의', monthly: '협의' },
]

// ============================================
// 지역별 가격 데이터
// ============================================
// 요금은 지역과 무관하게 전국 동일합니다. 따라서 지역별 배열을 따로 두지 않고
// 모두 defaultPriceData를 가리킵니다.
//
// ⚠️ 지역마다 값을 복제해 두면 한쪽만 고쳐져 /pricing 과 지역 페이지가 서로 다른
//    가격을 고지하게 됩니다. 실제로 그런 사고가 있었습니다.
//    특정 지역 요금이 달라지는 경우에만 별도 배열을 만드세요.
export const gunpoPriceData: PriceItem[] = defaultPriceData
export const anyangPriceData: PriceItem[] = defaultPriceData
export const suwonPriceData: PriceItem[] = defaultPriceData

// 지역별 계산기 옵션
export const gunpoCalculatorOptions = [
  { label: '1-3.5톤 반나절', price: 350000, color: 'bg-orange-500 hover:bg-orange-600' },
  { label: '1-3.5톤 하루', price: 550000, color: 'bg-blue-500 hover:bg-blue-600' },
  { label: '5톤 반나절', price: 450000, color: 'bg-green-500 hover:bg-green-600' },
  { label: '5톤 하루', price: 650000, color: 'bg-purple-500 hover:bg-purple-600' },
]

export const anyangCalculatorOptions = [
  { label: '1-3.5톤 반나절', price: 350000, color: 'bg-orange-500 hover:bg-orange-600' },
  { label: '1-3.5톤 하루', price: 550000, color: 'bg-blue-500 hover:bg-blue-600' },
  { label: '5톤 반나절', price: 450000, color: 'bg-green-500 hover:bg-green-600' },
  { label: '5톤 하루', price: 650000, color: 'bg-purple-500 hover:bg-purple-600' },
]

export const suwonCalculatorOptions = [
  { label: '1-3.5톤 1시간', price: 250000, color: 'bg-orange-500 hover:bg-orange-600' },
  { label: '1-3.5톤 반나절', price: 350000, color: 'bg-blue-500 hover:bg-blue-600' },
  { label: '5톤 반나절', price: 450000, color: 'bg-green-500 hover:bg-green-600' },
  { label: '8톤 반나절', price: 700000, color: 'bg-purple-500 hover:bg-purple-600' },
] 
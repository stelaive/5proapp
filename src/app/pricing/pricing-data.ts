import { defaultPriceData } from '@/lib/priceData'

export const pricingEquipment = defaultPriceData.map((item, index) => ({
  ...item,
  description: [
    '소형 장비',
    '작업 높이 45m급',
    '작업 높이 54m급',
    '작업 높이 58~65m급',
    '작업 높이 75m급',
    '굴절형 장비',
    '굴절형 장비',
  ][index],
  badge: ['1–3.5t', '5t', '8t', '17t', '19t', '3t', '5t'][index],
}))

export const pricingDurations = [
  { key: 'shortTime', label: '30분', detail: '단시간' },
  { key: 'oneHour', label: '1시간', detail: '단시간' },
  { key: 'halfDay', label: '반나절', detail: '4시간' },
  { key: 'fullDay', label: '하루', detail: '8시간' },
] as const

export type PricingDuration = (typeof pricingDurations)[number]['key']

export const won = (value: number | string | undefined) =>
  typeof value === 'number' ? `${value.toLocaleString('ko-KR')}원` : value || '상담'

export const cashbackFor = (price: number) => Math.floor(price * 0.05)

export const appStores = {
  ios: 'https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589',
  android: 'https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp',
}

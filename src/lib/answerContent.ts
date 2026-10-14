import { defaultPriceData } from './priceData'
import { BRAND_NAME, PRICE_NOTICE, SEO_UPDATED_AT } from './seo'

export const ANSWER_UPDATED_AT = SEO_UPDATED_AT
export const BRAND_DEFINITION = `${BRAND_NAME}(5프로스카이차)는 간판 설치·교체·철거와 외벽 보수에 필요한 스카이차·고소작업차 대여 및 배차 상담 서비스입니다.`
export const EQUIPMENT_DEFINITION = '이 안내에서 스카이차는 차량에 탑재된 작업대를 이용해 높은 위치의 작업을 돕는 고소작업 장비를 뜻합니다. 간판 제작·시공 서비스 자체와는 구분합니다.'

export const formatWon = (value: number | string | undefined) =>
  typeof value === 'number' ? `${value.toLocaleString('ko-KR')}원` : value || '상담 필요'

const compact = defaultPriceData[0]

export const PRICE_ANSWER = `${BRAND_NAME} 가격표의 ${compact.equipment} 기준 요금은 30분 ${formatWon(compact.shortTime)}, 1시간 ${formatWon(compact.oneHour)}, 반나절(4시간) ${formatWon(compact.halfDay)}, 하루(8시간) ${formatWon(compact.fullDay)}입니다.`
export const COST_LIMIT = '이 금액은 자사 장비 이용 기준 요금이며 시장 평균이나 모든 현장의 최종 결제금액이 아닙니다. 예약 전 부가세 포함 여부, 추가 비용과 장비·기사 비용의 포함 범위를 확인하세요.'
export const EQUIPMENT_ANSWER = '간판작업 장비는 톤수만으로 고르지 않습니다. 작업 높이·건물과 차량 사이 거리·이용 시간·차량 설치 공간을 확인하고 실제 장비 제원에 맞춰 선택합니다.'

export const QUOTE_CHECKS = [
  { name: '높이', question: '어느 높이에서 작업하나요?', description: '간판이나 외벽의 작업 위치와 필요한 도달 높이를 알려주세요. 층수만으로 판단하기 어려우면 현장 사진을 함께 준비합니다.' },
  { name: '거리', question: '차량에서 작업 지점까지 얼마나 떨어져 있나요?', description: '차량을 세울 위치와 건물 사이 거리, 돌출 간판·차양 등 장애물을 확인합니다. 장비의 작업 반경에 영향을 줍니다.' },
  { name: '시간', question: '얼마나 오래, 언제 이용하나요?', description: '30분·1시간·반나절·하루 중 필요한 시간을 상담합니다. 현장 대기·이동 시간 산정, 시간 초과와 야간·주말 조건도 확인합니다.' },
  { name: '설치 공간', question: '차량이 진입하고 장비를 설치할 공간이 있나요?', description: '진입로 폭과 차량 설치 위치, 보행자·차량 통행 공간을 확인합니다. 현장 사진만으로 확정하기 어려운 조건은 담당자의 추가 확인이 필요합니다.' },
]

export const COST_QUESTIONS = [
  { q: '스카이차비용은 얼마인가요?', a: `${PRICE_ANSWER} ${COST_LIMIT}` },
  { q: '간판작업 비용과 스카이차 대여료는 같은가요?', a: '같지 않습니다. 간판작업 견적에는 간판 제작, 설치·철거 인력, 폐기물 처리 등이 포함될 수 있습니다. 이 가격표는 스카이차 장비 이용 기준 요금입니다. 필요한 시공 범위와 장비 대여 범위를 나눠 문의해 주세요.' },
  { q: '반나절·하루 요금은 몇 시간 기준인가요?', a: '반나절은 4시간, 하루는 8시간 기준입니다. 현장 대기나 장비 이동 시간의 산정 방식, 작업 시작·종료 시각은 예약할 때 확인해 주세요.' },
  { q: '시간을 초과하면 추가 비용이 있나요?', a: `${defaultPriceData[0].equipment}의 추가 시간 요금은 시간당 ${formatWon(defaultPriceData[0].additional)}, ${defaultPriceData[1].equipment}은 시간당 ${formatWon(defaultPriceData[1].additional)}으로 가격표에 안내합니다. 협의로 표시된 장비와 야간·주말 조건은 상담이 필요합니다. ${PRICE_NOTICE}` },
  { q: '1톤·3.5톤·5톤 중 어떤 스카이차를 빌려야 하나요?', a: `${EQUIPMENT_ANSWER} 작업 인원·공구 무게와 진입 조건도 함께 알려주세요. 동일 톤수라도 실제 차량의 작업 높이·반경이 다를 수 있어 특정 톤수만으로 작업 가능 여부를 확정하지 않습니다.` },
  { q: '스카이차를 당일이나 야간에도 예약할 수 있나요?', a: '당일·야간 이용은 배차 가능한 장비와 현장 조건을 확인한 뒤 결정합니다. 원하는 지역·시간에 무조건 출동한다고 보장하지 않으며, 대표번호 1877-3924로 주소·작업 내용·희망 시각을 알려주시면 상담할 수 있습니다.' },
]

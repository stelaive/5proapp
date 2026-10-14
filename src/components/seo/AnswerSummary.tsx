import Link from 'next/link'
import type { RegionData } from '@/lib/regionData'
import {
  ANSWER_UPDATED_AT, BRAND_DEFINITION, COST_LIMIT, EQUIPMENT_ANSWER,
  PRICE_ANSWER, formatWon,
} from '@/lib/answerContent'

type Props = { kind: 'home' | 'pricing' } | { kind: 'region'; data: RegionData } | { kind: 'hub'; name: string }

export default function AnswerSummary(props: Props) {
  let title: string
  let answers: string[]
  if (props.kind === 'pricing') {
    title = '스카이차비용은 얼마이고, 간판작업에는 어떤 장비가 필요한가요?'
    answers = [PRICE_ANSWER, COST_LIMIT, EQUIPMENT_ANSWER]
  } else if (props.kind === 'region') {
    const { data } = props
    const price = data.pricing.items[0]
    title = `${data.nameKo} 간판작업용 스카이차 비용과 예약 방법은?`
    answers = [
      `${data.nameKo} 페이지의 ${price.tonnage} 기준 요금은 1시간 ${formatWon(price.oneHour)}, 반나절(4시간) ${formatWon(price.halfDay)}, 하루(8시간) ${formatWon(price.fullDay)}입니다.`,
      `${data.subAreas.slice(0, 3).join('·')} 등 현장의 주소, 작업 높이·거리, 설치 공간과 날짜를 알려주시면 적합한 장비와 배차 가능 여부를 상담합니다.`,
      '간판 제작·설치 인력 비용은 장비 이용료와 구분합니다. 부가세·추가 비용을 포함한 총금액과 실제 이용 시간을 예약 전에 확인하세요.',
    ]
  } else if (props.kind === 'hub') {
    title = `${props.name} 스카이차 비용과 배차는 어떻게 확인하나요?`
    answers = [
      `${props.name}의 작업 주소와 간판 교체·외벽 보수 등 작업 내용을 기준으로 장비 대여를 상담합니다.`,
      '대여 비용은 장비 종류와 이용 시간, 진입·설치 조건에 따라 확인합니다. 시간별 기준 요금은 공식 가격표에서 비교할 수 있습니다.',
      '지역 안내가 있어도 특정 날짜의 배차가 보장되지는 않습니다. 현장 주소와 희망 시각으로 가능 여부와 최종 견적을 먼저 확인하세요.',
    ]
  } else {
    title = '간판작업용 스카이차, 비용과 장비는 어떻게 확인하나요?'
    answers = [
      '간판 설치·교체·철거와 외벽 보수에는 현장 높이·작업 반경에 맞는 스카이차 대여를 상담할 수 있습니다.',
      '스카이차비용은 장비와 이용 시간별 가격표를 기준으로 확인하되, 부가세·추가 비용을 포함한 최종 견적은 현장 조건으로 확인합니다.',
      '주소·작업 높이·차량 설치 공간·희망 날짜를 준비하고 1877-3924로 장비와 배차 가능 일정을 문의하세요.',
    ]
  }

  return (
    <section id="answer-summary" aria-labelledby="answer-summary-heading" className="scroll-mt-24 border-b border-orange-100 bg-orange-50/60 py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="answer-summary-heading" className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">{title}</h2>
        <ol aria-label="핵심 답변 3가지" className="mt-6 space-y-4 text-base leading-relaxed text-gray-800">
          {answers.map((answer, i) => <li key={answer} className="flex gap-3"><span aria-hidden="true" className="font-bold text-orange-700">{i + 1}.</span><p>{answer}</p></li>)}
        </ol>
        <p className="mt-6 border-t border-orange-200 pt-5 text-sm leading-relaxed text-gray-700">{BRAND_DEFINITION}</p>
        <p className="mt-3 text-sm text-gray-600">안내 제공: 5프로돌려주는스카이차 · 콘텐츠 작성일: <time dateTime={ANSWER_UPDATED_AT}>{ANSWER_UPDATED_AT}</time></p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-orange-800">
          <Link href="/pricing#equipment-prices" className="underline underline-offset-4">장비별 가격표 원문</Link>
          <Link href="/pricing#cost-guide" className="underline underline-offset-4">대여 비용·조건 자세히 보기</Link>
          <Link href="/support" className="underline underline-offset-4">예약·이용 안내</Link>
        </p>
      </div>
    </section>
  )
}

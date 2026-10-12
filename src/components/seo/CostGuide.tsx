import Link from 'next/link'
import { defaultPriceData } from '@/lib/priceData'
import { PRICE_NOTICE } from '@/lib/seo'

const compact = defaultPriceData[0]
const won = (value: number | string | undefined) => typeof value === 'number' ? `${value.toLocaleString('ko-KR')}원` : value
const questions = [
  { q: '스카이차비용은 얼마인가요?', a: `현재 가격표의 ${compact.equipment} 기준 요금은 30분 ${won(compact.shortTime)}, 1시간 ${won(compact.oneHour)}, 반나절 ${won(compact.halfDay)}, 하루 ${won(compact.fullDay)}입니다. 장비와 작업 조건에 따라 최종 견적이 달라지므로 부가세 및 추가 비용을 포함한 결제금액을 예약 전에 확인하세요.` },
  { q: '간판작업 비용과 스카이차 대여료는 같은가요?', a: '간판작업 견적에는 간판 제작, 설치·철거 인력, 폐기물 처리 등이 포함될 수 있습니다. 이 페이지는 스카이차 장비 이용요금 안내입니다. 장비만 필요한지, 시공 범위까지 상담이 필요한지 구분해 문의해 주세요.' },
  { q: '반나절·하루 요금은 몇 시간 기준인가요?', a: '반나절은 4시간, 하루는 8시간 기준으로 안내합니다. 현장 대기나 장비 이동 시간의 산정 방식, 작업 시작·종료 시각은 예약할 때 확인해 주세요.' },
  { q: '시간을 초과하면 추가 비용이 있나요?', a: '장비별 가격표의 추가 시간 요금을 확인해 주세요. 협의로 표시된 장비나 야간·주말 작업은 상담이 필요합니다. 예정 시간을 넘길 가능성이 있다면 견적 단계에서 알려주세요.' },
  { q: '1톤·3.5톤·5톤 중 어떤 스카이차를 빌려야 하나요?', a: '작업 높이뿐 아니라 차량에서 작업 지점까지의 거리, 작업 인원·공구 무게, 장비 설치 공간을 확인해야 합니다. 톤수만으로 작업 가능 높이를 판단하지 말고 현장 사진과 주소로 실제 장비 제원을 상담하세요.' },
]

export default function CostGuide() {
  return (
    <section id="cost-guide" aria-labelledby="cost-guide-heading" className="scroll-mt-24 bg-white py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: questions.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="cost-guide-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">스카이차비용, 무엇에 따라 달라질까요?</h2>
        <p className="mt-5 leading-relaxed text-gray-600">스카이차 가격을 비교할 때는 같은 장비와 이용 시간, 현장 조건을 기준으로 확인해야 합니다. 짧은 간판 교체와 하루 외벽 작업은 필요한 장비·시간이 다르므로 가장 낮은 요금만으로 총비용을 판단하기 어렵습니다.</p>
        <ol className="mt-6 space-y-4 text-gray-700">
          <li><strong>1. 장비와 작업 반경:</strong> 작업 높이, 건물과의 거리, 진입로·설치 공간에 맞는 장비를 선택합니다.</li>
          <li><strong>2. 이용 시간:</strong> 30분·1시간·반나절·하루 요금을 비교하고 대기·이동·초과 시간 산정 기준을 확인합니다.</li>
          <li><strong>3. 작업 조건:</strong> 야간·주말 일정, 차량 진입 제한과 현장 여건에 따른 추가 비용 유무를 확인합니다.</li>
          <li><strong>4. 견적 포함 범위:</strong> 장비·기사 관련 비용, 부가세, 추가 작업비를 구분한 최종 견적을 요청합니다.</li>
        </ol>
        <p className="mt-6 rounded-xl bg-orange-50 p-5 text-sm leading-relaxed text-gray-700">{PRICE_NOTICE}</p>
        <h2 className="mb-5 mt-12 text-2xl font-bold text-gray-900">스카이차 가격·대여 비용 자주 묻는 질문</h2>
        <div className="space-y-3">
          {questions.map(({ q, a }) => <details key={q} className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-bold text-gray-900">{q}</summary><p className="mt-4 leading-relaxed text-gray-600">{a}</p></details>)}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href="tel:18773924">내 현장 스카이차비용 상담하기</a>
          <Link href="/#sign-work" className="font-semibold text-orange-800 underline underline-offset-4">간판작업 장비·견적 준비사항</Link>
        </div>
      </div>
    </section>
  )
}

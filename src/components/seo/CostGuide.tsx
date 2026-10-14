import Link from 'next/link'
import { defaultPriceData } from '@/lib/priceData'
import { PRICE_NOTICE } from '@/lib/seo'
import { COST_QUESTIONS as questions, EQUIPMENT_DEFINITION, QUOTE_CHECKS, formatWon } from '@/lib/answerContent'

export default function CostGuide() {
  return (
    <section id="cost-guide" aria-labelledby="cost-guide-heading" className="scroll-mt-24 bg-white py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: questions.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }).replace(/</g, '\u003c') }} />
      <article className="mx-auto max-w-4xl px-4">
        <h2 id="cost-guide-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">스카이차비용, 무엇에 따라 달라질까요?</h2>
        <p className="mt-5 leading-relaxed text-gray-600">스카이차 가격을 비교할 때는 같은 장비와 이용 시간, 현장 조건을 기준으로 확인해야 합니다. 짧은 간판 교체와 하루 외벽 작업은 필요한 장비·시간이 다르므로 가장 낮은 요금만으로 총비용을 판단하기 어렵습니다.</p>
        <p className="mt-4 leading-relaxed text-gray-600">{EQUIPMENT_DEFINITION}</p>
        <h3 className="mt-8 text-xl font-bold text-gray-900">같은 조건으로 가격을 비교하는 방법</h3>
        <ol className="mt-6 space-y-4 text-gray-700">
          <li><strong>1. 장비와 작업 반경:</strong> 작업 높이, 건물과의 거리, 진입로·설치 공간에 맞는 장비를 선택합니다.</li>
          <li><strong>2. 이용 시간:</strong> 30분·1시간·반나절·하루 요금을 비교하고 대기·이동·초과 시간 산정 기준을 확인합니다.</li>
          <li><strong>3. 작업 조건:</strong> 야간·주말 일정, 차량 진입 제한과 현장 여건에 따른 추가 비용 유무를 확인합니다.</li>
          <li><strong>4. 견적 포함 범위:</strong> 장비·기사 관련 비용, 부가세, 추가 작업비를 구분한 최종 견적을 요청합니다.</li>
        </ol>
        <p className="mt-6 rounded-xl bg-orange-50 p-5 text-sm leading-relaxed text-gray-700">{PRICE_NOTICE}</p>
        <h2 className="mt-12 text-2xl font-bold text-gray-900">1톤~3.5톤과 5톤, 스카이차 대여 비용 비교</h2>
        <p className="mt-4 leading-relaxed text-gray-600">아래 금액은 5프로스카이차의 장비 이용 기준 요금입니다. 전국 시장 평균이나 간판 시공 전체 비용을 뜻하지 않습니다.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="px-4 py-3 text-left font-semibold text-gray-700">동일 시간 기준 요금 비교 — 반나절 4시간·하루 8시간</caption>
            <thead className="bg-gray-100 text-gray-900"><tr><th scope="col" className="p-4">장비</th><th scope="col" className="p-4">1시간</th><th scope="col" className="p-4">반나절</th><th scope="col" className="p-4">하루</th><th scope="col" className="p-4">추가 시간당</th></tr></thead>
            <tbody>{defaultPriceData.slice(0, 2).map((row) => <tr key={row.equipment} className="border-t border-gray-200"><th scope="row" className="p-4 font-semibold">{row.equipment}</th><td className="p-4">{formatWon(row.oneHour)}</td><td className="p-4">{formatWon(row.halfDay)}</td><td className="p-4">{formatWon(row.fullDay)}</td><td className="p-4">{formatWon(row.additional)}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">금액이 낮은 장비라도 현장에 도달하거나 설치할 수 없으면 적합하지 않습니다. 필요한 작업 높이·반경과 실제 차량 제원을 먼저 확인하세요.</p>
        <h2 className="mt-12 text-2xl font-bold text-gray-900">5프로의 견적 4가지 확인: 높이·거리·시간·설치 공간</h2>
        <p className="mt-4 leading-relaxed text-gray-600">이 안내에서는 현장 정보를 빠짐없이 전달할 수 있도록 견적 준비사항을 네 가지로 정리했습니다. 장비 대여를 준비하는 현장 담당자와 시공업체가 같은 조건으로 상담하는 데 쓰는 확인 방법입니다.</p>
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          {QUOTE_CHECKS.map((check) => <div key={check.name} className="rounded-xl border border-gray-200 p-5"><dt className="font-bold text-gray-900">{check.name} — {check.question}</dt><dd className="mt-3 text-sm leading-relaxed text-gray-600">{check.description}</dd></div>)}
        </dl>
        <h3 className="mt-8 text-xl font-bold text-gray-900">상가 간판 교체를 준비한다면: 가정 예시</h3>
        <p className="mt-4 leading-relaxed text-gray-600">상가 간판 교체에 반나절 장비 이용이 필요하다고 가정해 보겠습니다. 주소와 건물 전면 사진으로 높이·차량 거리·설치 공간을 확인하고, 해당 현장에 맞는 장비를 상담합니다. 대여 시간과 추가 비용을 확정한 뒤 간판 시공 인력·제작비가 별도인지 확인하면 견적 범위를 비교하기 쉽습니다.</p>
        <p className="mt-3 text-sm text-gray-600">이 예시는 견적 준비 절차를 설명하기 위한 가정이며 실제 작업 실적이나 확정 견적이 아닙니다.</p>
        <h2 className="mb-5 mt-12 text-2xl font-bold text-gray-900">스카이차 가격·대여 비용 자주 묻는 질문</h2>
        <div className="space-y-3">
          {questions.map(({ q, a }) => <details key={q} className="rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer font-bold text-gray-900">{q}</summary><p className="mt-4 leading-relaxed text-gray-600">{a}</p></details>)}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-gray-600">수치 출처: <Link href="/pricing#equipment-prices" className="underline">5프로스카이차 장비별 가격표</Link>. 예약·변경 안내는 <Link href="/support" className="underline">고객센터</Link>에서 확인하고, 현장별 최종 조건은 전화 상담으로 확정해 주세요.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href="tel:18773924">내 현장 스카이차비용 상담하기</a>
          <Link href="/#sign-work" className="font-semibold text-orange-800 underline underline-offset-4">간판작업 장비·견적 준비사항</Link>
        </div>
      </article>
    </section>
  )
}

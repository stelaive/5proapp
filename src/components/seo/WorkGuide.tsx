import Link from 'next/link'

/** 실제 서비스 선택에 필요한 본문. 서버 렌더링과 클라이언트 템플릿 모두에서 사용. */
export default function WorkGuide({ region }: { region?: string }) {
  const prefix = region ? `${region} ` : ''
  return (
    <section id="sign-work" aria-labelledby="work-guide-title" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="work-guide-title" className="text-2xl font-bold text-gray-900 md:text-3xl">{prefix}간판작업에 필요한 스카이차 대여</h2>
        <p className="mt-5 leading-relaxed text-gray-600">
          간판 설치·교체·철거처럼 건물 외부의 높은 위치에서 작업할 때는 작업 높이와 차량 설치 공간에 맞는 장비를 확인해야 합니다.
          스카이차 견적은 장비 이용에 대한 상담이며, 간판 제작·설치 인력·폐기물 처리까지 포함한 시공 견적과는 구분됩니다. 필요한 작업 범위를 상담 시 알려주세요.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900">간판 설치·교체·철거</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">간판 위치의 높이, 차량에서 건물까지의 거리, 돌출 간판·차양 등 장애물을 확인합니다. 건물 전면과 도로가 함께 나온 사진을 준비하면 상담에 도움이 됩니다.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900">외벽 보수·도장·유리 작업</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">한 곳에서 작업하는지 건물을 따라 이동해야 하는지에 따라 장비와 시간이 달라집니다. 작업 구간, 자재·공구 무게와 예상 이용 시간을 함께 알려주세요.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900">현장에 맞는 장비 선택</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">1톤·3.5톤·5톤 또는 굴절 장비는 톤수만으로 선택하지 않습니다. 실제 장비 제원, 작업 반경, 진입로와 설치 공간을 담당자와 확인한 뒤 결정합니다.</p>
          </article>
        </div>
        <div className="mt-8 rounded-2xl bg-orange-50 p-6">
          <h3 className="text-lg font-bold text-gray-900">{prefix}스카이차 비용 상담 전 준비할 정보</h3>
          <ul className="mt-4 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            <li>① 작업 주소와 희망 날짜·시각</li>
            <li>② 간판 교체·외벽 보수 등 작업 내용</li>
            <li>③ 작업 높이·건물과 차량 사이 거리</li>
            <li>④ 진입로·주차 공간과 예상 작업 시간</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">당일·야간 작업은 장비 일정과 현장 조건에 따라 가능 여부가 달라집니다. 상담 후 배차와 총비용을 확정해 주세요.</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="tel:18773924">현장 조건으로 견적 상담하기</a>
            <Link href="/pricing#cost-guide" className="font-semibold text-orange-800 underline underline-offset-4">스카이차비용·시간별 가격표 확인</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

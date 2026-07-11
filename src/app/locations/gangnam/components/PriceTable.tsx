import type { RegionData } from '@/lib/regionData'

interface PriceTableProps {
  data: RegionData;
}

export default function PriceTable({ data }: PriceTableProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
            투명한 스카이차 요금표
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {data.nameKo} 정찰제 요금으로 바가지 요금 걱정 없이 이용하세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="py-3 md:py-4 px-3 md:px-4 font-bold text-sm md:text-base">장비 톤수</th>
                  <th className="py-3 md:py-4 px-3 md:px-4 font-bold text-sm md:text-base">1시간</th>
                  <th className="py-3 md:py-4 px-3 md:px-4 font-bold text-sm md:text-base">추가 (1시간)</th>
                  <th className="py-3 md:py-4 px-3 md:px-4 font-bold text-sm md:text-base">반나절 (4시간)</th>
                  <th className="py-3 md:py-4 px-3 md:px-4 font-bold text-sm md:text-base">하루 (8시간)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.pricing.items.map((item, index) => (
                  <tr key={index} className="hover:bg-[#F97316]/10 transition-colors">
                    <td className="py-3 md:py-4 px-3 md:px-4 font-bold text-gray-800 text-sm md:text-base">
                      {item.tonnage}
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-gray-600 text-sm md:text-base">
                      {formatPrice(item.oneHour)}원
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-gray-600 text-sm md:text-base">
                      {item.additionalHour ? `${formatPrice(item.additionalHour)}원` : '-'}
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-gray-600 text-sm md:text-base">
                      {formatPrice(item.halfDay)}원
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-gray-600 text-sm md:text-base">
                      {formatPrice(item.fullDay)}원
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 하단 고지 - PRD 6-3 */}
          <div className="p-4 md:p-6 bg-gray-50 text-left text-xs md:text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-gray-700">* 부가세 별도 금액입니다.</p>
            <p className="font-semibold">
              • 작업시간 초과 시 1시간당 5만원 추가
            </p>
            <p className="font-semibold">
              • 지역별 추가비 없음
            </p>
            <p>
              • {data.pricing.notice}
            </p>
          </div>
        </div>

        {/* 전화 CTA */}
        <div className="text-center mt-8 md:mt-10">
          <a 
            href={`tel:${data.phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-800 transition-all min-h-[44px]"
          >
            📞 전화로 간편 견적 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image'
import type { RegionData } from '@/lib/regionData'

interface BenefitCardsProps {
  data: RegionData;
}

export default function BenefitCards({ data }: BenefitCardsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
            왜 <span className="text-[#F97316]">'5프로 스카이차'</span>를 써야 할까요?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            전화 한 통이면 {data.nameKo} 어디든 해결! 앱으로 부르면 혜택이 쏟아집니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 혜택: 5% 페이백 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#F97316]/30 transition-colors">
            <div className="relative h-40 md:h-48 mb-6">
              <Image
                src="/images/app-check-points.png"
                alt={`${data.nameKo} 스카이차 결제금액 5% 페이백 혜택 안내`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              💰 무조건 <span className="text-[#F97316]">5% 페이백</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              결제금액의 5% 포인트/현금 페이백<br />
              작업 완료 후 즉시 적립<br />
              <span className="text-xs text-gray-500">(취소/부분취소/추가비 제외)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            왜 <span className="text-[#42d9de]">'5프로 스카이차'</span>를 써야 할까요?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            전화 한 통이면 {data.nameKo} 어디든 해결! 앱으로 부르면 혜택이 쏟아집니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* 혜택 1: 5% 페이백 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#42d9de]/30 transition-colors">
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
              💰 무조건 <span className="text-[#42d9de]">5% 페이백</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              결제금액의 5% 포인트/현금 페이백<br />
              작업 완료 후 즉시 적립<br />
              <span className="text-xs text-gray-500">(취소/부분취소/추가비 제외)</span>
            </p>
          </div>

          {/* 혜택 2: 100만원 이벤트 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#42d9de]/30 transition-colors">
            <div className="relative h-40 md:h-48 mb-6">
              <Image
                src="/images/1-million-won-lottery-machine.png"
                alt={`${data.nameKo} 스카이차 이용 고객 대상 매달 100만원 추첨 이벤트`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              🎰 매달 <span className="text-[#42d9de]">100만원</span> 행운 추첨
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              작업 1건만 해도 자동으로 응모 완료!<br />
              매달 말일 19시 유튜브 라이브로 공정하게 추첨하여<br />
              현금 100만원을 드립니다.
            </p>
          </div>
        </div>

        {/* 하단 고정 문구 - PRD 6-2 */}
        <div className="mt-12 max-w-5xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 참여 조건:</span> 월 1건 이상 작업 완료 시 자동 참여
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 추첨 일시:</span> 매달 말일 오후 7시
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  <span className="text-[#42d9de] font-bold">• 발표 방식:</span> 유튜브 생방송 + 공지
                </p>
              </div>
              <a
                href="https://youtube.com/@tv-jj1km?si=rEg3ME5jW9QHh1xV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#42d9de] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3bc4c9] transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] text-sm md:text-base"
              >
                <span>🎥 추첨 영상 보기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

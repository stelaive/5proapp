import type { RegionData } from '@/lib/regionData'

interface BookingProcessProps {
  data: RegionData;
}

export default function BookingProcess({ data }: BookingProcessProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
              예약 프로세스
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              모든 과정은 전화 상담으로 진행됩니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.bookingSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-orange-200 transition-colors text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* 배차 정책 안내 */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4 text-base md:text-lg">
              📋 배차·예약 정책
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li>• 1~2시간 작업: 작업 1~2시간 전 전화 예약</li>
              <li>• 반나절/하루 작업: 전날 전화 예약 필수</li>
              <li>• 지역별 추가비 없음</li>
              <li>• 시간 초과 시 1시간당 +5만원</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

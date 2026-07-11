'use client'

import { Icon } from '@/components/ui/icon'

export default function StepSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight px-2">
            사장님, 딱 이것만<br className="sm:hidden" /> 기억하시면 됩니다.
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          {/* STEP 1 - 전화 예약 */}
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl"><Icon name="Phone" size={28} /></span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              예약은 전화로.
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              1877-3924로 전화해서<br className="sm:hidden" /> 필요한 장비와 시간을<br className="sm:hidden" /> 말씀해주세요.<br />
              저희의 정직한 가격과<br className="sm:hidden" /> 5% 페이백은<br className="sm:hidden" /> 자동으로 적용됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
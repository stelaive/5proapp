'use client'

import type { RegionData } from '@/lib/regionData'

interface FooterNoticeProps {
  data: RegionData;
}

export default function FooterNotice({ data }: FooterNoticeProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-jalnan">
            하단 고지
          </h2>
          
          <div className="space-y-6 text-sm md:text-base">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-orange-400 mb-3">💰 5% 페이백</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 작업 완료 후 적립</li>
                <li>• 제외 조건: {data.footerNotice.exclusion}</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-orange-400 mb-3">⚠️ 주의사항</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 과장 표현 사용 금지</li>
                <li>• 모든 조건은 실제 서비스 약관에 따릅니다</li>
                <li>• 문의사항은 전화 상담으로 확인해주세요</li>
              </ul>
            </div>
          </div>

          {/* 최종 전화 CTA */}
          <div className="mt-12 text-center">
            <a 
              href={`tel:${data.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all min-h-[44px] shadow-lg"
              style={{ backgroundColor: '#F97316' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EA580C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F97316';
              }}
            >
              📞 {data.phone} 지금 전화하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

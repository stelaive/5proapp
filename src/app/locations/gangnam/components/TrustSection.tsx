import type { RegionData } from '@/lib/regionData'
import { Shield, FileText, Award, Wrench } from 'lucide-react'

interface TrustSectionProps {
  data: RegionData;
}

export default function TrustSection({ data }: TrustSectionProps) {
  const trustItems = [
    {
      icon: Shield,
      title: '보험 가입',
      description: data.trust.insurance ? '완전 보장' : '미가입',
      color: 'text-blue-500'
    },
    {
      icon: FileText,
      title: '사업자 등록',
      description: data.trust.businessLicense,
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: '기사 경력',
      description: data.trust.driverExperience,
      color: 'text-[#F97316]'
    },
    {
      icon: Wrench,
      title: '장비 점검',
      description: data.trust.equipmentCheck,
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
              신뢰 요소
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              안전하고 믿을 수 있는 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#F97316]/30 transition-colors"
                >
                  <Icon className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 ${item.color}`} />
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 추가: 플레이스/리뷰 버튼 */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://m.place.naver.com/place/18773924" // 실제 플레이스 링크로 변경 필요
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border-2 border-[#03C75A] text-[#03C75A] px-8 py-4 rounded-2xl font-bold hover:bg-[#03C75A]/5 transition-colors"
            >
              <span className="bg-[#03C75A] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">N</span>
              네이버 실제 작업 후기 확인
            </a>
            <a 
              href="https://www.google.com/maps" // 실제 구글 맵 링크로 변경 필요
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.34-2.04 4.48-1.14 1.14-2.9 2.38-5.8 2.38-4.66 0-8.44-3.78-8.44-8.44s3.78-8.44 8.44-8.44c2.52 0 4.42.98 5.8 2.3l2.3-2.3C18.12 2.02 15.5 1 12.48 1 6.14 1 1 6.14 1 12.48S6.14 24 12.48 24c3.44 0 6.04-1.14 8.04-3.32 2.08-2.08 2.74-4.98 2.74-7.34 0-.52-.04-1.02-.12-1.42H12.48z"/>
              </svg>
              구글 지도 평점 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

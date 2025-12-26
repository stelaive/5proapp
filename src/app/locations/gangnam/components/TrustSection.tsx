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
      color: 'text-[#42d9de]'
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
                  className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#42d9de]/30 transition-colors"
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
        </div>
      </div>
    </section>
  );
}

import React from 'react';

interface LocalAreaListProps {
  nameKo: string;
  subAreas: string[];
}

const LocalAreaList = ({ nameKo, subAreas }: LocalAreaListProps) => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {nameKo} 전 지역 신속 배차 안내
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          저희 5프로돌려주는스카이차는 {nameKo} 내 모든 동네를 가장 잘 아는 전문 기사님들이 상주하고 있습니다. 
          전화 한 통이면 가장 가까운 차량이 즉시 배차됩니다.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {subAreas.map((area) => (
            <span 
              key={area}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:border-[#F97316] hover:text-[#F97316] transition-colors shadow-sm"
            >
              {area} 스카이차
            </span>
          ))}
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          * {subAreas[0]} 외 {nameKo} 전 지역 30분 이내 도착을 목표로 하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default LocalAreaList;

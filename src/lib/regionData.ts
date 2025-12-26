// 지역별 상세 데이터 구조 (PRD 기반)

export interface PricingItem {
  tonnage: string;
  oneHour: number; // 1시간
  additionalHour?: number; // 추가 시간당 (1톤/3.5톤만)
  halfDay: number; // 반나절 (4시간)
  fullDay: number; // 하루 (8시간)
}

export interface TonnageGuide {
  ton: string;
  examples: string[];
}

export interface BookingStep {
  step: number;
  title: string;
  description: string;
}

export interface RegionData {
  slug: string;
  name: string;
  nameKo: string;
  subAreas: string[];
  phone: string;
  
  hero: {
    headline: string;
    subCopy: string;
  };
  
  pricing: {
    items: PricingItem[];
    notice: string;
  };
  
  tonnageGuide: TonnageGuide[];
  
  bookingSteps: BookingStep[];
  
  trust: {
    insurance: boolean;
    businessLicense: string;
    driverExperience: string;
    equipmentCheck: string;
  };
  
  footerNotice: {
    lottery: string;
    payment: string;
    exclusion: string;
    announcement: string;
  };
}

// 강남구 데이터
export const GANGNAM_DATA: RegionData = {
  slug: 'gangnam',
  name: 'Gangnam',
  nameKo: '강남구',
  subAreas: ['신사', '논현', '압구정', '청담', '삼성', '역삼', '대치', '도곡'],
  phone: '1877-3924',
  
  hero: {
    headline: '강남구 스카이차',
    subCopy: '신사·논현·압구정 전 지역 대응'
  },
  
  pricing: {
    items: [
      { 
        tonnage: '1톤 / 3.5톤', 
        oneHour: 250000, 
        additionalHour: 50000,
        halfDay: 350000, 
        fullDay: 550000 
      },
      { 
        tonnage: '5톤', 
        oneHour: 350000,
        additionalHour: 50000,
        halfDay: 450000, 
        fullDay: 650000 
      }
    ],
    notice: '작업 높이, 시간 초과(+5만원/시간), 야간/주말, 현장 진입/주차 여건에 따라 추가 비용이 발생할 수 있습니다.'
  },
  
  tonnageGuide: [
    { ton: '1톤', examples: ['소형 간판', '실외기'] },
    { ton: '3.5톤', examples: ['아파트 외벽', '중형 작업'] },
    { ton: '5톤', examples: ['고층', '장거리'] }
  ],
  
  bookingSteps: [
    { 
      step: 1, 
      title: '위치/층수', 
      description: '전화 상담으로 정확한 위치 확인' 
    },
    { 
      step: 2, 
      title: '작업 내용·시간', 
      description: '작업 내용과 예상 소요 시간 안내' 
    },
    { 
      step: 3, 
      title: '확정 후 출동', 
      description: '견적 확정 후 즉시 출동' 
    }
  ],
  
  trust: {
    insurance: true,
    businessLicense: '123-45-67890',
    driverExperience: '10년 이상',
    equipmentCheck: '매일 점검'
  },
  
  footerNotice: {
    lottery: '월 1건 이상 작업 완료 시 자동 응모',
    payment: '매달 말일 19시 유튜브 라이브 추첨',
    exclusion: '취소/부분취소/추가비 제외 가능',
    announcement: '유튜브 + 공지'
  }
};

// 지역 데이터 가져오기 헬퍼
export function getRegionData(slug: string): RegionData | null {
  const regionMap: Record<string, RegionData> = {
    gangnam: GANGNAM_DATA,
  };
  
  return regionMap[slug] || null;
}

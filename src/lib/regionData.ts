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
  subAreas: ['신사동', '논현동', '압구정동', '청담동', '삼성동', '역삼동', '대치동', '도곡동', '개포동', '일원동', '수서동', '세곡동'],
  phone: '1877-3924',
  
  hero: {
    headline: '강남구 스카이차',
    subCopy: '신사·논현·역삼동 전 지역 30분 내 배차'
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
    { ton: '1톤', examples: ['소형 간판', '실외기', '좁은 골목'] },
    { ton: '3.5톤', examples: ['아파트 외벽', '유리 작업', '중형 공사'] },
    { ton: '5톤', examples: ['고층 외벽', '무거운 자재', '대형 현장'] }
  ],
  
  bookingSteps: [
    { 
      step: 1, 
      title: '위치/층수 확인', 
      description: '정확한 주소와 작업 높이를 알려주세요.' 
    },
    { 
      step: 2, 
      title: '맞춤 견적 상담', 
      description: '작업 내용에 맞는 최적의 장비와 요금을 안내합니다.' 
    },
    { 
      step: 3, 
      title: '확정 및 출동', 
      description: '상담 완료 즉시 가장 가까운 기사가 배차됩니다.' 
    }
  ],
  
  trust: {
    insurance: true,
    businessLicense: '등록 완료',
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

// 안양시 데이터
export const ANYANG_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'anyang',
  name: 'Anyang',
  nameKo: '안양시',
  subAreas: ['안양동', '석수동', '박달동', '비산동', '관양동', '평촌동', '호계동'],
  hero: {
    headline: '안양 스카이차',
    subCopy: '동안구·만안구 전 지역 신속 배차'
  }
};

// 수원시 데이터
export const SUWON_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'suwon',
  name: 'Suwon',
  nameKo: '수원시',
  subAreas: ['인계동', '영통동', '매탄동', '권선동', '세류동', '팔달로', '정자동', '조원동', '광교'],
  hero: {
    headline: '수원 스카이차',
    subCopy: '영통·팔달·권선·장안구 전 지역 대응'
  }
};

// 군포시 데이터
export const GUNPO_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'gunpo',
  name: 'Gunpo',
  nameKo: '군포시',
  subAreas: ['산본동', '금정동', '당동', '당정동', '부곡동', '대야미동', '오금동', '수리동'],
  hero: {
    headline: '군포 스카이차',
    subCopy: '산본·금정 전 지역 30분 내 도착'
  }
};

// 지역 데이터 가져오기 헬퍼
export function getRegionData(slug: string): RegionData | null {
  const regionMap: Record<string, RegionData> = {
    gangnam: GANGNAM_DATA,
    anyang: ANYANG_DATA,
    suwon: SUWON_DATA,
    gunpo: GUNPO_DATA,
  };
  
  return regionMap[slug] || null;
}

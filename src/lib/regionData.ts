// 지역별 상세 데이터 구조 (PRD 기반)

export interface City {
  name: string;
  slug: string;
}

export interface RegionGroup {
  name: string;
  description: string;
  cities: City[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  isGrouped: boolean;
  groups?: RegionGroup[];
  cities?: City[];
}

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

// 상위 레벨 로케이션 데이터 (기존 locationsData.ts 통합)
export const LOCATIONS_DATA: Location[] = [
  {
    id: 'seoul',
    name: '서울특별시',
    slug: 'seoul',
    isGrouped: false,
    cities: [
      { name: '강남구', slug: 'gangnam' },
      { name: '강동구', slug: 'gangdong' },
      { name: '강북구', slug: 'gangbuk' },
      { name: '강서구', slug: 'gangseo' },
      { name: '관악구', slug: 'gwanak' },
      { name: '광진구', slug: 'gwangjin' },
      { name: '구로구', slug: 'guro' },
      { name: '금천구', slug: 'geumcheon' },
      { name: '노원구', slug: 'nowon' },
      { name: '도봉구', slug: 'dobong' },
      { name: '동대문구', slug: 'dongdaemun' },
      { name: '동작구', slug: 'dongjak' },
      { name: '마포구', slug: 'mapo' },
      { name: '서대문구', slug: 'seodaemun' },
      { name: '서초구', slug: 'seocho' },
      { name: '성동구', slug: 'seongdong' },
      { name: '성북구', slug: 'seongbuk' },
      { name: '송파구', slug: 'songpa' },
      { name: '양천구', slug: 'yangcheon' },
      { name: '영등포구', slug: 'yeongdeungpo' },
      { name: '용산구', slug: 'yongsan' },
      { name: '은평구', slug: 'eunpyeong' },
      { name: '종로구', slug: 'jongno' },
      { name: '중구', slug: 'junggu' },
      { name: '중랑구', slug: 'jungnang' },
    ],
  },
  {
    id: 'gyeonggi',
    name: '경기도',
    slug: 'gyeonggi',
    isGrouped: true,
    groups: [
      {
        name: '경기 남부',
        description: '대한민국 산업과 경제의 중심, 경기 남부의 모든 현장을 5프로가 책임집니다.',
        cities: [
          { name: '과천시', slug: 'gwacheon' },
          { name: '광명시', slug: 'gwangmyeong' },
          { name: '광주시', slug: 'gwangju' },
          { name: '군포시', slug: 'gunpo' },
          { name: '부천시', slug: 'bucheon' },
          { name: '성남시', slug: 'seongnam' },
          { name: '수원시', slug: 'suwon' },
          { name: '시흥시', slug: 'siheung' },
          { name: '안산시', slug: 'ansan' },
          { name: '안성시', slug: 'anseong' },
          { name: '안양시', slug: 'anyang' },
          { name: '양평군', slug: 'yangpyeong' },
          { name: '여주시', slug: 'yeoju' },
          { name: '오산시', slug: 'osan' },
          { name: '용인시', slug: 'yongin' },
          { name: '의왕시', slug: 'uiwang' },
          { name: '이천시', slug: 'icheon' },
          { name: '평택시', slug: 'pyeongtaek' },
          { name: '하남시', slug: 'hanam' },
          { name: '화성시', slug: 'hwaseong' },
        ].sort((a, b) => a.name.localeCompare(b.name, 'ko')),
      },
      {
        name: '경기 북부',
        description: '무한한 가능성의 땅, 경기 북부의 성장에 5프로가 함께합니다.',
        cities: [
          { name: '가평군', slug: 'gapyeong' },
          { name: '고양시', slug: 'goyang' },
          { name: '구리시', slug: 'guri' },
          { name: '김포시', slug: 'gimpo' },
          { name: '남양주시', slug: 'namyangju' },
          { name: '동두천시', slug: 'dongducheon' },
          { name: '양주시', slug: 'yangju' },
          { name: '연천군', slug: 'yeoncheon' },
          { name: '의정부시', slug: 'uijeongbu' },
          { name: '파주시', slug: 'paju' },
          { name: '포천시', slug: 'pocheon' },
        ].sort((a, b) => a.name.localeCompare(b.name, 'ko')),
      },
    ],
  },
  {
    id: 'incheon',
    name: '인천광역시',
    slug: 'incheon',
    isGrouped: false,
    cities: [
      { name: '중구', slug: 'junggu' },
      { name: '동구', slug: 'donggu' },
      { name: '미추홀구', slug: 'michuholgu' },
      { name: '연수구', slug: 'yeonsugu' },
      { name: '남동구', slug: 'namdonggu' },
      { name: '부평구', slug: 'bupyeonggu' },
      { name: '계양구', slug: 'gyeyanggu' },
      { name: '서구', slug: 'seogu' },
      { name: '강화군', slug: 'ganghwagun' },
      { name: '옹진군', slug: 'ongjingun' },
    ],
  },
];

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

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
  thirtyMin?: number; // 30분 최소요금 (해당 차종만)
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
  /**
   * 타이틀/키워드용 축약명 (구·시 접미사 제거).
   * SEO 키워드는 붙여쓰기 형태로 노출됨: `${nameShort}스카이차` → "강남스카이차", "서초스카이차".
   * 자연스러운 문장에는 nameKo(강남구/수원시)를 그대로 사용.
   */
  nameShort: string;
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
    exclusion: string;
  };

  // 선택: 작업 사례 갤러리 (이미지가 있는 도시만)
  gallery?: {
    src: string;
    alt: string;
    location?: string;
    date?: string;
    category?: string;
  }[];

  // 선택: 도시별 커스텀 FAQ (없으면 템플릿이 표준 FAQ 자동 생성)
  faq?: { q: string; a: string }[];

  // 선택: 구별 로컬 서술 1~2문장 (히어로 아래 노출 + 메타 description 차별화용).
  // 지역 고유 특성을 담아 이름-치환 중복을 해소하고 AEO/GEO 인용 가능성을 높임.
  localIntro?: string;

  // 선택: 구별 특화 FAQ (표준 FAQ 앞에 병합됨)
  localFaq?: { q: string; a: string }[];
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
  nameShort: '강남',
  subAreas: ['신사동', '논현동', '압구정동', '청담동', '삼성동', '역삼동', '대치동', '도곡동', '개포동', '일원동', '수서동', '세곡동'],
  phone: '1877-3924',
  
  hero: {
    headline: '강남구 스카이차',
    subCopy: '신사·논현·역삼동 전 지역 30분 내 배차'
  },
  
  pricing: {
    items: [
      {
        // 공식 요금표(src/lib/priceData.ts defaultPriceData)와 값을 일치시킬 것.
        // 여기서 어긋나면 /pricing 과 지역 페이지가 서로 다른 가격을 고지하게 된다.
        tonnage: '1톤 / 3.5톤',
        thirtyMin: 200000,
        oneHour: 250000,
        additionalHour: 150000,
        halfDay: 350000,
        fullDay: 550000
      },
      { 
        tonnage: '5톤', 
        thirtyMin: 300000,
        oneHour: 300000,
        additionalHour: 200000,
        halfDay: 450000, 
        fullDay: 650000 
      }
    ],
    notice: '작업 높이, 시간 초과(1톤~3.5톤 15만원/시간, 5톤 20만원/시간), 야간/주말, 현장 진입/주차 여건에 따라 추가 비용이 발생할 수 있습니다. 표시 금액은 부가세 별도입니다.'
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
    exclusion: '취소/부분취소/추가비 제외 가능'
  },
  localIntro: '강남구는 테헤란로 오피스 빌딩과 신사·압구정 상권이 밀집해 간판 교체, 외벽·유리 보수 등 고소작업 수요가 가장 많은 지역입니다. 역삼·삼성·논현동 등 어디든 현장 여건에 맞는 스카이차를 30분 내 배차합니다.',
  localFaq: [
    { q: '강남 테헤란로 오피스 빌딩 간판·외벽 작업도 가능한가요?', a: '네. 고층 상업빌딩이 많은 강남 특성상 5톤 굴절 등 고소 장비를 상시 운용합니다. 건물 높이와 주소를 알려주시면 적합한 톤수로 배차합니다.' }
  ],
  gallery: [
    { src: '/images/sky-car-visual-3.png', alt: '강남구 삼성동 빌딩 외벽 보수 작업', location: '강남구 삼성동', category: '외벽보수' },
    { src: '/images/sky-car-visual-4.png', alt: '강남구 역삼동 상가 간판 교체 작업', location: '강남구 역삼동', category: '간판교체' }
  ]
};

// 서초구 데이터
export const SEOCHO_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'seocho',
  name: 'Seocho',
  nameKo: '서초구',
  nameShort: '서초',
  subAreas: [
    '서초1동', '서초2동', '서초3동', '서초4동',
    '잠원동',
    '반포본동', '반포1동', '반포2동', '반포3동', '반포4동',
    '방배본동', '방배1동', '방배2동', '방배3동', '방배4동',
    '양재1동', '양재2동',
    '내곡동',
  ],
  hero: {
    headline: '서초 스카이차',
    subCopy: '서초·잠원·반포·방배·양재동 전 지역 30분 내 배차',
  },
  localIntro: '서초구는 서초동 법조타운과 강남대로 상권, 반포·잠원 대단지 아파트가 어우러진 지역으로 상가 간판부터 아파트 외벽까지 작업 범위가 넓습니다. 방배·양재·내곡동까지 서초 전역에 현장 여건에 맞는 스카이차를 신속 배차합니다.',
  localFaq: [
    { q: '서초 반포·잠원 대단지 아파트 외벽 작업이 가능한가요?', a: '네. 대단지 아파트는 단지 내 진입로·주차 여건 확인 후 적합한 톤수로 배차합니다. 동·호수와 작업 높이를 미리 알려주시면 준비가 빠릅니다.' }
  ],
  gallery: undefined, // 서초 전용 이미지 준비되면 추가 (강남 갤러리 상속 방지)
};

// 안양시 데이터
export const ANYANG_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'anyang',
  name: 'Anyang',
  nameKo: '안양시',
  nameShort: '안양',
  subAreas: ['안양동', '석수동', '박달동', '비산동', '관양동', '평촌동', '호계동'],
  hero: {
    headline: '안양 스카이차',
    subCopy: '동안구·만안구 전 지역 신속 배차'
  },
  gallery: [
    { src: '/images/anyang/anyang-sky-car-apartment-work.jpg', alt: '안양시 아파트 외벽 고소작업', location: '안양시', category: '아파트 작업' },
    { src: '/images/anyang/anyang-sky-car-day-work.png', alt: '안양시 주간 스카이차 현장 작업', location: '안양시', category: '주간 작업' },
    { src: '/images/anyang/anyang-sky-car-night-work.png', alt: '안양시 야간 스카이차 긴급 작업', location: '안양시', category: '야간 작업' }
  ]
};

// 수원시 데이터
export const SUWON_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'suwon',
  name: 'Suwon',
  nameKo: '수원시',
  nameShort: '수원',
  subAreas: ['인계동', '영통동', '매탄동', '권선동', '세류동', '팔달로', '정자동', '조원동', '광교'],
  hero: {
    headline: '수원 스카이차',
    subCopy: '영통·팔달·권선·장안구 전 지역 대응'
  },
  gallery: undefined // 수원 전용 이미지 준비되면 추가 (강남 갤러리 상속 방지)
};

// 군포시 데이터
export const GUNPO_DATA: RegionData = {
  ...GANGNAM_DATA,
  slug: 'gunpo',
  name: 'Gunpo',
  nameKo: '군포시',
  nameShort: '군포',
  subAreas: ['산본동', '금정동', '당동', '당정동', '부곡동', '대야미동', '오금동', '수리동'],
  hero: {
    headline: '군포 스카이차',
    subCopy: '산본·금정 전 지역 30분 내 도착'
  },
  gallery: [
    { src: '/images/gunpo-sky-car-signboard-installation.png', alt: '군포시 산본 간판 설치 고소작업', location: '군포시 산본', category: '간판설치' }
  ]
};

// 서울 자치구 팩토리 — 강남 데이터를 기반으로 구별 이름/동리스트/로컬콘텐츠 교체.
// nameShort: 타이틀 키워드용 축약명(구 제거). 단, '중구'는 '중' 단독이 어색해 그대로 유지.
// extra: localIntro·localFaq 등 구별 고유 콘텐츠(이름-치환 중복 해소용).
function makeSeoulGu(
  slug: string,
  nameKo: string,
  nameShort: string,
  subAreas: string[],
  extra?: Partial<RegionData>
): RegionData {
  return {
    ...GANGNAM_DATA,
    slug,
    name: slug,
    nameKo,
    nameShort,
    subAreas,
    hero: {
      headline: `${nameShort} 스카이차`,
      subCopy: `${subAreas.slice(0, 4).join('·')} 등 ${nameKo} 전 지역 신속 배차`,
    },
    gallery: undefined, // 구별 전용 이미지 준비되면 추가 (강남 갤러리 상속 방지)
    ...extra,
  };
}

// 서울 나머지 23개 자치구 (강남·서초 제외) — 각 구 실제 지역 특성 기반 로컬 콘텐츠 포함
export const GANGDONG_DATA = makeSeoulGu('gangdong', '강동구', '강동', ['천호동', '성내동', '길동', '둔촌동', '암사동', '명일동', '고덕동', '상일동', '강일동'], {
  localIntro: '강동구는 고덕·둔촌 대규모 재건축 아파트와 천호 상권이 함께 있어 신축 현장의 자재 양중부터 상가 간판 작업까지 수요가 다양합니다. 암사·명일·길동 등 강동 전역에 현장 여건에 맞는 스카이차를 신속 배차합니다.',
  localFaq: [{ q: '강동 고덕·둔촌 재건축 현장에도 스카이차를 부를 수 있나요?', a: '네. 신축·재건축 현장의 외벽·자재 작업에 맞춰 톤수를 배차합니다. 현장 진입 여건을 알려주시면 적합한 장비로 출동합니다.' }],
});
export const GANGBUK_DATA = makeSeoulGu('gangbuk', '강북구', '강북', ['미아동', '수유동', '번동', '우이동', '삼양동', '송중동', '송천동', '삼각산동', '인수동'], {
  localIntro: '강북구는 미아 상권과 수유·번동 일대 다세대·저층 주택가가 밀집한 지역입니다. 좁은 골목이 많아 1톤·3.5톤 소형 스카이차가 유리하며, 우이·인수동까지 신속 배차합니다.',
  localFaq: [{ q: '강북 수유동 좁은 주택가 골목에도 스카이차 진입이 되나요?', a: '네. 골목이 좁은 현장은 1톤·3.5톤 소형 장비로 대응합니다. 주소를 알려주시면 진입 가능 여부를 사전에 확인해 드립니다.' }],
});
export const GANGSEO_DATA = makeSeoulGu('gangseo', '강서구', '강서', ['화곡동', '염창동', '등촌동', '가양동', '발산동', '우장산동', '공항동', '방화동'], {
  localIntro: '강서구는 마곡 오피스단지와 화곡동 빌라 밀집지역, 김포공항이 함께 있는 지역입니다. 마곡 신축 빌딩부터 화곡 다세대까지 현장 성격이 다양해 톤수별 장비를 폭넓게 운용합니다.',
  localFaq: [{ q: '강서 마곡지구 오피스 빌딩 외벽 작업도 가능한가요?', a: '네. 마곡 일대 중·고층 빌딩은 5톤 굴절 등 고소 장비로 대응합니다. 건물 높이를 알려주시면 적합한 톤수로 배차합니다.' }],
});
export const GWANAK_DATA = makeSeoulGu('gwanak', '관악구', '관악', ['보라매동', '낙성대동', '청룡동', '은천동', '인헌동', '서원동', '신림동', '신사동', '조원동', '대학동'], {
  localIntro: '관악구는 신림·봉천 일대 원룸과 다세대 주택이 빽빽하게 들어선 지역으로, 좁은 경사로가 많아 소형 스카이차 수요가 높습니다. 낙성대·서원·신사동까지 관악 전역에 신속 대응합니다.',
  localFaq: [{ q: '관악 신림동 언덕·좁은 골목 현장도 작업이 되나요?', a: '네. 경사와 골목이 많은 관악 특성에 맞춰 1톤·3.5톤 소형 장비로 대응합니다. 현장 사진을 보내주시면 진입 가능 여부를 확인해 드립니다.' }],
});
export const GWANGJIN_DATA = makeSeoulGu('gwangjin', '광진구', '광진', ['화양동', '군자동', '중곡동', '능동', '구의동', '광장동', '자양동'], {
  localIntro: '광진구는 건대입구 상권과 자양·구의동 아파트, 성수와 인접한 상업지역이 어우러진 곳입니다. 상가 간판 교체부터 아파트 외벽까지 광진 전역에 신속 배차합니다.',
  localFaq: [{ q: '광진 건대 상권 상가 간판 작업이 가능한가요?', a: '네. 유동인구가 많은 건대 일대는 작업 시간대 조율이 중요해, 예약 시 원하시는 시간을 알려주시면 맞춰 배차합니다.' }],
});
export const GURO_DATA = makeSeoulGu('guro', '구로구', '구로', ['구로동', '신도림동', '가리봉동', '고척동', '개봉동', '오류동', '수궁동', '항동'], {
  localIntro: '구로구는 구로디지털단지의 지식산업센터와 신도림 상권이 밀집한 지역으로, 고층 업무빌딩 외벽·간판 작업 수요가 많습니다. 개봉·고척·오류동까지 구로 전역에 대응합니다.',
  localFaq: [{ q: '구로디지털단지 지식산업센터 고층 작업도 되나요?', a: '네. 고층 업무빌딩은 5톤 굴절 등 고소 장비로 대응합니다. 층수와 주소를 알려주시면 적합한 톤수를 배차합니다.' }],
});
export const GEUMCHEON_DATA = makeSeoulGu('geumcheon', '금천구', '금천', ['가산동', '독산동', '시흥동'], {
  localIntro: '금천구는 가산디지털단지의 지식산업센터·패션아울렛과 독산동 주거지가 공존하는 지역입니다. 대형 상업시설 간판부터 주택가 작업까지 금천 전역에 신속 배차합니다.',
  localFaq: [{ q: '가산디지털단지 대형 건물 간판·외벽 작업이 가능한가요?', a: '네. 가산 일대 대형 지식산업센터·아울렛은 고소 장비로 대응합니다. 작업 높이를 알려주시면 톤수를 맞춰 배차합니다.' }],
});
export const NOWON_DATA = makeSeoulGu('nowon', '노원구', '노원', ['상계동', '중계동', '하계동', '공릉동', '월계동'], {
  localIntro: '노원구는 상계·중계동 대규모 아파트 단지와 학원가가 밀집한 대표적 주거지역입니다. 대단지 아파트 외벽·조경 작업 수요가 많아 상계·하계·공릉동까지 상황에 맞는 톤수로 신속 배차합니다.',
  localFaq: [{ q: '노원 상계동 대단지 아파트 외벽 작업이 가능한가요?', a: '네. 대단지는 단지 내 통행·주차 여건 확인 후 배차합니다. 동·호수와 작업 높이를 알려주시면 준비가 빠릅니다.' }],
});
export const DOBONG_DATA = makeSeoulGu('dobong', '도봉구', '도봉', ['창동', '방학동', '쌍문동', '도봉동'], {
  localIntro: '도봉구는 창동 상권과 재개발 지역, 도봉산 자락의 저층 주택가가 어우러진 지역입니다. 상가 간판부터 주택 외벽까지 방학·쌍문·도봉동 전역에 신속 대응합니다.',
  localFaq: [{ q: '도봉 창동 상가·주택 작업 모두 가능한가요?', a: '네. 상가 간판과 주택 외벽·지붕 작업 모두 대응합니다. 현장 유형과 높이를 알려주시면 적합한 톤수로 배차합니다.' }],
});
export const DONGDAEMUN_DATA = makeSeoulGu('dongdaemun', '동대문구', '동대문', ['전농동', '답십리동', '장안동', '청량리동', '회기동', '휘경동', '이문동', '제기동', '용신동'], {
  localIntro: '동대문구는 청량리·제기동 시장 상가와 회기 대학가, 전농·답십리 주거지가 밀집한 지역입니다. 노후 상가 간판 교체 수요가 많아 장안·휘경·이문동까지 신속 배차합니다.',
  localFaq: [{ q: '동대문 청량리 시장 상가 간판 작업이 가능한가요?', a: '네. 시장·상가 밀집지역은 통행 여건상 시간대 조율이 중요해, 예약 시 희망 시간을 알려주시면 맞춰 배차합니다.' }],
});
export const DONGJAK_DATA = makeSeoulGu('dongjak', '동작구', '동작', ['노량진동', '상도동', '사당동', '흑석동', '대방동', '신대방동'], {
  localIntro: '동작구는 노량진 학원가·수산시장과 상도동 주택가, 흑석 재개발 지역이 함께 있는 곳입니다. 상가 간판부터 재개발 현장 작업까지 사당·대방·신대방동 전역에 대응합니다.',
  localFaq: [{ q: '동작 노량진·흑석 재개발 현장 작업도 되나요?', a: '네. 재개발 현장의 외벽·자재 작업에 맞춰 톤수를 배차합니다. 현장 진입 여건을 알려주시면 적합한 장비로 출동합니다.' }],
});
export const MAPO_DATA = makeSeoulGu('mapo', '마포구', '마포', ['공덕동', '아현동', '도화동', '용강동', '대흥동', '염리동', '신수동', '서교동', '합정동', '망원동', '연남동', '성산동', '상암동'], {
  localIntro: '마포구는 홍대·합정·연남 상권과 상암 DMC 오피스, 공덕 업무지구가 어우러진 지역입니다. 상가 간판 교체부터 고층 오피스 외벽까지 서교·망원·성산동 전역에 신속 배차합니다.',
  localFaq: [{ q: '마포 홍대·연남 상가 간판, 상암 DMC 오피스 작업 모두 되나요?', a: '네. 저층 상가부터 상암 고층 빌딩까지 현장 높이에 맞는 톤수로 대응합니다. 주소와 층수를 알려주시면 배차가 빠릅니다.' }],
});
export const SEODAEMUN_DATA = makeSeoulGu('seodaemun', '서대문구', '서대문', ['신촌동', '연희동', '홍제동', '홍은동', '북아현동', '남가좌동', '북가좌동', '충현동', '천연동'], {
  localIntro: '서대문구는 신촌 대학상권과 연희동 주택가, 홍제·홍은 재개발 지역이 함께 있는 곳입니다. 상가 간판부터 주택 외벽까지 북아현·남가좌·북가좌동 전역에 신속 대응합니다.',
  localFaq: [{ q: '서대문 신촌 상권·연희동 주택 작업 모두 가능한가요?', a: '네. 상가와 주택 현장 모두 대응합니다. 유동인구가 많은 신촌 일대는 작업 시간대를 조율해 배차합니다.' }],
});
export const SEONGDONG_DATA = makeSeoulGu('seongdong', '성동구', '성동', ['왕십리동', '성수동', '금호동', '옥수동', '행당동', '마장동', '응봉동', '사근동', '송정동', '용답동'], {
  localIntro: '성동구는 성수동 카페거리·수제화거리와 지식산업센터, 왕십리 상권이 밀집한 지역입니다. 성수 신축 상가·오피스 외벽 작업 수요가 많아 금호·옥수·행당동까지 신속 배차합니다.',
  localFaq: [{ q: '성동 성수동 카페·상가 외벽 및 지식산업센터 작업이 되나요?', a: '네. 성수 일대 상가와 지식산업센터 고층 작업 모두 대응합니다. 건물 높이를 알려주시면 적합한 톤수로 배차합니다.' }],
});
export const SEONGBUK_DATA = makeSeoulGu('seongbuk', '성북구', '성북', ['성북동', '정릉동', '길음동', '종암동', '월곡동', '장위동', '석관동', '돈암동', '삼선동', '동선동', '안암동', '보문동'], {
  localIntro: '성북구는 성신여대 상권과 정릉·길음 아파트, 대학이 밀집한 지역입니다. 상가 간판부터 아파트 외벽까지 돈암·장위·석관동 전역에 신속 대응합니다.',
  localFaq: [{ q: '성북 정릉·길음 아파트 및 대학가 상가 작업이 되나요?', a: '네. 아파트 외벽과 상가 간판 모두 대응합니다. 현장 유형과 작업 높이를 알려주시면 적합한 장비로 배차합니다.' }],
});
export const SONGPA_DATA = makeSeoulGu('songpa', '송파구', '송파', ['잠실동', '방이동', '가락동', '문정동', '장지동', '오금동', '송파동', '석촌동', '삼전동', '풍납동', '거여동', '마천동', '위례동', '오륜동'], {
  localIntro: '송파구는 잠실 고층 아파트와 롯데월드타워 주변 상업시설, 문정 법조·지식산업센터가 밀집한 지역입니다. 아파트 외벽부터 고층 상가 간판까지 방이·가락·장지동 전역에 신속 배차합니다.',
  localFaq: [{ q: '송파 잠실 고층 아파트 단지에도 스카이차 진입이 가능한가요?', a: '네. 단지 내 통행로·주차 여건을 확인해 적합한 톤수(1톤~5톤 굴절)로 배차합니다. 고층 현장은 층수와 주소를 미리 알려주시면 최적 장비를 준비합니다.' }],
});
export const YANGCHEON_DATA = makeSeoulGu('yangcheon', '양천구', '양천', ['목동', '신정동', '신월동'], {
  localIntro: '양천구는 목동 아파트 단지·학원가와 신월동 주택가가 대표적인 주거 중심 지역입니다. 대단지 아파트 외벽·조경 작업 수요가 많아 목동·신정·신월동 전역에 신속 배차합니다.',
  localFaq: [{ q: '양천 목동 대단지 아파트 외벽 작업이 가능한가요?', a: '네. 목동 대단지는 단지 내 진입·주차 여건 확인 후 배차합니다. 동·호수와 작업 높이를 알려주시면 준비가 빠릅니다.' }],
});
export const YEONGDEUNGPO_DATA = makeSeoulGu('yeongdeungpo', '영등포구', '영등포', ['여의도동', '영등포동', '당산동', '문래동', '양평동', '신길동', '대림동', '도림동'], {
  localIntro: '영등포구는 여의도 금융 오피스가와 영등포 상권(타임스퀘어), 문래 철공소·예술촌이 어우러진 지역입니다. 고층 오피스 외벽부터 상가 간판까지 당산·양평·신길동 전역에 대응합니다.',
  localFaq: [{ q: '영등포 여의도 고층 오피스 외벽 작업도 되나요?', a: '네. 여의도 고층 빌딩은 5톤 굴절 등 고소 장비로 대응합니다. 건물 높이와 주소를 알려주시면 적합한 톤수로 배차합니다.' }],
});
export const YONGSAN_DATA = makeSeoulGu('yongsan', '용산구', '용산', ['한남동', '이태원동', '한강로동', '이촌동', '효창동', '청파동', '원효로동', '용문동', '후암동', '남영동', '서빙고동', '보광동'], {
  localIntro: '용산구는 이태원·한남 상권과 용산 전자상가, 한강로 일대 고층 재개발 빌딩이 밀집한 지역입니다. 상가 간판부터 고층 빌딩 외벽까지 청파·효창·서빙고동 전역에 신속 배차합니다.',
  localFaq: [{ q: '용산 한강로·한남 고층 빌딩 작업이 가능한가요?', a: '네. 한강로 일대 고층 빌딩은 고소 장비로 대응합니다. 층수와 주소를 알려주시면 적합한 톤수를 배차합니다.' }],
});
export const EUNPYEONG_DATA = makeSeoulGu('eunpyeong', '은평구', '은평', ['불광동', '응암동', '역촌동', '대조동', '갈현동', '구산동', '신사동', '증산동', '수색동', '진관동', '녹번동'], {
  localIntro: '은평구는 은평뉴타운 아파트 단지와 연신내·불광 상권, 저층 주택가가 함께 있는 지역입니다. 아파트 외벽부터 상가 간판까지 갈현·구산·응암동 전역에 신속 대응합니다.',
  localFaq: [{ q: '은평뉴타운 아파트 및 연신내 상가 작업 모두 되나요?', a: '네. 아파트 외벽과 상가 간판 모두 대응합니다. 현장 유형과 작업 높이를 알려주시면 적합한 장비로 배차합니다.' }],
});
export const JONGNO_DATA = makeSeoulGu('jongno', '종로구', '종로', ['청운효자동', '사직동', '삼청동', '부암동', '평창동', '무악동', '교남동', '가회동', '혜화동', '이화동', '창신동', '숭인동'], {
  localIntro: '종로구는 도심 오피스와 광장시장 등 전통시장, 인사동·삼청동 저층 상가·한옥이 어우러진 지역입니다. 노후 상가 간판부터 도심 빌딩 작업까지 부암·평창·혜화동 전역에 대응합니다.',
  localFaq: [{ q: '종로 도심 상가·시장 간판 작업이 가능한가요?', a: '네. 유동인구와 통행이 많은 도심 특성상 시간대 조율이 중요해, 예약 시 희망 시간을 알려주시면 맞춰 배차합니다.' }],
});
export const JUNGGU_DATA = makeSeoulGu('junggu', '중구', '중구', ['명동', '을지로동', '신당동', '황학동', '중림동', '회현동', '소공동', '필동', '장충동', '광희동', '다산동', '약수동', '청구동', '동화동'], {
  localIntro: '중구는 명동·남대문시장·동대문 상권과 을지로 인쇄·공구골목, 도심 오피스가 밀집한 서울의 중심 상업지역입니다. 상가 간판부터 빌딩 외벽까지 신당·황학·중림동 전역에 신속 배차합니다.',
  localFaq: [{ q: '중구 명동·을지로 도심 상가 작업이 가능한가요?', a: '네. 통행이 많은 도심 상가는 작업 시간대 조율이 중요해, 예약 시 희망 시간을 알려주시면 맞춰 배차합니다.' }],
});
export const JUNGNANG_DATA = makeSeoulGu('jungnang', '중랑구', '중랑', ['면목동', '상봉동', '중화동', '묵동', '망우동', '신내동'], {
  localIntro: '중랑구는 면목·상봉 상권과 다세대·빌라가 밀집한 주거 중심 지역입니다. 좁은 골목이 많아 소형 스카이차가 유리하며, 중화·묵·망우동까지 중랑 전역에 신속 대응합니다.',
  localFaq: [{ q: '중랑 면목동 다세대·빌라 밀집지역 작업이 되나요?', a: '네. 골목이 좁은 현장은 1톤·3.5톤 소형 장비로 대응합니다. 주소를 알려주시면 진입 가능 여부를 사전에 확인해 드립니다.' }],
});

// 전용 페이지가 존재하는(콘텐츠 준비된) 모든 도시 데이터
const ALL_CITY_DATA: RegionData[] = [
  // 서울
  GANGNAM_DATA, SEOCHO_DATA, GANGDONG_DATA, GANGBUK_DATA, GANGSEO_DATA, GWANAK_DATA,
  GWANGJIN_DATA, GURO_DATA, GEUMCHEON_DATA, NOWON_DATA, DOBONG_DATA, DONGDAEMUN_DATA,
  DONGJAK_DATA, MAPO_DATA, SEODAEMUN_DATA, SEONGDONG_DATA, SEONGBUK_DATA, SONGPA_DATA,
  YANGCHEON_DATA, YEONGDEUNGPO_DATA, YONGSAN_DATA, EUNPYEONG_DATA, JONGNO_DATA,
  JUNGGU_DATA, JUNGNANG_DATA,
  // 경기
  ANYANG_DATA, SUWON_DATA, GUNPO_DATA,
];

// 사이트맵 등 단일 소스로 사용하는 라이브 도시 슬러그 목록
export const LIVE_CITY_SLUGS: string[] = ALL_CITY_DATA.map((d) => d.slug);

// 지역 데이터 가져오기 헬퍼
export function getRegionData(slug: string): RegionData | null {
  return ALL_CITY_DATA.find((d) => d.slug === slug) ?? null;
}

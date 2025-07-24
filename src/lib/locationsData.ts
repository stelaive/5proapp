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
  // 다른 주요 광역시/도 추가 가능 (부산, 대구, 광주, 대전, 울산 등)
]; 
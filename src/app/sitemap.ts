import { MetadataRoute } from 'next'

// 🗺️ 검색엔진에게 우리 사이트의 모든 페이지를 알려주는 지도
export default function sitemap(): MetadataRoute.Sitemap {
  // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸기
  const baseUrl = 'https://xn--5-w30fr74e.com'
  
  // 현재 시간 (페이지가 마지막으로 수정된 시간)
  const currentDate = new Date()
  
  return [
    // 🏠 메인 페이지 (가장 중요!)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',        // 매일 변경됨
      priority: 1.0,                   // 가장 중요한 페이지
    },
    
    // 💰 100만원 추첨 페이지 (메인 이벤트!)
    // ✏️ 수정 가능: 이 페이지가 별로 중요하지 않다면 priority를 0.7 정도로 낮추세요
    {
      url: `${baseUrl}/million`,
      lastModified: currentDate,
      changeFrequency: 'daily',        // 매일 참여자 수가 변경됨
      priority: 0.9,                   // 매우 중요
    },
    
    // 💵 가격표 페이지 (고객들이 궁금해하는 페이지)
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',       // 주간 단위로 변경
      priority: 0.8,                   // 중요
    },
    
    // 🎁 친구 초대 이벤트 페이지 (5만원 보너스!)
    // ✏️ 수정 가능: 친구초대가 주요 마케팅이라면 priority를 0.9로 높이세요
    {
      url: `${baseUrl}/reward`,
      lastModified: currentDate,
      changeFrequency: 'weekly',       // 주간 단위로 변경
      priority: 0.8,                   // 중요 (친구초대 이벤트)
    },
    
    // 📈 마케팅 솔루션 페이지
    {
      url: `${baseUrl}/marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',      // 월 단위로 변경
      priority: 0.6,                   // 보통
    },
    
    // 🛒 일거리 장터 페이지
    {
      url: `${baseUrl}/marketplace`,
      lastModified: currentDate,
      changeFrequency: 'weekly',       // 주간 단위로 변경
      priority: 0.6,                   // 보통
    },
    
    // 🏢 회사 소개 페이지 (about 페이지 삭제됨)
    
    // ❓ 왜 여기서? 페이지
    {
      url: `${baseUrl}/whyhere`,
      lastModified: currentDate,
      changeFrequency: 'monthly',      // 월 단위로 변경
      priority: 0.5,                   // 보통
    },
    
    // 📞 고객지원 페이지
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',      // 월 단위로 변경
      priority: 0.4,                   // 낮음
    },
  ]
}

/*
📝 사이트맵 설명:

1. priority (우선순위): 0.0 ~ 1.0
   - 1.0: 가장 중요 (메인 페이지)
   - 0.8-0.9: 매우 중요 (주요 서비스 페이지)
   - 0.5-0.7: 보통 (일반 정보 페이지)
   - 0.1-0.4: 낮음 (부가 페이지)

2. changeFrequency (변경 빈도):
   - daily: 매일 (실시간 데이터가 있는 페이지)
   - weekly: 주간 (자주 업데이트되는 페이지)
   - monthly: 월간 (가끔 업데이트되는 페이지)

3. lastModified (마지막 수정일):
   - 검색엔진이 언제 다시 크롤링할지 결정하는 기준
*/ 
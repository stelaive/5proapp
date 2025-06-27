# 📖 SEO 최적화 설정 가이드

## 🎯 이 파일은 뭐하는 건가요?

여러분의 웹사이트가 구글, 네이버, 카카오톡, 페이스북 등에서 **멋지게 보이도록** 설정하는 방법을 알려드립니다!

---

## 🔧 1단계: 기본 정보 수정하기

### 📍 `src/app/layout.tsx` 파일에서 수정할 부분

```typescript
const SITE_INFO = {
  // 🏷️ 사이트 제목 (브라우저 탭에 나오는 제목)
  title: '5프로돌려드리는스카이차 - 스카이차 쓰고 5% 돌려받고 매월 100만원 행운까지!',
  
  // 📝 사이트 설명 (구글 검색결과에 나오는 설명)
  description: '스카이차 이용하고 5% 현금 페이백 받으세요! 매월 100만원 추첨, 친구초대 보너스까지! 24시간 콜센터 운영, 투명한 가격, 신뢰할 수 있는 스카이차 서비스입니다.',
  
  // 🌐 실제 웹사이트 주소 (꼭 바꿔주세요!)
  siteUrl: 'https://your-domain.com', // 👈 여기를 실제 주소로!
  
  // 🖼️ SNS 공유시 나오는 대표 이미지
  ogImage: '/images/5프로.png', // ✅ 새로운 대표 이미지로 설정됨
  
  // 🏢 회사 정보
  businessName: '5프로돌려드리는스카이차',
  businessPhone: '1877-9001',
  businessEmail: 'man7866@naver.com',
  
  // 🔍 검색 키워드 (띄어쓰기 없이 콤마로 구분)
  keywords: '스카이차, 스카이리프트, 크레인, 고소작업차, 건설장비, 페이백, 현금환급, 100만원추첨, 친구초대, 건설업, 외벽작업, 고소작업, 장비대여'
}
```

---

## 🚀 2단계: 검색엔진 등록하기

### 구글 서치 콘솔 등록
1. https://search.google.com/search-console 접속
2. 사이트 추가 → HTML 태그 방식 선택
3. 받은 코드를 아래 위치에 입력:
```typescript
'google-site-verification': '여기에_구글에서_받은_코드_입력', // 👈 이곳!
```

### 네이버 웹마스터도구 등록
1. https://searchadvisor.naver.com 접속
2. 사이트 등록 → HTML 태그 확인 선택
3. 받은 코드를 아래 위치에 입력:
```typescript
'naver-site-verification': '여기에_네이버에서_받은_코드_입력', // 👈 이곳!
```

---

## 📱 3단계: SNS 공유 최적화

### 카카오톡에서 멋지게 보이려면?
```typescript
// 이미지 크기는 1200x630 픽셀이 가장 좋습니다!
ogImage: '/images/내가_원하는_이미지.png',
```

### 페이스북, 인스타그램에서도 예쁘게!
- 위의 `ogImage` 설정이 자동으로 적용됩니다 ✨

---

## 🤖 4단계: AI가 이해하기 쉽게

현재 설정된 것들:
- ✅ 구조화된 데이터 (JSON-LD)
- ✅ 사업체 정보 자동 표시
- ✅ 서비스 내용 상세 설명
- ✅ 연락처 및 운영시간 정보

**추가 설정 불필요! 이미 다 되어있어요!** 🎉

---

## 📄 5단계: 각 페이지별 설정 (선택사항)

각 페이지에서 더 자세한 설명을 원한다면:

```typescript
// 예시: src/app/pricing/page.tsx 파일 맨 위에 추가
import { PAGE_METADATA } from '@/lib/metadata'

export const metadata = PAGE_METADATA.pricing
```

**사용 가능한 페이지들:**
- `PAGE_METADATA.home` - 홈페이지
- `PAGE_METADATA.pricing` - 가격표
- `PAGE_METADATA.million` - 100만원 추첨
- `PAGE_METADATA.reward` - 친구초대
- `PAGE_METADATA.marketplace` - 일거리장터
- `PAGE_METADATA.marketing` - 마케팅 노하우
- `PAGE_METADATA.whyhere` - 서비스 소개
- `PAGE_METADATA.support` - 고객센터

---

## ✅ 확인하는 방법

### 설정이 잘 되었는지 확인:
1. **구글 검색**: `site:내사이트주소.com` 검색
2. **카카오톡 테스트**: 링크를 카톡에 붙여넣기
3. **페이스북 테스트**: https://developers.facebook.com/tools/debug/

---

## 🆘 도움이 필요하면?

1. **전화 문의**: 1877-9001
2. **이메일**: man7866@naver.com
3. **개발자에게**: "SEO 설정 도와주세요!" 라고 요청

---

## 🎯 중요한 팁!

1. **siteUrl은 꼭 바꾸세요!** - 실제 도메인 주소로
2. **이미지는 1200x630 크기**가 가장 좋아요
3. **키워드는 너무 많이 넣지 마세요** - 자연스럽게!
4. **설명은 150자 이내**로 간결하게

---

*이 설정으로 구글, 네이버, 카카오톡, 페이스북, AI 모두가 여러분의 사이트를 이해할 수 있어요! 🚀* 
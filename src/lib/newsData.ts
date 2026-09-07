// ============================================
// 📰 소식 · 공지사항 데이터
// ============================================
// 새 소식을 추가하려면 NEWS_ITEMS 배열 맨 앞에 항목을 하나 넣으면 됩니다.
// 목록은 date 기준 내림차순으로 자동 정렬되므로 순서는 신경 쓰지 않아도 됩니다.
//
// ⚠️ 사실만 적어주세요. 확정되지 않은 정책·일정·수치는 올리지 않습니다.

export type NewsCategory = '공지' | '서비스' | '점검' | '지역'

export interface NewsItem {
  /** URL·key로 쓰이는 고유 id (영문/숫자/하이픈) */
  id: string
  /** 게시일 YYYY-MM-DD */
  date: string
  category: NewsCategory
  title: string
  /** 본문 문단 배열 (한 줄 = 한 문단) */
  body: string[]
}

export const NEWS_CATEGORY_STYLE: Record<NewsCategory, string> = {
  공지: 'bg-orange-100 text-orange-700',
  서비스: 'bg-blue-100 text-blue-700',
  점검: 'bg-gray-200 text-gray-700',
  지역: 'bg-green-100 text-green-700',
}

const ITEMS: NewsItem[] = [
  {
    id: 'domain-change-2026-09',
    date: '2026-09-07',
    category: '공지',
    title: '홈페이지 주소가 www.5prosky.com 으로 변경되었습니다',
    body: [
      '기존에 사용하던 한글 도메인이 만료되어, 홈페이지 주소를 www.5prosky.com 으로 변경했습니다.',
      '이전 주소로는 더 이상 접속되지 않습니다. 즐겨찾기에 등록해 두셨다면 새 주소로 다시 저장해 주세요.',
      '대표번호 1877-3924와 앱, 서비스 이용 방법은 이전과 동일합니다.',
    ],
  },
]

/** 최신순으로 정렬된 소식 목록 */
export const NEWS_ITEMS: NewsItem[] = [...ITEMS].sort((a, b) => b.date.localeCompare(a.date))

/** 목록에서 가장 최근 게시일 (sitemap lastModified 등에 사용) */
export const LATEST_NEWS_DATE: string = NEWS_ITEMS[0]?.date ?? '2026-09-07'

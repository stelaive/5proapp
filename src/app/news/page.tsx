// 서버 컴포넌트로 유지합니다.
// 본문이 자바스크립트 실행 이후에만 보이면 검색엔진이 내용을 읽지 못할 수 있어,
// 스크롤 애니메이션·클라이언트 상태 없이 정적으로 렌더링합니다.
import { NEWS_ITEMS, NEWS_CATEGORY_STYLE } from '@/lib/newsData'

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${y}. ${m}. ${d}`
}

export default function NewsPage() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">소식 · 공지사항</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            요금·정책 변경, 서비스 점검, 배차 지역 안내 등 알려드릴 내용을 이곳에 올립니다.
          </p>
        </header>

        {NEWS_ITEMS.length === 0 ? (
          <p className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-12 text-center text-sm text-gray-500">
            아직 등록된 소식이 없습니다.
          </p>
        ) : (
          <ul className="space-y-5">
            {NEWS_ITEMS.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${NEWS_CATEGORY_STYLE[item.category]}`}
                  >
                    {item.category}
                  </span>
                  <time dateTime={item.date} className="text-xs text-gray-500 sm:text-sm">
                    {formatDate(item.date)}
                  </time>
                </div>

                <h2 className="mt-3 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {item.title}
                </h2>

                <div className="mt-3 space-y-2">
                  {item.body.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 rounded-xl bg-white p-5 text-center shadow-sm sm:p-6">
          <p className="text-sm text-gray-700 sm:text-base">
            궁금한 점은 언제든 문의해 주세요.
          </p>
          <a
            href="tel:1877-3924"
            className="mt-3 inline-block rounded-lg px-5 py-2.5 text-base font-bold"
          >
            1877-3924
          </a>
        </div>
      </div>
    </div>
  )
}

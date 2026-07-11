'use client'

import { useEffect, useState } from 'react'

const PHONE_NUMBER = '18773924'
const BRAND_COLOR = '#F97316'
const BRAND_COLOR_HOVER = '#EA580C'

export default function FloatingDownload() {
  // 다운로드 가이드 섹션·푸터가 화면에 들어오면 플로팅 바를 숨긴다
  // (하단 바가 푸터의 전화번호를 가리지 않도록)
  const [barHidden, setBarHidden] = useState(false)

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('[data-hide-floating], footer')
    )
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target)
          } else {
            visible.delete(entry.target)
          }
        })
        setBarHidden(visible.size > 0)
      },
      { threshold: 0 }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
    }
  };

  return (
    <>
      {/* ===== 모바일: 하단 풀너비 내비 바 (앱 다운로드 · 전화 걸기) ===== */}
      <nav
        aria-label="빠른 메뉴"
        className="md:hidden fixed inset-x-0 bottom-0 z-[50000] grid grid-cols-2 items-stretch border-t border-gray-100 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      >
        {/* 앱 다운로드 (보조) */}
        <button
          onClick={handleAppDownload}
          aria-label="앱 다운로드"
          className="flex h-full flex-col text-center leading-none transition-colors active:bg-orange-50"
          style={{ color: BRAND_COLOR }}
        >
          {/* 콘텐츠는 탭 영역(64px) 안에서 세로 중앙 정렬 */}
          <span className="flex flex-1 flex-col items-center justify-center gap-1.5 py-3" style={{ minHeight: '64px' }}>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span className="text-sm font-bold">앱 다운로드</span>
          </span>
          {/* 아이폰 하단 홈바 영역 확보 (중앙 정렬에 영향 주지 않도록 별도 스페이서) */}
          <span aria-hidden="true" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
        </button>

        {/* 전화 걸기 (강조) */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="전화 걸기"
          className="tel-raw flex h-full flex-col text-center leading-none text-white transition-colors active:brightness-95"
          style={{ backgroundColor: BRAND_COLOR, textDecoration: 'none' }}
        >
          {/* 콘텐츠는 탭 영역(64px) 안에서 세로 중앙 정렬 */}
          <span className="flex flex-1 flex-col items-center justify-center gap-1.5 py-3" style={{ minHeight: '64px' }}>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-sm font-bold">전화 걸기</span>
          </span>
          {/* 아이폰 하단 홈바 영역 확보 (주황 배경이 끝까지 채워지되 중앙 정렬은 유지) */}
          <span aria-hidden="true" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
        </a>
      </nav>

      {/* ===== 데스크톱: 우측 하단 플로팅 버튼 (전화 걸기 · 앱 다운로드) ===== */}
      <div
        className={`hidden md:flex flex-col items-end gap-3 fixed bottom-4 right-4 z-[50000] transition-all duration-300 ${
          barHidden ? 'translate-y-[200%] opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0)',
          paddingRight: 'env(safe-area-inset-right, 0)'
        }}
      >
        {/* 전화 걸기 (강조) */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="tel-raw flex w-40 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
          style={{ backgroundColor: BRAND_COLOR, minHeight: '44px', textDecoration: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BRAND_COLOR_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = BRAND_COLOR;
          }}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="font-bold">전화 걸기</span>
        </a>

        {/* 앱 다운로드 (보조) */}
        <button
          onClick={handleAppDownload}
          className="flex w-40 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
          style={{
            color: BRAND_COLOR,
            border: `2px solid ${BRAND_COLOR}`,
            minHeight: '44px'
          }}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          <span className="font-bold">앱 다운로드</span>
        </button>
      </div>
    </>
  )
}

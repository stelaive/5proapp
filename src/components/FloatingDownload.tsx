'use client'

import { useEffect, useState } from 'react'

export default function FloatingDownload() {
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    // 현재 페이지가 홈페이지인지 확인
    const checkHomePage = () => {
      setIsHomePage(window.location.pathname === '/')
    }
    
    checkHomePage()
    
    // 페이지 변경 감지
    window.addEventListener('popstate', checkHomePage)
    return () => window.removeEventListener('popstate', checkHomePage)
  }, [])
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/app/your-app-id', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-[50000] transition-all duration-300"
      style={{ 
        zIndex: 50000,
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        // 모바일에서 안전한 영역 확보
        paddingBottom: 'env(safe-area-inset-bottom, 0)',
        paddingRight: 'env(safe-area-inset-right, 0)'
      }}
    >
      <button
        onClick={handleAppDownload}
        className="flex items-center space-x-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 px-4 py-3 text-sm"
        style={{
          // 터치 영역 최소 크기 보장
          minHeight: '44px',
          minWidth: '44px'
        }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        <span className="font-bold">
          앱 다운로드
        </span>
      </button>
    </div>
  )
} 
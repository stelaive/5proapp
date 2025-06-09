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
      className={`fixed bottom-4 z-[50000] ${
        isHomePage ? 'mr-20 right-4' : 'right-4'
      }`}
      style={{ 
        zIndex: 50000,
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        marginRight: isHomePage ? '5rem' : '0'
      }}
    >
      <button
        onClick={handleAppDownload}
        className={`flex items-center space-x-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
          isHomePage ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'
        }`}
      >
        <svg className={isHomePage ? "w-5 h-5" : "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span className="font-bold">앱 다운로드</span>
      </button>
    </div>
  )
} 
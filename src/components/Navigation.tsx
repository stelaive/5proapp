'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  currentPage?: string
  isDarkMode?: boolean
}

export default function Navigation({ currentPage = 'home', isDarkMode = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // iOS 감지
    const detectIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    }
    
    setIsIOS(detectIOS())
    
    // 컴포넌트가 마운트되었음을 표시
    setIsMounted(true)
    
    // iOS Safari에서 초기 상태 강제 설정 - 더 강력하게
    setIsMenuOpen(false)
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.height = ''
    
    // iOS에서 가로스크롤 방지
    if (detectIOS()) {
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
      document.body.style.width = '100vw'
      document.body.style.maxWidth = '100vw'
    }
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
    }

    // iOS Safari용 터치 이벤트 방지
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    // iOS Safari용 뷰포트 고정 - 더 강력하게
    const setViewportMeta = () => {
      let viewport = document.querySelector('meta[name=viewport]')
      if (!viewport) {
        viewport = document.createElement('meta')
        viewport.setAttribute('name', 'viewport')
        document.head.appendChild(viewport)
      }
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no')
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('touchstart', preventZoom, { passive: false })
    setViewportMeta()
    
    // iOS에서 페이지 로드 후 추가 처리
    if (detectIOS()) {
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 100)
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('touchstart', preventZoom)
    }
  }, [])

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    
    // iOS Safari용 바디 스크롤 처리 - 더 강력하게
    if (newState) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      document.body.setAttribute('data-scroll-y', scrollY.toString())
    } else {
      const scrollY = document.body.getAttribute('data-scroll-y')
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.height = ''
      document.body.removeAttribute('data-scroll-y')
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY))
      }
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    
    // iOS Safari용 바디 스크롤 복원 - 더 강력하게
    const scrollY = document.body.getAttribute('data-scroll-y')
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.height = ''
    document.body.removeAttribute('data-scroll-y')
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY))
    }
  }

  // 마운트되지 않았으면 아무것도 렌더링하지 않음
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 w-full z-[999999] bg-white/95 backdrop-blur-md shadow-lg">
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="md:hidden">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </nav>
    )
  }

  const navItems = [
    { href: '/', label: '홈', key: 'home' },
    { href: '/whyhere', label: '여긴뭐야?', key: 'whyhere' },
    { href: '/pricing', label: '스카이차가격표', key: 'pricing' },
    { href: '/million', label: '100만원받기', key: 'million' },
    { href: '/reward', label: '친구초대', key: 'reward' },
    { href: '/marketplace', label: '일거리장터', key: 'marketplace' },
    { href: '/marketing', label: '업종별마케팅', key: 'marketing' },
    { href: '/support', label: '고객센터', key: 'support' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-[999999] transition-all duration-300 ${
          isScrolled || isDarkMode
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/10 backdrop-blur-sm'
        }`}
        style={{ 
          zIndex: 999999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          pointerEvents: 'auto'
        }}
      >
        <div className={`w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:px-4 md:pr-4 ${
          currentPage === 'home' ? 'pr-16' : 'pr-4'
        }`}>
          {/* 모바일에서 오른쪽 여백 확보 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/스로고1.png"
              alt="스카이차 로고"
              width={32}
              height={32}
              className="mr-2"
            />
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled || isDarkMode 
                ? 'text-gray-900' 
                : 'text-white'
            }`}>
              5프로돌려드리는스카이차
            </h1>
          </Link>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                  currentPage === item.key 
                    ? 'text-orange-500' 
                    : isScrolled || isDarkMode
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className={`md:hidden relative ${
            currentPage === 'home' ? 'mr-8' : 'mr-2'
          }`}>
            <button
              onClick={toggleMenu}
              className={`relative z-[1000000] p-3 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-lg ${
                isScrolled || isDarkMode 
                  ? 'text-gray-900 hover:bg-gray-100 bg-white border border-gray-200' 
                  : 'text-white bg-gray-900/90 hover:bg-gray-800/90 border-2 border-white/50'
              }`}
              style={{ 
                zIndex: 1000000,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto'
              }}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                  isScrolled || isDarkMode 
                    ? 'bg-gray-900' 
                    : 'bg-white'
                } ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 transition-all duration-300 top-3 ${
                  isScrolled || isDarkMode 
                    ? 'bg-gray-900' 
                    : 'bg-white'
                } ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                  isScrolled || isDarkMode 
                    ? 'bg-gray-900' 
                    : 'bg-white'
                } ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999998] md:hidden"
          onClick={closeMenu}
          style={{ zIndex: 999998 }}
        />
      )}

      {/* 모바일 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[999999] md:hidden shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          zIndex: 999999,
          maxWidth: 'min(320px, 85vw)',
          width: '100%',
          // iOS Safari에서 강제로 숨김/보임 처리
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          opacity: isMenuOpen ? 1 : 0,
          // iOS Safari 전용 스타일
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          overflowX: 'hidden',
          height: isIOS ? '100vh' : '100dvh',
          paddingTop: 'env(safe-area-inset-top, 0)',
          paddingBottom: 'env(safe-area-inset-bottom, 0)',
          paddingRight: 'env(safe-area-inset-right, 0)',
          // 터치 액션 제한
          touchAction: 'pan-y',
          // 화면 축소 방지
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
          // 가로 스크롤 완전 차단
          minWidth: 0,
          // 전환 효과
          transition: isIOS ? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out' : 'transform 0.3s ease-in-out'
        }}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 추가 */}
        <div className="absolute top-4 right-4 z-[1000000]">
          <button
            onClick={closeMenu}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="pt-16 px-6 h-full overflow-y-auto">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className={`block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                  currentPage === item.key 
                    ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* 앱 다운로드 버튼 추가 */}
          <div className="mt-8 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
            <h3 className="text-lg font-bold text-orange-800 mb-2">앱 다운로드</h3>
            <p className="text-sm text-orange-600 mb-4">모바일 앱으로 더 편리하게 이용하세요</p>
            <button
              onClick={() => {
                closeMenu();
                // 앱 다운로드 로직
                const userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
                  window.open('https://apps.apple.com/app/your-app-id', '_blank');
                } else {
                  window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
                }
              }}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              📱 앱 다운로드
            </button>
          </div>
        </div>
      </div>
    </>
  )
} 
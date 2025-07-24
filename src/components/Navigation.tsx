'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS_DATA } from '@/lib/locationsData'
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface NavigationProps {
  currentPage?: string
  isDarkMode?: boolean
}

export default function Navigation({ currentPage = 'home', isDarkMode = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [locationMenuOpen, setLocationMenuOpen] = useState(false);
  const [mobileLocationMenuOpen, setMobileLocationMenuOpen] = useState(false);
  const locationMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    // iOS 감지
    const detectIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    }
    
    setIsIOS(detectIOS())
    
    // 컴포넌트가 마운트되었음을 표시
    setIsMounted(true)
    
    // 초기 상태 설정
    setIsMenuOpen(false)
    
    // iOS에서 가로스크롤 방지
    if (detectIOS()) {
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
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

  const handleLocationMenuEnter = () => {
    if (locationMenuTimeoutRef.current) {
      clearTimeout(locationMenuTimeoutRef.current);
    }
    setLocationMenuOpen(true);
  };

  const handleLocationMenuLeave = () => {
    locationMenuTimeoutRef.current = setTimeout(() => {
      setLocationMenuOpen(false);
    }, 200);
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
    setMobileLocationMenuOpen(false);
    
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
    // '전국 스카이차 찾기'는 별도 처리
    { href: '/pricing', label: '스카이차가격표', key: 'pricing' },
    { href: '/million', label: '100만원받기', key: 'million' },
    { href: '/reward', label: '친구초대', key: 'reward' },
    { href: '/marketplace', label: '일거리장터', key: 'marketplace' },
    { href: '/marketing', label: '업종별마케팅', key: 'marketing' },
    { href: '/support', label: '고객센터', key: 'support' },
  ]

  const navLinkClasses = (key: string) => 
    `font-medium transition-colors duration-300 hover:text-orange-500 whitespace-nowrap ${
      currentPage === key 
        ? 'text-orange-500' 
        : isScrolled || isDarkMode
          ? 'text-gray-700' 
          : 'text-white'
    }`;

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
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* 로고와 타이틀 */}
          <a href="https://5프로.com" target="_blank" rel="noopener noreferrer" className="flex items-center flex-shrink-0 group">
            <Image
              src="/images/스로고1.png"
              alt="스카이차 로고"
              width={32}
              height={32}
              className="mr-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
            <h1 className={`font-bold transition-colors duration-300 whitespace-nowrap group-hover:opacity-80 ${
              isScrolled || isDarkMode 
                ? 'text-gray-900' 
                : 'text-white'
            } text-lg sm:text-xl`}>
              5프로돌려주는스카이차
            </h1>
          </a>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={navLinkClasses('home')}>홈</Link>
            <Link href="/whyhere" className={navLinkClasses('whyhere')}>여긴뭐야?</Link>
            
            {/* 전국 스카이차 찾기 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={handleLocationMenuEnter}
              onMouseLeave={handleLocationMenuLeave}
            >
              <button
                type="button"
                className={`${navLinkClasses('locations')} flex items-center`}
                aria-haspopup="true"
                aria-expanded={locationMenuOpen}
              >
                전국 스카이차 찾기
                <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform duration-200 ${locationMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50 transition-opacity duration-300 ${locationMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <ul className="py-1">
                  {LOCATIONS_DATA.map((location) => (
                    <li key={location.id}>
                      <Link 
                        href={`/locations/${location.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-150"
                        onClick={() => setLocationMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={navLinkClasses(item.key)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className={`relative z-[1000000] p-2 rounded-lg transition-all duration-300 ${
                isScrolled || isDarkMode 
                  ? 'text-gray-900 hover:bg-gray-100 bg-white/90 backdrop-blur-sm border border-gray-200' 
                  : 'text-white bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-sm border border-white/30'
              }`}
              style={{ 
                zIndex: 1000000,
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div aria-hidden="true" className="w-6 h-6 flex flex-col justify-around">
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
      <div
        className={`fixed inset-0 bg-black/60 z-[999998] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-white shadow-2xl p-6 overflow-y-auto z-[999999] md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col space-y-4">
          {navItems.slice(0, 2).map((item) => (
              <Link key={item.key} href={item.href} onClick={closeMenu} className="text-gray-800 hover:text-orange-500 font-semibold py-2 text-lg">{item.label}</Link>
          ))}

          {/* 모바일 전국 스카이차 찾기 아코디언 */}
          <div>
            <button 
              onClick={() => setMobileLocationMenuOpen(!mobileLocationMenuOpen)}
              className="w-full flex justify-between items-center text-gray-800 hover:text-orange-500 font-semibold py-2 text-lg"
            >
              <span>전국 스카이차 찾기</span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${mobileLocationMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileLocationMenuOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-orange-200">
                {LOCATIONS_DATA.map((location) => (
                  <Link 
                    key={location.id} 
                    href={`/locations/${location.slug}`} 
                    onClick={closeMenu}
                    className="text-gray-600 hover:text-orange-500 py-1 pl-2"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <Link key={item.key} href={item.href} onClick={closeMenu} className="text-gray-800 hover:text-orange-500 font-semibold py-2 text-lg">{item.label}</Link>
          ))}
        </div>
      </div>
    </>
  )
} 
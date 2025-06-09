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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // 스크롤 시 배경 변경
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navItems = [
    { href: '/', label: '홈', key: 'home' },
    { href: '/whyhere', label: '여긴뭐야?', key: 'whyhere' },
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
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white z-[999999] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 999999 }}
      >
        <div className="pt-20 px-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors duration-200 ${
                  currentPage === item.key 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 
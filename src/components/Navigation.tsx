'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight

      // 히어로 섹션을 지나면 스타일 변경
      setIsScrolled(currentScrollY > heroHeight - 70)

      // 스크롤 방향에 따른 네비게이션 숨김/표시
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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
    { href: '/whyhere', label: '여긴야?', key: 'whyhere' },
    { href: '/reward', label: '100만원받기', key: 'reward' },
    { href: '#invite', label: '친구초대', key: 'invite' },
    { href: '/marketplace', label: '일거리장터', key: 'market' },
    { href: '/marketing', label: '업종별마케팅', key: 'marketing' },
    { href: '#support', label: '고객센터', key: 'support' },
  ]

  const menuItems = [
    { name: '홈', path: '/' },
    { name: '리워드', path: '/reward' },
    { name: '왜 스카이차인가?', path: '/whyhere' },
    { name: '일거리 장터', path: '/marketplace' },
    { name: '업종별 마케팅', path: '/marketing' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scrolled' : ''
      } ${isHidden ? 'nav-hidden' : ''}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/스로고1.png"
              alt="스카이차 로고"
              width={32}
              height={32}
              className="mr-2"
            />
            <h1 className="text-xl font-bold nav-text">5프로돌려드리는스카이차</h1>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`nav-menu-item hover:text-sky-orange-500 ${
                  currentPage === item.key ? 'text-sky-orange-500' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              id="menuBtn"
              onClick={toggleMenu}
              className="text-white z-50 relative"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={closeMenu}
      />

      {/* 모바일 메뉴 */}
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={closeMenu}
              className={`block py-3 text-lg hover:text-sky-orange-500 border-b border-gray-100 ${
                currentPage === item.key 
                  ? 'text-sky-orange-500' 
                  : 'text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
} 
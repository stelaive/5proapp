'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download, Menu, Phone, X } from 'lucide-react'
import styles from '../pricing.module.css'

const pageLinks = [
  ['#equipment-prices', '장비별 가격표'],
  ['#payback', '5% 페이백'],
  ['#site-checklist', '견적 체크리스트'],
  ['#pricing-faq', '자주 묻는 질문'],
]

export default function PricingHeader() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#pricing-content">본문으로 바로가기</a>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="5프로돌려주는스카이차 홈">
          <Image src="/images/sky-car-logo-icon.png" alt="" width={38} height={44} priority />
          <span><strong>5프로돌려주는스카이차</strong><small>현장의 비용을 줄이는 5%의 차이</small></span>
        </Link>
        <nav className={styles.desktopNav} aria-label="가격 페이지 안내">
          {pageLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <a href="#app-download" className={styles.headerDownload}><Download size={16} />앱 다운로드</a>
          <a href="tel:18773924" className={`tel-raw ${styles.headerPhone}`}><Phone size={15} />견적 상담<ArrowUpRight size={15} /></a>
          <button ref={menuButton} type="button" className={styles.menuButton} aria-expanded={open} aria-controls="pricing-menu" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <div id="pricing-menu" className={styles.mobileMenu} hidden={!open}>
        <nav aria-label="모바일 페이지 메뉴" onClick={() => setOpen(false)}>
          <a href="#interactive-calculator">요금 계산기<ArrowUpRight size={16} /></a>
          {pageLinks.map(([href, label]) => <a key={href} href={href}>{label}<ArrowUpRight size={16} /></a>)}
          <Link href="/">홈으로</Link>
          <Link href="/support">고객센터</Link>
        </nav>
      </div>
    </header>
  )
}

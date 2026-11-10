import Link from 'next/link'
import { ArrowUpRight, Download, Phone, Smartphone } from 'lucide-react'
import { appStores } from '../pricing-data'
import styles from '../pricing.module.css'

export default function PricingFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div><Link href="/" className={styles.footerBrand}>5프로돌려주는스카이차<span>5PRO SKY</span></Link><p>간판작업부터 외벽 보수까지.<br />필요한 장비는 편하게, 이용료의 5%는 다시 돌려받으세요.</p><span className={styles.footerBadge}>5% PAYBACK</span></div>
            <div><h2>상담 및 이용 안내</h2><a href="tel:18773924" className={`tel-raw ${styles.footerPhone}`}>1877-3924</a><p>문자수신전용 010-2497-2433</p><div className={styles.footerLinks}><Link href="/pricing" aria-current="page">가격표</Link><Link href="/support">고객센터</Link><Link href="/whyhere">서비스 소개</Link><Link href="/reward">친구 초대 혜택</Link><Link href="/marketplace">일거리 장터</Link></div></div>
            <div id="app-download"><h2><Smartphone size={16} />앱에서 더 편리하게</h2><p>작업 내역과 페이백 적립을 확인하세요.</p><div className={styles.storeLinks}><a href={appStores.ios} target="_blank" rel="noopener noreferrer">App Store<ArrowUpRight size={16} /></a><a href={appStores.android} target="_blank" rel="noopener noreferrer">Google Play<ArrowUpRight size={16} /></a></div></div>
          </div>
          <div className={styles.footerBottom}><span>© {new Date().getFullYear()} 5프로돌려주는스카이차. All rights reserved.</span><Link href="/">홈으로 돌아가기<ArrowUpRight size={13} /></Link></div>
        </div>
      </footer>
      <div className={styles.mobileDock} role="navigation" aria-label="빠른 메뉴">
        <a href="#app-download" className={styles.dockDownload}><Download size={20} /><span>앱 다운로드</span></a>
        <a href="tel:18773924" className={`tel-raw ${styles.dockPhone}`}><Phone size={19} /><span>내 현장 견적 상담</span><ArrowUpRight size={18} /></a>
      </div>
    </>
  )
}

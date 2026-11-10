import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, CheckCheck, ChevronDown, Clock3, FileCheck2, Info, MapPin, MoveHorizontal, MoveVertical, Phone, ScanLine, Truck, Wallet } from 'lucide-react'
import { defaultPriceData } from '@/lib/priceData'
import { ANSWER_UPDATED_AT, BRAND_DEFINITION, COST_LIMIT, COST_QUESTIONS, EQUIPMENT_ANSWER, EQUIPMENT_DEFINITION, PRICE_ANSWER, QUOTE_CHECKS } from '@/lib/answerContent'
import { PRICE_NOTICE } from '@/lib/seo'
import { LOCATIONS_DATA } from '@/lib/regionData'
import PricingCalculator from './components/PricingCalculator'
import PricingRatesCarousel from './components/PricingRatesCarousel'
import { cashbackFor, pricingDurations, pricingEquipment, won } from './pricing-data'
import styles from './pricing.module.css'

const priceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '스카이차 대여',
  serviceType: '스카이차(고소작업차) 대여',
  description: '1톤~19톤 스카이차 대여. 작업 완료 후 이용료의 5% 페이백.',
  provider: { '@type': 'Organization', '@id': 'https://www.5prosky.com/#organization', name: '5프로돌려주는스카이차', telephone: '1877-3924' },
  url: 'https://www.5prosky.com/pricing',
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: '스카이차 장비별 단시간·하루 이용요금',
    itemListElement: [
      { '@type': 'Offer', name: '1톤~3.5톤 스카이차 (30분 단시간)', priceCurrency: 'KRW', price: String(defaultPriceData[0].shortTime), priceSpecification: { '@type': 'UnitPriceSpecification', price: String(defaultPriceData[0].shortTime), priceCurrency: 'KRW', referenceQuantity: { '@type': 'QuantitativeValue', value: 30, unitText: '분' } } },
      ...defaultPriceData.filter((p) => typeof p.fullDay === 'number').map((p) => ({
        '@type': 'Offer', name: `${p.equipment} 스카이차 (하루)`, priceCurrency: 'KRW', price: String(p.fullDay),
        priceSpecification: { '@type': 'UnitPriceSpecification', price: String(p.fullDay), priceCurrency: 'KRW', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: '일(8시간)' } },
      })),
    ],
  },
}

const checklistIcons = [MoveVertical, MoveHorizontal, Clock3, ScanLine]
const checklistHints = ['작업 위치의 사진을 준비해 주세요', '차량과 건물 사이 거리를 확인하세요', '시작 시각과 예상 시간을 알려주세요', '진입로와 설치 위치를 확인하세요']

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceJsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: COST_QUESTIONS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }).replace(/</g, '\\u003c') }} />

      <div className={styles.announcement}>
        <div className={styles.container}><p><span>단시간 요금</span>1톤~3.5톤 · 30분 작업 <strong>{won(defaultPriceData[0].shortTime)}부터</strong></p><a href="#equipment-prices">전체 요금 보기<ArrowRight size={14} /></a></div>
      </div>

      <section className={styles.hero} aria-labelledby="pricing-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} />PRICING & PAYBACK</p>
            <h1 id="pricing-title">스카이차 대여 비용,<br /><em>가격부터 페이백까지</em> 한눈에.</h1>
            <p className={styles.heroDescription}>필요한 장비와 작업 시간을 선택하세요.<br />기준 요금은 투명하게, 이용료의 5%는 다시 내 통장으로.</p>
            <div className={styles.heroLinks}><a href="#interactive-calculator" className={styles.blueButton}>내 작업 요금 계산하기<ArrowDown size={16} /></a><span><MapPin size={16} />전국 배차 상담 · 제주 제외</span></div>
          </div>
          <div className={styles.heroPayback}>
            <div className={styles.heroPaybackTop}><span>이용할 때마다 돌아오는 혜택</span><Wallet size={21} /></div>
            <div className={styles.heroPercent}><strong>5<span>%</span></strong><span>작업 완료 후<br />이용료 페이백</span></div>
            <div className={styles.heroPaybackBottom}><CheckCheck size={16} /><span>장비별 기준 요금 공개</span><span className={styles.smallDot} /><span>간편한 앱 적립</span></div>
          </div>
        </div>
      </section>

      <section id="interactive-calculator" className={styles.calculatorSection} aria-labelledby="calculator-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>01 / QUICK ESTIMATE</p><h2 id="calculator-heading">내 작업에 맞는 요금, 바로 계산해 보세요.</h2><p>장비와 시간을 고르면 기준 대여료와 예상 5% 페이백을 함께 확인할 수 있어요.</p></div>
            <span className={styles.headingNote}><span className={styles.statusDot} />선택 즉시 계산</span>
          </div>
          <PricingCalculator />
        </div>
      </section>

      <section id="equipment-prices" className={styles.pricesSection} aria-labelledby="prices-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div><p className={`${styles.eyebrow} ${styles.orangeEyebrow}`}>02 / EQUIPMENT RATES</p><h2 id="prices-heading">장비별 이용요금, 한눈에 비교하세요.</h2><p>30분부터 하루, 월 단위까지. 같은 장비·같은 시간 기준으로 확인하세요.</p></div>
            <span className={styles.headingNote}><Info size={15} />부가세 포함 여부 별도 확인</span>
          </div>
          <div className={styles.desktopRates}>
            <table className={styles.priceTable}>
              <caption className={styles.srOnly}>스카이차 장비별 기준 대여료. 반나절은 4시간, 하루는 8시간 기준입니다.</caption>
              <thead><tr><th scope="col">장비 구분</th>{pricingDurations.map((time) => <th key={time.key} scope="col">{time.label}<small>{time.detail}</small></th>)}<th scope="col">추가<small>시간당</small></th><th scope="col">월 단위<small>월대</small></th><th scope="col" className={styles.cashbackColumn}>5% 페이백<small>하루 기준</small></th></tr></thead>
              <tbody>{pricingEquipment.map((item) => <tr key={item.equipment}>
                <th scope="row"><div className={styles.equipmentCell}><span className={styles.tonBadge}>{item.badge}</span><span><strong>{item.equipment}</strong><small>{item.description}</small></span></div></th>
                {pricingDurations.map((time) => <td key={time.key} className={time.key === 'halfDay' || time.key === 'fullDay' ? styles.primaryPrice : undefined}>{item[time.key] === undefined ? <span className={styles.muted}>상담</span> : won(item[time.key])}</td>)}
                <td>{won(item.additional)}</td><td>{won(item.monthly)}</td><td className={styles.cashbackColumn}>{typeof item.fullDay === 'number' ? won(cashbackFor(item.fullDay)) : '상담'}</td>
              </tr>)}</tbody>
            </table>
          </div>
          <PricingRatesCarousel labels={pricingEquipment.map((item) => item.equipment)}>
            {pricingEquipment.map((item, index) => <article key={item.equipment} className={styles.mobileRateCard} role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${pricingEquipment.length}, ${item.equipment}`}>
              <div className={styles.mobileRateHeading}><span className={styles.tonBadge}>{item.badge}</span><div><h3>{item.equipment}</h3><p>{item.description}</p></div><Truck size={22} /></div>
              <dl className={styles.mobilePriceGrid}>{pricingDurations.map((time) => <div key={time.key}><dt>{time.label}<span>{time.detail}</span></dt><dd>{won(item[time.key])}</dd></div>)}</dl>
              <dl className={styles.mobileExtraRates}><div><dt>추가 시간당</dt><dd>{won(item.additional)}</dd></div><div><dt>월 단위</dt><dd>{won(item.monthly)}</dd></div></dl>
              <p className={styles.mobileCashback}><Wallet size={15} />하루 이용 시 예상 페이백<strong>{typeof item.fullDay === 'number' ? won(cashbackFor(item.fullDay)) : '상담'}</strong></p>
            </article>)}
          </PricingRatesCarousel>
          <p className={styles.priceNotice}><Info size={17} /><span>{PRICE_NOTICE} ‘상담’ 표시는 해당 시간의 공개 요금이 없다는 뜻입니다.</span></p>
          <div className={styles.trustStrip}>
            <div><FileCheck2 size={22} /><p><strong>공개된 기준 요금</strong><span>장비·시간별 동일한 데이터로 계산합니다.</span></p></div>
            <div><Wallet size={22} /><p><strong>이용료의 5% 페이백</strong><span>작업 완료 후 앱에서 적립을 확인하세요.</span></p></div>
            <div><MapPin size={22} /><p><strong>내 현장에 맞춘 배차 상담</strong><span>주소와 일정으로 배차 가능 여부를 확인합니다.</span></p></div>
          </div>
        </div>
      </section>

      <section id="site-checklist" className={styles.checklistSection} aria-labelledby="checklist-heading">
        <div className={styles.container}>
          <div className={styles.centeredHeading}><p className={styles.eyebrow}>03 / BEFORE YOU BOOK</p><h2 id="checklist-heading">견적 전, 이 네 가지만 확인해 주세요.</h2><p>높이·거리·시간·설치 공간을 알려주시면 필요한 장비와 비용을 더 정확하게 상담할 수 있어요.</p></div>
          <div className={styles.checklistGrid}>{QUOTE_CHECKS.map((item, index) => {
            const Icon = checklistIcons[index]
            return <article key={item.name} className={styles.checkCard}><div className={styles.checkCardTop}><span className={styles.iconBox}><Icon size={22} /></span><span>0{index + 1}</span></div><h3>{['작업 높이', '작업 반경', '시간과 일정', '진입·설치 공간'][index]}</h3><p>{item.description}</p><div className={styles.checkHint}><Check size={14} /><span>{checklistHints[index]}</span></div></article>
          })}</div>
          <p className={styles.checklistNote}>같은 톤수라도 차량별 작업 높이·반경이 다릅니다. 실제 장비 제원과 현장 조건을 함께 확인하세요.</p>
        </div>
      </section>

      <section id="cost-guide" className={styles.guideSection} aria-labelledby="guide-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / A CLEARER WAY TO BOOK</p><h2 id="guide-heading">요금만큼 중요한 이용 안내.</h2><p>견적에 포함되는 범위부터 페이백까지, 예약 전에 확인하세요.</p></div></div>
          <div className={styles.policyGrid}>
            <article id="payback" className={`${styles.policyCard} ${styles.paybackPolicy}`}><Wallet size={23} /><h3>5% 페이백, 이렇게 받으세요.</h3><ol><li><span>1</span><p>스카이차 이용 후 작업을 완료합니다.</p></li><li><span>2</span><p>이용료의 5%가 앱 포인트로 적립됩니다.</p></li><li><span>3</span><p>앱에서 출금을 신청하면 등록한 계좌로 받습니다.</p></li></ol><Link href="/support">적립·출금 안내 확인<ArrowUpRight size={15} /></Link></article>
            <article className={styles.policyCard}><Clock3 size={23} /><h3>시간과 추가 비용을 확인하세요.</h3><ul><li><Check size={15} /><span>반나절은 4시간, 하루는 8시간 기준입니다.</span></li><li><Check size={15} /><span>초과 시간은 장비별 추가 요금 또는 상담한 조건을 적용합니다.</span></li><li><Check size={15} /><span>야간·주말, 현장 대기·이동 조건은 예약 시 확인합니다.</span></li></ul><a href="#equipment-prices">장비별 추가 요금 보기<ArrowUpRight size={15} /></a></article>
            <article className={styles.policyCard}><Building2 size={23} /><h3>같은 조건으로 비교하세요.</h3><ul><li><Check size={15} /><span>간판 제작·시공 인력비는 장비 이용료와 구분합니다.</span></li><li><Check size={15} /><span>부가세와 장비·기사 비용의 포함 범위를 확인합니다.</span></li><li><Check size={15} /><span>장기·월 단위 작업은 일정과 조건을 별도로 상담합니다.</span></li></ul><Link href="/#sign-work">간판작업 견적 준비사항<ArrowUpRight size={15} /></Link></article>
          </div>
          <details id="answer-summary" className={styles.costSummary}><summary><span><FileCheck2 size={20} />스카이차 비용과 장비 선택, 더 자세히 알고 싶다면</span><ChevronDown size={20} /></summary><div><h3>스카이차비용은 얼마인가요?</h3><p>{PRICE_ANSWER}</p><p>{COST_LIMIT}</p><h3>간판작업에는 어떤 장비가 필요한가요?</h3><p>{EQUIPMENT_ANSWER} {EQUIPMENT_DEFINITION}</p><h3>상가 간판 교체를 준비한다면: 가정 예시</h3><p>반나절 장비 이용을 가정하면 주소와 건물 전면 사진으로 높이·차량 거리·설치 공간을 먼저 확인합니다. 현장에 맞는 장비와 대여 시간을 상담한 뒤, 간판 시공 인력·제작비가 별도인지 확인하세요. 견적 준비 절차를 설명하기 위한 예시이며 확정 견적은 아닙니다.</p><p>{BRAND_DEFINITION}</p><p>안내 제공: 5프로돌려주는스카이차 · 콘텐츠 기준일: <time dateTime={ANSWER_UPDATED_AT}>{ANSWER_UPDATED_AT}</time></p></div></details>
        </div>
      </section>

      <section id="pricing-faq" className={styles.faqSection} aria-labelledby="faq-heading"><div className={`${styles.container} ${styles.faqLayout}`}><div className={styles.faqIntro}><p className={styles.eyebrow}>A FEW MORE ANSWERS</p><h2 id="faq-heading">자주 묻는 질문</h2><p>대여 전에 궁금했던 내용을<br />확인해 보세요.</p><Link href="/support">고객센터 바로가기<ArrowUpRight size={16} /></Link></div><div className={styles.faqList}>{COST_QUESTIONS.map(({ q, a }, index) => <details key={q}><summary><span className={styles.questionNumber}>0{index + 1}</span><span>{q}</span><ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></div></section>

      <section className={styles.consultSection} aria-labelledby="consult-heading"><div className={`${styles.container} ${styles.consultGrid}`}><div><span className={styles.consultBadge}><span />24시간 상담 가능</span><h2 id="consult-heading">어떤 장비가 맞을지 고민되시나요?</h2><p>현장 주소와 작업 내용을 알려주세요.<br />장비 선택부터 배차 가능한 일정까지 함께 확인해 드립니다.</p></div><div className={styles.consultActions}><a href="tel:18773924" className={`tel-raw ${styles.consultPhone}`}><Phone size={21} /><span><small>내 현장 견적 상담</small><strong>1877-3924</strong></span><ArrowUpRight size={19} /></a><a href="#site-checklist">전화하기 전 준비할 것<ArrowRight size={16} /></a></div></div></section>

      <nav className={styles.regionSection} aria-label="지역별 스카이차 대여 안내"><div className={styles.container}><span><MapPin size={16} />내 작업 지역 안내</span><div>{LOCATIONS_DATA.map((location) => <Link key={location.slug} href={`/locations/${location.slug}`}>{location.name}<ArrowUpRight size={13} /></Link>)}</div></div></nav>
    </>
  )
}

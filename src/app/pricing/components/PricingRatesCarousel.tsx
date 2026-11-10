'use client'

import { type KeyboardEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react'
import styles from '../pricing.module.css'

type Props = {
  children: ReactNode
  labels: string[]
}

export default function PricingRatesCarousel({ children, labels }: Props) {
  const track = useRef<HTMLDivElement>(null)
  const activeIndex = useRef(0)
  const [current, setCurrent] = useState(0)
  const [ready, setReady] = useState(false)

  function cardPosition(index: number) {
    const element = track.current
    const card = element?.children[index] as HTMLElement | undefined
    if (!element || !card) return 0
    return element.scrollLeft + card.getBoundingClientRect().left
      - element.getBoundingClientRect().left - parseFloat(getComputedStyle(element).paddingLeft)
  }

  function goTo(index: number) {
    const next = Math.max(0, Math.min(labels.length - 1, index))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.current?.scrollTo({ left: cardPosition(next), behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  function updateCurrent() {
    const element = track.current
    if (!element || !element.clientWidth) return
    let closest = 0
    let distance = Infinity
    for (let index = 0; index < element.children.length; index++) {
      const offset = Math.abs(cardPosition(index) - element.scrollLeft)
      if (offset < distance) {
        closest = index
        distance = offset
      }
    }
    activeIndex.current = closest
    setCurrent(closest)
  }

  useEffect(() => {
    setReady(true)
    const element = track.current
    if (!element) return
    // Keep the selected equipment in view after rotation or a breakpoint change.
    const observer = new ResizeObserver(() => {
      if (element.clientWidth) {
        element.scrollTo({ left: cardPosition(activeIndex.current), behavior: 'instant' })
      }
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return
    const destination = {
      ArrowLeft: current - 1,
      ArrowRight: current + 1,
      Home: 0,
      End: labels.length - 1,
    }[event.key]
    if (destination === undefined) return
    event.preventDefault()
    goTo(destination)
  }

  return (
    <div className={styles.mobileRates} role="region" aria-roledescription="캐러셀" aria-label="장비별 요금 카드">
      <div className={styles.carouselHint}>
        <span><MoveHorizontal size={15} />왼쪽으로 넘겨 다른 장비도 확인하세요</span>
        {ready && <span aria-hidden="true">{current + 1}<span> / {labels.length}</span></span>}
      </div>
      <div
        id="equipment-rate-cards"
        ref={track}
        className={styles.ratesTrack}
        tabIndex={0}
        role="group"
        aria-label="장비 요금 목록. 좌우 방향키로 이동할 수 있습니다."
        onScroll={updateCurrent}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
      <div className={styles.carouselControls}>
        {ready && <>
          <button type="button" className={styles.carouselArrow} onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="이전 장비 요금" aria-controls="equipment-rate-cards"><ArrowLeft size={18} /></button>
          <div className={styles.carouselDots} role="group" aria-label="요금 카드 선택">
            {labels.map((label, index) => <button key={label} type="button" className={styles.carouselDot} aria-label={`${label} 요금 보기`} aria-current={index === current ? 'true' : undefined} aria-controls="equipment-rate-cards" onClick={() => goTo(index)}><span /></button>)}
          </div>
          <button type="button" className={styles.carouselArrow} onClick={() => goTo(current + 1)} disabled={current === labels.length - 1} aria-label="다음 장비 요금" aria-controls="equipment-rate-cards"><ArrowRight size={18} /></button>
        </>}
      </div>
      {ready && <p className={styles.srOnly} role="status">{labels.length}개 중 {current + 1}번째, {labels[current]} 요금</p>}
    </div>
  )
}

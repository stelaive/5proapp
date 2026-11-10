'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Info, Phone, RotateCcw, Truck, Wallet } from 'lucide-react'
import { cashbackFor, pricingDurations, pricingEquipment, PricingDuration, won } from '../pricing-data'
import styles from '../pricing.module.css'

export default function PricingCalculator() {
  const [equipmentIndex, setEquipmentIndex] = useState(0)
  const [duration, setDuration] = useState<PricingDuration>('halfDay')
  const [notice, setNotice] = useState('')
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')
  const copyText = useRef<HTMLTextAreaElement>(null)
  const equipment = pricingEquipment[equipmentIndex]
  const selectedDuration = pricingDurations.find((item) => item.key === duration)!
  const price = equipment[duration]
  const numericPrice = typeof price === 'number' ? price : null
  const cashback = numericPrice === null ? null : cashbackFor(numericPrice)
  const estimateText = [
    '5프로돌려주는스카이차 · 기준 요금 안내',
    `장비: ${equipment.equipment} / 이용 시간: ${selectedDuration.label} (${selectedDuration.detail})`,
    `기준 대여료: ${won(price)}`,
    `예상 5% 페이백: ${cashback === null ? '상담' : won(cashback)}`,
    `페이백 반영 참고 금액: ${numericPrice === null || cashback === null ? '상담' : won(numericPrice - cashback)}`,
    '확정 견적이 아닙니다. 부가세 포함 여부, 추가 비용, 페이백 적용 범위는 상담 시 확인해 주세요.',
    '상담 1877-3924 · https://www.5prosky.com/pricing',
  ].join('\n')

  function selectEquipment(index: number) {
    setEquipmentIndex(index)
    setCopyState('idle')
    if (typeof pricingEquipment[index][duration] !== 'number') {
      setDuration('halfDay')
      setNotice('선택한 장비는 단시간 요금이 공개되어 있지 않아 반나절 기준으로 변경했습니다.')
    } else {
      setNotice('')
    }
  }

  async function copyEstimate() {
    try {
      await navigator.clipboard.writeText(estimateText)
      setCopyState('copied')
    } catch {
      setCopyState('manual')
      requestAnimationFrame(() => {
        copyText.current?.focus()
        copyText.current?.select()
      })
    }
  }

  return (
    <div className={styles.calculatorGrid}>
      <div className={styles.selectionPanel}>
        <fieldset className={styles.fieldset}>
          <legend><span className={styles.stepNumber}>01</span>필요한 장비를 선택하세요</legend>
          <div className={styles.equipmentOptions}>
            {pricingEquipment.map((item, index) => (
              <label key={item.equipment} className={styles.equipmentOption}>
                <input type="radio" name="equipment" value={index} checked={equipmentIndex === index} onChange={() => selectEquipment(index)} />
                <span className={styles.optionTop}><Truck size={18} strokeWidth={1.7} /><span className={styles.radioMark}>{equipmentIndex === index && <Check size={11} strokeWidth={3} />}</span></span>
                <strong>{item.equipment}</strong>
                <small>{item.description}</small>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend><span className={styles.stepNumber}>02</span>작업 시간을 선택하세요</legend>
          <div className={styles.durationOptions}>
            {pricingDurations.map((item) => (
              <label key={item.key} className={styles.durationOption}>
                <input type="radio" name="duration" value={item.key} checked={duration === item.key} disabled={typeof equipment[item.key] !== 'number'} onChange={() => { setDuration(item.key); setNotice(''); setCopyState('idle') }} />
                <strong>{item.label}</strong><small>{typeof equipment[item.key] !== 'number' ? '별도 상담' : item.detail}</small>
              </label>
            ))}
          </div>
        </fieldset>
        <p className={styles.selectionNotice} role="status">{notice || '장비의 실제 작업 높이·반경과 배차 가능 여부는 현장 조건에 따라 확인합니다.'}</p>
        <div className={styles.taxNote}><Info size={19} /><p><strong>예약 전, 최종 견적을 확인해 주세요.</strong><span>부가세 포함 여부와 추가 작업비는 상담 시 별도로 확인합니다.</span></p></div>
      </div>

      <div className={styles.estimatePanel} role="region" aria-label="선택한 조건의 예상 요금">
        <div className={styles.estimateHeader}><span className={styles.eyebrow}>YOUR ESTIMATE</span><span className={styles.subtleBadge}>기준 요금 안내</span></div>
        <div aria-live="polite" aria-atomic="true" className={styles.estimateValues}>
          <h3>{equipment.equipment}<span>·</span>{selectedDuration.label}<small>{selectedDuration.detail}</small></h3>
          <dl className={styles.costBreakdown}>
            <div><dt>기준 대여료</dt><dd>{won(price)}</dd></div>
            <div><dt>부가세·현장 추가 비용</dt><dd className={styles.consultValue}>상담 후 확인</dd></div>
            <div className={styles.cashbackRow}><dt><Wallet size={17} />예상 5% 페이백</dt><dd>{cashback === null ? '상담' : `−${won(cashback)}`}</dd></div>
          </dl>
          <div className={styles.estimateTotal}><p>페이백을 반영한 참고 금액</p><div><strong>{numericPrice === null || cashback === null ? '상담 필요' : (numericPrice - cashback).toLocaleString('ko-KR')}</strong>{numericPrice !== null && <span>원</span>}</div><small>최종 결제금액은 현장 조건 확인 후 확정됩니다.</small></div>
        </div>
        <a href="tel:18773924" className={`tel-raw ${styles.primaryButton}`}><Phone size={18} />이 조건으로 전화 상담<ArrowUpRight size={18} /></a>
        <p className={styles.callHint}>선택한 장비와 작업 시간을 상담 시 알려주세요.</p>
        <div className={styles.estimateTools}>
          <button type="button" onClick={copyEstimate}>{copyState === 'copied' ? <Check size={15} /> : <Copy size={15} />}{copyState === 'copied' ? '복사 완료' : '견적 내용 복사'}</button>
          <button type="button" onClick={() => { setEquipmentIndex(0); setDuration('halfDay'); setNotice(''); setCopyState('idle') }}><RotateCcw size={15} />다시 선택</button>
        </div>
        <span className={styles.srOnly} role="status">{copyState === 'copied' ? '선택한 조건과 참고 금액을 복사했습니다.' : ''}</span>
        {copyState === 'manual' && <label className={styles.manualCopy}>자동 복사가 지원되지 않습니다. 아래 내용을 선택해 복사해 주세요.<textarea ref={copyText} readOnly value={estimateText} rows={7} /></label>}
        <p className={styles.estimateFootnote}>계산 결과는 장비 기준 요금의 5%를 적용한 예시입니다. 취소·부분취소·추가비의 적용 범위는 상담 시 확인하세요.</p>
      </div>
    </div>
  )
}

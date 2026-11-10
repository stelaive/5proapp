/**
 * Browser regression checks for /pricing (requires an available Playwright install).
 * Start the app, then run:
 *   PRICING_BASE_URL=http://127.0.0.1:3000 node scripts/verify-pricing-design.cjs
 * Optional: PLAYWRIGHT_MODULE, CHROMIUM_EXECUTABLE_PATH, PRICING_ARTIFACT_DIR.
 * WebKit runs iPhone-sized contexts with the site's iOS CSS explicitly enabled;
 * desktop WebKit does not expose -webkit-touch-callout, even with an iPhone UA.
 */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { chromium, webkit, devices } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')

const base = process.env.PRICING_BASE_URL || 'http://127.0.0.1:3000'
const artifacts = process.env.PRICING_ARTIFACT_DIR
const iosCSS = fs.readFileSync(path.join(__dirname, '../src/app/globals.css'), 'utf8')
  .replace('@supports (-webkit-touch-callout: none)', '@supports (display: block)')
const rates = [
  [200000, 250000, 350000, 550000],
  [300000, 300000, 450000, 650000],
  [null, null, 700000, 900000],
  [null, null, 1000000, 1200000],
  [null, null, 1300000, 1800000],
  [null, null, 700000, 900000],
  [null, null, 1000000, 1200000],
]
const durationKeys = ['shortTime', 'oneHour', 'halfDay', 'fullDay']
const format = value => value.toLocaleString('ko-KR')

async function screenshot(page, name, fullPage = false) {
  if (!artifacts) return
  fs.mkdirSync(artifacts, { recursive: true })
  await page.screenshot({ path: path.join(artifacts, `${name}.png`), fullPage, scale: 'css' })
}

async function waitForCard(page, index) {
  await page.waitForFunction(index => {
    const track = document.getElementById('equipment-rate-cards')
    const card = track?.children[index]
    const dot = document.querySelectorAll('button[aria-controls="equipment-rate-cards"][aria-label$="요금 보기"]')[index]
    if (!track || !card || !dot) return false
    const inset = parseFloat(getComputedStyle(track).paddingLeft)
    return Math.abs(card.getBoundingClientRect().left - track.getBoundingClientRect().left - inset) < 2
      && dot.getAttribute('aria-current') === 'true'
  }, index)
}

async function checkCarousel(page, name, touch = false) {
  const carousel = page.getByRole('region', { name: '장비별 요금 카드' })
  const track = page.locator('#equipment-rate-cards')
  const cards = track.locator('article')
  const height = (await track.boundingBox()).height
  assert.ok(height < 430, `${name}: carousel is still vertically stacked`)
  const boxes = await cards.evaluateAll(cards => cards.map(card => card.getBoundingClientRect().toJSON()))
  assert.ok(boxes.every(box => Math.abs(box.y - boxes[0].y) < 1), `${name}: cards are not on one row`)
  assert.ok(boxes[1].x < page.viewportSize().width && boxes[1].x > boxes[0].x + boxes[0].width, `${name}: next card preview missing`)
  assert.equal(await carousel.getByRole('button', { name: '이전 장비 요금' }).isDisabled(), true)
  for (let index = 1; index < 7; index++) {
    await carousel.getByRole('button', { name: '다음 장비 요금' }).click()
    await waitForCard(page, index)
  }
  assert.equal(await carousel.getByRole('button', { name: '다음 장비 요금' }).isDisabled(), true)
  const clippedPrices = await cards.locator('dd').evaluateAll(values => values.filter(el => el.scrollWidth > el.clientWidth + 1).map(el => el.textContent))
  assert.deepEqual(clippedPrices, [], `${name}: clipped price`)
  const dots = carousel.getByRole('group', { name: '요금 카드 선택' }).getByRole('button')
  await dots.nth(2).click()
  await waitForCard(page, 2)
  await track.focus()
  await page.keyboard.press('ArrowLeft')
  await waitForCard(page, 1)
  await page.keyboard.press('End')
  await waitForCard(page, 6)
  await page.keyboard.press('Home')
  await waitForCard(page, 0)
  if (touch) {
    // Real touch input in an isolated Chromium mobile context, not synthetic DOM events.
    await track.evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 130, behavior: 'instant' }))
    const box = await cards.first().boundingBox()
    const client = await page.context().newCDPSession(page)
    const y = box.y + 110
    const start = box.x + box.width - 25
    await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: start, y }] })
    for (let step = 1; step <= 12; step++) {
      await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: start - step * 19, y }] })
      await page.waitForTimeout(20)
    }
    await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
    await page.waitForFunction(() => document.getElementById('equipment-rate-cards').scrollLeft > 150)
    await page.waitForFunction(() => document.querySelector('button[aria-controls="equipment-rate-cards"][aria-label$="요금 보기"]').getAttribute('aria-current') !== 'true')
    await client.detach()
    await dots.first().click()
    await waitForCard(page, 0)
  }
  if (name === 'iphone-390') {
    await dots.nth(4).click()
    await waitForCard(page, 4)
    await page.setViewportSize({ width: 430, height: 844 })
    await waitForCard(page, 4)
    await page.setViewportSize({ width: 390, height: 844 })
    await waitForCard(page, 4)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await dots.first().click()
    await waitForCard(page, 0)
    await page.emulateMedia({ reducedMotion: 'no-preference' })
  }
  await page.evaluate(() => document.activeElement?.blur())
  console.log(`PASS ${name} carousel: seven cards, no clipping, preview, arrows, dots, keyboard${touch ? ', native left swipe' : ''}`)
}

async function checkViewport(browser, name, options, ios = false) {
  const context = await browser.newContext(options)
  try {
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    assert.equal((await page.goto(`${base}/pricing`, { waitUntil: 'networkidle' })).status(), 200)
    if (ios) await page.addStyleTag({ content: iosCSS })
    const width = options.viewport.width
    assert.equal(await page.locator('h1').count(), 1)
    assert.equal(await page.locator('main').count(), 1)
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${name}: page overflow`)
    const unresolvedAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.hash.slice(1)).filter(id => !document.getElementById(id)))
    assert.deepEqual(unresolvedAnchors, [])

    const dock = page.getByRole('navigation', { name: '빠른 메뉴' })
    if (width < 768) {
      const box = await dock.boundingBox()
      assert.ok(box.height >= 64 && box.height <= 100, `${name}: oversized CTA`)
      assert.ok(Math.abs(box.y + box.height - options.viewport.height) < 1)
      assert.equal(await dock.locator('a[href^="tel:"]').getAttribute('href'), 'tel:18773924')
      await page.getByRole('button', { name: '메뉴 열기' }).click()
      assert.equal(await page.getByRole('button', { name: '메뉴 닫기' }).getAttribute('aria-expanded'), 'true')
      await page.keyboard.press('Escape')
      assert.equal(await page.getByRole('button', { name: '메뉴 열기' }).getAttribute('aria-expanded'), 'false')
    } else {
      assert.equal(await dock.isVisible(), false)
    }

    if (width < 900) {
      const cards = page.locator('#equipment-prices article')
      assert.equal(await cards.count(), 7)
      assert.equal(await cards.first().isVisible(), true)
      assert.equal(await page.locator('#equipment-prices table').isVisible(), false)
      for (let i = 0; i < rates.length; i++) {
        const values = await cards.nth(i).locator('dl').first().locator('dd').allTextContents()
        assert.deepEqual(values, rates[i].map(value => value === null ? '상담' : `${format(value)}원`))
      }
      await cards.first().evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 100, behavior: 'instant' }))
      const exposed = await cards.first().locator('dd').first().evaluate(el => {
        const rect = el.getBoundingClientRect()
        return el.contains(document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2))
      })
      assert.ok(exposed, `${name}: price is covered`)
      await page.evaluate(() => document.activeElement?.blur())
      await checkCarousel(page, name, name === 'android-360')
      await page.locator('#equipment-prices').evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 90, behavior: 'instant' }))
      await screenshot(page, `${name}-prices`)
    } else {
      assert.equal(await page.locator('#equipment-prices tbody tr').count(), 7)
      assert.equal(await page.locator('#equipment-prices table').isVisible(), true)
      assert.ok(await page.locator('#equipment-prices table').evaluate(el => el.scrollWidth <= el.parentElement.clientWidth + 1), `${name}: table overflow`)
    }

    const faq = page.locator('#pricing-faq details').first()
    await faq.locator('summary').click()
    assert.equal(await faq.getAttribute('open'), '')
    assert.ok((await faq.locator('p').innerText()).includes('200,000원'))
    await faq.locator('summary').click()
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
    await screenshot(page, `${name}-top`)
    if (['iphone-390', 'desktop-1440'].includes(name)) await screenshot(page, `${name}-full`, true)
    assert.deepEqual(errors, [], `${name}: browser error`)
    console.log(`PASS ${name}: visible prices, CTA, anchors, FAQ, no overflow or JS errors`)
  } finally {
    await context.close()
  }
}

async function checkCalculator(browser) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  try {
    const page = await context.newPage()
    await page.goto(`${base}/pricing`, { waitUntil: 'networkidle' })
    const summary = page.getByRole('region', { name: '선택한 조건의 예상 요금' })
    let combinations = 0
    for (let equipment = 0; equipment < rates.length; equipment++) {
      await page.locator(`input[name="equipment"][value="${equipment}"]`).check()
      for (let duration = 0; duration < 4; duration++) {
        const radio = page.locator(`input[name="duration"][value="${durationKeys[duration]}"]`)
        const rate = rates[equipment][duration]
        if (rate === null) {
          assert.equal(await radio.isDisabled(), true)
          continue
        }
        await radio.check()
        const text = await summary.innerText()
        assert.ok(text.includes(`${format(rate)}원`))
        assert.ok(text.includes(`−${format(rate * 0.05)}원`))
        assert.ok(text.includes(format(rate * 0.95)))
        combinations++
      }
    }
    await page.locator('input[name="equipment"][value="0"]').check()
    await page.locator('input[name="duration"][value="shortTime"]').check()
    await page.locator('input[name="equipment"][value="2"]').check()
    assert.equal(await page.locator('input[name="duration"][value="halfDay"]').isChecked(), true)
    assert.ok(await page.getByText('선택한 장비는 단시간 요금이 공개되어 있지 않아 반나절 기준으로 변경했습니다.').isVisible())

    // Use an isolated stub; do not read or change the user's system clipboard.
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async text => { window.__pricingCopied = text } } }))
    await page.getByRole('button', { name: '견적 내용 복사' }).click()
    assert.ok(await page.getByRole('button', { name: '복사 완료' }).isVisible())
    const copied = await page.evaluate(() => window.__pricingCopied)
    assert.ok(copied.includes('8톤 (54m)') && copied.includes('700,000원') && copied.includes('확정 견적이 아닙니다'))
    await page.getByRole('button', { name: '다시 선택' }).click()
    assert.equal(await page.locator('input[name="equipment"][value="0"]').isChecked(), true)
    assert.equal(await page.locator('input[name="duration"][value="halfDay"]').isChecked(), true)
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Test: clipboard unavailable') } } }))
    await page.getByRole('button', { name: '견적 내용 복사' }).click()
    assert.ok(await page.getByRole('textbox').isVisible())
    assert.ok((await page.getByRole('textbox').inputValue()).includes('350,000원'))
    await page.getByRole('button', { name: '다시 선택' }).click()
    await page.locator('input[name="equipment"][value="0"]').focus()
    await page.keyboard.press('ArrowRight')
    assert.equal(await page.locator('input[name="equipment"][value="1"]').isChecked(), true)
    console.log(`PASS calculator: ${combinations} rate combinations, unavailable rates, fallback selection, copy/fallback, reset, keyboard`)
  } finally { await context.close() }
}

async function checkNoScript(browser) {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
  try {
    const page = await context.newPage()
    await page.goto(`${base}/pricing`, { waitUntil: 'networkidle' })
    assert.equal(await page.locator('#equipment-prices article').count(), 7)
    assert.ok(await page.locator('#equipment-prices article').first().isVisible())
    assert.equal(await page.locator('script[type="application/ld+json"]').count(), 3)
    const track = page.locator('#equipment-rate-cards')
    assert.equal(await page.getByRole('button', { name: '다음 장비 요금' }).count(), 0)
    assert.ok(await track.evaluate(el => el.scrollWidth > el.clientWidth))
    await track.evaluate(el => el.scrollTo({ left: el.scrollWidth, behavior: 'instant' }))
    assert.ok(await track.evaluate(el => el.scrollLeft > 0))
    console.log('PASS no-JavaScript: initial HTML includes all seven equipment rates and structured data')
  } finally { await context.close() }
}

;(async () => {
  const chrome = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined })
  let safari
  try {
    safari = await webkit.launch()
    for (const width of [320, 390, 430]) {
      await checkViewport(safari, `iphone-${width}`, { ...devices['iPhone 13'], viewport: { width, height: 844 } }, true)
    }
    for (const [width, height] of [[360, 800], [768, 1024], [900, 1000], [1024, 900], [1440, 1000]]) {
      await checkViewport(chrome, width === 360 ? 'android-360' : `desktop-${width}`, { viewport: { width, height }, ...(width === 360 ? { isMobile: true, hasTouch: true } : {}) })
    }
    await checkCalculator(chrome)
    await checkNoScript(chrome)
    console.log('All pricing design checks passed.')
  } finally {
    await safari?.close()
    await chrome.close()
  }
})().catch(error => { console.error(error); process.exitCode = 1 })

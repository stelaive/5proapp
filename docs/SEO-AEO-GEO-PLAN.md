# SEO · AEO · GEO 최적화 기획문서

> 대상: 5프로돌려주는스카이차 웹사이트 (`skycar-5percent`)
> 작성일: 2026-07-11
> 관련 문서: [PRD.md](./PRD.md) · [toss_tip](./toss_tip) · `.claude/skills/design-system`
> 상태: 기획(실행 전) — 현황 감사 기반

---

## 1. 목적

검색(SEO) + 답변엔진(AEO) + 생성형엔진(GEO) 세 축에서 **"지역 + 스카이차 대여" 의도**를 가진 사용자에게 노출되고, **전화 예약 / 앱 다운로드** 전환으로 연결하는 것.

| 축 | 정의 | 우리 목표 |
|---|---|---|
| **SEO** | 구글·네이버·다음 검색 결과 노출 | "○○ 스카이차 대여/가격" 지역 키워드 상위 |
| **AEO** | 구글 AI 개요·피처드 스니펫·네이버 지식스니펫 등 **답변 블록** | "스카이차 5% 페이백 뭐야?", "수원 스카이차 얼마?" 답변에 인용 |
| **GEO** | ChatGPT·Gemini·Perplexity 등 **생성형 답변**에 브랜드/사실 인용 | "서울·경기·대전·충남 등 스카이차 추천/저렴한 곳" 질문 시 우리 서비스가 언급 (서비스 지역 = **제주 제외 전국**) |

> ⭐ **서비스 지역 = 제주도를 제외한 전국.** 경기·서울뿐 아니라 인천·대전·충남·충북·강원·경상·전라 등 어디든 출동한다. 아래 모든 전략은 "수도권 한정"이 아니라 **전국(제주 제외)** 커버리지를 전제로 한다. (단, 현재 심층 콘텐츠는 수도권 중심 → 전국으로 확장 대상.)

---

## 2. 현황 진단 (감사 결과)

### 2.1 이미 잘 되어 있는 것 ✅
| 항목 | 위치 |
|---|---|
| 페이지별 메타데이터 시스템 | `src/lib/metadata.ts` (`generatePageMetadata`, `PAGE_METADATA`) + 각 라우트 `layout.tsx` |
| 동적 사이트맵 | `src/app/sitemap.ts` |
| robots.txt (전 로봇 허용 + Yeti/Googlebot 명시) | `public/robots.txt` |
| JSON-LD `LocalBusiness` | `src/app/layout.tsx` (+ `locations/gunpo/schema.tsx`) |
| 검색엔진 인증 (naver/google/daum) | `layout.tsx` / `robots.txt` |
| OpenGraph·Twitter 카드 | `layout.tsx`, `metadata.ts` |
| 지역 실데이터(서울25·경기·인천 + 동 리스트) | `src/lib/regionData.ts` |
| 홈 로컬 SEO 섹션(지역명 텍스트 + 내부링크) | `home/sections/AreaSection.tsx` |
| 홈 FAQ 섹션 | `home/sections/FaqSection.tsx` |

### 2.2 개선 필요 (갭) — 우선순위 표
| # | 갭 | 근거 | 영향 | 우선순위 |
|---|---|---|---|---|
| G1 | **`metadataBase` 미설정** → OG/트위터 이미지가 `localhost:3000`으로 해석 | `next build` 경고 확인 | 공유 미리보기 깨짐 | **P0** |
| G2 | **정규 도메인 표기 혼용** — sitemap은 `https://5프로.com`(비인코딩), canonical/metadata는 `xn--5-w30fr74e.com`(punycode), robots는 둘 다 등록 | `sitemap.ts` L5, `layout.tsx` canonical, `robots.txt` L20-21 | 정규화 신호 분산·중복 색인 | **P0** |
| G3 | **사이트맵 ↔ 실제 페이지 불일치** — `gangnam` 페이지 존재하나 sitemap `LIVE_CITY_SLUGS`(anyang/gunpo/suwon)에 없음. 홈은 gangnam으로 내부링크. `/locations/[region]`(seoul/gyeonggi/incheon)도 sitemap 미포함 | `sitemap.ts` L62, `AreaSection.tsx` | 색인 누락·모순 | **P0** |
| G4 | **FAQPage 구조화 데이터 없음** — 홈/`support`에 FAQ 콘텐츠 있으나 JSON-LD 미적용 | `FaqSection.tsx`, `support` | AEO(리치결과) 기회 상실 | **P1** |
| G5 | **Service/Offer + 가격 스키마 부재** — `regionData`에 실제 요금 있으나 미활용 | `regionData.ts` pricing | 가격 리치결과·GEO 사실성 | **P1** |
| G6 | **BreadcrumbList 없음** — 지역 페이지 계층 미표현 | `locations/*` | 검색결과 경로 표시·구조 이해 | **P1** |
| G7 | **NAP 불완전** — `LocalBusiness`에 주소(address)·좌표(geo) 없음 | `layout.tsx` structuredData | 로컬/지도/GEO 엔티티 약함 | **P1** (실주소 필요·TBD) |
| G8 | **지역 페이지 깊이 부족** — 4개 도시(강남·안양·수원·군포)만 심층 | `locations/` | 롱테일 커버리지 한계 | **P2** |
| G9 | **description 키워드 나열** — 자연문이 아닌 콤마 키워드 | `metadata.ts` L11 | 스니펫 품질·스팸 신호 | **P2** |
| G10 | **lastModified 하드코딩(2025)** | `sitemap.ts` | 신선도 신호 부정확 | **P2** |

---

## 3. 목표 & 지표

### 3.1 목표
1. 전국(제주 제외) 주요 도시 "○○ 스카이차" 키워드 **검색 1페이지** 진입 — 서울·경기·인천은 물론 대전·충남·충북·강원 등 전국.
2. "스카이차 5% 페이백", "스카이차 요금" 질의에 **AI 개요/스니펫 인용**.
3. 생성형 답변엔진이 서비스명·전화·5% 혜택·지역을 **정확히 인용**.

### 3.2 측정 지표 (KPI)
- 색인 페이지 수, 지역 키워드 노출수/클릭수 (Search Console, 네이버 서치어드바이저)
- 리치결과(FAQ/가격) 노출 여부
- 생성형엔진 인용 모니터링(수동 프롬프트 테스트: ChatGPT/Perplexity/Gemini)
- 전화 CTA 클릭·앱 이동 (전환)

> ⚠️ 목표 수치는 기준선 측정 후 확정.

---

## 4. 키워드 전략

### 4.1 의도(intent)별 분류
| 의도 | 예시 키워드 | 랜딩 |
|---|---|---|
| 지역+서비스 (거래형) | "수원 스카이차 대여", "안양 스카이차 가격" | 지역 페이지 `/locations/*` |
| 가격/요금 (조사형) | "스카이차 요금표", "3.5톤 스카이차 가격" | `/pricing` |
| 혜택 (브랜드형) | "스카이차 5% 페이백", "스카이차 현금 환급" | `/whyhere`, 홈 |
| 톤수/용도 | "1톤 스카이차", "외벽청소 고소작업차" | 홈 서비스, 지역 페이지 |
| 커뮤니티/부가 | "일거리 장터", "친구초대 5만원" | `/marketplace`, `/reward` |

### 4.2 지역 × 서비스 매트릭스 (허브-스포크)
- **허브(홈)**: 넓은 클레임 + 전 지역명 텍스트 + 도시 페이지 링크 (`AreaSection`)
- **스포크(도시 페이지)**: `{도시} 스카이차` + 동(洞) 키워드 + 요금 + 예약 3단계
- 원천 데이터: `regionData.ts` (조작 없이 실제 지역만)

---

## 5. 실행 과제 (3축)

### 5.1 SEO (검색)
| 과제 | 내용 | 대상 파일 | 우선 |
|---|---|---|---|
| 정규 도메인 통일 | 모든 URL을 `www.5prosky.com`으로 일원화, sitemap/robots/canonical 정합 | `sitemap.ts`, `robots.txt`, `metadata.ts`, `layout.tsx` | P0 |
| metadataBase 설정 | `metadataBase: new URL(siteUrl)` | `layout.tsx` | P0 |
| 사이트맵 정합화 | 실제 라이브 도시(강남 포함)·광역 페이지 반영, lastModified 현실화 | `sitemap.ts` | P0 |
| description 자연문화 | 키워드 나열 → 사람이 읽는 요약문(핵심 키워드 자연 포함) | `metadata.ts` | P2 |
| 내부링크 강화 | 브레드크럼, 지역 상호링크, 푸터 지역 링크 | `locations/*`, `Footer` | P1 |
| 이미지 SEO | 의미 있는 alt·파일명, LCP 우선순위, `sizes` | 전역 | P2 |

### 5.2 AEO (답변엔진)
| 과제 | 내용 | 대상 | 우선 |
|---|---|---|---|
| FAQPage 스키마 | 홈·support FAQ를 `FAQPage` JSON-LD로 마크업 | `FaqSection.tsx`, `support` | P1 |
| 답변 우선 서술 | 각 페이지 첫 문단을 "질문에 바로 답하는" 정의형 문장으로 | 각 페이지 | P1 |
| Q&A 콘텐츠 확장 | "얼마?", "어디 출동?", "언제 지급?" 등 실제 질의 커버 | FAQ | P1 |
| 표·리스트화 | 요금·톤수·지역을 표/목록으로(스니펫 친화) | `/pricing`, 지역 | P2 |

### 5.3 GEO (생성형엔진)
| 과제 | 내용 | 대상 | 우선 |
|---|---|---|---|
| NAP 일관성 | 이름·주소·전화를 전 페이지·스키마·외부 디렉터리에서 동일하게 | `layout.tsx`, 푸터 | P1 |
| LocalBusiness 보강 | `address`, `geo`(위경도), `openingHoursSpecification`, `sameAs`(SNS/스토어) 추가 | `layout.tsx` | P1 (주소 TBD) |
| 사실 명시 서술 | "이용료의 5%를 작업 완료 즉시 현금 지급", "제주 제외 전국 24시간" 등 명확 단문 | 홈·whyhere | P1 |
| 외부 엔티티 신호 | 구글 비즈니스 프로필·네이버 플레이스·앱스토어 링크 정합(`sameAs`) | 운영 | P2 |
| (선택) `llms.txt` | 핵심 사실 요약 파일 제공 | `public/` | P2 |

---

## 6. 구조화 데이터 로드맵

| 스키마 | 페이지 | 현재 | 목표 |
|---|---|---|---|
| `LocalBusiness` | 전역(root) | ✅ 기본 | address·geo·openingHoursSpecification·sameAs 보강 (G7) |
| `FAQPage` | 홈, support | ❌ | 신규 (G4) |
| `Service` + `Offer`/`PriceSpecification` | pricing, 지역 | ❌ | 실제 요금(`regionData`)으로 신규 (G5) |
| `BreadcrumbList` | locations/* | ❌ | 신규 (G6) |
| `Organization`/`WebSite` + `SearchAction` | root | 부분 | 정리 |
| `AggregateRating`/`Review` | — | ❌ | **실제 후기 확보 전 도입 금지** (무결성) |

---

## 7. 콘텐츠 · IA 전략
- **지역 페이지 확장(P2)**: 수도권(성남·용인·화성)과 함께 **대전·천안·청주·원주 등 전국(제주 제외) 주요 도시**를 강남 수준의 동(洞) 심층 페이지로 → `regionData`에 데이터 추가 후 라우트 생성. (현재 `regionData`는 서울·경기·인천만 → 전국 확장 필요)
- **답변 우선 구조**: 각 페이지 상단에 핵심 질문의 답을 1~2문장으로.
- **표준 Q&A 세트**: 요금/지급 방식/지역/취소/앱 필수 여부 — 홈·support·지역 페이지 공통.
- **정책 문구 검수**: 페이백 지급·요금 고정·취소 규정을 실제 운영 기준으로(현재 FAQ 코드에 `⚠️` 표기).

---

## 8. 기술 SEO 체크리스트
- [ ] `metadataBase` 설정 (G1)
- [ ] 전 URL punycode 정규화, canonical 일관 (G2)
- [ ] sitemap 라이브 페이지 정합 + lastModified 현실화 (G3, G10)
- [ ] robots.txt 사이트맵 1개(정규 도메인)로 정리
- [ ] 404/리다이렉트 점검 (한글 도메인 ↔ punycode)
- [ ] 모바일 LCP < 2.5s, 가로 오버플로 0 (이미 전역 처리)
- [ ] 구조화 데이터 리치결과 테스트 통과 (Google Rich Results Test)

---

## 9. 측정 & 도구
| 도구 | 용도 |
|---|---|
| Google Search Console | 색인·쿼리·리치결과·Core Web Vitals |
| 네이버 서치어드바이저 | 네이버 색인·노출 (Yeti) |
| 다음 웹마스터도구 | 다음 색인 |
| Google Rich Results Test / Schema Validator | 구조화 데이터 검증 |
| 생성형엔진 수동 테스트 | ChatGPT·Gemini·Perplexity 프롬프트로 인용 여부 확인 |
| Google 비즈니스 프로필 / 네이버 플레이스 | 로컬 엔티티(GEO 보조) |

---

## 10. 실행 로드맵

### Phase 1 — 기술 기반 정리 (P0, ~즉시)
G1 metadataBase · G2 도메인 통일 · G3 사이트맵 정합. → 색인·공유·정규화 신호 정상화.

### Phase 2 — 구조화 데이터 & AEO (P1)
FAQPage(G4) · Service/Offer 가격(G5) · BreadcrumbList(G6) · LocalBusiness NAP 보강(G7) · 답변 우선 서술. → 리치결과·답변엔진 인용.

### Phase 3 — 콘텐츠 확장 & GEO (P2)
지역 페이지 확장(G8) · description 자연문화(G9) · 내부링크·이미지 SEO · 외부 엔티티(sameAs)·`llms.txt`. → 롱테일·생성형 커버리지.

---

## 11. 무결성 원칙 (필수)
- **후기·별점·누적 건수 등 수치는 실제 데이터일 때만** 마크업. 가짜 `AggregateRating` 금지.
- **실제 서비스 지역만** 노출. 가짜 지역 페이지·키워드 스터핑 금지(페널티 리스크).
- 주소·전화·정책은 **실제와 100% 일치**(NAP 일관성 = 로컬/GEO 핵심).

---

## 12. 오픈 이슈 (운영 확인 필요)
1. **정식 상호명 / 사업장 주소 / 위경도** — `LocalBusiness` address·geo 채우려면 필요 (G7).
2. **페이백 지급 방식·요금 고정·취소 규정** 실제 정책 — FAQ/스키마 사실화.
3. **정규 도메인 최종 결정** — punycode 도메인을 정식 canonical로 확정하는지.
4. **SNS/스토어 URL** — `sameAs` 채울 채널(인스타·블로그·플레이스 등).
5. **우선 확장 도시** — 수도권(성남·용인·화성)과 대전·충남·충북·강원 등 전국(제주 제외) 중 어느 지역부터 심층 페이지화할지.

---

*본 기획은 현황 감사 기반이며, Phase 1(P0)부터 순차 실행을 권장한다. ⚠️/TBD 항목은 운영 정보 확정 후 반영.*

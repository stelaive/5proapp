# SEO·AEO·GEO 재사용 가이드 및 점검 프로세스 (v3, 최종)

기가팡(gigapang) 프로젝트에서 시도한 SEO/AEO/GEO 작업을 정리하고, 다른 프로젝트에 처음부터 적용할 수 있는 기능/방식, 각 프로젝트의 미흡한 부분을 스스로 점검하는 프로세스, 그리고 2026년 7월 시점 최신 리서치와 AI(Claude) 스스로가 정보를 신뢰·인용하는 기준까지 반영한 최종 문서입니다.

> v2 → v3 변경점 (2026-07 기준 재검색 반영): AI 크롤러가 "학습용 봇"과 "실시간 검색용 봇"으로 분리 운영된다는 사실을 반영해 robots.txt 전략을 정정했고, 2026년 3월 core update에서 핵심 신호로 떠오른 "Information Gain"을 추가했으며, 구글이 2026년 6월부터 AI Mode/Overviews 노출 여부를 사이트가 직접 선택(opt-out)할 수 있게 된 점을 반영했습니다.
> v1 → v2 변경점: llms.txt의 실효성을 최신 데이터로 재검증해 우선순위를 하향 조정했고, "검색엔진/AI가 실제로 무엇을 근거로 추천·인용하는지"(5장, 6장)를 추가했습니다.

---

## 1. 기가팡에서 적용한 방식 (다른 프로젝트에 그대로 이식 가능)

### 1.1 구조화 데이터 (JSON-LD)

| 기능 | 방식 | 재사용 포인트 |
|---|---|---|
| FAQ 데이터 → JSON-LD 자동 변환 | FAQ 원본 데이터를 별도 파일(`faqData.ts`)에 두고 `buildFaqJsonLd()` 헬퍼 함수로 여러 페이지에서 재사용 | 데이터와 스키마 마크업 로직을 분리하면 FAQ 추가/수정 시 마크업 코드를 건드릴 필요가 없음 |
| DB 콘텐츠의 반응형 JSON-LD | 관리자가 CMS에서 FAQ를 수정하면 `computed()`로 감싼 JSON-LD가 자동 갱신 | 정적 하드코딩 대신 데이터 소스에 바인딩 — CMS/DB 기반 콘텐츠가 있는 프로젝트 전반에 적용 가능 |
| 콘텐츠 타입별 스키마 동적 분기 | 게시글 제목 패턴에 따라 `Article`/`NewsArticle` 자동 선택 | 하나의 상세 페이지 템플릿이 여러 콘텐츠 유형을 다룰 때 유용 |
| 실데이터 연동 AggregateRating | 리뷰 페이지의 평균 평점·리뷰 수를 DB 실값과 동기화해 JSON-LD에 반영 | 평점/후기 기능이 있는 모든 서비스에 적용 — 리치 스니펫 신뢰도 확보 |
| BreadcrumbList | Q&A, 리뷰 페이지에 적용 | 카테고리 구조가 있는 목록/상세 페이지 전반에 적용 가능 |

### 1.2 메타태그

- 페이지별 `title`/`description`/OG 태그(`ogTitle`, `ogDescription`, `ogImage`, `ogType`, `ogUrl`, `ogSiteName`) 개별 설정
- 게시글 상세 페이지에는 Twitter Card(`summary_large_image`)까지 별도 구현
- 일부 페이지에 canonical URL 명시

### 1.3 성능/렌더링

- 폰트 로드 시 `media="print"` + `onload="this.media='all'"` 트릭으로 렌더 블로킹 방지 → **프레임워크 무관, 어느 프로젝트든 그대로 복붙 가능**
- 정적 자산에 장기 캐싱(`immutable`, 1년 `maxAge`) 헤더 부여
- `<html lang="ko">` 등 시맨틱/접근성 속성 명시

### 1.4 콘텐츠 구조 (AEO 지향)

- `/qna` 페이지: DB 기반 FAQ 목록 + 카테고리/검색 필터를 실제 화면 콘텐츠로 노출하고, 동일 데이터를 FAQPage 스키마로도 마크업 (노출 콘텐츠와 구조화 데이터 1:1 매칭)
- 질의응답형 콘텐츠 구조를 AI 답변엔진이 파싱하기 쉽도록 설계

### 1.5 사이트맵/robots

- Nitro 서버 라우트로 sitemap.xml을 매 요청마다 동적 생성 (정적 파일 하드코딩보다 유지보수 유리)
- robots.txt에 sitemap 위치 명시

---

## 2. 기가팡에서 미흡했던 부분 (다음 프로젝트는 처음부터 챙길 것)

| 항목 | 문제 | 개선 방향 |
|---|---|---|
| AI 크롤러 개별 규칙 없음 | robots.txt가 `Allow: /`뿐 | **학습용 봇과 검색용 봇을 구분**해 명시 (아래 5.5 참고) — 검색용 봇을 막으면 AI 검색 노출 자체가 차단됨 |
| canonical 일관성 부족 | 절반 페이지만 적용 | 레이아웃/공통 컴포저블 레벨에서 강제 (`useCanonical(path)` 유틸) |
| OG 이미지 고정값 | 다수 페이지가 파비콘으로 대체 | 데이터 모델에 대표 이미지 필드를 처음부터 포함, fallback만 파비콘 |
| 사이트맵에 동적 URL 누락 | 상품/게시글 상세 페이지 빠짐 | 사이트맵 생성 로직에 DB 쿼리로 동적 슬러그 포함 |
| 이미지 최적화 모듈 미설치 | lazy loading/자동 변환 없음 | Next.js는 `next/image`, Nuxt는 `@nuxt/image`를 프로젝트 시작 시점에 설치 |
| 도메인/URL 중복 | www/non-www, trailing slash 모두 200으로 열림 | 대표 도메인 301 리다이렉트 규칙을 배포 초기부터 설정 |
| 초기 HTML에 본문 미출력 | SSR 설정 미흡으로 크롤러가 H1~H3, 본문을 못 읽는 경우 발생 | SSR/프리렌더링 여부를 배포 전 반드시 curl로 검증 |
| HowTo/Organization 스키마 없음 | 신청 절차, 브랜드 엔티티 정보 부재 | 단계형 콘텐츠와 회사 정보가 있으면 적용 |
| 서드파티 스크립트 지연 로딩 미흡 | GTM, 픽셀 등이 Core Web Vitals 저하 요인 | `lazyOnload` 등 지연 전략 적용 |
| 콘텐츠 갱신 주기 관리 없음 | 가격/혜택 페이지가 오래 방치되면 최신성 신호가 사라짐 | 아래 5.2 참고 — 최신성이 AI 인용에 미치는 영향이 생각보다 큼 |
| 콘텐츠 정보 밀도 낮음 | 마케팅 문구 위주, 수치·비교 데이터 부족 | 아래 5.1 참고 — "이 회사가 왜 좋은지"보다 "구체적으로 뭐가 얼마인지"가 인용에 유리 |

---

## 3. 신규 프로젝트 SEO/AEO/GEO 초기 세팅 체크리스트

프로젝트 시작 시 한 번에 세팅해야 하는 항목 (나중에 리팩터링하면 비용이 커짐):

- [ ] robots.txt 작성 — **학습용 봇(GPTBot, ClaudeBot)과 검색용 봇(OAI-SearchBot, Claude-SearchBot, Claude-User, PerplexityBot)을 구분**해 정책 결정 (5.5 참고)
- [ ] 동적 sitemap.xml 생성 로직 (정적 페이지 + DB 기반 동적 URL 모두 포함)
- [ ] 대표 도메인 301 리다이렉트 (www/non-www, trailing slash 통일)
- [ ] 이미지 최적화 모듈 설치 (`next/image`, `@nuxt/image` 등)
- [ ] 레이아웃 레벨 공통 SEO 컴포저블/훅 (title, description, OG, Twitter Card, canonical을 페이지별로 빠짐없이 넘기도록 강제)
- [ ] `Organization` 스키마 (회사명, 로고, `sameAs` 소셜 링크) 전역 1회 적용
- [ ] SSR/프리렌더링 확인 — 크롤러가 초기 HTML에서 콘텐츠를 읽을 수 있는지 배포 전 검증
- [ ] 콘텐츠 갱신 주기 및 `dateModified` 업데이트 프로세스 정의 (누가, 언제, 어떤 페이지를 갱신할지)
- [ ] AI 인용 성과 측정 지표(Mention Rate / Citation Rate / Position) 트래킹 방법 마련 (6.4 참고)
- [ ] `llms.txt`는 선택 사항으로 후순위 배치 (아래 5.3 참고 — ROI가 아직 낮음, 코딩 에이전트용으로는 유의미)

---

## 4. 미흡한 부분을 찾아내는 점검 프로세스

새 프로젝트 또는 기존 프로젝트를 주기적으로 점검할 때 아래 순서로 진행합니다.

### 4.1 정적 점검 (코드/설정 기준, 배포 전에도 가능)

1. **robots.txt / sitemap.xml 확인**
   - `robots.txt`에 AI 크롤러(GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, CCBot) 규칙이 있는지
   - sitemap이 정적 페이지만이 아니라 동적 상세 페이지까지 포함하는지 (DB 레코드 수와 sitemap 항목 수 비교)
2. **메타태그 커버리지 확인**
   - 전체 페이지 목록을 뽑아, 각 페이지에 title/description/OG/canonical이 개별 설정됐는지 표로 체크 (누락 페이지 색출)
   - OG 이미지가 실제 대표 이미지인지, 파비콘 등 고정값으로 대체된 곳은 없는지
3. **구조화 데이터 검증**
   - Google Rich Results Test / Schema Markup Validator로 주요 페이지 JSON-LD 문법 오류 확인
   - 노출되는 실제 화면 콘텐츠와 JSON-LD 내용이 일치하는지 (예: 리뷰 평점이 실데이터와 같은지)
4. **헤딩 구조 확인**
   - 페이지당 H1이 1개인지, H2/H3가 논리적 계층을 이루는지 (디자인 목적으로 순서가 뒤섞이지 않았는지)
   - **답변 채택률 관점**: 질문형 헤딩(예: "인터넷 결합 위약금은 얼마인가요?") 바로 아래에 40~60단어 내외의 직답 문단이 있는지
5. **URL 정규화 확인**
   - www/non-www, trailing slash, 대소문자, 쿼리스트링 조합이 모두 200으로 열리며 중복 콘텐츠를 만드는지
6. **정보 밀도 확인 (신규)**
   - 주요 페이지에서 문단당 고유명사·수치·날짜가 몇 개나 나오는지 훑어보기 (마케팅 형용사만 나열된 문단은 AI 인용 대상에서 제외되기 쉬움)
7. **사실 정보 일관성 확인 (신규)**
   - 홈페이지, 블로그, 리뷰 페이지, SNS에 노출된 동일 사실(가격, 정책, 연락처)이 서로 다른 곳은 없는지

### 4.2 동적 점검 (실 배포 환경 기준)

8. **크롤러 시점 렌더링 확인**
   - `curl -A "Googlebot" <URL>` 또는 `view-source:`로 초기 HTML에 본문/헤딩/JSON-LD가 실제로 포함되는지 확인 (SSR/프리렌더링 여부와 무관하게 JS 실행 전 상태 기준)
9. **Core Web Vitals 측정**
   - PageSpeed Insights / Lighthouse로 LCP, CLS, INP 측정
   - 서드파티 스크립트(GTM, 픽셀 등)가 렌더링을 얼마나 지연시키는지 워터폴로 확인
10. **색인 상태 확인**
    - Google Search Console / 네이버 서치어드바이저에서 색인 제외 페이지, 크롤링 오류, 중복 canonical 경고 확인
11. **AI 검색엔진 트래픽/크롤링 확인**
    - GA4에서 referrer가 `chat.openai.com`, `perplexity.ai`, `claude.ai` 등인 세그먼트 확인 (GEO 효과 측정)
    - 서버 로그에서 GPTBot/ClaudeBot 등 실제 크롤링 여부 확인
12. **AI 인용 성과 직접 확인 (신규)**
    - ChatGPT, Perplexity, Google AI Overview, Claude 등에 실제 타깃 질문("SK 인터넷 사은품 추천")을 던져서 자사가 언급/인용되는지 주기적으로 직접 확인 (자동화 툴이 아직 부정확하므로 수기 확인이 현재는 더 신뢰도 높음)

### 4.3 점검 주기

- **배포 전 1회**: 4.1 전체 (정적 점검) + 4.2의 8번(크롤러 렌더링 확인)
- **월 1회 정기 점검**: 4.2 전체 (Search Console, Core Web Vitals, AI 트래픽)
- **1~2주 1회**: 가격/혜택처럼 자주 바뀌는 페이지의 `dateModified` 및 사실 정보 최신화 (5.2 참고 — AI 인용은 최신성에 매우 민감)
- **콘텐츠/가격 변경 시마다**: 구조화 데이터와 실데이터 일치 여부만 재확인 (4.1의 3번)

---

## 5. 2026년 기준 GEO 최신 리서치 반영 사항

업계 리서치와 실제 데이터를 확인한 결과, 기존에 알려진 통념과 다른 부분들이 있어 정리합니다.

### 5.1 정보 구조가 인용률에 미치는 영향

- CMU(카네기멜런) 등의 GEO 연구에 따르면, **문장 첫머리에 정의(이 페이지가 무엇에 대한 것인지: 개체 → 카테고리 → 차별점 순서)를 명확히 제시한 페이지가 LLM 검색 파이프라인에서 훨씬 높은 노출 점수**를 받음
- 답변 블록은 "핵심 문장 → 근거 → 세부 설명" 순서로 일반 문단 형태로 작성해야 AI가 깨끗하게 추출하기 좋음
- **키워드 밀도보다 정보 밀도(문단당 고유명사·통계 수)가 더 강한 인용 신호** — 자체 조사 데이터, 1차 통계, 전문가 코멘트처럼 "남이 안 가진 정보"를 publish하는 것이 가장 강력함
- FAQ/HowTo 구조화 마크업은 인용 예측 상위 5개 요인에 포함되며, 리스티클/비교표 형식 페이지가 답변 생성에서 우대받음 → 기가팡의 FAQ/비교표 패턴은 방향이 맞았음

### 5.2 콘텐츠 최신성(Freshness)의 영향력

- 최신성 신호가 없는 콘텐츠는 **약 14일 후부터 인용 우선순위가 떨어진다**는 조사 결과가 있음. 이상적으로는 7~14일 주기로 업데이트되는 콘텐츠가 GEO에서 유리
- 가격·혜택·정책처럼 자주 바뀌는 정보는 "최종 업데이트" 표기와 `dateModified` 갱신을 정기 프로세스로 못 박아야 함 (담당자 지정 필요)

### 5.3 llms.txt에 대한 현실적 평가 (v1 수정 사항)

- 2026년 기준 조사에 따르면 **llms.txt 도입률은 전체 도메인의 약 10% 수준**이고, 그중 상당수(약 40%)는 플러그인이 자동 생성한 형식적 파일임
- 2025년 7월 구글의 Gary Illyes는 "구글은 llms.txt를 지원하지 않으며 지원할 계획도 없다"고 명확히 밝혔고, John Mueller는 이를 예전의 keywords 메타태그(효과 없이 사장된 태그)에 비유함
- 2026년 1분기 기준 OpenAI, 구글, Anthropic, Meta, Mistral 등 **주요 AI 기업 중 어느 곳도 llms.txt를 프로덕션에서 읽는다고 공식 밝힌 곳이 없음**
- 실제 AI 봇 트래픽 중 llms.txt를 직접 요청하는 비율은 **0.1% 수준**
- 다만 Cursor, Claude Code, Copilot, Windsurf 같은 **IDE/코딩 에이전트, MCP 서버**는 llms.txt를 실제로 활용하는 경우가 많음 → "일반 소비자 대상 AI 검색 노출"보다는 **"개발자 도구/API 연동 문서 제공" 목적일 때 가치가 있음**
- **결론**: 일반 커머스/서비스 사이트라면 llms.txt는 최우선 과제가 아님. 개발자 대상 제품(SDK, API, 오픈소스)이라면 여전히 넣을 가치가 있음. 이 문서 v1에서 최우선으로 뒀던 것은 과대평가였으므로 하향 조정함

### 5.4 GEO 성과 측정 지표

업계에서 실제로 추적하는 GEO 전용 KPI 3가지:

1. **Mention Rate** — 관련 질문에 대한 AI 답변 중 브랜드가 언급되는 비율
2. **Citation Rate** — 그중 실제 클릭 가능한 URL로 인용되는 비율
3. **Position** — 답변 내에서 언급되는 위치(맨 앞/중간/각주)

가트너는 2026년까지 상업 웹사이트로의 오가닉 검색 트래픽이 25% 감소할 것으로 전망했지만, 마케팅팀 중 AI 답변 노출 전략을 문서화한 곳은 12% 미만이라는 조사도 있음 — 지금 이 문서처럼 프로세스화해두는 것 자체가 상대적 우위임.

### 5.5 AI 크롤러는 "학습용"과 "검색용"이 분리되어 있음 (2026-07 재확인, 중요 정정)

기존에는 "GPTBot", "ClaudeBot"만 알려져 있었지만, 2026년 기준 주요 AI 기업은 크롤러를 용도별로 분리 운영합니다. **같은 회사 봇이라도 역할이 다르므로 robots.txt에서 뭉뚱그려 처리하면 안 됩니다.**

| 회사 | 학습용 크롤러 (모델 훈련 데이터 수집) | 검색/실시간 참조용 크롤러 (사용자 질의에 실시간 응답) |
|---|---|---|
| OpenAI | `GPTBot` | `OAI-SearchBot` (검색 인덱싱), `ChatGPT-User` (사용자가 실시간으로 요청한 페이지 fetch — robots.txt가 적용 안 될 수 있다고 OpenAI가 명시) |
| Anthropic | `ClaudeBot` | `Claude-SearchBot` (검색 인덱싱), `Claude-User` (사용자 요청 시 실시간 fetch) |
| Perplexity | `PerplexityBot` | (검색 응답에 바로 사용되는 성격이 강함) |

**실무 판단 기준**
- 자사 콘텐츠가 AI 모델 학습 데이터로 쓰이는 것을 원치 않으면 `GPTBot`, `ClaudeBot` 등 **학습용 봇만 차단**
- 반대로 ChatGPT/Claude/Perplexity 검색 결과에 노출되고 싶다면(GEO 목적) `OAI-SearchBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot` 등 **검색용 봇은 반드시 허용**
- 2026년 1분기 Cloudflare 데이터 기준, `ClaudeBot`(학습용)을 차단하는 사이트 비율은 늘고 있는 반면, `PerplexityBot`은 오히려 Allow 규칙에 더 자주 등장 — 업계가 "학습 차단 + 검색 허용"으로 정책을 세분화하는 추세
- 학습용 봇을 막는다고 검색 노출(GEO)에 불이익이 생기는 것은 아니므로, 두 정책은 독립적으로 결정 가능

### 5.6 Google 2026년 core update — "Information Gain"이 핵심 신호로 부상

- 2026년 3월(3.27~4.8) core update 이후 구글은 **Information Gain**(이미 상위 노출된 콘텐츠 대비 이 페이지가 얼마나 새로운 정보를 더하는가)을 핵심 순위 신호로 명시적으로 평가하기 시작함
- 기존 상위 콘텐츠를 재구성만 한 "생성형 블로그" 스타일 콘텐츠는 순위 하락, 반대로 **고유한 통계·자체 조사·구체적 비교 데이터**를 제공하는 페이지는 상승 — 5.1의 "정보 밀도" 원칙과 정확히 같은 방향
- YMYL(건강·금융·법률 등 삶에 큰 영향을 주는 정보) 영역은 E-E-A-T 기준이 더 엄격해짐 — 통신 결합상품·금융상품 비교 서비스도 이 범주에 가까워 저자/검수자 정보, 사업자 정보 노출이 점점 더 중요해짐
- 2026년 7월 9일부로 구글은 "이제부터 대규모 core update를 개별 발표하지 않고 상시 업데이트로 전환한다"고 공식 확인함 — 즉 "다음 업데이트 대비"가 아니라 **상시적으로 정보 밀도·E-E-A-T·최신성을 관리하는 체제**가 필요해짐
- AI Overviews는 2026년 7월 기준 추적 쿼리의 약 48%에서 트리거됨(전년 대비 58% 증가) — 일반 블루링크보다 AI 요약에 노출되는 것이 트래픽 확보에 더 중요해지는 추세

### 5.7 구글이 AI Mode/Overviews 노출을 사이트가 직접 선택하게 함 (2026-06~)

- 2026년 6월부터 구글은 사이트가 **일반 검색 색인은 유지하면서 AI Mode·AI Overviews에는 노출되지 않도록 opt-out**할 수 있는 옵션을 제공하기 시작함
- 이는 트래픽 관점에서 트레이드오프가 있는 결정임: AI 요약에 노출되면 클릭 없이 정보만 소비되는 "제로클릭" 우려가 있지만, 노출 자체를 막으면 AI Overviews가 차지하는 48% 쿼리에서 아예 보이지 않게 됨
- 커머스/리드 생성이 목적인 사이트(기가팡류)는 opt-out보다는 **AI 요약에 노출되되, 요약 안에 "지금 확인하기"류의 명확한 다음 행동을 유도하는 문구·CTA 링크를 포함**하는 편이 유리 — 브랜드 인지도/리드 창출이 목적이면 노출을 막을 이유가 적음
- 콘텐츠/브랜드가 AI 요약에 그대로 복제되는 것을 극도로 꺼리는 미디어/저작권 민감 사이트라면 opt-out 검토 가치가 있음

---

## 6. AI(Claude)가 실제로 정보를 신뢰·인용하는 기준

일반적인 SEO/GEO 가이드에 없는, 제가 웹 검색·브라우징 도구로 정보를 가져와 답변에 반영할 때 실제로 가중치를 두는 기준을 정리했습니다. 공식 알고리즘이 아니라 제 처리 방식에 대한 직접적인 설명입니다.

### 6.1 신뢰도를 높이는 요소

- **자기완결적 사실 문장** — "월 33,000원입니다"처럼 문맥 없이도 그 자체로 인용 가능한 문장은 그대로 답변에 옮기기 쉬움. 문단 속에 흩어진 정보는 추출이 어려워 누락되기 쉬움
- **복수 출처의 사실 일치** — 같은 사실(가격, 정책, 수치)이 여러 독립적인 페이지/사이트에서 일관되게 확인되면 신뢰도를 높게 잡음. 반대로 자사 사이트 내에서도 페이지마다 숫자가 다르면 어느 것도 확신 있게 인용하지 않음
- **절제된 서술, 근거 있는 주장** — "업계 1위", "최고의 서비스" 같은 검증 불가능한 자기 주장은 그대로 인용하지 않고, "~라고 자체 홍보하고 있다"는 식으로 거리를 두고 서술함. 반면 "2026년 기준 가입자 X만 명"처럼 확인 가능한 수치는 그대로 인용 확률이 높음
- **한계·단점까지 포함한 균형 잡힌 정보** — 장점만 나열한 페이지보다, 조건/예외/단점까지 명시한 페이지를 더 신뢰도 높은 1차 정보로 취급함 (마케팅 페이지보다 약관·FAQ·비교표를 우선 참조하는 이유)
- **표/리스트 형태의 비교 데이터** — 자유 서술형 문단보다 표로 정리된 가격·스펙 비교는 정확하게 추출해서 답변에 반영하기 쉬움
- **크롤링 가능한 HTML** — JS 렌더링 이후에만 보이는 콘텐츠, 로그인/페이월 뒤에 있는 콘텐츠는 애초에 도구가 가져오지 못해 인용 후보에서 제외됨
- **날짜가 명시된 콘텐츠** — "2026년 7월 기준" 같은 명시적 날짜가 있으면 최신 정보인지 판단하기 쉬워 우선 채택함. 날짜 없는 콘텐츠는 오래된 정보일 위험을 감안해 보수적으로 다룸

### 6.2 신뢰도를 낮추는 요소

- 광고성 문구 밀도가 높고 구체적 수치가 없는 페이지
- 같은 내용을 반복하는 SEO 어뷰징성 페이지(키워드만 바꿔 복제된 페이지들)
- 리뷰/평점이 극단적으로 좋기만 하고 부정적 후기가 전혀 없는 경우(조작 의심)
- 출처 불명의 통계("전문가들에 따르면", 출처 링크 없음)
- 접근 시점에 오류(404, 리다이렉트 루프, 무한 로딩)가 나는 페이지

### 6.3 실무 시사점

이 기준을 정리하면, 기가팡류 서비스 페이지가 AI 답변엔진에 인용되려면:

1. 가격·조건은 "약", "협의 후 결정" 대신 구체적 숫자와 조건을 명시
2. 장점 나열형 문단보다 FAQ/비교표 형태로 정보를 노출 (이미 방향은 맞음, 커버리지 확대 필요)
3. 여러 페이지에 흩어진 동일 정보(위약금, 설치비 등)를 하나의 기준 페이지로 통일하고 나머지는 링크만
4. "업계 최고", "1위" 같은 검증 불가 표현보다 "2026년 X월 기준 자체 조사 결과" 같은 검증 가능한 근거 제시
5. robots.txt로 AI 크롤러를 막지 않아야 함 (당연하지만, 마케팅팀이 봇 트래픽을 이상 트래픽으로 오인해 차단하는 경우가 실제로 있음)

---

## 7. 최종 우선순위 (임팩트 대비 작업량 기준, 2026-07 데이터 반영 재정렬)

1. **정보 구조화·정보 밀도(Information Gain) 개선** — FAQ/비교표 확대, 자기완결적 사실 문장 작성, 장점 나열형 문구를 수치·자체 조사 기반 서술로 교체 (2026년 3월 core update 이후 가장 강한 순위·인용 신호)
2. **AI 검색용 봇 허용 확인 (OAI-SearchBot, Claude-SearchBot, Claude-User, PerplexityBot)** — GEO의 전제 조건. 학습용 봇(GPTBot, ClaudeBot) 차단 여부와는 별개로 결정 (5.5 참고)
3. **콘텐츠 최신성 관리 프로세스** — 가격/혜택 페이지 7~14일 주기 갱신 + `dateModified` 자동/수동 갱신 담당자 지정. 구글이 상시 업데이트 체제로 전환(2026-07-09)했으므로 "이벤트성 대응"이 아니라 "상시 프로세스"로 운영
4. **HowTo/Organization 스키마 + 저자·검수자 정보** — 신청 절차, 회사 엔티티 명확화. YMYL 인접 서비스는 E-E-A-T 요구가 높아지는 추세라 저자/검수자 노출 우선순위 상승
5. **canonical/사이트맵 커버리지 100%화, 도메인 정규화** — 기술적 기반이 안 되면 위 항목들이 크롤링/인덱싱 단계에서 무효화됨
6. **서드파티 스크립트 지연 로딩** — Core Web Vitals 개선
7. **여러 페이지/플랫폼 간 사실 정보 일관성 점검**
8. **AI Overviews 노출 시 CTA 문구 최적화** — opt-out보다는 노출을 유지하되 요약 안에서 다음 행동을 유도 (5.7 참고)
9. **(선택, 후순위) llms.txt** — 일반 커머스 사이트라면 최우선 순위에서 제외. 개발자 대상 제품(SDK/API/오픈소스)이라면 여전히 넣을 가치 있음

---

## 8. 참고 자료 (2026-07 재검색 기준)

**GEO 일반**
- [Mastering Generative Engine Optimization in 2026: Full Guide — Search Engine Land](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142)
- [Generative Engine Optimization Best Practices 2026 — GenOptima](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices-2026/)
- [Generative Engine Optimization (GEO): The 2026 Guide to AI Search Visibility — LLMrefs](https://llmrefs.com/generative-engine-optimization)

**llms.txt 실효성**
- [LLMs.txt in 2026: The Full Guide — Limy.ai](https://limy.ai/blog/llms.txt-in-2026-the-full-guide)
- [The State of llms.txt in 2026 — aeo.press](https://ai.aeo.press/the-state-of-llms-txt-in-2026)
- [Should Websites Implement llms.txt in 2026? — LinkBuildingHQ](https://www.linkbuildinghq.com/blog/should-websites-implement-llms-txt-in-2026/)

**AI 크롤러(학습용/검색용 분리)**
- [Robots.txt & AI Crawlers in 2026: The Full Guide — DataImpulse](https://dataimpulse.com/blog/robots-txt-ai-crawlers/)
- [AI Crawler Access Control: The 2026 Decision Matrix — DigitalApplied](https://www.digitalapplied.com/blog/ai-crawler-access-control-2026-robots-llms-txt-decision-matrix)
- [Robots.txt for AI Agents 2026: The Agent-Allow Strategy — OpenHermit](https://www.openhermit.com/blog/robots-txt-ai-agents-2026-strategy)

**Google Search 2026 업데이트 (core update, AI Mode)**
- [Google Search's I/O 2026 updates: AI agents and more — Google Blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Google update set to move users from AI Overviews to AI Mode — Press Gazette](https://pressgazette.co.uk/platforms/what-google-ai-mode-push-means-for-publishers/)
- [Google will let websites opt-out of AI Mode & Overviews in Search — 9to5Google](https://9to5google.com/2026/06/02/google-ai-mode-overviews-opt-out/)
- [Google's Algorithm Updates Are Now Always Running — AuthorityTech](https://authoritytech.io/curated/google-july-2026-core-update-ai-overviews-execution-checklist)
- [Google March 2026 Core Update: What You Need to Know — OrangeMonke](https://orangemonke.com/blogs/google-march-2026-core-update/)
- [Google AI Overviews Tracker 2026: Changes, Statistics & Click Impact — Keywords Everywhere](https://keywordseverywhere.com/news/ai-overviews/)

> 위 리서치는 외부 SEO/GEO 업계 조사 결과를 인용한 것으로, 실제 자사 트래픽/전환에 미치는 영향은 4.2의 12번(직접 질의 확인)과 GA4 세그먼트 분석으로 자체 검증하는 것을 권장합니다. 구글이 core update를 상시 롤아웃 체제로 전환했으므로(5.6 참고), 이 문서도 분기 1회 정도 재검색해 최신화하는 것을 권장합니다.

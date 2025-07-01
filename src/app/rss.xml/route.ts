import { NextResponse } from 'next/server'

// RSS 피드에 포함할 페이지들 정보
const pages = [
  {
    slug: '',
    title: '5프로돌려주는스카이차 - 스카이차 쓰고 5% 돌려받고 매월 100만원 행운까지!',
    description: '스카이차 쓸 때마다 이용료의 5%가 현금으로 바로 돌아옵니다. 매월 100만원 추첨 이벤트까지! 24시간 콜센터, 투명한 가격의 믿을 수 있는 스카이차 서비스입니다.',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'pricing',
    title: '스카이차 가격표 - 투명하고 합리적인 요금제',
    description: '1톤부터 19톤까지 투명한 스카이차 가격표. 반나절, 하루, 월단위 이용료와 5% 페이백 혜택까지! 지금 확인하세요.',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'million',
    title: '매월 100만원 추첨 이벤트 - 스카이차 이용고객 대상',
    description: '스카이차 이용 고객 대상 매월 100만원 현금 추첨! 오더 1건만으로 자동 응모. 500분의 1 확률로 행운의 주인공이 되세요!',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'reward',
    title: '친구초대 보너스 - 친구 5명 초대하고 현금 5만원',
    description: '친구 5명 초대하고 현금 5만원 받으세요! 무한 반복 가능한 친구초대 보너스. 지금 바로 시작하세요!',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'marketplace',
    title: '일거리 장터 - 스카이차 사장님들의 일감 정보 공유',
    description: '스카이차 사장님들의 일감 정보 공유 플랫폼. 일거리 찾기, 일감 나누기, 업체간 상생 협력의 장입니다.',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'marketing',
    title: '업종별 마케팅 노하우 - 스카이차 사업 성공 비법',
    description: '스카이차 사업 성공을 위한 업종별 마케팅 전략과 노하우. 네이버, 구글, 카카오 활용법까지 모든 비법을 공개합니다.',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'whyhere',
    title: '여긴뭐야? 5% 페이백 서비스 소개',
    description: '5프로돌려주는스카이차가 무엇인지 궁금하세요? 5% 페이백 시스템부터 특별 혜택까지 모든 것을 알려드립니다.',
    lastModified: new Date('2024-12-19'),
  },
  {
    slug: 'support',
    title: '고객센터 FAQ - 자주 묻는 질문과 답변',
    description: '스카이차 이용 관련 자주 묻는 질문과 답변. 궁금한 점이 있으시면 1877-9001로 언제든 연락주세요.',
    lastModified: new Date('2024-12-19'),
  },
]

const siteUrl = 'https://xn--5-w30fr74e.com'

function generateRSSItem(page: typeof pages[0]) {
  const url = page.slug === '' ? siteUrl : `${siteUrl}/${page.slug}`
  
  return `
    <item>
      <title><![CDATA[${page.title}]]></title>
      <description><![CDATA[${page.description}]]></description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${page.lastModified.toUTCString()}</pubDate>
    </item>`
}

function generateRSS() {
  const rssItems = pages.map(generateRSSItem).join('')
  
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[5프로돌려주는스카이차]]></title>
    <description><![CDATA[스카이차 쓰고 5% 돌려받고 매월 100만원 행운까지! 24시간 콜센터, 투명한 가격의 믿을 수 있는 스카이차 서비스입니다.]]></description>
    <link>${siteUrl}</link>
    <language>ko-KR</language>
    <managingEditor>man7866@naver.com (5프로돌려주는스카이차)</managingEditor>
    <webMaster>man7866@naver.com (5프로돌려주는스카이차)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/images/5프로.png</url>
      <title>5프로돌려주는스카이차</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${rssItems}
  </channel>
</rss>`
}

export async function GET() {
  const rss = generateRSS()
  
  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
} 
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '업종별 마케팅 노하우 - 스카이차 사업 성장 비법',
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  keywords: ['업종별마케팅', '스카이차', '마케팅노하우', '네이버지도', '구글맵', '카카오맵', '지도마케팅', '사업성장', '홍보'],
  
  openGraph: {
    title: '업종별 마케팅 노하우 - 스카이차 사업 성장 비법',
    description: '일감을 부르는 지도 마케팅, 사장님도 할 수 있습니다!',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/marketing',
    images: [
      {
        url: '/images/업종별마케팅노하우섹션.png',
        width: 1200,
        height: 630,
        alt: '업종별 마케팅 노하우',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '업종별 마케팅 노하우 - 스카이차 사업 성장',
    description: '일감을 부르는 지도 마케팅 비법',
    images: ['/images/업종별마케팅노하우섹션.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/marketing',
  },
}

// Swiper 관련 import를 클라이언트 사이드에서만 로드
const PlatformSwiper = dynamic(() => import('@/components/PlatformSwiper'), {
  ssr: false
})

// 플랫폼 데이터
const platforms = [
  {
    name: '네이버 지도',
    icon: '/images/location-marker-green.svg',
    color: '#2DB400',
    description: '국내 최대 검색 포털, 지역 기반 마케팅의 핵심',
    features: [
      '경쟁사를 이기는 \'상위 노출\' 키워드 선정 비법',
      '고객의 전화를 유도하는 \'스마트콜\' 활용 전략',
      '별점 5개를 부르는 \'리뷰 관리\' 노하우 (악성 리뷰 대처법 포함)',
      '딱 한 장으로 시선을 끄는 \'대표 사진\' 등록 노하우'
    ]
  },
  {
    name: '구글 맵',
    icon: '/images/location-marker-blue.svg',
    color: '#4285F4',
    description: '글로벌 검색 엔진, SEO 최적화로 장기적 효과',
    features: [
      '구글 검색 첫 페이지에 내 비즈니스 노출시키기',
      '\'로컬 가이드\'가 추천하는 업체가 되는 방법',
      '외국인 고객까지 사로잡는 \'비즈니스 프로필\' 완성 가이드',
      '광고 없이도 문의가 오는 \'콘텐츠\' 게시 전략'
    ]
  },
  {
    name: '카카오맵',
    icon: '/images/location-marker-yellow.svg',
    color: '#FEE500',
    description: '모바일 기반 플랫폼, 즉각적인 고객 소통',
    features: [
      '\'내 주변\' 검색 시 가장 먼저 눈에 띄는 방법',
      '카카오톡으로 바로 공유되는 \'가게 정보\' 만들기',
      '방문 고객을 단골로 만드는 \'즐겨찾기\' 유도 전략',
      '내비게이션 목적지 설정 1순위가 되는 비결'
    ]
  }
];

// FAQ 데이터
const faqs = [
  {
    question: '마케팅 효과는 얼마나 걸리나요?',
    answer: '플랫폼별로 다르지만, 보통 3-6개월 정도의 꾸준한 관리가 필요합니다.'
  },
  {
    question: '비용은 얼마나 들까요?',
    answer: '무료로 시작 가능하며, 성과에 따라 단계적으로 투자를 늘릴 수 있습니다.'
  },
  {
    question: '직접 관리가 어려우면 어떡하나요?',
    answer: '스카이차에서 제공하는 전문 마케팅 대행 서비스를 이용하실 수 있습니다.'
  }
];

// 애니메이션 variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const heroTextVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function Marketing() {
  const scrollToBottom = () => {
    const footerCTA = document.getElementById('footer-cta');
    if (footerCTA) {
      footerCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ color: '#374151' }}>
      <Navigation currentPage="marketing" />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/업종별마케팅노하우섹션.png"
            alt="현장 작업자가 스마트폰을 사용하는 모습"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-jalnan leading-tight text-white">
              일감을 부르는 지도 마케팅,<br />
              <span className="text-3xl md:text-4xl text-white">
                사장님도 할 수 있습니다!
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              더 이상 비싼 광고비 태우지 마세요. 지도 앱 하나로 신규 고객이 찾아옵니다.
            </p>
                         <div className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-lg cursor-pointer inline-block">
               📍 지도 마케팅 시작하기
             </div>
          </div>
        </div>
      </section>

      {/* 플랫폼별 마케팅 노하우 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-jalnan text-gray-800">
            플랫폼별 마케팅 완전정복
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} 아이콘`}
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-jalnan text-gray-800">
            자주 묻는 질문
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="footer-cta" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-jalnan">
            지금 바로 마케팅을 시작하세요!
          </h2>
          <p className="text-xl mb-8">
            5프로돌려주는스카이차와 함께 더 많은 고객을 만나보세요
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="tel:1877-9001"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all inline-block"
            >
              📞 1877-9001 상담받기
            </a>
            <a 
              href="sms:01024972433"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all inline-block"
            >
              💬 문자상담 신청
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDownload />
    </main>
  )
} 
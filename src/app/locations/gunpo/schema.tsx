// file: src/app/locations/gunpo/schema.tsx
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "군포에서 정말 30분 내에 올 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 군포 산본에 상주하고 있어 대부분 지역은 30분 내 도착 가능합니다. 교통상황에 따라 다소 차이가 있을 수 있어요."
      }
    },
    {
      "@type": "Question",
      "name": "5% 캐시백은 언제 받을 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "작업 완료 후 3일 이내에 고객님 계좌로 직접 입금해드립니다. 별도 신청 절차는 필요 없어요."
      }
    },
    {
      "@type": "Question",
      "name": "비가 와도 작업이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "안전을 위해 강우 시에는 작업을 중단합니다. 날씨가 개선되는 대로 최우선으로 진행해드려요."
      }
    },
    {
      "@type": "Question",
      "name": "카드 결제나 세금계산서 발행 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 카드 결제와 현금 결제 모두 가능하며 세금계산서도 즉시 발행해드립니다."
      }
    },
    {
      "@type": "Question",
      "name": "작업 시간은 얼마나 걸리나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "작업 내용에 따라 다르지만 일반적인 간판 교체는 1-2시간, 외벽 작업은 반나절 정도 소요됩니다."
      }
    }
  ]
};

export const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "군포 스카이차 임대 서비스",
  "description": "군포 지역 전문 스카이차 임대, 작업완료 후 5% 캐시백, 매달 100만원 추첨 자동응모",
  "seller": {
    "@type": "LocalBusiness",
    "name": "5프로스카이차 군포지점",
    "telephone": "1877-9001",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "군포시",
      "addressRegion": "경기도",
      "addressCountry": "KR"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "군포시",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "군포시",
      "addressRegion": "경기도",
      "addressCountry": "KR"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "스카이차 차종별 가격",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "1톤 스카이차",
        "description": "최대 28m, 좁은 골목길 진입 가능",
        "price": "250000",
        "priceCurrency": "KRW",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "250000",
          "priceCurrency": "KRW",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "name": "3.5톤 스카이차",
        "description": "최대 45m, 가장 대중적인 모델",
        "price": "300000",
        "priceCurrency": "KRW",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "300000",
          "priceCurrency": "KRW",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "name": "5톤 스카이차",
        "description": "최대 55m, 대형 현장 특화",
        "price": "350000",
        "priceCurrency": "KRW",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "350000",
          "priceCurrency": "KRW",
          "valueAddedTaxIncluded": true
        }
      }
    ]
  },
  "availability": "InStock",
  "validFrom": "2024-01-01",
  "validThrough": "2024-12-31",
  "eligibleRegion": {
    "@type": "Place",
    "name": "군포시 전지역"
  }
}; 
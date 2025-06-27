import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'
import FloatingDownload from '@/components/FloatingDownload'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedButton from '@/components/AnimatedButton'

export const metadata: Metadata = {
  title: '자주 하는 질문 - 5프로돌려주는스카이차',
  description: '스카이차 렌탈 5% 캐시백, 100만원 추첨 이벤트 관련 자주 묻는 질문과 답변. 궁금한 점이 있으시면 언제든지 문의해주세요.',
  keywords: ['자주묻는질문', 'FAQ', '고객센터', '스카이차문의', '캐시백문의'],
  
  openGraph: {
    title: '자주 하는 질문 - 5프로돌려주는스카이차 고객센터',
    description: '스카이차 이용 관련 궁금한 점들을 빠르게 해결하세요',
    type: 'website',
    url: 'https://xn--5-w30fr74e.com/support',
    images: [
      {
        url: '/images/스로고1.png',
        width: 1200,
        height: 630,
        alt: '5프로돌려주는스카이차 고객센터',
      }
    ],
    locale: 'ko_KR',
    siteName: '5프로돌려주는스카이차',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '자주 하는 질문 - 5프로 고객센터',
    description: '스카이차 이용 관련 궁금한 점 해결',
    images: ['/images/스로고1.png'],
  },
  
  alternates: {
    canonical: 'https://xn--5-w30fr74e.com/support',
  },
};

// FAQ 데이터
const faqs = [
  {
    question: '5% 페이백은 어떻게 받을 수 있나요?',
    answer: '스카이차 작업이 완료되면 자동으로 이용 금액의 5%가 현금으로 지급됩니다. 별도의 신청이나 복잡한 절차 없이 작업 완료 즉시 받으실 수 있습니다.'
  },
  {
    question: '100만원 추첨 이벤트는 어떻게 참여하나요?',
    answer: '앱 가입 후 월 1건 이상 스카이차를 이용하시면 자동으로 다음 달 추첨 대상이 됩니다. 매월 1일 유튜브 생방송을 통해 공정한 추첨이 진행됩니다.'
  },
  {
    question: '친구 초대 혜택은 어떻게 받나요?',
    answer: '친구 5명이 각각 1건씩 작업을 완료하면 5만원이 지급됩니다. 초대한 친구도 5% 캐시백 혜택을 받을 수 있어 모두에게 좋은 Win-Win 이벤트입니다.'
  },
  {
    question: '캐시백은 언제 지급되나요?',
    answer: '작업 완료 후 영업일 기준 3-5일 이내에 등록하신 계좌로 입금됩니다. 토요일, 일요일, 공휴일에는 입금이 지연될 수 있습니다.'
  },
  {
    question: '모든 지역에서 이용 가능한가요?',
    answer: '전국 어디서나 이용 가능합니다. 24시간 언제든지 예약하실 수 있으며, 긴급한 경우 즉시 배차도 가능합니다.'
  },
  {
    question: '요금은 어떻게 책정되나요?',
    answer: '장비 구분, 작업 시간, 작업 난이도에 따라 요금이 책정됩니다. 투명한 요금제로 사전에 정확한 견적을 받으실 수 있습니다.'
  }
];

export default function Support() {
  return (
    <main>
      <Navigation currentPage="support" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' 
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-jalnan">
              자주 하는 질문
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              궁금한 점이 있으시면 언제든지 문의해주세요
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 max-w-md mx-auto mb-8">
              <div className="text-4xl mb-4">📞</div>
              <p className="text-yellow-300 font-bold text-lg mb-2">24시간 고객센터</p>
              <p className="text-white text-3xl font-bold">1877-9001</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-jalnan text-gray-800">
              자주 묻는 질문들
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedCard 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="text-blue-500 mr-3">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  <span className="text-green-500 mr-3">A.</span>
                  {faq.answer}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-jalnan text-gray-800">
              더 궁금한 점이 있으시다면?
            </h2>
            <p className="text-xl text-gray-600">
              언제든지 편하게 연락주세요!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-blue-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">전화 상담</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">1877-9001</p>
              <p className="text-gray-600">24시간 상담 가능</p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-green-50 p-8 rounded-2xl text-center"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">문자 상담</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">010-2497-2433</p>
              <p className="text-gray-600">빠른 답변 보장</p>
            </AnimatedCard>

            <AnimatedCard 
              className="bg-orange-50 p-8 rounded-2xl text-center"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">이메일 상담</h3>
              <p className="text-lg font-bold text-orange-600 mb-2">man7866@naver.com</p>
              <p className="text-gray-600">상세한 답변 제공</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-jalnan">
              지금 바로 시작하세요!
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              더 이상 망설이지 마시고<br />
              5% 캐시백과 100만원 추첨의 기회를 잡으세요!
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <AnimatedButton 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              📱 앱 다운로드
            </AnimatedButton>
            
            <AnimatedButton 
              className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              📞 전화 상담받기
            </AnimatedButton>
                </div>
              </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
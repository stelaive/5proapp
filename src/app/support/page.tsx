import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '자주 하는 질문 - 5프로돌려주는스카이차 고객센터',
  description: '스카이차비용,스카이차가격,스카이차요금,3.5톤스카이차,1톤스카이차,5톤스카이차,강남스카이차.송파스카이차.서초스카이차.강북스카이차.성북스카이차,인천스카이차.수원.화성,용인.평택.안성.성남,경기도광주,부천,부평,일산,파주,고양.',
  keywords: ['고객센터', 'FAQ', '자주하는질문', '스카이차', '5%페이백', '100만원추첨', '친구초대', '1877-9001', '고객지원'],
  
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

export default function SupportPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation currentPage="support" />
      
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan">
              자주 하는 질문
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              궁금한 점이 있으시면 언제든지 문의해주세요
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-bold text-yellow-300 mb-2">📞 24시간 고객센터</p>
              <p className="text-blue-100">
                <span className="text-yellow-300 font-bold text-xl">1877-9001</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-jalnan">
              자주 묻는 질문들
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Q. 5% 페이백은 어떻게 받을 수 있나요?</h3>
                <p className="text-gray-600">
                  A. 스카이차 작업이 완료되면 자동으로 이용 금액의 5%가 현금으로 지급됩니다. 별도의 신청이나 복잡한 절차 없이 작업 완료 즉시 받으실 수 있습니다.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Q. 100만원 추첨 이벤트는 어떻게 참여하나요?</h3>
                <p className="text-gray-600">
                  A. 앱 가입 후 월 1건 이상 스카이차를 이용하시면 자동으로 다음 달 추첨 대상이 됩니다. 매월 1일 유튜브 생방송을 통해 공정한 추첨이 진행됩니다.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Q. 친구 초대 이벤트는 몇 명까지 가능한가요?</h3>
                <p className="text-gray-600">
                  A. 제한이 없습니다! 친구 5명이 작업을 완료할 때마다 5만원씩 지급되며, 무한 반복으로 계속 보상을 받을 수 있습니다.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Q. 서비스 이용 가능 지역은 어디인가요?</h3>
                <p className="text-gray-600">
                  A. 현재 경기, 서울, 인천, 천안, 아산, 대전, 청주 지역에서 서비스를 제공하고 있으며, 점차 전국으로 확대해 나갈 예정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
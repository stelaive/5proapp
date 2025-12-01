'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'
import { handleAppDownload } from '@/app/million/_utils/download'

export default function GangnamPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* 1. 히어로 섹션: 전화번호 강조 */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/anyang/ChatGPT Image 2025년 7월 20일 오후 05_44_09.png"
            alt="강남구 스카이차 배경"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm mb-4">
              서울 강남구 전지역 배차 가능 🚀
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-jalnan">
              강남구 스카이차
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              신사, 논현, 압구정, 청담, 삼성, 역삼, 대치, 도곡<br className="md:hidden" />
              어디든 빠르게 달려갑니다!
            </p>
            
            {/* 메인 전화번호 강조 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 inline-block border border-white/20">
              <p className="text-gray-300 mb-2">365일 24시간 신속 배차 문의</p>
              <a href="tel:18779001" className="block">
                <span className="text-5xl md:text-7xl font-black text-yellow-400 hover:text-yellow-300 transition-colors">
                  1877 - 9001
                </span>
              </a>
              <p className="text-sm text-gray-400 mt-2">👆 번호를 누르면 바로 연결됩니다</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={handleAppDownload}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
              >
                앱 설치하고 5% 할인받기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 핵심 혜택 소개 (어플 소개) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-jalnan">
              왜 <span className="text-orange-500">'5프로 스카이차'</span>를 써야 할까요?
            </h2>
            <p className="text-lg text-gray-600">
              전화 한 통이면 해결! 앱으로 부르면 혜택이 쏟아집니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* 혜택 1: 5% 페이백 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-colors"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 mb-6">
                <Image
                  src="/images/포인트 확인하기.png"
                  alt="5% 페이백"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💰 무조건 <span className="text-red-500">5% 현금 페이백</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                강남구 어디서든 작업 완료하시면,<br />
                이용 금액의 5%를 사장님 계좌로 즉시 돌려드립니다.<br />
                비싼 강남 물가, 스카이차라도 아껴쓰세요!
              </p>
            </motion.div>

            {/* 혜택 2: 100만원 이벤트 */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-colors"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 mb-6">
                <Image
                  src="/images/100만원추첨기.png"
                  alt="100만원 추첨"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎰 매달 <span className="text-red-500">100만원</span> 행운 추첨
              </h3>
              <p className="text-gray-600 leading-relaxed">
                작업 1건만 해도 자동으로 응모 완료!<br />
                매달 말일 유튜브 라이브로 공정하게 추첨하여<br />
                현금 100만원을 드립니다. (현재 5회 진행 중)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 가격표 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-jalnan">
              투명한 스카이차 요금표
            </h2>
            <p className="text-gray-600">
              강남구 정찰제 요금으로 바가지 요금 걱정 없이 이용하세요.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="py-4 px-6 font-bold text-lg">장비 톤수</th>
                    <th className="py-4 px-6 font-bold text-lg">반나절 (4시간)</th>
                    <th className="py-4 px-6 font-bold text-lg">하루 (8시간)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">1톤 / 1.2톤</td>
                    <td className="py-4 px-6 text-gray-600">300,000원</td>
                    <td className="py-4 px-6 text-gray-600">450,000원</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">2톤 / 2.5톤</td>
                    <td className="py-4 px-6 text-gray-600">350,000원</td>
                    <td className="py-4 px-6 text-gray-600">500,000원</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">3.5톤</td>
                    <td className="py-4 px-6 text-gray-600">400,000원</td>
                    <td className="py-4 px-6 text-gray-600">600,000원</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-800">5톤</td>
                    <td className="py-4 px-6 text-gray-600">500,000원</td>
                    <td className="py-4 px-6 text-gray-600">800,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-right text-sm text-gray-500">
              * 부가세 별도 금액입니다. / 작업 여건에 따라 추가 비용이 발생할 수 있습니다.
            </div>
          </div>

          <div className="text-center mt-10">
            <a 
              href="tel:18779001"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
            >
              📞 전화로 간편 견적 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 4. 마무리 및 앱 다운로드 유도 */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-jalnan">
            강남구 스카이차, 이제 손해 보지 말고 부르세요!
          </h2>
          <p className="text-xl opacity-90 mb-10">
            앱 설치가 귀찮으신가요?<br />
            전화주시면 친절하게 안내해 드리고, 혜택 받는 법도 알려드립니다!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:18779001"
              className="w-full md:w-auto bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              📞 1877-9001 전화걸기
            </a>
            <button 
              onClick={handleAppDownload}
              className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              📱 앱 다운로드 (자동이동)
            </button>
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export default function FriendInvitePage() {
  const [isAnimating, setIsAnimating] = useState(false)

  // 보너스 애니메이션 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const downloadApp = () => {
    // 실제 앱 다운로드 로직 또는 앱스토어 링크
    window.open('https://play.google.com/store', '_blank')
  }

  const shareMessage = () => {
    const message = `💥 친구 부르면 현금 5만원! 💥

사장님! 5%돌려드리는스카이차 써보세요!
친구 5명이 각각 1건씩만 작업하면 
사장님 통장에 현금 5만원 입금! 💰

지금 바로 앱 다운로드하고 시작하세요! 👇
https://play.google.com/store`
    
    if (navigator.share) {
      navigator.share({
        title: '💥 친구 부르면 현금 5만원!',
        text: message
      })
    } else {
      navigator.clipboard.writeText(message)
      alert('초대 메시지가 복사되었습니다!')
    }
  }

  return (
    <main>
      <Navigation currentPage="reward" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* 여기에 8초 GIF 들어갈 예정 */}
          <div className="w-full h-full bg-gradient-to-br from-red-600/80 via-orange-500/80 to-yellow-400/80 flex items-center justify-center">
            <div className="text-9xl animate-bounce">💰</div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`mb-12 transform transition-all duration-500 ${isAnimating ? 'scale-110' : ''}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white font-jalnan">
                💥 친구 부르면<br />
                현금 5만원! 💥
              </h1>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 inline-block">
                <p className="text-2xl md:text-3xl font-bold text-yellow-200 leading-relaxed">
                  사장님을 위한 역대급 보너스 찬스!
                </p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-12 text-white leading-relaxed max-w-4xl mx-auto">
              사장님! 주변에 일 잘~하는 동료분들 많으시죠?<br />
              이제 그 좋은 인맥으로 <span className="text-yellow-300 font-bold">대박 보너스</span>까지 챙겨가세요!
            </p>

            {/* 앱 다운로드 유도 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold mb-6">🚀 지금 바로 시작하세요!</h3>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold mb-3">앱 설치 후</div>
                <div className="text-xl mb-6 leading-relaxed">친구 초대 메뉴에서 <span className="text-yellow-300 font-bold">내 초대 코드</span> 확인!</div>
                <p className="text-lg leading-relaxed">
                  친구 5명 초대 완료 시 <span className="text-yellow-300 font-bold">현금 5만원 보장!</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={downloadApp}
                className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📱 앱 다운로드하고 시작하기
              </button>
              <button 
                onClick={shareMessage}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📤 친구에게 공유하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 1 - 참여 방법 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-red-600 font-jalnan">
              🎉 이보다 더 쉬울 순 없다!
            </h2>
            <p className="text-2xl md:text-3xl text-center mb-20 text-gray-700 font-bold leading-relaxed">
              참여 방법: 앱 설치하고 바로 시작!
            </p>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-10 rounded-2xl border-2 border-red-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-600 leading-tight">앱 설치하고 회원가입!</h3>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        5%돌려드리는스카이차 앱을 설치하고 회원가입을 완료하세요. 앱 내 '친구 초대' 메뉴에서 내 전용 초대 코드를 확인할 수 있어요!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-10 rounded-2xl border-2 border-orange-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600 leading-tight">초대 코드로 친구들 초대!</h3>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        아직 저희 서비스를 이용 안 해본 동료 사장님들께 내 초대 코드를 공유하세요. 친구가 앱 설치 후 일감 1건만 완료하면 OK!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-10 rounded-2xl border-2 border-yellow-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-600 leading-tight">친구 5명 달성 시 현금 5만원!</h3>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        친구 5명이 각각 1건씩 작업을 완료하면 사장님 통장으로 현금 5만원이 바로 입금됩니다!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-3xl p-10 shadow-2xl">
                  <div className="text-8xl mb-8">📱</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 leading-tight">앱에서 확인하세요!</h3>
                  <div className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed space-y-2">
                    <div>✓ 내 전용 초대 코드</div>
                    <div>✓ 실시간 초대 현황</div>
                    <div>✓ 보너스 지급 내역</div>
                  </div>
                  <button 
                    onClick={downloadApp}
                    className="bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
                  >
                    📱 지금 앱 설치하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 2 - 무한 반복 지급 */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-600 font-jalnan">
              😮 놀라운 건 🔥무한 반복 지급🔥
            </h2>
            <p className="text-2xl md:text-3xl mb-16 text-gray-700 leading-relaxed">
              사장님의 인맥이 곧 현금이 되는 마법!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="text-6xl mb-6">👥</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">친구 5명</h3>
                <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">₩50,000</p>
                <p className="text-lg text-gray-600">첫 번째 보너스!</p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="text-6xl mb-6">🔄</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600">30명 달성시</h3>
                <p className="text-2xl font-bold text-blue-500 mb-4">리셋!</p>
                <p className="text-lg text-gray-600">다시 처음부터 시작</p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-600">무한 반복</h3>
                <p className="text-4xl md:text-5xl font-bold text-red-500 mb-4">∞</p>
                <p className="text-lg text-gray-600">제한 없는 수익!</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-10 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">💡 예시로 보는 수익 계산</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-2xl md:text-3xl font-bold mb-2">5명</div>
                  <div className="text-lg">5만원</div>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-2xl md:text-3xl font-bold mb-2">10명</div>
                  <div className="text-lg">10만원</div>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-2xl md:text-3xl font-bold mb-2">15명</div>
                  <div className="text-lg">15만원</div>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-2xl md:text-3xl font-bold mb-2">30명</div>
                  <div className="text-lg">30만원 + 리셋</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 3 - 앱에서 확인 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 font-jalnan">
              📱 앱에서 모든 기능을 확인하세요!
            </h2>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 shadow-lg">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">앱 설치 후 이용 가능한 기능들</h3>
                <div className="bg-white rounded-xl p-8 border-2 border-red-200">
                  <div className="grid md:grid-cols-2 gap-10 text-left">
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl mb-6 text-red-600">✅ 친구 초대 기능</h4>
                      <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                        <li>• 내 전용 초대 코드 발급</li>
                        <li>• 실시간 초대 현황 확인</li>
                        <li>• 카카오톡, SNS 간편 공유</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl mb-6 text-orange-600">💰 보너스 관리</h4>
                      <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                        <li>• 친구별 참여 상태 확인</li>
                        <li>• 보너스 지급 내역 조회</li>
                        <li>• 누적 수익 실시간 확인</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">💬</div>
                  <h4 className="font-bold mb-4 text-xl">카카오톡 공유</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">앱에서 바로 카카오톡으로 초대</p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">📊</div>
                  <h4 className="font-bold mb-4 text-xl">실시간 현황</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">초대 진행상황 실시간 확인</p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                  <div className="text-5xl mb-6">💳</div>
                  <h4 className="font-bold mb-4 text-xl">즉시 지급</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">조건 달성 시 자동 입금</p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={downloadApp}
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  📱 지금 바로 앱 설치하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 4 - 성공 포인트 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 font-jalnan">
              ✨ 성공 포인트
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-600">😄 동료들에게는</h3>
                <ul className="space-y-6 text-lg md:text-xl">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">믿음직한 5%돌려드리는스카이차 소개</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">매달 100만원 추첨 기회</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 text-2xl">✅</span>
                    <span className="text-gray-700 leading-relaxed">"고맙다"는 말까지</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-600">💰 사장님께는</h3>
                <ul className="space-y-6 text-lg md:text-xl">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">짭짤한 현금 보너스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">무한 반복 지급</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 text-2xl">💵</span>
                    <span className="text-gray-700 leading-relaxed">인맥을 현금으로 변환</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 긴급 행동 유도 섹션 */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-jalnan leading-tight">
            ⚡ 이런 대박 기회, 두 번 다시 없습니다!
          </h2>
          <p className="text-2xl md:text-3xl mb-6 leading-relaxed">
            고민하는 순간 다른 사장님이 먼저 보너스 받아 갑니다!
          </p>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            지금 바로 앱을 설치하고<br />
            친구들에게 행운의 초대장을 날려주세요!
          </p>
          <button 
            onClick={downloadApp}
            className="bg-white text-red-600 px-16 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            📱 지금 당장 앱 설치하기
          </button>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
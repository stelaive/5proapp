import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingDownload from '@/components/FloatingDownload'

export default function Home() {
  return (
    <main>
      <Navigation currentPage="home" />
      
      {/* 히어로 섹션 */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/스동8.gif"
            alt="배경 이미지"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white font-jalnan">
              스카이차 쓰고 5%<br />
              돌려받고,<br />
              매월 100만원 행운<br />
              까지! 11
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white">
              작업 완료 즉시 자동 페이백!<br />
              회원이라면 누구나 매월 100만원 추첨 대상이 됩니다.
            </p>
            <div className="download-container">
              <button className="download-btn bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                앱 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 섹션 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 main-heading text-sky-orange-600">
              일 다 하면<br />
              묻고 따불...아니,<br />
              묻지도 않고 5% 현금!
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              땀 흘려 일하신 소중한 하루,<br />
              저희가 그 노고에 작은 힘이라도 보태드릴게요.<br />
              스카이차 작업 끝나면, 이용료의 5%는<br />
              묻지도 따지지도 않고 사장님 손에 바로 현금으로!
            </p>
            <Image
              src="/images/포인트 확인하기.png"
              alt="포인트 확인하기"
              width={800}
              height={400}
              className="section-image mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 메인 섹션 2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 main-heading text-sky-orange-600">
              매달 터지는<br />
              100만원! 이번엔<br />
              사장님이 주인공?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              스카이/크레인 오더 1건이면 자동 응모!<br />
              매달 터지는 100만원, 주인공은 바로 당신?
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              참여자가 늘수록 당첨자도 UP! 행운의 확률은 그대로!<br />
              <span className="text-sky-orange-500 font-bold">(500분의 1 약속!🤙)</span>
            </p>
            <p className="text-xl text-sky-orange-600 font-bold mb-8">
              공정한 기회, 짜릿한 행운! 매달 1일, 기대해도 좋아요!
            </p>
            <div className="mb-8">
              <Link 
                href="/million"
                className="inline-block bg-gradient-to-r from-sky-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🎰 100만원 받으러 가기
              </Link>
            </div>
            <Image
              src="/images/100만원추첨기.png"
              alt="100만원 추첨"
              width={800}
              height={400}
              className="section-image mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 메인 섹션 3 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 main-heading text-sky-orange-600">
              좋은 동료에게<br />
              추천만 했을 뿐인데<br />
              통장에 5만원 착!
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              아는 동료분께 저희 스카이차 살짝 추천하고,<br />
              그 친구 5명이 딱! 한 번씩만 이용하면?<br />
              사장님 통장엔 현금 5만원이 바로 꽂혀요!<br />
              <span className="text-sky-orange-500 font-bold">(무한반복 가능!💰)</span>
            </p>
            <p className="text-xl text-sky-orange-600 font-bold mb-8">
              좋은 건 나누고, 현금은 쌓이고!<br />
              이게 바로 인싸 사장님의 길!
            </p>
            <div className="mb-8">
              <Link 
                href="/reward"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                👥 친구 초대하러 가기
              </Link>
            </div>
            <Image
              src="/images/친구초대이벤트.png"
              alt="친구 초대 이벤트"
              width={800}
              height={400}
              className="section-image mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 다운로드 영상 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 main-heading text-sky-orange-600">
              ✨ 여러분, 주목! 더 쉬운 방법을 가져왔어요! ✨
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              혹시 아직도 다운로드가 살짝~ 어렵게 느껴지시나요? 🤔<br />
              걱정 마세요! 그런 여러분을 위해 저희가 특별히 준비한 선물이 있답니다! 🎁
            </p>
            <p className="text-xl text-sky-orange-500 font-bold mb-8">
              🎬 짜잔! 유튜브에 다운로드 가이드 영상을 올렸어요!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              이제 글 대신 영상으로! 🤩 화면을 보면서 천천히 따라 하면 누구나 쉽게 성공!<br />
              마치 게임 튜토리얼처럼 재미있게 만들었으니, 지금 바로 확인해보세요! 😉
            </p>
            <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto mb-8">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/5dUt8JcFXF8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <p className="text-lg mb-4">어? 영상을 봐도 모르겠다구요? 갸우뚱❓</p>
              <p className="text-xl font-bold text-sky-orange-500 mb-4">
                괜찮아요! 그럴 땐 주저 말고 1877-9001로 바로 전화 주세요! 📞
              </p>
              <p className="text-lg text-gray-600">
                친절한 저희가 처음부터 끝까지! 시원~하게 도와드릴게요. 🤗<br />
                여러분의 즐거운 앱 생활, 저희가 책임지고 응원합니다! 파이팅! 💪
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  )
} 
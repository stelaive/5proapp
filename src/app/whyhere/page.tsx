import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WhyHere() {
  return (
    <main>
      <Navigation currentPage="whyhere" />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#2ea02e] to-[#28a028] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/스카이차수정3.png"
            alt="배경 이미지"
            fill
            className="object-cover opacity-45 sm:opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2ea02e]/70 to-[#28a028]/70"></div>
        </div>
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative">
          <div className="max-w-4xl mx-auto text-left relative z-10 px-4">
            <h3 className="text-lg md:text-xl mb-6 text-white/90 font-jalnan">
              여긴뭐야?
            </h3>
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-black mb-6 leading-[1.3] text-white tracking-tight">
              "아니, 스카이차 쓰는데<br />
              5%를 바로 돌려준다고?<br />
              매달 100만원 이벤트까지?<br />
              도대체 어떻게 이게<br />
              가능한 겁니까?"
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-8 text-white/90 font-jalnan">
              이런 질문을 듣고 있습니다.
            </p>
          </div>
          <div className="absolute bottom-[15%] sm:bottom-12 left-0 right-0 sm:left-4 sm:right-auto z-20 text-center sm:text-left">
            <p className="text-sm text-white/80 inline-flex items-center justify-center font-jalnan">
              비결이 궁금하다면?
              <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </p>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 스토리 섹션 1: 도입부 */}
            <div className="text-center mb-16">
              <p className="text-xl sm:text-2xl text-sky-orange-600 font-bold mb-8">
                저는 이렇게 답합니다.
              </p>
              <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed">
                "고소작업 현장에서 스카이차를 찾는 작업반장님, 사장님들의 마음을<br className="hidden sm:block" />
                너무 잘 압니다. 저도 한때는 현장에서 직접 장비를 부르고,<br className="hidden sm:block" />
                또 운영했던 사람이기 때문입니다."
              </p>
              <div className="mb-12">
                <Image
                  src="/images/sky4.png"
                  alt="스카이차 이미지"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg shadow-xl max-w-2xl w-full"
                />
              </div>
            </div>

            {/* 스토리 섹션 2: 경험 이야기 */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
                잠시 제 옛날이야기를 해볼까 합니다.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                저도 건설 현장에서 팀을 이끌기도 했고, 때로는 직접 스카이차를 불러 작업을 지휘하기도 했습니다. 
                직접 스카이차 사업에 뛰어들어 장비를 운용하며 현장의 어려움을 온몸으로 느꼈던 시절도 있었습니다. 
                그때마다 늘 가슴 한구석에 아쉬움과 답답함이 있었습니다.
              </p>

              {/* 현장의 어려움 */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                <h3 className="text-xl font-bold mb-6 text-gray-700">현장에서 느꼈던 불편함</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sky-orange-500 mr-2">•</span>
                    "오늘 하루 장비 쓰는데, 왜 이렇게 비싸게 느껴질까?"
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-orange-500 mr-2">•</span>
                    "분명 몇 시간 안 썼는데, 하루 요금을 다 내야 한다니..."
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-orange-500 mr-2">•</span>
                    "급하게 장비가 필요한데, 예약은 꽉 찼다고 하고, 겨우 구한 장비는 오래돼서 왠지 불안하고..."
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-orange-500 mr-2">•</span>
                    "왜 작업 시간보다 장비 기다리는 시간이 더 길어야 하고, 약속된 시간에 오지 않아 애태우는 일이 반복될까?"
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                스카이차 한 대가 현장에 미치는 영향은 생각보다 큽니다. 작업의 효율성은 물론이고, 
                현장 작업자분들의 안전과도 직결되니까요. 그런데 정작 현장의 목소리는 제대로 반영되지 
                않는 것 같아 안타까웠습니다.
              </p>

              {/* 깨달음 */}
              <div className="bg-gradient-to-r from-sky-orange-50 to-orange-50 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-6 text-sky-orange-600">어느 순간 깨달았습니다.</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  '내가 현장에서 느꼈던 이 불편함, 다른 사장님들은 겪지 않게 할 수는 없을까?'<br />
                  '내가 만약 스카이차를 다시 부르는 입장이라면, 어떤 회사를 가장 믿고 선택할까?'
                </p>
                <p className="text-xl font-bold text-sky-orange-600">
                  이런 고민 끝에, "현장에서 땀 흘리는 분들이 정말 만족할 수 있는 스카이차 회사를 만들자!"<br />
                  이렇게 다짐했습니다.
                </p>
              </div>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                그저 그런 스카이차 회사 하나 더 만드는 것이 목표가 아니었습니다.
                현장의 고충을 누구보다 잘 알기에, '어떻게 하면 사장님들께 실질적인 도움을 드릴 수 있을까?' 를 
                최우선으로 생각했습니다.
              </p>

              {/* 우리의 약속 */}
              <div className="bg-white border-2 border-sky-orange-500 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold text-sky-orange-600 mb-6">
                  "사장님, 이 혜택 그냥 드리는 게 아닙니다!"
                </h3>
                <div className="mb-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    ✔️ 5% 즉시 페이백<br />
                    ✔️ 매달 100만원 이벤트
                  </p>
                  <p className="text-lg text-gray-700">
                    이거, 단순 미끼 아니에요.
                  </p>
                </div>
                
                <h4 className="text-xl font-bold text-sky-orange-600 mb-4">
                  "어떻게 가능하냐고요?"
                </h4>
                
                <div className="mb-6">
                  <p className="text-lg text-gray-700 mb-4">
                    저희는 딱 두 가지에 집중했습니다.
                  </p>
                  <p className="text-lg text-gray-700 mb-2">
                    1. 불필요한 중간 마진 제거!<br />
                    2. 배차 시스템 효율 극대화!
                  </p>
                </div>

                <h4 className="text-xl font-bold text-sky-orange-600 mb-4">
                  "그래서 결론은요?"
                </h4>
                
                <p className="text-lg text-gray-700">
                  이렇게 아낀 비용,<br />
                  사장님들께 전부 돌려드립니다.<br />
                  이게 바로 저희의 진짜 철학입니다.
                </p>
              </div>
            </div>

            {/* 혜택 소개 섹션 */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-8">
                그렇다면, 저희 <span className="text-sky-orange-500">5프로돌려드리는스카이차</span>를 이용하신다는 것은<br className="hidden sm:block" />
                사장님들께 어떤 의미일까요?
              </h2>

              {/* 혜택 1: 5% 페이백 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
                  쓸 때마다 즉시! 5% 페이백
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  현장에서 지출되는 경비, 무시할 수 없다는 것을 누구보다 잘 압니다.
                  저희 <span className="font-bold">5프로돌려드리는스카이차</span>의 스카이차를 이용하시면,
                  작업 비용의 5%가 그 자리에서, 즉시 사장님께 페이백으로 지급됩니다.<br />
                  <br />마치 당연한 것처럼, 매번 말입니다.
                  복잡한 절차 없이, 쓰시는 만큼 바로바로 돌려받으시니,
                  쓰실수록 경비 절감 효과를 체감하실 겁니다.
                </p>
              </div>

              {/* 혜택 2: 100만원 이벤트 */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-orange-600 mb-4">
                  매달 1일, 100만원 행운의 주인공은? 바로 사장님!
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  한 달 동안 열심히 땀 흘리신 사장님들을 위해 저희가 준비한 특별한 선물입니다.
                  저희 <span className="font-bold">5프로돌려드리는스카이차</span>를 단 한 번이라도 이용하신
                  모든 사장님은 자동으로 매달 1일 진행되는 '100만원 행운 추첨 이벤트'의 대상이 됩니다.<br />
                  <br />별도의 응모 절차 없이, 그저 저희를 이용해주시는 것만으로도
                  매월 기분 좋은 행운을 기대하실 수 있습니다.
                </p>
              </div>

              {/* 혜택 3: 친구 초대 */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
                  좋은 건 함께! 친구 초대하고 또 받는 혜택
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  이 놀라운 시스템, 혼자만 알고 계시기엔 너무 아깝지 않으신가요?
                  동료 작업반장님, 혹은 스카이차가 필요한 다른 사장님께
                  저희 <span className="font-bold">5프로돌려드리는스카이차</span>를 소개해 주세요.<br />
                  <br />저희의 '친구초대 시스템'을 통해 추천해주신 사장님께도,
                  추천을 받고 새로 이용하시는 사장님께도
                  모두 만족하실 만한 특별한 추가 혜택을 함께 나누어 드립니다.
                </p>
              </div>
            </div>

            {/* 마무리 섹션 */}
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                이 모든 시스템은 거창하거나 복잡한 약속이 아닙니다.<br />
                과거 제가 현장에서 '아, 이런 서비스가 있었으면 얼마나 좋을까...'<br className="hidden sm:block" />
                하고 간절히 바랐던 것들을 하나씩 현실로 만든,<br className="hidden sm:block" />
                오직 현장 사장님들을 위한 진심의 결과물입니다.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                <p className="text-2xl font-bold text-sky-orange-600 mb-4">
                  5프로돌려드리는스카이차에 오신 것을 환영합니다.
                </p>
                <p className="text-xl text-gray-600">
                  오늘도 안전한 작업을 진심으로 응원합니다!
                </p>
              </div>

              <div className="mt-12">
                <button className="inline-block bg-sky-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-orange-600 transition-all duration-300">
                  지금 바로 시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
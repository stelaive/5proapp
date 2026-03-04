import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedButton from "@/components/AnimatedButton";

// ✏️ 수정하세요: 친구 초대 이벤트 페이지 SEO 설정
export const metadata: Metadata = {
  // ✏️ 수정하세요: 친구초대 페이지 제목 (구글 검색 결과에 나타남)
  title: "친구 초대 5명하고 5만원 받기 - 5프로돌려주는스카이차",
  // ✏️ 수정하세요: 친구초대 페이지 설명 (구글 검색 결과 제목 아래 나타남)
  description:
    "좋은 건 나누고 현금은 챙기자! 친구 5명 초대시 5만원 현금 지급. 쉽고 간단한 친구 초대 이벤트에 참여하세요.",
  // ✏️ 수정하세요: 친구초대 관련 검색 키워드들
  keywords: [
    "친구초대",
    "5만원현금",
    "추천이벤트",
    "현금지급",
    "스카이차친구초대",
  ],

  openGraph: {
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 제목
    title: "친구 5명 초대하고 5만원 받기!",
    // ✏️ 수정하세요: 페이스북/카카오톡에서 공유될 때 보이는 설명
    description: "좋은 건 나누고 현금은 쌓이고! 친구초대 이벤트 참여하세요",
    type: "website",
    // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸기
    url: "https://xn--5-w30fr74e.com/reward",
    images: [
      {
        // ✏️ 수정하세요: 친구초대 이벤트 대표 이미지 경로
        url: "/images/친구초대이벤트.png",
        width: 1200,
        height: 630,
        // ✏️ 수정하세요: 이미지 설명
        alt: "친구 초대 이벤트",
      },
    ],
    locale: "ko_KR",
    siteName: "5프로돌려주는스카이차",
  },

  twitter: {
    card: "summary_large_image",
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 제목
    title: "친구 5명 초대하고 5만원 받기!",
    // ✏️ 수정하세요: 트위터에서 공유될 때 보이는 설명
    description: "좋은 건 나누고 현금은 쌓이고! 친구초대 이벤트",
    // ✏️ 수정하세요: 트위터용 이미지
    images: ["/images/친구초대이벤트.png"],
  },

  alternates: {
    // ✏️ 중요! 수정하세요: 실제 도메인 주소로 바꾸기
    canonical: "https://xn--5-w30fr74e.com/reward",
  },

  other: {
    // 이벤트 관련 메타 정보
    "referral-bonus": "50000 KRW",
    "referral-count": "5",
    "event-type": "referral",
  },
};

export default function Reward() {
  return (
    <main>
      <Navigation currentPage="reward" />

      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/친구초대히어로섹션.gif"
            alt="친구초대 히어로 배경"
            fill
            className="object-cover"
            priority
          />
          {/* 가독성을 위한 강화된 오버레이 */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* 메인 헤드라인 - 크기 축소 */}
            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-8 leading-tight text-white font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              💥 친구 5명초대 = 현금 5만원! 💥
            </motion.h1>

            {/* 서브카피 1 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-lg md:text-2xl font-bold text-yellow-200 leading-relaxed"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                사장님을 위한 역대급 보너스 찬스!
              </motion.p>
            </motion.div>

            {/* 설명 문구 */}
            <motion.p
              className="text-base md:text-xl mb-8 text-white leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              사장님! 주변에 일 잘~하는 동료분들 많으시죠?
              <br />
              이제 그 좋은 인맥으로{" "}
              <span className="text-yellow-300 font-bold">대박 보너스</span>까지
              챙겨가세요!
            </motion.p>

            {/* 앱 다운로드 유도 박스 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-lg md:text-xl font-bold mb-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀 지금 바로 시작하세요!
              </motion.h3>
              <div className="text-center space-y-3">
                <motion.div
                  className="text-base md:text-lg font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  앱 설치 후
                </motion.div>
                <motion.div
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  친구 초대 메뉴에서{" "}
                  <span className="text-yellow-300 font-bold">
                    내 초대 코드
                  </span>{" "}
                  확인!
                </motion.div>
                <motion.p
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  친구 5명 초대 완료 시{" "}
                  <span className="text-yellow-300 font-bold">
                    현금 5만원 보장!
                  </span>
                </motion.p>
              </div>
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={downloadApp}
                className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 앱 다운로드하고 시작하기
              </motion.button>
              <motion.button
                onClick={shareMessage}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📤 친구에게 공유하기
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-jalnan">
              친구 <span className="text-yellow-300">5명</span> 초대하고
              <br />
              <span className="text-yellow-300">5만원</span> 받기!
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              좋은 건 나누고 현금은 챙기자! 무한 반복 가능한 이벤트
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 max-w-md mx-auto mb-8">
              <div className="text-4xl mb-4">🎁</div>
              <p className="text-yellow-300 font-bold text-lg mb-2">
                특별 혜택!
              </p>
              <p className="text-white">
                친구 5명의 작업 완료하면{" "}
                <span className="font-bold text-yellow-300">
                  5만원 현금 지급
                </span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4단계 프로세스 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-jalnan text-gray-800">
              이렇게 간단하게 5만원을!
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "앱 설치",
                desc: "5프로스카이차 앱 다운로드",
                icon: "📱",
              },
              {
                step: "2",
                title: "초대 코드 공유",
                desc: "친구들에게 내 초대 코드 전달",
                icon: "💌",
              },
              {
                step: "3",
                title: "친구들 작업 완료",
                desc: "친구 5명이 각각 1건씩 작업 완료",
                icon: "✅",
              },
              {
                step: "4",
                title: "5만원 지급",
                desc: "조건 달성 즉시 현금 지급",
                icon: "💰",
              },
            ].map((item, index) => (
              <AnimatedCard
                key={index}
                className="text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-jalnan text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* 혜택 상세 섹션 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-jalnan text-gray-800">
              더 많은 혜택이 기다려요! 💎
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6 text-center">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                무한 반복
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구 초대는 무한 반복 가능!
                <br />
                <span className="font-bold text-green-500">
                  매번 5만원씩 지급
                </span>
              </p>
            </AnimatedCard>

            <AnimatedCard
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-6 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                즉시 지급
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                조건 달성 즉시 현금 지급
                <br />
                <span className="font-bold text-green-500">
                  최대 24시간 이내
                </span>
              </p>
            </AnimatedCard>

            <AnimatedCard
              className="bg-white p-8 rounded-2xl shadow-lg"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-6 text-center">🎁</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                추가 혜택
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                친구도 5% 캐시백 혜택
                <br />
                <span className="font-bold text-green-500">Win-Win 이벤트</span>
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-jalnan">
              지금 시작하세요!
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              친구들과 함께 혜택을 나누고
              <br />
              현금도 챙기는 똑똑한 선택을 하세요!
            </p>
          </AnimatedSection>

          <AnimatedButton
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            📱 앱 다운로드하고 친구 초대하기
          </AnimatedButton>
        </div>
      </section>

      <FloatingDownload />
      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from '@/components/ui/icon'

function downloadApp() {
  window.open("https://play.google.com/store", "_blank");
}

function shareMessage() {
  if (navigator.share) {
    navigator.share({
      title: "친구 5명 초대하고 5만원 받기!",
      text: "스카이차 앱에서 친구 5명 초대하면 현금 5만원을 드려요!",
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  }
}

export default function RewardHero() {
  return (
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
        <motion.div
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 max-w-md mx-auto mb-8">
            <div className="text-4xl mb-4"><Icon name="Gift" size={40} /></div>
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
        </motion.div>
      </div>
    </section>
  );
}

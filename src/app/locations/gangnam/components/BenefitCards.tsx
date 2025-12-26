import Image from 'next/image'

export default function BenefitCards() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
            왜 <span className="text-orange-500">'5프로 스카이차'</span>를 써야 할까요?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            전화 한 통이면 해결! 앱으로 부르면 혜택이 쏟아집니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* 혜택 1: 5% 페이백 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-orange-200 transition-colors">
            <div className="relative h-40 md:h-48 mb-6">
              <Image
                src="/images/포인트 확인하기.png"
                alt="5% 페이백"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              💰 무조건 <span className="text-red-500">5% 현금 페이백</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              작업 완료하시면,<br />
              이용 금액의 5%를 사장님 계좌로 즉시 돌려드립니다.<br />
              <span className="text-xs text-gray-500">(취소/부분취소/추가비 제외 가능)</span>
            </p>
          </div>

          {/* 혜택 2: 100만원 이벤트 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-orange-200 transition-colors">
            <div className="relative h-40 md:h-48 mb-6">
              <Image
                src="/images/100만원추첨기.png"
                alt="100만원 추첨"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              🎰 매달 <span className="text-red-500">100만원</span> 행운 추첨
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              작업 1건만 해도 자동으로 응모 완료!<br />
              매달 말일 19시 유튜브 라이브로 공정하게 추첨하여<br />
              현금 100만원을 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

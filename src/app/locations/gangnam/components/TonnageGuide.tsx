import type { RegionData } from '@/lib/regionData'

interface TonnageGuideProps {
  data: RegionData;
}

export default function TonnageGuide({ data }: TonnageGuideProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jalnan">
              간편 톤수 가이드
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              실제 톤수는 전화 상담 후 기사 판단으로 결정됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.tonnageGuide.map((guide, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-[#F97316]/30 transition-colors"
              >
                <div className="text-center mb-4">
                  <span className="inline-block text-white px-4 py-2 rounded-full font-bold text-lg md:text-xl" style={{ backgroundColor: '#F97316' }}>
                    {guide.ton}
                  </span>
                </div>
                <ul className="space-y-2">
                  {guide.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-600 text-sm md:text-base flex items-center">
                      <span className="text-[#F97316] mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// file: src/components/common/Pricing.tsx
import React from 'react';

interface PriceItem {
  ton: string;
  halfDay: string;
  fullDay: string;
}

interface PricingProps {
  prices: PriceItem[];
}

const Pricing: React.FC<PricingProps> = ({ prices }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">투명한 가격표</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-2xl shadow-lg">
            <caption className="sr-only">스카이차 톤수별 가격 정보</caption>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th scope="col" className="p-4 text-left font-bold">톤수</th>
                <th scope="col" className="p-4 text-left font-bold">반나절(4시간)</th>
                <th scope="col" className="p-4 text-left font-bold">하루(8시간)</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-semibold" data-label="톤수">{item.ton}</td>
                  <td className="p-4" data-label="반나절(4시간)">{item.halfDay}</td>
                  <td className="p-4" data-label="하루(8시간)">{item.fullDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 
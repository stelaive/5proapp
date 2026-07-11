'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Info, Phone } from 'lucide-react';

const PriceCalculator = () => {
  const [floor, setFloor] = useState(1);
  const [hours, setHours] = useState(1);
  const [estimatedPrice, setPrice] = useState(0);
  const [recommendedTon, setRecommendedTon] = useState('1톤 / 3.5톤');

  useEffect(() => {
    let basePrice = 0;
    let ton = '1톤 / 3.5톤';

    if (hours === 1) {
      basePrice = floor > 10 ? 350000 : 250000;
      ton = floor > 10 ? '5톤' : '1톤 / 3.5톤';
    } else if (hours <= 4) {
      basePrice = floor > 10 ? 450000 : 350000;
      ton = floor > 10 ? '5톤' : '1톤 / 3.5톤';
    } else {
      basePrice = floor > 10 ? 650000 : 550000;
      ton = floor > 10 ? '5톤' : '1톤 / 3.5톤';
    }

    setPrice(basePrice);
    setRecommendedTon(ton);
  }, [floor, hours]);

  return (
    <section className="py-20 bg-[#F97316]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-[#F97316]/20">
          <div className="flex flex-col md:flex-row">
            {/* 왼쪽: 컨트롤 섹션 */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="flex items-center gap-2 mb-8 text-[#F97316]">
                <Calculator className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-gray-900 font-jalnan">실시간 예상 요금 계산기</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                    작업 높이 (층수)
                    <span className="text-[#F97316]">{floor}층</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={floor}
                    onChange={(e) => setFloor(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>1층</span>
                    <span>10층</span>
                    <span>20층</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                    예상 작업 시간
                    <span className="text-[#F97316]">
                      {hours === 1 ? '1시간' : hours === 4 ? '반나절 (4시간)' : '하루 (8시간)'}
                    </span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 4, 8].map((h) => (
                      <button
                        key={h}
                        onClick={() => setHours(h)}
                        className={`py-3 px-2 rounded-xl text-sm font-bold transition-all ${
                          hours === h 
                            ? 'bg-[#F97316] text-white shadow-lg shadow-[#F97316]/30' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {h === 1 ? '1시간' : h === 4 ? '반나절' : '하루'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl flex gap-3">
                <Info className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-xs text-blue-700 leading-relaxed">
                  위 요금은 기본 요금이며, 현장 진입 여건, 야간/주말 작업 등에 따라 실제 견적은 달라질 수 있습니다.
                </p>
              </div>
            </div>

            {/* 오른쪽: 결과 섹션 */}
            <div className="w-full md:w-[350px] bg-gray-900 p-8 md:p-12 text-white flex flex-col justify-center">
              <p className="text-gray-400 text-sm mb-2 text-center uppercase tracking-widest">Estimated Price</p>
              <div className="text-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={estimatedPrice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-5xl font-black text-[#F97316] font-jalnan"
                  >
                    {estimatedPrice.toLocaleString()}원
                  </motion.div>
                </AnimatePresence>
                <div className="mt-2 text-gray-400 text-sm">
                  추천 장비: <span className="text-white font-bold">{recommendedTon}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs text-[#F97316] mb-1 font-bold">5% 페이백 적용 시</p>
                  <p className="text-xl font-bold">실질가 {(estimatedPrice * 0.95).toLocaleString()}원</p>
                </div>

                <a 
                  href="tel:18773924"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#F97316]/20"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  지금 바로 예약하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;

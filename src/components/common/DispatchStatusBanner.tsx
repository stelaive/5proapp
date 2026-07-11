'use client';

import React from 'react';

const DispatchStatusBanner = () => {
  const currentCity = "수원/강남/안양/군포";
  
  return (
    <div className="bg-[#F97316] overflow-hidden py-2 border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center mx-4 text-white text-sm font-bold">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3"></span>
            실시간 현황: {currentCity} 지역 <span className="underline ml-1 decoration-2">현재 12대 작업 중</span>, 3대 즉시 배차 가능 🚀
            <span className="mx-8 opacity-30 text-white">|</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DispatchStatusBanner;

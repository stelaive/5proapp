'use client';

import { handleAppDownload } from '../_utils/download';

export default function CalloutBanner() {
  return (
    <section className="py-16 text-white" style={{ background: 'linear-gradient(to right, #42d9de, #3bc4c9)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">지금 바로 제5회 100만원 주인공 도전!</h2>
        <div className="flex flex-col items-center text-xl mb-8">
          <p>매일 미루면 기회도 미뤄져요.</p>
          <p>오늘 시작하세요!</p>
        </div>
        <button 
          onClick={handleAppDownload}
          className="bg-white text-red-500 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          앱 다운로드
        </button>
      </div>
    </section>
  );
}


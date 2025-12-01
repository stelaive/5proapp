'use client';

import { useState } from 'react';
import { FAQ_DATA } from '../_constants/data';

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-orange-600">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ 아이템 컴포넌트
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}


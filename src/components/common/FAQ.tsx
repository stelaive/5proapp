// file: src/components/common/FAQ.tsx
import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FaqItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-4 rounded-2xl shadow-sm group">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
// file: src/components/gunpo/FAQ.tsx
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
            <details key={index} className="bg-white p-4 rounded-2xl shadow-sm">
              <summary className="font-bold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
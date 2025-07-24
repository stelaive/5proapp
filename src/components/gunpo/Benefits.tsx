// file: src/components/gunpo/Benefits.tsx
import React from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="flex justify-center mb-4 text-primary">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits; 
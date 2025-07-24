// file: src/components/common/CTA.tsx
import React from 'react';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  phone: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, phone }) => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-8">{description}</p>
        <a
          href={`tel:${phone}`}
          aria-label={buttonText}
          className="bg-primary hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-transform transform hover:scale-105"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTA; 
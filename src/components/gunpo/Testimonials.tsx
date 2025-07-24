// file: src/components/gunpo/Testimonials.tsx
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">고객 후기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <figure key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <blockquote className="text-gray-700 italic border-l-4 border-primary pl-4 mb-4">
                "{item.quote}"
              </blockquote>
              <figcaption className="text-right">
                <p className="font-bold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
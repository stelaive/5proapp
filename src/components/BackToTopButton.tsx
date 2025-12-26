'use client';

import { ArrowUpIcon } from './icons/ArrowUpIcon';

interface BackToTopButtonProps {
  isVisible: boolean;
}

export default function BackToTopButton({ isVisible }: BackToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="최상단으로 이동"
      className={`fixed bottom-28 md:bottom-24 -right-80 z-50 p-3 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{ backgroundColor: '#42d9de' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#3bc4c9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#42d9de';
      }}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
} 
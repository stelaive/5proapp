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
      className={`fixed bottom-28 md:bottom-24 -right-80 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
} 
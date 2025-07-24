// file: src/hooks/useScrollVisibility.ts
import { useState, useEffect } from 'react';

/**
 * 스크롤 위치에 따라 요소의 가시성을 결정하는 훅
 * @param threshold 가시성을 변경할 스크롤 Y 위치
 */
const useScrollVisibility = (threshold: number = 300): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
};

export default useScrollVisibility; 
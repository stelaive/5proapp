import { useState, useRef, useCallback } from 'react';

export const useSlider = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.children[0]?.clientWidth || 320;
    const gap = 24; // Tailwind space-x-6 -> 1.5rem -> 24px
    const totalSlideWidth = slideWidth + gap;
    
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: index * totalSlideWidth,
      behavior: 'smooth'
    });
  }, []);

  const nextSlide = useCallback(() => {
    const next = Math.min(currentSlide + 1, totalSlides - 1);
    goToSlide(next);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = Math.max(currentSlide - 1, 0);
    goToSlide(prev);
  }, [currentSlide, goToSlide]);

  const snapToSlide = useCallback(() => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.children[0]?.clientWidth || 320;
    const gap = 24;
    const totalSlideWidth = slideWidth + gap;

    const scrollPosition = sliderRef.current.scrollLeft;
    const newSlideIndex = Math.round(scrollPosition / totalSlideWidth);
    
    goToSlide(newSlideIndex);
  }, [goToSlide]);

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToSlide();
  };

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToSlide();
  };

  return {
    sliderRef,
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};


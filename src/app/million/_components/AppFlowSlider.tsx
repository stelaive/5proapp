'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSlider } from '../_hooks/useSlider';
import { SLIDES_DATA } from '../_constants/data';

export default function AppFlowSlider() {
  const {
    sliderRef,
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    handlers
  } = useSlider(SLIDES_DATA.length);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 font-jalnan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            📱 앱 사용 흐름
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-16 text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            간단한 4단계로 100만원 추첨에 참여하세요
          </motion.p>

          {/* 스와이프 슬라이더 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 슬라이더 컨테이너 */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                ref={sliderRef}
                className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory'
                }}
                {...handlers}
              >
                {SLIDES_DATA.map((slide, index) => (
                  <motion.div 
                    key={index}
                    className="flex-shrink-0 w-80 text-center"
                    style={{ scrollSnapAlign: 'start' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <motion.div 
                      className="bg-gray-100 rounded-2xl p-8 h-[450px] flex items-center justify-center mb-4 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                        width={280}
                        height={400}
                        className="rounded-xl shadow-lg object-contain"
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{slide.title}</h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 화살표 네비게이션 */}
            <motion.button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                currentSlide === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:scale-110'
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: currentSlide === 0 ? 0.5 : 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
              whileTap={{ scale: currentSlide === 0 ? 1 : 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button 
              onClick={nextSlide}
              disabled={currentSlide === SLIDES_DATA.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                currentSlide === SLIDES_DATA.length - 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:scale-110'
              }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: currentSlide === SLIDES_DATA.length - 1 ? 0.5 : 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: currentSlide === SLIDES_DATA.length - 1 ? 1 : 1.1 }}
              whileTap={{ scale: currentSlide === SLIDES_DATA.length - 1 ? 1 : 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* 인디케이터 도트 */}
            <motion.div 
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {SLIDES_DATA.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


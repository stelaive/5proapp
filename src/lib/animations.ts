// file: src/lib/animations.ts
import { Variants } from 'framer-motion';

/**
 * 아래에서 위로 나타나는 효과
 * @param delay 지연 시간 (초)
 */
export const fadeInUp = (delay: number = 0.2): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    },
  },
});

/**
 * 자식 요소들을 순차적으로 애니메이션
 * @param stagger 자식 요소 간의 지연 시간 (초)
 */
export const staggerContainer = (stagger: number = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

/**
 * 오른쪽에서 왼쪽으로 슬라이드하며 나타나는 효과
 * @param delay 지연 시간 (초)
 */
export const slideInRight = (delay: number = 0.2): Variants => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // ease-in-out
      delay,
    },
  },
}); 
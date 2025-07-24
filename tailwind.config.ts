import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        jalnan: ['Jalnan2', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF6A00', // 5프로 오렌지
          '50': '#FFF3E0', '100': '#FFE0B2', '200': '#FFCC80', '300': '#FFB74D',
          '400': '#FFA726', '500': '#FF9800', '600': '#FB8C00', '700': '#F57C00',
          '800': '#EF6C00', '900': '#E65100',
        },
        secondary: {
          DEFAULT: '#004CFF', // 신뢰 블루
          '50': '#E7EEFF', '100': '#C0D3FF', '200': '#98B7FF', '300': '#719CFF',
          '400': '#4A80FF', '500': '#2364FF', '600': '#004CFF', '700': '#003FE6',
          '800': '#0032BF', '900': '#002599',
        },
        gray: {
          '50': '#F9FAFB', '100': '#F3F4F6', '200': '#E5E7EB', '300': '#D1D5DB',
          '400': '#9CA3AF', '500': '#6B7280', '600': '#4B5563', '700': '#374151',
          '800': '#1F2937', '900': '#111827',
        },
        gold: '#FFBA00', // 골드 옐로우 색상 추가
      },
      borderRadius: {
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
      },
      spacing: {
        '2': '0.5rem', '4': '1rem', '8': '2rem', '16': '4rem', '24': '6rem', 
        '32': '8rem', '48': '12rem', '64': '16rem', '96': '24rem'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config 
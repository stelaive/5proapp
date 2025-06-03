import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-orange': {
          500: '#F97316',
          600: '#EA580C'
        }
      },
      fontFamily: {
        'jalnan': ['Jalnan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config 
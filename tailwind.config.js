/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,vue}', './index.html'],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------------
        // generated from https://www.tailwindshades.com/
        primary: {
          DEFAULT: '#6392AE',
          50: '#EBF1F5',
          100: '#DCE6ED',
          200: '#BED1DD',
          300: '#9FBCCD',
          400: '#81A7BE',
          500: '#6392AE',
          600: '#48728B',
          700: '#335163',
          800: '#1F303B',
          900: '#0A0F13',
          950: '#000000',
        },
        secondary: {
          DEFAULT: '#FFE9B7',
          50: '#FFFCF4',
          100: '#FFF5E0',
          200: '#FFE9B7',
          300: '#FFD87F',
          400: '#FFC747',
          500: '#FFB60F',
          600: '#D69400',
          700: '#9E6D00',
          800: '#654600',
          900: '#2D1F00',
          950: '#110C00',
        }, // ----------------------------------------------------------------
      },
      fontSize: {
        '10xl': '7.5rem',
        '12xl': '9rem',
        '16xl': '12rem',
      },
      backgroundImage: (theme) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const top = theme('colors.primary.500')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const bottom = theme('colors.secondary.500')
        return {
          pillar: `linear-gradient(180deg, ${top} 0%, ${top} 50%, ${bottom} 50%, ${bottom} 100%)`,
        }
      },
      fontFamily: {
        'sans-serif': ['"Noto Serif SC"', '"Noto Serif JP"', '"Noto Serif KR"', 'sans-serif'],
        'noto-serif-sc': ['"Noto Serif SC"', 'sans-serif'],
        'noto-serif-jp': ['"Noto Serif JP"', 'sans-serif'],
        'noto-serif-kr': ['"Noto Serif KR"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

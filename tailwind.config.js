/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary agricultural green ramp
        green: {
          50: '#E8F1EC',
          100: '#CDE3D4',
          200: '#A3C9AE',
          300: '#6FAA82',
          400: '#3E8A57',
          500: '#1F6B3A', // primary
          600: '#17582E',
          700: '#164A28', // pressed
          800: '#0F3A1E',
          900: '#0A2A16',
        },
        // Soil amber (warnings)
        amber: {
          50: '#FBF4E8',
          100: '#F6E6C8',
          200: '#EFD09A',
          300: '#E3B566',
          400: '#B8762A',
          500: '#9A6020',
          600: '#7A4D1A',
        },
        // Clay red (errors)
        clay: {
          50: '#FBEDE9',
          100: '#F5D2C9',
          200: '#E8A89A',
          300: '#D17B68',
          400: '#A03520',
          500: '#842A18',
          600: '#6B2114',
        },
        // Neutral warm off-white ramp
        sand: {
          50: '#FAFAF7',
          100: '#F4F3EE',
          200: '#E8E6DE',
          300: '#D6D3C8',
          400: '#B5B1A2',
          500: '#8E8A7C',
          600: '#6B6759',
          700: '#4A473E',
          800: '#2D2B26',
          900: '#1A1A17', // near-black text
        },
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xxs: ['12px', { lineHeight: '16px' }],
        xs: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['20px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,26,23,0.04), 0 4px 12px rgba(26,26,23,0.06)',
        sheet: '0 -2px 16px rgba(26,26,23,0.10)',
        nav: '0 -1px 4px rgba(26,26,23,0.06)',
      },
      spacing: {
        18: '72px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pharaoh: {
          gold: '#D4AF37',
          black: '#0A0A0A',
          'gold-light': '#F4D03F',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
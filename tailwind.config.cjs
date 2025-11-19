const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: '#5C6AC4',
          secondary: '#FF9770',
          dark: '#1B1E34',
          light: '#F5F6FF',
        },
      },
      boxShadow: {
        card: '0 15px 60px rgba(7, 11, 41, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

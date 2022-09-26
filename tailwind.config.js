/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1EA4CE',
        'header-dark-blue': '#147594',
        'c-gray-500': '#697488',
        'c-black-600': '#525252',
        'c-black-500': '#6F6F6F',
        'c-black-300': '#A8A8A8',
      },
      boxShadow: {
        'filter-item': '0px 1px 7px rgba(93, 56, 192, 0.4)',
      },
      fontFamily: {
        'turkish-lira': ['Helvetica'],
      },
    },
  },
  plugins: [],
};

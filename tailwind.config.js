/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-blue': '#1EA4CE',
        'header-dark-blue': '#147594',
        'c-gray-500': '#697488',
        'c-black-500': '#525252',
      },
      boxShadow: {
        'filter-item': '0px 1px 7px rgba(93, 56, 192, 0.4)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-color)',
        'header-dark-blue': '#147594',
        'c-gray-500': '#697488',
        'c-black-600': '#525252',
        'c-black-500': '#6F6F6F',
        'c-black-300': '#A8A8A8',
      },
      boxShadow: {
        'filter-item': '0px 1px 7px rgba(93, 56, 192, 0.4)',
        'filter-container': '0px 6px 24px rgba(93, 62, 188, 0.04)',
        'product-list': '0px 4px 24px rgba(93, 62, 188, 0.04)',
      },
      fontFamily: {
        'turkish-lira': ['Helvetica'],
      },
      spacing: {
        34: '8.5rem',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      def: '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

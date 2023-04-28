/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        '2/3': '70%',
        '1/2': '50%',
        '60': '65%',
      },
      height: {
        130: '34rem',
        138: '39rem',
        extend: '110%',
      },
      width:{
        130: '34rem',
        138: '38rem',
        extend: '110%',
      }
    },
    colors: {
      cyan: '#24C7CE',
      grey: '#53535D',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif', defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('flowbite/plugin')],
};

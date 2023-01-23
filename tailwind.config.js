const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Mulish: ['var(--mulish-font)', ...fontFamily.sans],
      IBMPlexMono: ['var(--ibm-plex-mono-font)', ...fontFamily.sans],
      DMSans: ['var(--dm-sans-font)', ...fontFamily.sans],
    },
    // colors: {
    //   white: '#ffffff',
    //   black: '#191919',
    //   red: '#AA0000',
    //   zicron: '#DBE8E9',
    //   grey: '#676767',
    // },
    extend: {},
  },
  plugins: [],
};

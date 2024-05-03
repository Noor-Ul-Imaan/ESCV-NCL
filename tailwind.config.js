/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   blue: '#061A2D',
    //   black: '#000000',
    //   gray: '#7f7f7f',
    //   100: '#cffafe',
    //   200: '#a5f3fc',
    //   300: '#67e8f9',
    //   400: '#22d3ee',
    //   500: '#06b6d4',
    //   600: '#0891b2',
    //   700: '#0e7490',
    //   800: '#155e75',
    //   900: '#164e63',
    // },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  }
}


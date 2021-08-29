const { teal } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-750': '#3f495a',
        'gray-850': '#222733',
        teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

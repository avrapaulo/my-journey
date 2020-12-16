const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: []
}

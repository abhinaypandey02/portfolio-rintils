/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '48px',
        h2: '32px',
        h3: '24px',
      },
      colors: {
        grey: '#757575',
      },
    },
  },
  plugins: [],
}

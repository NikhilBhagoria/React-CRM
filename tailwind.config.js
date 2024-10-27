/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff', // Lightest shade
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#3f8cff', // Main color
          600: '#357aff',
          700: '#2c6aff',
          800: '#2259ff',
          900: '#1a4aff', // Darkest shade
        },
      },
    },
  },
  plugins: [],
}

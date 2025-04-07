/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#581c87',
          800: '#6b21a8',
          700: '#7e22ce',
          600: '#9333ea',
          500: '#a855f7',
          400: '#c084fc',
          300: '#d8b4fe',
          200: '#e9d5ff',
          100: '#f3e8ff',
        },
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite'},
      colors: {
        'Brand_Color': '#B0D8DA',
      },
    },
    fontFamily: {
      'poppin': ["Poppins", "sans-serif",],
    },
  },
  plugins: [],
}
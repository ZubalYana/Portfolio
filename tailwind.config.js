/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlack': '#1F1F1F',
        'customPurple': '#931FFF',
        'customBgPurple': 'rgba(147, 31, 255, 0.3)',
        'customWhite': '#F3EFF5',
        'cardsOverlay': 'rgba(147, 31, 255, 0.8)'
      },
    },
  },
  plugins: [],
}


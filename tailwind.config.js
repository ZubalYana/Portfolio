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
        'customWhite': '#F3EFF5'
      },
    },
  },
  plugins: [],
}


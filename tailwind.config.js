/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#00b894",
        "customGreyBg": "#e9e9e9",
        "customTeal": "#00b894",
        "customBlackFont": "#2d3436",
      },
    },
  },
  plugins: [],
}
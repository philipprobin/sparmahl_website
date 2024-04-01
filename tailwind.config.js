/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#8F2F1A",
        "secondary": "#f0f4e4",
      },
    },
  },
  plugins: [],
}
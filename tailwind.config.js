/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-georgian': ['"Noto Sans Georgian"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

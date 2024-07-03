/** @type {import('tailwindcss').Config} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react()],
  base: "/EduCity-project/"
}

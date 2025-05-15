/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#3b82f6",
        dark: "#0f172a",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
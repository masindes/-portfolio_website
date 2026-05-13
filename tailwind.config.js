/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#7c3aed",
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "heading-color": "var(--heading-color)"
      }
    },
  },
  plugins: [],
}


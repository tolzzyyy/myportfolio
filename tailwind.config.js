/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    }},
  },
  plugins: [],
}
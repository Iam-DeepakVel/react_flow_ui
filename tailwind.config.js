module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8'
        }
      }
    },
  },
  plugins: [],
}
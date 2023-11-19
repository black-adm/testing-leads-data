export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#C00'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/*.{vue,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide')
  ],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/*.{vue,js}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mobile-login':"url('./src/assets/backgrounds/Phone_Login Dark.png')",
        'desktop-login':"url('./src/assets/backgrounds/LoginPage Dark.png')"

      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide'),
    require('tw-elements/dist/plugin')
  ],
}

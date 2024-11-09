/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-right': 'moveRight 5s linear 15s infinite',
        'slide-out-right': 'slideOutRight 15s ease-out forwards infinite', // Özel animasyonu ekledik
      },
      keyframes: {
        moveRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideOutRight: { // slide-out-right için keyframe tanımı
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translateX(100vw)",
          },
        },
      },
    },
  },
  plugins: [],
}

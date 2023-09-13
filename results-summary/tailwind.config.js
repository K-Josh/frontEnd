/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors:{
        VioletBlueCircle: 'hsla(256, 72%, 46%, 1)',
        PersianBlueCircle: 'hsla(241, 72%, 46%, 0)',
        LightRoyalBlueBackground: 'hsl(241, 81%, 54%)',
        LightSlateBlueBackground: 'hsl(252, 100%, 67%)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary : {
          'eerie-black': '#1B1D1F',
          'dark-charcoal': '#282B30',
          'azure': '#4E80EE',
          'slate-gray': '#6C727F',
        },
        secondary: {
          'light-gray': '#D2D5DA'
        },
      },
      fontFamily: {
        'vietnam-pro-semibold': ['"Be Vietnam Pro Semibold"'],
        'vietnam-pro-bold': ['"Be Vietnam Pro Bold Medium"'],
        'vietnam-pro-medium': ['"Be Vietnam Pro Medium"'],
      },
      fontSize: {
        'body': '2rem',
        'normal': '1rem',
        'medium': '0.875rem',
        'small': '0.75rem',
      },
      backgroundImage:{
        'hero' : "url('./assets/images/hero-image-wr.jpg')",
      }
    },
  },
  plugins: [],
};

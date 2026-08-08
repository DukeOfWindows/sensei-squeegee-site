/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Work Sans', 'sans-serif'],
        heading: ['Bebas Neue', 'cursive'],
        cursive: ['Courgette', 'cursive'],
      },
      colors: {
        // Sensei Squeegee palette — brand colours from the logo
        'sensei-blue': '#00ADF2',   // light blue (brand)
        'sensei-dark': '#222544',   // navy (brand) — headings, dark sections
        'belt-red': '#b3202c',      // accent — CTAs, underlines (the red belt)
        'off-white': '#eef6fa',     // light section background
      },
      animation: {
        stripe: 'stripe 8s linear infinite',
      },
      keyframes: {
        stripe: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 0' },
        },
      },
    },
  },
  plugins: [],
};

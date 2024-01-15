/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      1: '#FAF3E1',
      2: '#F5E7C6',
      3: '#FF6D1F',
      4: '#222222'
    },
    extend: {
      fontFamily: {
        'KosugiMaru': ['Kosugi Maru', 'sans-serif'],
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '720px',
      // => @media (min-width: 960px) { ... }

      'lg': '1220px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}


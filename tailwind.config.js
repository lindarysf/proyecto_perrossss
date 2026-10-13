/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vinotinto: '#8B1F14',
        crema: {
          DEFAULT: '#F7F4EB',
          dark: '#E7E0C9',
          card: '#FAF8F3',
        },
        mostaza: '#D3B42E',
        oliva: '#B17F1A',
        terracota: '#F37A05',
        canela: '#BF8075',
      }
    },
  },
  plugins: [],
}

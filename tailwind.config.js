/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinus: {
          50: '#FDFBF7',
          100: '#F7F3E9',
          200: '#EFE5D1',
          300: '#E4D3B0',
          400: '#D5BC8A',
          500: '#C29F64',
          600: '#A78148',
          700: '#866337',
          800: '#6A4D2E',
          900: '#533C26',
          950: '#2E1F13',
        },
        forest: {
          50: '#F2F7F4',
          100: '#E1EDE6',
          500: '#2A6A4E',
          600: '#1F533D',
          700: '#17402F',
          800: '#113024',
          900: '#0B2018',
        },
        spot: {
          primary: '#C29F64',
          dark: '#1C1917',
          accent: '#1F533D',
          whatsapp: '#25D366',
          shopee: '#EE4D2D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#c8801f',
          goldChampagne: '#c5a880',
          goldDark: '#9e6412',
          goldLight: '#df9e38',
          goldBg: '#faf4e8',
          midnight: '#090e17',
          navy: '#0f172a',
          navySurface: '#141f32',
          navyBorder: '#1e293b',
          alabaster: '#fcfaf6',
          cashmere: '#f5f1e8',
          stoneBorder: '#e8e2d5'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-slow': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}

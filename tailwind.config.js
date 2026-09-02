/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F0E3C2',
          300: '#E4CF97',
          400: '#D4AF37', // Luxury Gold
          500: '#C5A059', // Antique Gold
          600: '#A68239',
          700: '#846427',
          800: '#644A1E',
          900: '#483515',
        },
        charcoal: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#070B14',
        },
        marble: {
          white: '#FFFFFF',
          offwhite: '#F8F9FA',
          cream: '#F4EFEA',
          border: '#EAE6DF',
        }
      },
      fontFamily: {
        arabic: ['"Cairo"', '"Tajawal"', 'sans-serif'],
        english: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', '"Cairo"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0E3C2 0%, #D4AF37 50%, #A68239 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF3C4 50%, #C5A059 100%)',
        'dark-gold': 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 30px rgba(212, 175, 55, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 20px rgba(212, 175, 55, 0.1)',
      }
    },
  },
  plugins: [],
}

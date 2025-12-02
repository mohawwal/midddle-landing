/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./pages/index.vue",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#041915',
        primary: '#FFFFFF',
        lime: {
          70: '#D6FB69',
          100: '#C4F928',
        },
        black: {
          50: '#818C8A',
          90: '#1D302C',
          100: '#041915'
        },
        neutral: {
          10: '#F8FAFC',
          20: '#F1F5F9',
          30: '#E6EBF0',
          40: '#E2E8F0',
          50: '#CBD5E1',
          60: '#64748B',
          70: '#334155',
          90: '#0F172A',
          100: '#01040F'
        },
        green: {
          10: '#F0FDF4',
          20: '#DCFCE7',
          70: '#16A34A',
          80: '#15803D',
          90: "#206256",
          100: '#075143',
          light: "#0080000D",
          dark: "#008000",
        },
      },
      fontFamily: {
        sans: ["Futuru", "sans-serif"],
        novaklasse: ['Nova Klasse', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}
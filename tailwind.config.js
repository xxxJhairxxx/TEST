/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#5955B3',
        secondary: '#F4F4FE',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      screens: {
        phone: '414px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
}


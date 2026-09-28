/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--base) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        signal: {
          DEFAULT: 'rgb(var(--signal) / <alpha-value>)',
          dark: 'rgb(var(--signal-dark) / <alpha-value>)',
          soft: 'rgb(var(--signal-soft) / <alpha-value>)',
        },
        teal: { DEFAULT: '#0EA5A0', soft: 'rgb(var(--teal-soft) / <alpha-value>)' },
        sun: '#FFC53D',
        night: '#161936', // fixed dark colour for the resume band and footer
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22,25,54,.05), 0 10px 28px -12px rgba(22,25,54,.14)',
        lift: '0 2px 4px rgba(22,25,54,.06), 0 18px 40px -14px rgba(79,70,229,.40)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}

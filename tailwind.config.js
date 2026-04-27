/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        sky: { DEFAULT: '#38bdf8', dim: '#0ea5e9' },
        indigo: { DEFAULT: '#6366f1', dim: '#4f46e5' },
      },
      backgroundImage: {
        'grad': 'linear-gradient(135deg, #38bdf8, #6366f1)',
        'grad-text': 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #6366f1 100%)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
      },
    },
  },
  plugins: [],
}

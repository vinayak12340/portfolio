/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d00ff',
        'dark-bg': '#050505',
        'glass': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
        'neon-purple': '0 0 10px #9d00ff, 0 0 20px #9d00ff',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

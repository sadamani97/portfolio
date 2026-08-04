/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050505',
        neonCyan: '#00f3ff',
        neonPurple: '#bc13ff',
        neonBlue: '#2e7dff',
        terminalGreen: '#39ff14',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'grid-pattern': 'url("/grid.svg")',
      }
    },
  },
  plugins: [],
}

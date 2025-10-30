/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e293b',
        secondary: '#334155',
        accent: '#3b82f6',
        accentHover: '#1d4ed8',
        neutral: '#64748b',
        base: '#ffffff',
        baseAlt: '#f8fafc',
        gradient: {
          start: '#3b82f6',
          middle: '#8b5cf6',
          end: '#06b6d4'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
        'hero-bg': 'radial-gradient(ellipse at center, #667eea 0%, #764ba2 70%, #1e293b 100%)',
      }
    },
  },
  plugins: [],
}

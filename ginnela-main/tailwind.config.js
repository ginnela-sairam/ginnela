/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        void: {
          DEFAULT: '#050505',
          panel: '#0a0a0a',
          card: '#121212',
          border: '#1f1f1f',
        },
        quantum: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        plasma: {
          DEFAULT: '#06b6d4',
          glow: '#22d3ee',
        },
        cyber: {
          neon: '#10b981',
        }
      },
      boxShadow: {
        'quantum-glow': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'matrix-card': '0 4px 30px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

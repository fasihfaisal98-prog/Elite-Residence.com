export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f0f', charcoal: '#1a1a1a', slate2: '#262626',
        ivory: '#f7f3ea', forest: '#1f3d2e', gold: '#f2c230', champagne: '#c9a96e',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

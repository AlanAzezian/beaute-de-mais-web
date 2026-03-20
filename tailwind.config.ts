import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'site-black': '#0a0a0a',
        'site-white': '#fafaf8',
        'cream': '#f5ede8',
        'lavender': '#c9a8d4',
        'lavender-deep': '#9b6fae',
        'rose': '#e8c4c4',
        'dark-gray': '#1a1a1a',
        'mid-gray': '#888888',
        'wa-green': '#25D366',
        'border-color': 'rgba(201,168,212,0.2)',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'fade-up-delay-1': 'fadeUp 1s 0.4s ease forwards',
        'fade-up-delay-2': 'fadeUp 1s 0.6s ease forwards',
        'fade-up-delay-3': 'fadeUp 1s 0.8s ease forwards',
        'fade-up-delay-4': 'fadeUp 1s 1s ease forwards',
        'fade-in-delay': 'fadeIn 1.5s 1.2s ease forwards',
        'marquee': 'marqueeScroll 20s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

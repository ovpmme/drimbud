/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      letterSpacing: {
        tightest: '-.06em',
      },
      gradientColorStops: {
        'gradient-1-start': '#007CF0',
        'gradient-1-end': '#00DFD8',
        'gradient-2-start': '#7928CA',
        'gradient-2-end': '#FF0080',
        'gradient-3-start': '#FF4D4D',
        'gradient-3-end': '#F9CB28',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
      }
    },
  },
  plugins: [],
}
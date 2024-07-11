/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayBackgr': '#4F4F4F',
        'grayDark': '#2E3035',
        'grayText': '#939CB0',
        'blue': '#4793FF',
        'blueLight': '#4793FF33',
        'white': '#FFFFFF',
        'whiteBlock' : '#FFFFFF',
        'dark': "#0d1117",
        'red': '#FF0000'
      },
      fontSize: {
        big: '96px',
        h1: '40px',
        h2: '25px',
        h3: '18px',
        h4: '16px',
        subText: '14px',
        subText2: '13px'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      animation: {
        'spin-slow': 'spin-slow 1s ease-out forwards',
        'shake': 'shake 0.8s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.big': {
          fontSize: theme('fontSize.big'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h1': {
          fontSize: theme('fontSize.h1'),
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h2': {
          fontSize: theme('fontSize.h2'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h3': {
          fontSize: theme('fontSize.h3'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h4': {
          fontSize: theme('fontSize.h4'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subText': {
          fontSize: theme('fontSize.semibold'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subText2': {
          fontSize: theme('fontSize.semibold'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },

        '.dark-theme': {
          
        },
        '.light-theme': {

        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

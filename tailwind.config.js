module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '641px',
      md: '768px',
      lg: '1240px',
      // xl: '1281px',
      // '2xl': '1537px'
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    zIndex: {
      1: -1,
      0: 0,
      10: 10,
      20: 20,
      9: 9,
      99: 99,
      999: 999,
      9999: '9999',
      auto: 'auto',
      modal: '999999',
    },
    opacity: {
      0: '0',
      25: '.25',
      75: '.75',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },
    extend: {
      fontSize: {
        '1sm': '13px',
        '1xs': '11px',
        '2xs': '10px',
        '3xs': '9px',
        '4xs': '8px',
        md: '15px',
        '2.5xl': '1.75rem',
      },
      letterSpacing: {
        'extra-wide': '0.45em',
        loose: '0.7em',
      },
      divideWidth: {
        0.5: '0.5px',
        3: '3px',
      },
      borderWidth: {
        0.5: '0.5px',
        3: '3px',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      color: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('@tailwindcss/forms')],
};

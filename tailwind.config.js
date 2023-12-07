const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

function tailwindTypoPlugin() {
  return ({ theme, addUtilities }) => {
    const typoDict = [
      {
        name: 'h0',
        fontSize: 40,
        lineHeight: 50,
        fontFamily: 'gbold'
      },
      {
        name: 'h1',
        fontSize: 32,
        lineHeight: 40,
        fontFamily: 'gbold'
      },
      {
        name: 'h2',
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'gbold'
      },
      {
        name: 'h3',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'gbold'
      },
      {
        name: 'important',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'gregular'
      },
      {
        name: 'large-bold',
        fontSize: 18,
        lineHeight: 30,
        fontFamily: 'gbold'
      },
      {
        name: 'large',
        fontSize: 18,
        lineHeight: 30,
        fontFamily: 'gregular'
      },
      {
        name: 'regular-bold',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'gbold'
      },
      {
        name: 'regular',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'gregular'
      },
      {
        name: 'secondary-bold',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'gbold'
      },
      {
        name: 'secondary',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'gregular'
      },
      {
        name: 'additional-bold',
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'gbold'
      },
      {
        name: 'additional',
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'gregular'
      },
      {
        name: 'small-bold',
        fontSize: 10,
        lineHeight: 10,
        fontFamily: 'gbold'
      },
      {
        name: 'small',
        fontSize: 10,
        lineHeight: 10,
        fontFamily: 'gregular'
      }
    ]

    addUtilities(
        typoDict.map(({ name, fontSize, lineHeight, fontFamily }) => ({
          [`.typo-${name}`]: {
            fontWeight: theme('fontWeight.normal'),
            fontSize: theme(`fontSize.${fontSize}`),
            lineHeight: theme(`lineHeight.${lineHeight}`),
            fontFamily: Array.isArray(theme(`fontFamily.${fontFamily}`)) ? theme(`fontFamily.${fontFamily}`).join(', ') : theme(`fontFamily.${fontFamily}`)
          }
        })),
        ['responsive', 'hover', 'last', 'first', 'focus']
    )
  }
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      zIndex: {
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        auto: 'auto'
      },
      screens: {
        321: '321px',
        480: '480px',
        600: '600px',
        760: '760px',
        700: '700px',
        1000: '1000px',
        1024: '1024px',
        1280: '1280px',
        1200: '1200px',
        1300: '1300px',
        1400: '1400px',
        1800: '1800px'
      },
      colorsRgb: {},
      colors: {
        transparent: 'transparent',
        white: '#fff',
        facebook: '#4267B2',
        google: '#4285f4',
        twitter: '#1DA1F2',
        youtube: '#FF0000',
        linkedin: '#0077B5',
        telegram: '#039BE5',
        viber: '#8E24AA',
        red: {
          100: '#FFF4F4',
          200: '#FFE9E9',
          300: '#FFD8D8',
          400: '#FF9D9D',
          500: '#FF5252',
          550: '#EC4142',
          600: '#D93A3B',
          700: '#BC0002',
          800: '#870000'
        },
        black: {
          100: '#F2F5F8',
          200: '#E0E7EB',
          300: '#C8D1D6',
          400: '#A3B2BA',
          500: '#687E88',
          600: '#303A3E',
          700: '#212527',
          800: '#050506'
        },
        green: {
          100: '#ECFFF4',
          200: '#D5FFE6',
          300: '#B3F6CE',
          400: '#88E5AE',
          500: '#3BC372',
          600: '#00963D',
          700: '#00702D',
          800: '#00491E'
        },
        yellow: {
          100: '#FFFDE7',
          200: '#FFF59D',
          300: '#FFE886',
          400: '#FDD835',
          500: '#F9A825',
          600: '#F57F17',
          700: '#DD3500',
          800: '#AA3300'
        },
        blue: {
          100: '#E9F1FF',
          200: '#DCE8FF',
          300: '#B7CFFF',
          400: '#7AA2F2',
          500: '#3366CC',
          600: '#154CBC',
          700: '#073797',
          800: '#001E5A'
        },
        violet: {
          100: '#F8EFFF',
          200: '#F2E3FF',
          300: '#E3C4FF',
          400: '#CCA4EF',
          500: '#9B6EC3',
          600: '#63338D',
          700: '#4A1678',
          800: '#330061'
        }
      },
      spacing: {
        0: '0',
        10: '10px',
        20: '20px',
        40: '40px',
        80: '80px',
        160: '160px'
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        60: '60px'
      },
      fontFamily: {
        sans: ['Roboto', '"San Francisco"', 'Helvetica', 'sans-serif'],
        glight: ['"Graphik Light"', 'sans-serif'],
        gregular: ['"Graphik Regular"', 'sans-serif'],
        gmedium: ['"Graphik Medium"', 'sans-serif'],
        gsemibold: ['"Graphik Semibold"', 'sans-serif'],
        gbold: ['"Graphik Bold"', 'sans-serif']
      },
      borderRadius: {
        none: '0',
        full: '9999px',
        1: '1px',
        5: '5px',
        10: '10px',
        20: '20px'
      },
      borderStyles: {
        styles: true,
        colors: true // defaults to false
      },
      lineHeight: {
        zero: '0',
        none: '1',
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px'
      },
      maxWidth: {
        32: '320px',
        700: '700px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
        1800: '1800px',
        half: '50%',
        full: '100%',
        '100vw': '100vw'
      },
      opacity: {
        0: 0,
        5: 0.05,
        10: 0.1,
        15: 0.15,
        20: 0.2,
        25: 0.25,
        30: 0.3,
        35: 0.35,
        40: 0.4,
        45: 0.45,
        50: 0.5,
        55: 0.55,
        60: 0.6,
        65: 0.65,
        70: 0.7,
        75: 0.75,
        80: 0.8,
        85: 0.85,
        90: 0.9,
        95: 0.95,
        100: 1
      },
      gap: {
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        40: '40px',
        80: '80px'
      },
    },
  },
  plugins: [tailwindTypoPlugin()],
};

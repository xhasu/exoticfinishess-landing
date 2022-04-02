module.exports = {
  content: ['pages/**/*.{js,jsx,mdx}', 'components/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'century': ['CenturyGothic', 'sans-serif'],
        'acuminpro': ['AcuminPro', 'sans-serif'],
        'myriadpro': ['MyriadPro', 'sans-serif'],
      },
      colors: {
        'primary': '#fcd700',
      },
      letterSpacing: {
        'extrawide': '0.6rem',
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Lato',
    },
    screens: {
      sm: '648px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    maxWidth: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

    },
    extend: {
    
    },
  },
  plugins: [],
}

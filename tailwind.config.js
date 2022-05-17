module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // stroke
    // textFillColor: (theme) => theme('borderColor'),
    // textStrokeColor: (theme) => theme('borderColor'),
    // textStrokeWidth: (theme) => theme('borderWidth'),
    // paintOrder: {
    //   fsm: { paintOrder: 'fill stroke markers' },
    //   fms: { paintOrder: 'fill markers stroke' },
    //   sfm: { paintOrder: 'stroke fill markers' },
    //   smf: { paintOrder: 'stroke markers fill' },
    //   mfs: { paintOrder: 'markers fill stroke' },
    //   msf: { paintOrder: 'markers stroke fill' },
    // },

    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#F5FAFA',
        100: '#E0F1F1',
        200: '#C8E7E7',
        500: '#82BDBD',
        600: '#4BAEAE',
        700: '#199898',
        800: '#007979',
        900: '#004747',
      },
      pink: {
        50: '#FCF8FA',
        600: '#CC8DAD',
        700: '#BF7098',
        800: '#AD487B',
      },
      gray: {
        50: '#F9F9F9',
        100: '#ECEEEE',
        700: '#808B8B',
        800: '#616F6F',
        900: '#344242',
      },
      orange: '#F2994A',
      yellow: '#F2C94C',
      black: '#344242',
      white: '#FFFFFF',
      transparent: 'rgba(255,255,255,0)',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        top: "url('/img/bg-top.png')",
        topSp1: "url('/img/bg-top-sp1.png')",
        topSp2: "url('/img/bg-top-sp2.png')",
      }),
    },
  },
  // variants: {
  //   // all the following default to ['responsive']
  //   textFillColor: ['responsive'],
  //   textStrokeColor: ['responsive'],
  //   textStrokeWidth: ['responsive'],
  //   paintOrder: ['responsive'],
  // },
  plugins: [
    // require('tailwindcss-text-fill-stroke')(), // text-stroke
    function ({ addUtilities }) {
      //text-shadow
      const newUtilities = {
        // '.text-shadow': {
        //   textShadow: '0px 2px 3px darkgrey',
        // },
        // '.text-shadow-md': {
        //   textShadow: '0px 3px 3px darkgrey',
        // },
        // '.text-shadow-lg': {
        //   textShadow: '0px 5px 3px darkgrey',
        // },
        // '.text-shadow-xl': {
        //   textShadow: '0px 7px 3px darkgrey',
        // },
        // '.text-shadow-2xl': {
        //   textShadow: '0px 10px 3px darkgrey',
        // },
        // '.text-shadow-none': {
        //   textShadow: 'none',
        // },
        '.text-shadow-white': {
          textShadow: '0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white,-2px 0px 0px white',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      'mobile-l': '375px', // @media (min-width: 375px )
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      

    },

    colors: {
      primaryBlue: '#033D58',
      secondaryBlue: '#2BA5B2',
      primaryBlue75: 'rgb(3 61 88 / 75%)',
      secondaryBlue45: 'rgb(43 165 178 /45%)',
      secondaryBlue0: 'rgb(43 165 178 / 0%)',
      secondaryBlue25: 'rgb(43 165 178 /25%)',
      primaryBlue20: 'rgb(3 61 88 / 20%)',
      primaryYellow: '#F7AF02',
      secondaryYellow: 'rgb(247 175 2 / 20%)',
      primaryPurple: '#3C4E76',
      black: '#000000',
      white: '#FFFFFF',
      whiteShadow: 'rgb(255 255 255 /15%)',
      linearGray: 'rgb(217 217 317)',
      line: 'rgb(73 73 73)'
    },
    extend: {
      fontFamily: {
        headers: ['Urbanist'],
        paragraph: ['Public Sans']
      },
    rotate: {
      '12': '12deg',
      '18': '18deg',
      '22': '22deg',
      '31': '31deg',
      '36': '40deg',
      '45': '45deg'

    }
    },
  },
  plugins: [],
}


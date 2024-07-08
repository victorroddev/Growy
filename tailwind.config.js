/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primaryBlue: '#033D58',
      secondaryBlue: '#2BA5B2',
      primaryBlue75: 'rgb(3 61 88 / 75%)',
      secondaryBlue45: 'rgb(43 165 178 /45%)',
      secondaryBlue0: 'rgb(43 165 178 / 0%)',
      secondaryBlue25: 'rgb(43 165 178 /25%)',
      primaryBlue20: 'rgb(3 61 88 / 20%)',
      primaryYellow: '#F7AF02',
      primaryPurple: '#3C4E76',
      black: '#000000',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        headers: ['Urbanist'],
        paragraph: ['Public Sans']
      },
    rotate: {
      '18': '18deg',
      '22': '22deg',
      '36': '40deg',
      '45': '45deg'

    }
    },
  },
  plugins: [],
}


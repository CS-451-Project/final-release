/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      Merriweather: ["Merriweather"],
      HomePageHeading: ["Golos","Text"],
      Approved: ["IBM","Plex","Sans"],
      headingTest: ['Castoro Titling'],
      Poppins: ['Poppins'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        homePagePic:
          "url('./imgs/homePagePic.jpg')",
        placeHolder:
          "url('./imgs/placeHolderFundraiserPic.jpg')",
      },
      height: {
        100: '36rem',
      },
      top: {
        100: '38rem',
      },
      screens: {
        '3xl': '1600px',
      },
      lineClamp: {
        9: '9',
      },
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/assets/css/tailwindBase.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        beige: "#E2D3C2",
        brown: {
          100: "#8C6946",
          200: "#9C754E",
          300: "#C79B6F",
          400: "#EAD1B7",
          500: "#F7E9DA",
          600: "#F7E8DA",
          700: "#967654",
          800: "#c8a689",
          900: "#f5f1ea"
        },
        purple: {
          50: "#F6F4F8",
          100: "#77458C",
          200: "#874E9F",
          300: "#AD6FC7",
          400: "#DBB7EB",
          500: "#EFDAF7",
          600: "#7F529A",
          700: "#E9DBF5"
        },
        grey: {
          50: "#F8F8F8",
          100: "#FAFAFA",
          200: "#A8A8A829",
          300: "#E8E8E8",
          400: "#D5D5D5",
          500: "#00000033",
          600: "#6767674A",
          700: "#8C8C8C",
          800: "#C1C1C1",
          900: "#646464",
          1000: "#f7f7f7",
          1100: "#BFBFBF",
          1200: "#F2F2F2",
          1300: "#F6F6F6",
          1400: "#E6E6E6",
          1500:"#888888",
          1600:"#5E6278",
          1700:"#B5B5C3"
        },
        red: "#E73337",
        darkRed: "#B62626",
        yellow: "#F4BD40",
        lime: "#D3FC50",
        white: "#ffffff",
        green: {
          100: "#E8FBED",
          200: "#B7EBC4",
          300: "#32AC15",
          400: "#3E8C60",
          500: "#459B6A",
          600: "#6FC795",
          700: "#B7EBCD",
          800: "#DBF8E7",
        },
        blue: {
          100: "#2773A9",
          200: "#1966CE",
          300: "#4083B3",
          400: "#D2E6F4",
        },
        black: {
          100: "#000000",
          200: "#2F2F2F",
          300: "#575757",
          400: "#B0B0B0",
          500: "#E8E8E8",
          600: "#6C7278",
          700: "#414141",
          800: "#3C3C3C",
          900: "#787878"
        },
        orange: "#EA632B",
        light_orange_1: "#E2D3C2A0",
        light_orange_2: "#E2D3C22E",
        bright_orange_1: "#FF7A00",
        "disable-shade-1": "#BCBEC0",
        "nafath-shade": "#12998E",
      },
},

}
}


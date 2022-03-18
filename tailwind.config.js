module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.tsx"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
        fontFamily: {
          rota_regular: ["ROTA-regular", "regular"],
          rota_bold:["ROTA-bold","bold"],
          rota_extrabold:["ROTA-extrabold","extrabold"],
          rota_semibold:["ROTA-semibold","semibold"],
          rota_black:["ROTA-black","black"],
        },
      colors: {
        primary: "#181D30",
        secondary: "#373A49",
        gray: "#C5C7CD",
        dark_gray: "#787C87",
        black: "#1E1E1F",
        blue:"#38A3E0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};

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
          rota_medium:["ROTA-medium","medium"],
        },
      colors: {
        primary: "#181D30",
        secondary: "#373A49",
        grey: "#C5C7CD",
        dark_grey: "#787C87",
        black: "#1E1E1F",
        blue:"#38A3E0",
        flow_blue:"#CAEBF2",
        spring_wood:"#FBF9F6",
        bluish:"#EFF9FF",
        skyblue:"#21ABF9",
        yellow:"#FFF8DE",
        dark_yellow:"#FEC62E",
        green:"#E5FFF4",
        dark_green:"#30D38B",
        light_grey:"#EFF2F5",
        dark_blue:"#181D31",
aqua_haze:"#F4F7F9"
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

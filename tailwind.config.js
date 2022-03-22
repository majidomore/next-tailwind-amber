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
        rota_bold: ["ROTA-bold", "bold"],
        rota_extrabold: ["ROTA-extrabold", "extrabold"],
        rota_semibold: ["ROTA-semibold", "semibold"],
        rota_black: ["ROTA-black", "black"],
        rota_medium: ["ROTA-medium", "medium"],
      },
      colors: {
        primary: "#181D30",
        secondary: "#373A49",
        grey: "#C5C7CD",
        dark_grey: "#787C87",
        black: "#1E1E1F",
        blue: "#38A3E0",
        flow_blue: "#CAEBF2",
        spring_wood: "#FBF9F6",
        bluish: "#EFF9FF",
        skyblue: "#21ABF9",
        yellow: "#FFF8DE",
        dark_yellow: "#FEC62E",
        green: "#E5FFF4",
        dark_green: "#30D38B",
        light_grey: "#EFF2F5",
        dark_blue: "#181D31",
        aqua_haze: "#F4F7F9",
        alabaster: "#F7F7F7",
        iron: "#D6D7D9",
        light_red: "#FD6469",
        light_green: "#5FD355",
        light_blue: "#F5F8FA",
        light_indigo: "#EFF6FF",
        indigo: "#4954CB",
        dordgeblue: "#1a72e7",
        nevada: "#616A71",
        light_indigo: "#EDF5FF",
        purple: "#462291",
        signup_bg: "#161616",
        soft_grey: "#999A9C",
        soft_black: "#222222",
        darky_blue: "#2856F9",
        soft_green: "#E1FFF2",
        jungle_green: "#31B37D",
        mine_shaft: "#272727",
        wild_sand: "#F6F6F6",
        darky_yellow: "#EDD038",
        olive_drab: "#4D9728",
        green_gr: "#3E7D1F",
        green_btn: "#3E7D1F",
        silver: "#CDCDCD",
        nobel: "#B3B3B3",
        persimonn: "#FD6D4E",
        tabhide: "#FDA34F",
        catskill: "#F6F9FB",
        gallery: "#EBEBEB",
        royal_blue: "#2C62DF",
        crusta: "#FD833D",
        emrald: "#30CF5F",
        lock_blue: "#6089DA",
        red: "#EE4A4F",
        black_squeeze: "#F7FAFC",
        pearl: "#A7AABB",
        spolitude: "#E8F6FF",
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

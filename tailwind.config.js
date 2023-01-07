/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
        lg: "0rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      screens: {
        sm: "480px",
        "3xl": "2000px",
      },
      fontFamily: {
        sourceSerifPro: ["Source Serif Pro", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
      colors: {
        primary: {
          // dark: "#fec96b",
          dark: "#6bfe9e",
          light: "#fdaa17",
          // light: "#17fd39",
          light_hover: "#cf8501",
        },
        primary_hover: {
          dark: "#f0be6d",
        },
        header: {
          dark: "#35343a",
        },
        bg_1: {
          dark: "#30333a",
          light: "#fff",
        },
        bg_2: {
          dark: "#3d3e42",
          light: "#f1f2f3",
        },
        nav_button: {
          dark: "#a0a1a1",
        },
        card: {
          dark: "#3d3e42",
          light: "#444",
        },
        balls_color: "#6b5c4a",
        experience_arrow: "#5c5e63",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

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
      screens: {
        sm: "480px",
      },
      fontFamily: {
        sourceSerifPro: ["Source Serif Pro", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
      colors: {
        primary: {
          dark: "#fec96b",
          light: "#fdaa17",
          light_hover:'#cf8501'
        },
        primary_hover: {
          dark: "#f0be6d",
        },
        header: {
          dark: "#35343a",
        },
        bg_1: {
          dark: "#30333a",
        },
        bg_2: {
          dark: "#3d3e42",
        },
        nav_button: {
          dark: "#a0a1a1",
        },
        card:{
          dark:'#3d3e42'
        },
        balls_color: "#6b5c4a",
      },
    },
  },
  plugins: [],
};

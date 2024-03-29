/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        bg_secondary: "#eff0f2",
        bg_dark: "#111827",
        bg_dark_secondary: "#112240",
        text_primary: "#0f172a",
        text_primary_dark: "#e2e8f0",
        // primary: "#6ad276",
        primary: "#3abe49",
        secondary: "#6b7280",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

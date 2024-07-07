/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15PX",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px",
      xl: "1200px",
      "2xl": "1420px",
    },
    fontFamily: {
      primary: "Inter",
      secondary: "Jost",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          hover: "#D10202",
        },
        secondary: "#EFEFEF",
        link: {
          DEFAULT: "rgba(132,132,132,1)",
          primary: "rgba(132,132,132,1)",
          border: "rgba(235,235,235,1)",
        },
        accent: {
          DEFAULT: "#848484",
          secondary: "#848280",
          hover: "#D6D6D6",
        },
      },
      fontSize: {},
    },
  },
  plugins: [],
};

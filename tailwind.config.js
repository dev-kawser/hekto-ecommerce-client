/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // regular colors
        pink: "#FB2E86",
        offNavyBlue: "#3F509E",
        navyBlue: "#151875",

        purple: "#7E33E0",
        offPurple: "#9F63B5",
        pantonePurple: "#E0D3F5",

        red: "#FB2448",
        blue: "#2F1AC4",

        // dark mode colors
        darkPink: "#D5005D",
        darkOffNavyBlue: "#2C3A6A",
        darkNavyBlue: "#0A0F3B",

        darkPurple: "#5C25B5",
        darkOffPurple: "#7A4F91",
        darkPantonePurple: "#B2A4D7",

        darkRed: "#C60D31",
        darkBlue: "#1E158D",
      },

    },
  },
  plugins: [],
}


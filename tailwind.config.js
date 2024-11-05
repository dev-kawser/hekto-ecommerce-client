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
        lightPurple: "#F6F7FB",

        red: "#FB2448",
        blue: "#2F1AC4",

        gray: "#8A8FB9",
        lightGray: "rgba(26, 11, 91, 0.30)"
      },

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "openSans":["Open Sans", "sans-serif"],
        "roboto":["Roboto", "sans-serif"],
        "yellowtail":["Yellowtail"],
        "inter":["Inter"],
      },
      container: {
        center:true,
        padding: "20px",
        screens: {
          "lg": "1440px"
        }
      },
    },
  },
  plugins: [],
}
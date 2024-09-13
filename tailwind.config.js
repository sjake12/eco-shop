/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      "eco-800": "#AFD198",
      "eco-500": "#E8EFCF",
      "eco-brown-500": "#ECCA9C",
      "eco-brown-200": "#f7e8d4",
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster', cursive",
        roboto: "'Roboto Mono', monospace",
      },
      colors: {
        darkRed: "#590209",
        redCustom: "#8C031C",
        raspberryRed: "#D9304F",
        mauve: "#D1C5D9",
        lightBrown: "#BF8173",
      },
    },
  },
  plugins: [],
};

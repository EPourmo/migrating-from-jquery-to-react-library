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
        primaryLight: "#40a9ff",
        primary: "#1890ff",
        borderGrey: "#d9d9d9",
      },
    },
  },
  plugins: [],
};

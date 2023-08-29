/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        openSans: "Open Sans",
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        desktop: "./images/bg-desktop.svg",
        mobile: "./images/bg-mobile.svg",
      },
    },
  },
  plugins: [],
};

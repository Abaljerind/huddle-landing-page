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
        desktop: "url('/images/bg-desktop.svg')",
        mobile: "url('/images/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};

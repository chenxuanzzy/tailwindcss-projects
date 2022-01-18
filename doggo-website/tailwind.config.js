module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        header: "#000000",
        body: "#030d14",
        footer: "#000000",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
};

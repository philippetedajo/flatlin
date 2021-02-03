module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner: "url('/images/gez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg')",
      }),
      spacing: {
        100: "32rem",
        104: "38rem",
      },
    },
    colors: {
      primary: "#000",
      secondary: "#fff",
      third: "#3e6ae1",
      fourth: "#a1a1aa",
      beige: "#F8F7F2",
    },
    fontFamily: {
      ddin: ["ddin", "serif"],
      ddinbold: ["ddinbold", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

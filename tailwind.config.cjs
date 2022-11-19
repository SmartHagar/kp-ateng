/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merah: "#FF2C14",
        hijau: "#71FF14",
        biru: "#14E7FF",
        ungu: "#A214FF",
      },
      fontFamily: {
        CantataOne: ["CantataOne"],
        ComicNeue: ["ComicNeue"],
      },
    },
  },
  plugins: [],
};

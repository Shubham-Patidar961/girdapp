/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    minHeight: {
      1: "100%",
    },
    screens: {
      mini: { min: "0", max: "767px" },
      //=> @media (minwith==0 and max==766 mobile divce)
      md: { min: "768px", max: "1273px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

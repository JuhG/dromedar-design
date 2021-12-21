module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "lg+": "1100px",
      },
      colors: {
        dd: {
          teal: "#04ABD5",
          black: "#242539",
          purple: "#9800FF",
          red: "#EF4E6E",
        },
      },
    },
  },
  plugins: [],
};

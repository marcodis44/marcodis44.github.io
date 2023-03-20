/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FE5A03",
        tblue: "#3B4F6B",
        light: "#D1D5DB",
        "dark-grey": "#463F3A",
        "light-grey": "#BCB8B1",
      },
      fontFamily: "Poppins",
    },
  },
  plugins: [],
  darkMode: "class",
};

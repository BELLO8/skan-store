/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Questrial",
        body: "Urbanist",
      },
    },
  },
  plugins: [require("daisyui")],
};

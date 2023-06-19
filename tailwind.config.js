/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero-pattern.png')",
      },
      colors: {
        orangeLogo: "#ff6700",
        black: "black",
        white: "#FFFFFF",
        desc: "#80828399",
        modalBg: "#00000053",
        modalBox: "#B2B2B2",
        placeholder: "#676767",
        red: "#dd3232eb",
        inputError: "#e4090975",
        adv: "#80828399",
      },
    },
  },
  // purge: [],
  // variants: {},

  plugins: [],
};

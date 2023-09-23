/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      msm: { max: "550px" },
      mmd: { max: "768px" },
      mlg: { max: "1023px" },
    },

    extend: {},
  },
  plugins: [],
};

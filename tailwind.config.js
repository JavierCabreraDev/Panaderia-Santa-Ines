/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF8EC",
        cream: "#FFF8EC",
        primary: "#8B5A2B",
        accent: "#D97706",
      },
    },
  },
  plugins: [],
};

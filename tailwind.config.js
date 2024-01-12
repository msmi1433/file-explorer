/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        sky: {
          150: "#eef7fe",
          450: "#cae4f3",
        },
      },
    },
  },
  plugins: [],
};

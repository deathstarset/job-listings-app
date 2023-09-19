/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-blue": "#1E86FF",
        "dark-blue": "#334680",
        "light-grey": "#B9BDCF",
        "very-light-blue": "#F6F7FB",
      },
      backgroundImage: {
        "search-pattern": "url(./images/search.png)",
      },
    },
  },
  plugins: [],
};

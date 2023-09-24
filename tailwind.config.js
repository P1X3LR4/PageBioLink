/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": {
          100: "#f7a700",
        },
        "dark-color": {
          100: "#202020",
        },
        "gray-color": {
          100: "#505050",
        },
      },
      fontFamily: {
        khand: ["Khand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["nova", "sans-serif"], // Add your custom font here
      },
      colors: {
        menu: "#3d4152",
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        myFill: "#FFD289",
      },
      colors: {
        myColor: "#FFD289",
        myGray: "#9c9c9c",
      },
      gridTemplateColumns: {
        myCol: "35%, 65%",
      },
    },
  },
  plugins: [],
};

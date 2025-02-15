/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // xs: "430px",
      sm: "375px",
      md: "768px",
      lg: "992px",
      // xl: "1200px",
      xl: "1280px",
      // "4xl": "1800px",
  },
  },
  plugins: [],
}


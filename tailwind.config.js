/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif", "Raleway"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "chat-background": "url('/images/Frame 1954.svg')",
      },
      colors: {},
    },
    colors: {
      customOrange: "#F25B38",
      lightOrange: "rgba(255, 136, 118, 0.10)",
      whitesmoke: "#F5F5F5",
    },
  },
  plugins: [],
};

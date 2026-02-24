/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#1F4941",
        grey: "#A5A5A5",
        text: "#191919",
      },
    },
  },
  plugins: [

  ],
};

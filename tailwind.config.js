/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#00ff00",
        darkblue: "#0097a7",
      },
    },
  },
  plugins: [],
};

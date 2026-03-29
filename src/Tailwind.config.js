// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      colors: {
        "off-white": "#f8f7f5",
        "soft-grey": "#888888",
        "ink-black": "#111111",
      },
      letterSpacing: {
        "widest-xl": "0.2em",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        "primary": "#0F172A", // Slate 900
        "secondary": "#4F46E5", // Indigo 600
        "accent": "#EC4899", // Pink 500
        "bg-soft": "#F8FAFC", // Slate 50
        "text-dark": "#334155", // Slate 700
        "accent-grey": "#F1F5F9", // Slate 100
      },
      letterSpacing: {
        "widest-xl": "0.3em",
      },
      boxShadow: {
        "soft": "0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 20px 40px -20px rgba(0, 0, 0, 0.08)",
        "card": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "card-hover": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
      backgroundImage: {
        "gradient-art": "linear-gradient(to right, #4F46E5, #F43F5E)",
        "gradient-soft": "radial-gradient(circle at 50% 50%, #F8FAFC 0%, #F1F5F9 100%)",
      },
    },
  },
  plugins: [],
};

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
        "primary": "#111827",
        "secondary": "#6D28D9",
        "accent": "#F59E0B",
        "bg-soft": "#F9FAFB",
        "text-dark": "#1F2937",
        "accent-grey": "#F3F4F6",
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
        "gradient-art": "linear-gradient(to right, #7C3AED, #EC4899)",
        "gradient-soft": "radial-gradient(circle at 50% 50%, #f9fafb 0%, #f3f4f6 100%)",
      },
    },
  },
  plugins: [],
};

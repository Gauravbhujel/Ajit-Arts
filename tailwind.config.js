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
        "primary": "#F8FAFC", // White/Light gray for text
        "secondary": "#FBBF24", // Gold
        "accent": "#8B5CF6", // Neon purple
        "bg-soft": "#0F172A", // Deep Charcoal
        "text-dark": "#9CA3AF", // Gray 400
        "accent-grey": "#1E293B", // Dark slate for cards
      },
      letterSpacing: {
        "widest-xl": "0.3em",
      },
      boxShadow: {
        "soft": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 20px 40px -20px rgba(0, 0, 0, 0.7)",
        "card": "0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)",
        "card-hover": "0 25px 50px -12px rgb(0 0 0 / 0.75)",
      },
      backgroundImage: {
        "gradient-art": "linear-gradient(to right, #8B5CF6, #FBBF24)",
        "gradient-soft": "radial-gradient(circle at 50% 50%, #1E293B 0%, #0F172A 100%)",
      },
    },
  },
  plugins: [],
};

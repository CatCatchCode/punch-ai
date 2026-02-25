/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0C29", // Dark Navy/Purple Background
        secondary: "#302b63", // Slightly lighter purple for cards/sections
        accent: {
          blue: "#00F5FF", // Neon Cyan/Blue
          purple: "#6C63FF", // Bright Purple
          violet: "#bf5af2", // Bright Violet for buttons if needed
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #6C63FF, #00F5FF)',
      }
    },
  },
  plugins: [],
}

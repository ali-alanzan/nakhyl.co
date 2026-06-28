/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx", // 👈 CRITICAL: Tailwind must scan your React files
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F4EBE1',     // Core Day background
        palm: '#2D4A3E',     // Raw organic lines & high contrast text
        indigo: '#0A1118',   // Boundless deep velvet Sinai night sky
        amber: '#D97706',    // Campfire glow illumination
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Ovo', 'serif'], // The Editorial Voice
        sans: ['Plus Jakarta Sans', 'sans-serif'],     // Modern Utility
      },
    },
  },
  plugins: [],
}